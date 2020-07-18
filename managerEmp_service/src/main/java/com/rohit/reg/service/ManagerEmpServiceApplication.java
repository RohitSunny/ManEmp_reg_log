package com.rohit.reg.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import com.rohit.reg.service.api.dao.EmployeeRepository;
import com.rohit.reg.service.api.dao.ManagerRepository;
import com.rohit.reg.service.api.model.Employee;
import com.rohit.reg.service.api.model.Login;
import com.rohit.reg.service.api.model.Manager;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class ManagerEmpServiceApplication {
	
	
	 @Autowired
	    private ManagerRepository repositoryMan;
	 
	 @Autowired
	 private EmployeeRepository repositoryEmp;

	    @PostMapping("/register")
	    public String register(@RequestBody Manager mg) {
	    	repositoryMan.save(mg);
	        return "Hi " + mg.getFirstname() + " your Registration process successfully completed";
	    }
	    
	    
	 
	    @RequestMapping(value = "/login", method = RequestMethod.GET)
	    public ModelAndView showLogin(HttpServletRequest request, HttpServletResponse response) {
	      ModelAndView mav = new ModelAndView("login");
	      mav.addObject("login", new Login());
	      return mav;
	    }
	    
	    
	    
	    @RequestMapping(value = "/loginProcess", method = RequestMethod.POST)
	    public ModelAndView loginProcess(HttpServletRequest request, HttpServletResponse response,
	    @ModelAttribute("login") Login login) {
	      ModelAndView mav = null;
	     
	      List<Manager> manager = validateUser(login);
	      
	      if (null != manager) {
	      mav = new ModelAndView("welcome");
	      mav.addObject("log in succesfully");
	      } else {
	      mav = new ModelAndView("login");
	      mav.addObject("message", "Username or Password is wrong!!");
	      }
		return mav;
	      
	    }
	      
	      
	      List<Manager> validateUser(Login login1) {
	    	 String username = login1.getUsername();
	    	 String password = login1.getPassword();
	    	 
	    	
	    	 repositoryMan.findByEmail(username);
	    	 repositoryMan.findByPassword(password);
	    	
	    	 return repositoryMan.findAll();
	    	} 
	    	
	    	 
	    
	    @GetMapping("/getAllUsers")
	    public List<Employee> findAllUsers() {
	        return repositoryEmp.findAll();
	    }

		/*
		 * @GetMapping("/findUser/firstname/{firstname}") public List<Employee>
		 * findByFName(@PathVariable String firstname) { return
		 * repositoryEmp.findByFirstName(firstname); }
		 * 
		 * @GetMapping("/findUser/lastname/{lastname}") public List<Employee>
		 * findByLName(@PathVariable String lastname) { return
		 * repositoryEmp.findByLastName(lastname); }
		 */

	    @DeleteMapping("/cancel/{id}")
	    public List<Manager> cancelRegistration(@PathVariable int id) {
	    	repositoryMan.deleteById(id);
	        return repositoryMan.findAll();
	    }


	public static void main(String[] args) {
		SpringApplication.run(ManagerEmpServiceApplication.class, args);
	}

}








