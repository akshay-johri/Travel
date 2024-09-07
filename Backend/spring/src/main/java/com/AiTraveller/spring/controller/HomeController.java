package com.AiTraveller.spring.controller;

import com.AiTraveller.spring.service.ContributorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class HomeController {

    private ContributorService service;
    @Autowired
    public HomeController(ContributorService service) {
        this.service = service;//di
    }

    @GetMapping("/test")
    public String testConnection() {
        System.out.println("Running");
        return "Backend is connected successfully!";
    }
    @GetMapping("/contributor")
    public List getALlContributor(){
        return service.getAllContributors();
    }
}
