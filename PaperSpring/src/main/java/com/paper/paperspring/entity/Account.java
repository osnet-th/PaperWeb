package com.paper.paperspring.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
public class Account {

    @Id
    private String id;
    private String pw;
    private String role;
    private boolean expired;
    private boolean locked;
    private boolean credentialExpired;
    private boolean enabled;



}
