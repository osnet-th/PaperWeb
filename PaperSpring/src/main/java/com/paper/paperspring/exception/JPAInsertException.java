package com.paper.paperspring.exception;

public class JPAInsertException extends RuntimeException {

    // 1. 매개 변수가 없는 기본 생성자
    JPAInsertException() {
    }

    // 2. 예외 발생 원인(예외 메시지)을 전달하기 위해 String 타입의 매개변수를 갖는 생성자
    public JPAInsertException(String message) {
        super(message); // RuntimeException 클래스의 생성자를 호출합니다.
    }
}
