package com.example.employee.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.employee.model.emp;
import com.example.employee.repository.EmployeeRepository;
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<emp> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public emp getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public emp createOrUpdateEmployee(emp employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}