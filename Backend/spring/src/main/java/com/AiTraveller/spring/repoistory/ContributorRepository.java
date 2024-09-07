package com.AiTraveller.spring.repoistory;

import com.AiTraveller.spring.model.ContributorName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContributorRepository extends JpaRepository<ContributorName, Long> {

}
