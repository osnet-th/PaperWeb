package com.paper.paperspring.login;


import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;



@Slf4j
@RestController
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login-success")
    public ResponseEntity<AccountDto> doSignIn(HttpServletRequest request, Principal principal) {
        log.info("로그인 성공 !");
        AccountDto loginUser = new AccountDto();
        loginUser.setId(principal.getName());
        return ResponseEntity.ok().body(loginUser);
    }



    // 회원 가입
    @PostMapping(value = "/sign-up")
    public ResponseEntity<AccountDto> doSignUp(HttpServletRequest request, @RequestBody AccountDto joinAccount) {
        log.info(joinAccount.toString());
        loginService.signUpService(joinAccount);
        return ResponseEntity.ok().body(joinAccount);
    }



}
