package com.project.backend.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "tokens")
@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "token", nullable = false)
    private String token;

    @Column(name = "token_type", nullable = false, length = 50)
    private String tokenType;

    @Column(name = "revoked", nullable = false)
    private Boolean revoked;

    @Column(name = "expiration_date")
    private LocalDateTime expirationDate;

    @Column(name = "expired", nullable = false)
    private Boolean expired;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;
}
