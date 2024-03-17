package com.project.backend.repositories;

import com.project.backend.models.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends JpaRepository<Product, Long> {
    boolean existsByName(String name);

    Page<Product> findAll(Pageable pageable);

    @Query(value = "SELECT * FROM products WHERE " +
            "(:categoryId IS NULL OR :categoryId = 0 OR category_key = :categoryId) " +
            "AND (:keyword IS NULL OR :keyword = '' OR name LIKE %:keyword% OR description LIKE %:keyword%)",
            nativeQuery=true)
    Page<Product> searchProducts
            (@Param("categoryId") Long categoryId,
             @Param("keyword") String keyword, Pageable pageable);
}
