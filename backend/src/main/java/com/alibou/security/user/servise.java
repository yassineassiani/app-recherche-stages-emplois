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
@Table(name = "servise")
public class servise {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer idc;
    private String name;
    private String title;
    private String adress;
    private String tel;
    private String categ;
    private String email;


    private String des;
    private LocalDate Date;



}
