package com.example.demo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

	HashMap<Integer,Customer> customerList = new HashMap<Integer,Customer>();
	
	@GetMapping("/load")
	public String load() {
		
		Customer c = new Customer(1, "David", "1234567");
		Customer c1 = new Customer(2, "Rahukl", "1234567");
		Customer c2 = new Customer(3, "Rakul", "1234567");

		customerList.put(1,c);
		customerList.put(2,c1);
		customerList.put(3,c2);
		
		return "Data Loaded to the list";
	}
	
	@GetMapping("/get/{id}")
	public Customer getCustomer(@PathVariable int id) {
		
		
		return customerList.get(id);
	}
	
	@PostMapping("/create")
	public String createCustomer(@RequestBody Customer cust) {
		
		customerList.put(cust.getId(),cust);
		return "Data Added to the list";
	}
	
	@GetMapping("/get")
	public List<Customer> getCustomer() {
		
		List<Customer> list = new ArrayList<>(customerList.values());
		
		return list;
	}
}
