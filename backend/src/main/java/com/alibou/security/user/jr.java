package com.alibou.security.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface jr extends JpaRepository<jobs, Integer> {
    List<jobs> findByCateg(String categ);
    jobs findById(int id);
    List<jobs> findByName(String name);
    Page<jobs> findByCateg(String categ, Pageable pageable);

}
