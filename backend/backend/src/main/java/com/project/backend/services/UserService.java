package com.project.backend.services;

import com.project.backend.Utils.MessageKeys;
import com.project.backend.components.JwtTokenUtils;
import com.project.backend.components.LocalizationUtils;
import com.project.backend.dtos.UpdateUserDTO;
import com.project.backend.dtos.UserDTO;
import com.project.backend.exceptions.DataNotFoundException;
import com.project.backend.exceptions.PermissionDenyException;
import com.project.backend.models.Role;
import com.project.backend.models.User;
import com.project.backend.repositories.RoleRepository;
import com.project.backend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService implements IUserService{
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenUtils jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    private final LocalizationUtils localizationUtils;
    @Override
    @Transactional
    public User createUser(UserDTO userDTO) throws Exception {
        String phoneNumber = userDTO.getPhoneNumber();
        if(this.userRepository.existsByPhoneNumber(phoneNumber)) {
            throw new DataIntegrityViolationException("Phone number already exists");
        }

        Role role = this.roleRepository.findById(userDTO.getRoleId())
                .orElseThrow(() -> new DataNotFoundException("Role not found"));

        if(role.getName().toUpperCase().equals(Role.ADMIN)) {
            throw new PermissionDenyException("You cannot register a admin account");
        }

        User newUser = User.builder()
                .fullName(userDTO.getFullName())
                .phoneNumber(userDTO.getPhoneNumber())
                .password(userDTO.getPassword())
                .address(userDTO.getAddress())
                .dateOfBirth(userDTO.getDateOfBirth())
                .isActive(true)
                .facebookAccountId(userDTO.getFacebookAccountId())
                .googleAccountId(userDTO.getGoogleAccountId())
                .build();

        newUser.setRoleId(role);

//        kiểm tra nếu có accountId, không yêu cầu password
        if(userDTO.getFacebookAccountId() == 0 && userDTO.getGoogleAccountId() == 0) {
            String password = userDTO.getPassword();
//            sẽ làm trong phần security của spring
            String encodedPassword = passwordEncoder.encode(password);
            newUser.setPassword(encodedPassword);
        }
        return this.userRepository.save(newUser);
    }

    @Override
    public String login(String phoneNumber, String password, Long roleId) throws Exception {
        // lam trong phan security
        Optional<User> optionalUser = this.userRepository.findByPhoneNumber(phoneNumber);
        if(optionalUser.isEmpty()) {
            throw new DataNotFoundException("Invalid phone number or password");
        }
//        return optionalUser.get();
        User existingUser = optionalUser.get();
        // check password
        if(existingUser.getFacebookAccountId() == 0 && existingUser.getGoogleAccountId() == 0) {
            if(!passwordEncoder.matches(password, existingUser.getPassword())) {
                throw new BadCredentialsException(localizationUtils.getLocalizedMessage(MessageKeys.WRONG_PHONE_PASSWORD));
            }
        }

        Optional<Role> optionalRole = roleRepository.findById(roleId);
        if(optionalRole.isEmpty() || !roleId.equals(existingUser.getRoleId().getId())) {
            throw new DataNotFoundException(localizationUtils.getLocalizedMessage(MessageKeys.ROLE_DOES_NOT_EXISTS));
        }

        if(!optionalUser.get().isAccountNonLocked()) {
            throw new DataNotFoundException(localizationUtils.getLocalizedMessage(MessageKeys.USER_IS_LOCKED));
        }

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(phoneNumber, password, existingUser.getAuthorities());
        authenticationManager.authenticate(authenticationToken);
        return jwtTokenUtil.generateToken(existingUser);
    }

    @Override
    public User getUserDetailsFromToken(String token) throws Exception {
        if(jwtTokenUtil.isTokenExpiration(token)) {
            throw new Exception("Token is expired");
        }

        String phoneNumber = jwtTokenUtil.extractPhoneNumber(token);
        Optional<User> user = userRepository.findByPhoneNumber(phoneNumber);

        if(user.isPresent()) {
            return user.get();
        } else {
            throw new Exception("User not found");
        }
    }

    @Override
    @Transactional
    public User updateUser(UpdateUserDTO updateUserDTO, Long userId) throws Exception {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() ->new DataNotFoundException("User not found"));

        String newPhoneNumber = updateUserDTO.getPhoneNumber();
        if(!existingUser.getPhoneNumber().equals(newPhoneNumber) &&
                userRepository.existsByPhoneNumber(newPhoneNumber)) {
            throw new DataIntegrityViolationException("Phone number already exists");
        }

        if(updateUserDTO.getFullName() != null)
            existingUser.setFullName(updateUserDTO.getFullName());

        if(updateUserDTO.getPhoneNumber() != null)
            existingUser.setPhoneNumber(updateUserDTO.getPhoneNumber());

        if(updateUserDTO.getAddress() != null)
            existingUser.setAddress(updateUserDTO.getAddress());

        if(updateUserDTO.getDateOfBirth() != null)
            existingUser.setDateOfBirth(updateUserDTO.getDateOfBirth());

        if(updateUserDTO.getFacebookAccountId() > 0)
            existingUser.setFacebookAccountId(updateUserDTO.getFacebookAccountId());

        if(updateUserDTO.getGoogleAccountId() > 0)
            existingUser.setGoogleAccountId(updateUserDTO.getGoogleAccountId());

        if(updateUserDTO.getPassword() != null && !updateUserDTO.getPassword().isEmpty()) {
            if(!updateUserDTO.getPassword().equals(updateUserDTO.getRetypePassword())) {
                throw new DataNotFoundException("Password and retype password not the same");
            }

            String newPassword = updateUserDTO.getPassword();
            String encodedPassword = passwordEncoder.encode(newPassword);

            existingUser.setPassword(encodedPassword);
        }

        return userRepository.save(existingUser);
    }
}
