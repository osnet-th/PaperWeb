package com.paper.paperspring.login;


import org.springframework.beans.factory.annotation.Autowired;
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

    public AccountDto signUpService(AccountDto joinAccountDto) {
        AccountEntity accountEntity = new AccountEntity();
        accountEntity.setId(joinAccountDto.getId());
        accountEntity.setPw(passwordEncoder.encode(joinAccountDto.getPassword()));
        accountEntity.setLocked(false);
        accountEntity.setExpired(false);
        accountEntity.setRole("ADMIN");
        accountEntity.setEnabled(true);
        accountEntity.setCredentialExpired(false);

        AccountEntity save = accountRepository.save(accountEntity);
        return joinAccountDto;

    }


}
