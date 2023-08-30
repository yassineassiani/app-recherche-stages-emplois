package com.alibou.security.user;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface pdr extends JpaRepository<pdf, Long> {
    @Transactional
    @Modifying
    @Query("UPDATE pdf p SET p.content = :newContent WHERE p.id = :pdfFileId")
    void updateContent(@Param("pdfFileId") Integer pdfFileId, @Param("newContent") String newContent);
}
