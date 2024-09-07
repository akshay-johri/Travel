package com.AiTraveller.spring.service;

import com.AiTraveller.spring.model.ContributorName;
import com.AiTraveller.spring.repoistory.ContributorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContributorService {
    private final ContributorRepository contributorRepository;

    @Autowired
    public ContributorService(ContributorRepository contributorRepository) {
        this.contributorRepository = contributorRepository;
    }

    public List<ContributorName> getAllContributors() {
        return contributorRepository.findAll();
    }
}