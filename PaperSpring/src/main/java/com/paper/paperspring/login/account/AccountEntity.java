package com.paper.paperspring.login.account;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="account")
@Getter
@Setter
@ToString
public class AccountEntity {

    @Id
    private String id;
    private String pw;
    private String role;
    private boolean expired;
    private boolean locked;
    private boolean credentialExpired;
    private boolean enabled;

}