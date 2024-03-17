package com.project.backend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Min;
import lombok.*;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDTO {
    @JsonProperty("order_id")
    @Min(value = 1, message = "Order's ID must be more than 0")
    private Long orderId;

    @JsonProperty("product_id")
    @Min(value = 1, message = "Product's ID must be more than 0")
    private Long productId;

    @Min(value = 0, message = "Price must be more than or equal 0")
    private Float price;

    @JsonProperty("number_of_products")
    @Min(value = 1, message = "number_od_products must be more than 0")
    private Long numberOfProducts;

    @JsonProperty("total_money")
    @Min(value = 0, message = "total_money must be more than 0")
    private Float totalMoney;

    private String color;
}
