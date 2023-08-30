package com.alibou.security.config.auth.EmailSender;

public interface EmailSender {
    void send(String to, String email,String c);
}