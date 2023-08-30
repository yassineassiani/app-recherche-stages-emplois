package com.alibou.security.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface pdfDocumentRepository extends JpaRepository<anonce, Integer> {
  anonce findAllById(Integer id);

 List<anonce> findByIde(Integer id);
    List<anonce> findByIdc(Integer id);
}
