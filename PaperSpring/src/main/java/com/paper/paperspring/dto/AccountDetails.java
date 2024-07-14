package com.paper.paperspring.dto;

import com.paper.paperspring.entity.Account;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

public class AccountDetails implements UserDetails {

    private Account account;

    public AccountDetails(Account account) {
        this.account = account;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> collection = new ArrayList<>();
        collection.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return account.getRole();
            }
        });
        return collection;
    }

    @Override
    public String getPassword() {
        return this.account.getPw();
    }

    @Override
    public String getUsername() {
        return this.account.getId();
    }

    @Override
    public boolean isAccountNonExpired() {
        return !this.account.isExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return !this.account.isLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return !this.account.isCredentialExpired();
    }

    @Override
    public boolean isEnabled() {
        return this.account.isEnabled();
    }
}
