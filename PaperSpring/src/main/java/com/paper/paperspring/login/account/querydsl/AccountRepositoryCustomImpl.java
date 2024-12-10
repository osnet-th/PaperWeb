package com.paper.paperspring.login.account.querydsl;

import com.paper.paperspring.login.account.Account;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Objects;

import static com.paper.paperspring.login.account.QAccount.account;

@RequiredArgsConstructor
public class AccountRepositoryCustomImpl implements AccountRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Account findByAccount(String id) {
        return jpaQueryFactory.selectFrom(account)
                                .where(idEq(id))
                                .fetchOne();
    }

    private BooleanExpression idEq(String id) {
        return Objects.nonNull(id) ? account.id.eq(id) : null;
    }

    private BooleanExpression lockEq(boolean lock) {
        return lock ? account.locked.eq(lock) : null ;
    }

}
