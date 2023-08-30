package com.alibou.security.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
@Data
@AllArgsConstructor
public class CustomMultipartFile {

    private final byte[] fileData;




}