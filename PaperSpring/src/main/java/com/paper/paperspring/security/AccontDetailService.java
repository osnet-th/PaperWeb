package com.paper.paperspring.security;

import com.paper.paperspring.login.AccountDetails;
import com.paper.paperspring.login.AccountEntity;
import com.paper.paperspring.login.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Slf4j
@Service
public class AccontDetailService implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if(Objects.isNull(username) || username.isEmpty()) {
            throw new UsernameNotFoundException(username);
        }

        Optional<AccountEntity> account = accountRepository.findById(username);
        if(account.isEmpty())
            throw new UsernameNotFoundException(username);

        log.info(account.get().toString());
        return new AccountDetails(account.get());
    }
}
