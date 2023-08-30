package com.alibou.security.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface sr  extends JpaRepository<servise, Integer> {
    List<servise> findByCateg(String categ);
    jobs findById(int id);
    List<servise> findByIdc(Integer id);
}
