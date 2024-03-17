package com.project.backend.services;

import com.project.backend.dtos.CategoryDTO;
import com.project.backend.models.Category;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ICategoryService {
    Category createCategory(CategoryDTO categoryDTO);
    Category getCategoryById(Long id);
    List<Category> getAllCategories();
    Category updateCategory(Long categoryId, CategoryDTO categoryDTO);
    void deleteCategory(Long id);
}
