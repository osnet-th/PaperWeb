package com.paper.paperspring.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JoinAccount {
    private String id;
    private String password;

    @Override
    public String toString() {
        return "JoinAccount{" +
                "id='" + id + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
