package com.paper.paperspring.security.jwt;


import lombok.Getter;

@Getter
public class TokenRequestDto {
    String refreshToken;
    String accessToken;
}
