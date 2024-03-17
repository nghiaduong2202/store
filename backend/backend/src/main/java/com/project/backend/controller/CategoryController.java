package com.project.backend.controller;

import com.project.backend.Utils.MessageKeys;
import com.project.backend.components.LocalizationUtils;
import com.project.backend.dtos.CategoryDTO;
import com.project.backend.models.Category;
import com.project.backend.responses.CategoryResponse;
import com.project.backend.responses.UpdateCategoryResponse;
import com.project.backend.services.CategoryService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.LocaleResolver;

import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("${api.prefix}/categories")
//@Validated
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    private final LocalizationUtils localizationUtils;
    @PostMapping("")
    public ResponseEntity<CategoryResponse> createCategories(
            @RequestBody @Valid CategoryDTO categoryDTO,
            BindingResult result) {
        if(result.hasErrors()) {
            List<String> errorMessages = result.getFieldErrors().stream().map(FieldError::getDefaultMessage).toList();
            return ResponseEntity.badRequest().body(CategoryResponse.builder()
                            .message(localizationUtils.getLocalizedMessage(MessageKeys.INSERT_CATEGORY_FAILED))
                            .errors(errorMessages)
                    .build());
        }
        Category category = this.categoryService.createCategory(categoryDTO);
        return ResponseEntity.ok(CategoryResponse.builder()
                        .message(localizationUtils.getLocalizedMessage(MessageKeys.INSERT_CATEGORY_SUCCESSFULLY))
                        .category(category)
                .build());
    }
    @GetMapping("")
    public ResponseEntity<List<Category>> getAllCategories(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit
    ) {
        List<Category> categories = this.categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UpdateCategoryResponse> updateCategories(
            @PathVariable Long id,
            @Valid @RequestBody CategoryDTO categoryDTO,
            HttpServletRequest request
    ) {
        this.categoryService.updateCategory(id, categoryDTO);
        return ResponseEntity.ok(UpdateCategoryResponse.builder()
                        .message(localizationUtils.getLocalizedMessage(MessageKeys.UPDATE_CATEGORY_SUCCESSFULLY))
                .build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategories(@PathVariable Long id) {
        this.categoryService.deleteCategory(id);
        return ResponseEntity.ok(localizationUtils.getLocalizedMessage(MessageKeys.DELETE_CATEGORY_SUCCESSFULLY, id));
    }
}
