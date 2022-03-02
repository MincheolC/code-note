package com.example.web;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final AtomicLong counter = new AtomicLong();

    // @GetMapping은 HTTP GET /greeting 요청을 gretting() 메소드에 매핑
    @GetMapping("/user")
    public User user(@RequestParam(value = "name", defaultValue = "World") String name,
                     @RequestParam(value = "age", defaultValue = "30") String age) {
        // @RequestParam은 query string 파라미터 값을 name에 바인드 해주고 없다면 defaultValue 사용.

        // 기존 MVC 및 RESTful 웹 컨트롤러와 주요 차이점은 HTTP 응답 본문이 생성되는 방식임.
        // Greeting 객체를 JSON으로 변환해서 응답 (Jackson2가 알아서 변환해줌)
        return new User(counter.incrementAndGet(), name, Integer.parseInt(age));
    }

    @PostMapping("/user")
    public User user(@RequestBody User user) {
        return user.setId(counter.incrementAndGet());
    }

}
