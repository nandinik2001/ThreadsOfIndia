package com.example.employee.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.employee.model.emp;
import com.example.employee.Service.EmployeeService;

@Controller
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public String getAllEmployees(Model model) {
        List<emp> employees = employeeService.getAllEmployees();
        model.addAttribute("employees", employees);
        return "employees_list"; // The name of the HTML file under src/main/resources/templates
    }

    @GetMapping("/{id}")
    public String getEmployeeById(@PathVariable Long id, Model model) {
        emp employee = employeeService.getEmployeeById(id);
        if (employee != null) {
            model.addAttribute("employee", employee);
            return "employee_detail"; // The name of the HTML file under src/main/resources/templates
        } else {
            return "error/404"; // This view should handle 404 errors
        }
    }

    @PostMapping
    public String createEmployee(@ModelAttribute emp employee) {
        employeeService.createOrUpdateEmployee(employee);
        return "redirect:/api/employees"; // Redirect after POST to prevent duplicate submissions
    }

    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable Long id, @ModelAttribute emp employee, Model model) {
        emp existingEmployee = employeeService.getEmployeeById(id);
        if (existingEmployee != null) {
            employee.setId(id);
            employeeService.createOrUpdateEmployee(employee);
            return "redirect:/api/employees";
        } else {
            return "error/404";
        }
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        emp employee = employeeService.getEmployeeById(id);
        if (employee != null) {
            employeeService.deleteEmployee(id);
            return "redirect:/api/employees";
        } else {
            return "error/404";
        }
    }
}
