package com.alibou.security.config.auth;

import com.alibou.security.config.auth.token.email;
import com.alibou.security.user.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/a")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final UserRepository s ;
    private final sr sd;
    private final fr fg;

    @PostMapping("/r")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/a")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping(path = "/c")
    public String confirm(@RequestParam("token") String token) {
        return service.confirmToken(token);
    }

    @GetMapping("/b/{email}")
    public email findUserNameByEmail(@PathVariable String email) {
        Optional<User> userExists = s.findByEmail(email);
        email e = new email();
        e.setName(userExists.get().getName());

        e.setId(userExists.get().getId());
        return e;


    }

    @GetMapping("/k/{id}")
    public email gg(@PathVariable Integer id) {
        Optional<User> us = s.findById(id);
        email e = new email();
        e.setName(us.get().getName());


        return e;


    }
    @PostMapping("/f")
    public forget forget(@RequestBody emm email){

return service.forget(email.getEmail());
    }
    @GetMapping("/f/{email}")
    public forget forget(@PathVariable String email){
     return    fg.findByEmail(email);

    }
    @DeleteMapping("/w/{id}")
    public void forge(@PathVariable Integer id){
        fg.deleteById(id); }

    @PostMapping("/m")
    public String pass(@RequestBody AuthenticationRequest aut)
    {
        return service.forg(aut);

    }
}