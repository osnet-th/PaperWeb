package com.paper.paperspring.login.account;


import com.paper.paperspring.login.account.querydsl.AccountRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, String>, AccountRepositoryCustom {

}
