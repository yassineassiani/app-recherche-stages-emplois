package com.alibou.security.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "jobs")
public class jobs {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String title;
    private String salaire;
    private String location;
    private String categ;
    private String des;
    private String exp;
    private LocalDate Date;

}
