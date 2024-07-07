package com.paper.paperspring.service;


import com.paper.paperspring.dto.JoinAccount;
import com.paper.paperspring.entity.Account;
import com.paper.paperspring.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final AccountRepository accountRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    public LoginService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public JoinAccount signUpService(JoinAccount joinAccount) {
        Account account = new Account();
        account.setId(joinAccount.getId());
        account.setPw(passwordEncoder.encode(joinAccount.getPassword()));
        account.setLocked(false);
        account.setExpired(false);
        account.setRole("ADMIN");
        account.setEnabled(true);
        account.setCredentialExpired(false);

        Account save = accountRepository.save(account);
        return joinAccount;

    }


}
