package com.paper.paperspring.login;


import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController(value = "/login")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @GetMapping(value = "/sign-in")
    public String doSignIn(HttpServletRequest request) {
        return "login";
    }



    // 회원 가입
    @PostMapping(value = "/sign-up")
    public ResponseEntity<AccountDto> doSignUp(HttpServletRequest request, @RequestBody AccountDto joinAccountDto) {
        log.info(joinAccountDto.toString());
        loginService.signUpService(joinAccountDto);
        return ResponseEntity.ok().body(joinAccountDto);
    }


}
