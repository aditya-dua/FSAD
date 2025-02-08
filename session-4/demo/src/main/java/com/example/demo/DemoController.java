package com.example.demo;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

	@GetMapping("/demo1")
	public int demo1() {
		return 10;
	}
	
	@GetMapping("/demo2")
	public double demo2() {
		return 10.10;
	}
	
	@GetMapping(value="/demo3",produces=MediaType.TEXT_HTML_VALUE)
	public String demo3() {
		return "<html> "+"<body><h1>My Springboot response</h1></body>"+"</html>";
	}
	
	@GetMapping(value="/demo31")
	public String demo31() {
		return "<html> "+"<body><h1>My Springboot response</h1></body>"+"</html>";
	}
	
	@GetMapping("/demo4")
	public String demo4() {
		String m="KLEF";
		String m2="I study at ";
		
		return m2+m;
	}
	
	@GetMapping("/demo5/{id}")
	public String demo5(@PathVariable int id) {
		
		
		return "Hello from id:: "+id;
	}
	
	@GetMapping("/demo6/{a}/{b}")
	public String demo6(@PathVariable int a,@PathVariable int b) {
		
		
		return "Sum of  "+a+" & "+b+" is = "+(a+b);
	}
	
	@GetMapping("/demo7")
	public String demo7(@RequestParam String name) {
		
		
		return "Hello "+name+"!";
	}
	
	
	
}
