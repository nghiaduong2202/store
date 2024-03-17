package com.project.backend.responses;

import com.project.backend.models.Order;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderListResponse {
    private List<Order> orders;
    private int totalPages;
}
