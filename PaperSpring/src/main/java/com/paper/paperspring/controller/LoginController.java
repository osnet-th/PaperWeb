package com.paper.paperspring.controller;


import com.paper.paperspring.dto.JoinAccount;
import com.paper.paperspring.service.LoginService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@Slf4j
@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login-success")
    public ResponseEntity<JoinAccount> doSignIn(HttpServletRequest request, Principal principal) {
        log.info("로그인 성공 !");
        JoinAccount loginUser = new JoinAccount();
        loginUser.setId(principal.getName());
        return ResponseEntity.ok().body(loginUser);
    }



    // 회원 가입
    @PostMapping(value = "/sign-up")
    public ResponseEntity<JoinAccount> doSignUp(HttpServletRequest request, @RequestBody JoinAccount joinAccount) {
        log.info(joinAccount.toString());
        loginService.signUpService(joinAccount);
        return ResponseEntity.ok().body(joinAccount);
    }



}
