package com.example.spring_boot_demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

@RestController
public class DemoController {

    @GetMapping("/test")
    public String test(){
        return "Test API works";
    }

    @GetMapping("/message")
    public String message(@RequestParam String name){
        return "Hello "+name+" !,";
    }

    @GetMapping("/product/{id}")
    public String message(@PathVariable int id){
        return "Product Name: "+id+" !,";
    }
    
}
