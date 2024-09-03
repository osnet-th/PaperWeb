package com.paper.paperspring.login.login;


import com.paper.paperspring.login.account.AccountDto;
import com.paper.paperspring.login.account.AccountEntity;
import com.paper.paperspring.login.account.AccountRepository;
import com.paper.paperspring.security.jwt.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LoginService {

    private final AuthenticationManagerBuilder managerBuilder;
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    private final RefreshTokenRepository refreshTokenRepository;


    @Autowired
    public LoginService(AuthenticationManagerBuilder managerBuilder, AccountRepository accountRepository, PasswordEncoder passwordEncoder, TokenProvider tokenProvider, RefreshTokenRepository refreshTokenRepository) {
        this.managerBuilder = managerBuilder;
        this.accountRepository = accountRepository;
        this.tokenProvider = tokenProvider;
        this.passwordEncoder = passwordEncoder;
        this.refreshTokenRepository = refreshTokenRepository;
    }

    public AccountDto signUpService(AccountDto joinAccountDto) {
        AccountEntity accountEntity = new AccountEntity();
        accountEntity.setId(joinAccountDto.getId());
        accountEntity.setPw(passwordEncoder.encode(joinAccountDto.getPassword()));
        accountEntity.setLocked(false);
        accountEntity.setExpired(false);
        accountEntity.setRole("MASTER");
        accountEntity.setEnabled(true);
        accountEntity.setCredentialExpired(false);

        AccountEntity save = accountRepository.save(accountEntity);
        return joinAccountDto;

    }


    public TokenDto login(AccountDto accountDto) {
        UsernamePasswordAuthenticationToken authenticationToken = accountDto.toAuthentication();

        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // 4. RefreshToken 저장
        RefreshToken refreshToken = RefreshToken.builder()
                .key(authentication.getName())
                .value(tokenDto.getRefreshToken())
                .build();

        refreshTokenRepository.save(refreshToken);

        // 5. 토큰 발급
        return tokenDto;

    }

    @Transactional
    public TokenDto reissue(TokenRequestDto tokenRequestDto) {
        // 1. Refresh Token 검증
        if (!tokenProvider.validateToken(tokenRequestDto.getRefreshToken())) {
            throw new RuntimeException("Refresh Token 이 유효하지 않습니다.");
        }

        // 2. Access Token 에서 Member ID 가져오기
        Authentication authentication = tokenProvider.getAuthentication(tokenRequestDto.getAccessToken());

        // 3. 저장소에서 Member ID 를 기반으로 Refresh Token 값 가져옴
        RefreshToken refreshToken = refreshTokenRepository.findByKey(authentication.getName())
                .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

        // 4. Refresh Token 일치하는지 검사
        if (!refreshToken.getValue().equals(tokenRequestDto.getRefreshToken())) {
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        // 5. 새로운 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // 6. 저장소 정보 업데이트
        RefreshToken newRefreshToken = refreshToken.updateValue(tokenDto.getRefreshToken());
        refreshTokenRepository.save(newRefreshToken);

        // 토큰 발급
        return tokenDto;
    }


}
