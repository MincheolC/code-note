package com.example.web;

public class User {
    private long id;
    private final String name;
    private final Integer age;

    public User(long id, String name, Integer age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public long getId() {
       return id;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }

    public User setId(long id) {
        this.id = id;
        return this;
    }
}
