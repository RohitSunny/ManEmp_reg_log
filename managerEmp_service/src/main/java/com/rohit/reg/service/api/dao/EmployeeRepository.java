package com.rohit.reg.service.api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rohit.reg.service.api.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>{
	
	/*
	 * List<Employee> findByFirstName(String firstname);
	 * 
	 * List<Employee> findByLastName(String lastname);
	 */

}


