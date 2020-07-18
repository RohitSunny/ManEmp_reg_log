package com.rohit.reg.service.api.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rohit.reg.service.api.model.Manager;

import java.util.List;

public interface ManagerRepository extends JpaRepository<Manager,Integer> {

	List<Manager> findByEmail(String email);
	
	List<Manager> findByPassword(String password);


	}
	
