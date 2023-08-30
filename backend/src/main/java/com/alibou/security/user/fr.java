package com.alibou.security.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface fr extends JpaRepository<forget, Integer> {
 forget findByEmail(String email);
    void deleteByEmail(String email);

}
