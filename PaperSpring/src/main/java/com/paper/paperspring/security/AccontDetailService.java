package com.paper.paperspring.security;

import com.paper.paperspring.dto.AccountDetails;
import com.paper.paperspring.entity.Account;
import com.paper.paperspring.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class AccontDetailService implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if(Objects.isNull(username) || username.isEmpty()) {
            throw new UsernameNotFoundException(username);
        }

        Optional<Account> account = accountRepository.findById(username);
        if(account.isEmpty())
            throw new UsernameNotFoundException(username);
        return new AccountDetails(account.get());
    }
}
