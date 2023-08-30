package com.alibou.security.user;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;
@Data
public class PdfData {
    private String name;
    private String email;
    private String phone;
    private MultipartFile file;
}
