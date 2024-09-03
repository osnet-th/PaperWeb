package com.paper.paperspring.login.login;


import com.paper.paperspring.login.account.AccountDto;
import com.paper.paperspring.security.jwt.TokenDto;
import com.paper.paperspring.security.jwt.TokenRequestDto;
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

    @PostMapping("/login-request")
    public ResponseEntity<TokenDto> doSignIn(@RequestBody AccountDto loginAccount) {
        return ResponseEntity.ok().body(loginService.login(loginAccount));
    }

    @PostMapping("/logout-success")
    public ResponseEntity<Boolean> doLogout(HttpServletRequest request, Principal principal) {
        log.info("관리자({})가 로그아웃 했습니다.", principal.getName());
        return ResponseEntity.ok().body(true);
    }

    // 회원 가입
    @PostMapping(value = "/sign-up")
    public ResponseEntity<AccountDto> doSignUp(HttpServletRequest request, @RequestBody AccountDto joinAccount) {
        log.info(joinAccount.toString());
        loginService.signUpService(joinAccount);
        return ResponseEntity.ok().body(joinAccount);
    }

    @PostMapping("/reissue")
    public ResponseEntity<TokenDto> reissue(@RequestBody TokenRequestDto tokenRequestDto) {
        return ResponseEntity.ok(loginService.reissue(tokenRequestDto));
    }


}
