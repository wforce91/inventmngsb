package com.barquero.inventmngsb.repository;

import com.barquero.inventmngsb.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByRole(Employee.Role role); // optional custom query
}
