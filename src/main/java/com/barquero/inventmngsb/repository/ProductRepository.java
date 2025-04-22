package com.barquero.inventmngsb.repository;

import com.barquero.inventmngsb.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Custom Queries if needed
}
