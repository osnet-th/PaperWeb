package com.paper.paperspring.login.account.querydsl;


import com.paper.paperspring.login.account.Account;

public interface AccountRepositoryCustom {
    Account findByAccount(String id);
}
