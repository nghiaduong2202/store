package com.project.backend.repositories;

import com.project.backend.models.ProductImage;
import lombok.Builder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
    List<ProductImage> findByProductId(Long ProductId);

    @Query(value = "SELECT image_url FROM product_images WHERE product_id = :productId", nativeQuery = true)
    List<String> searchProductImage(@Param("productId") Long productId);
}
