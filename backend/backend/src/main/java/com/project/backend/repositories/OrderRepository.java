package com.project.backend.repositories;

import com.project.backend.models.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.*;

public interface OrderRepository extends JpaRepository<Order, Long> {
    //Tìm các đơn hàng của 1 user nào đó
    List<Order> findByUserId(Long userId);

    @Query(value = "SELECT * FROM orders WHERE " +
            "(:keyword IS NULL OR :keyword = '' OR fullname LIKE %:keyword% OR address LIKE %:keyword% " +
            "OR note LIKE %:keyword%)", nativeQuery = true)
    Page<Order> findByKeyword(String keyword, Pageable pageable);
}
