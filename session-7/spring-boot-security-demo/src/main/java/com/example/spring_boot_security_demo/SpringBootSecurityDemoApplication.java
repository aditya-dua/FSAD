package com.example.spring_boot_security_demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringBootSecurityDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootSecurityDemoApplication.class, args);
	}

	
    @GetMapping("/test")
    public String test(){
        return "Test API works";
    }

    @GetMapping("/home")
    public String home(){
        return "Home API works";
    }

	@GetMapping("/admin")
    public String admin(){
        return "Admin API works";
    }

	@GetMapping("/user")
    public String user(){
        return "User API works";
    }




}
