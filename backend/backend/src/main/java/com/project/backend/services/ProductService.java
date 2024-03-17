package com.project.backend.services;

import com.project.backend.dtos.ProductDTO;
import com.project.backend.dtos.ProductImageDTO;
import com.project.backend.exceptions.DataNotFoundException;
import com.project.backend.exceptions.InvalidParamException;
import com.project.backend.models.Category;
import com.project.backend.models.Product;
import com.project.backend.models.ProductImage;
import com.project.backend.repositories.CategoryRepository;
import com.project.backend.repositories.ProductImageRepository;
import com.project.backend.repositories.ProductRepository;
import com.project.backend.responses.ProductResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService{
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ProductImageRepository productImageRepository;
    @Override
    @Transactional
    public Product createProduct(ProductDTO productDTO) throws Exception {
        Category existingCategory =  this.categoryRepository.findById(productDTO.getCategoryId())
                .orElseThrow(() ->
                        new DataNotFoundException(
                                "Cannot find category with id: " + productDTO.getCategoryId()));
        Product newProduct = Product.builder()
                .name(productDTO.getName())
                .price(productDTO.getPrice())
                .thumbnail(productDTO.getThumbnail())
                .description(productDTO.getDescription())
                .categoryKey(existingCategory)
                .build();
        return this.productRepository.save(newProduct);
    }

    @Override
    public ProductResponse getProductById(long id) throws DataNotFoundException {
        Product product = this.productRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find product with id: " + id));
        List<String> productImages = productImageRepository.searchProductImage(id);
        return ProductResponse.fromProduct(product, productImages);
    }

    @Override
    public Page<ProductResponse> getAllProducts(String keyword, Long categoryId, PageRequest pageRequest) {
        Page<Product> productPages;
        productPages = productRepository.searchProducts(categoryId, keyword, pageRequest);
        return productPages.map(product -> ProductResponse.fromProduct(product, null));
    }

    @Override
    @Transactional
    public Product updateProduct(long id, ProductDTO productDTO) throws Exception {
        Product existingProduct = this.productRepository.findById(id)
                .orElseThrow(() -> new DataNotFoundException("Cannot find product with id: " + id));

        if(existingProduct != null) {
            Category existingCategory = this.categoryRepository
                    .findById(productDTO.getCategoryId())
                    .orElseThrow(() -> new DataNotFoundException(
                            "Cannot find category with id: " + productDTO.getCategoryId()));

            existingProduct.setName(productDTO.getName());
            existingProduct.setCategoryKey(existingCategory);
            existingProduct.setPrice(productDTO.getPrice());
            existingProduct.setDescription(productDTO.getDescription());
            existingProduct.setThumbnail(productDTO.getThumbnail());
            return this.productRepository.save(existingProduct);
        }

        return null;
    }

    @Override
    @Transactional
    public void deleteProduct(long id) {
        Optional<Product> optionalProduct = this.productRepository.findById(id);
        optionalProduct.ifPresent(this.productRepository::delete);
    }

    @Override
    public boolean existsByName(String name) {
        return this.productRepository.existsByName(name);
    }

    @Override
    @Transactional
    public ProductImage createProductImage(Long productId, ProductImageDTO productImageDTO) throws Exception {
        Product existingProduct = this.productRepository.findById(productId)
                .orElseThrow(() -> new DataNotFoundException(
                        "Cannot find product with id: " + productImageDTO.getProductId()));

        ProductImage newProductImage = ProductImage.builder()
                .product(existingProduct)
                .imageUrl(productImageDTO.getImageUrl())
                .build();

        // khong cho insert qua 5 anh trong 1 san pham
        int size = this.productImageRepository.findByProductId(existingProduct.getId()).size();

        if(size >= ProductImage.MAXIMUM_IMAGES_PER_PRODUCT ) {
            throw new InvalidParamException("Number of image muse be less than or equal "
                    + ProductImage.MAXIMUM_IMAGES_PER_PRODUCT);
        }

        return this.productImageRepository.save(newProductImage);
    }
}
