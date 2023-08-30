package com.alibou.security.user;

import java.util.Optional;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);
  Optional<User> findById(Integer id);
  @Transactional
  @Modifying
  @Query("UPDATE User a " +
          "SET a.verified = TRUE WHERE a.email = ?1")
  int enableAppUser(String email);
}
