package com.paper.paperspring.login;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

public class AccountDetails implements UserDetails {

    private AccountEntity accountEntity;

    public AccountDetails(AccountEntity accountEntity) {
        this.accountEntity = accountEntity;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> collection = new ArrayList<>();
        collection.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return accountEntity.getRole();
            }
        });
        return collection;
    }

    @Override
    public String getPassword() {
        return this.accountEntity.getPw();
    }

    @Override
    public String getUsername() {
        return this.accountEntity.getId();
    }

    @Override
    public boolean isAccountNonExpired() {
        return !this.accountEntity.isExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return !this.accountEntity.isLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return !this.accountEntity.isCredentialExpired();
    }

    @Override
    public boolean isEnabled() {
        return this.accountEntity.isEnabled();
    }
}
