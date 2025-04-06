package com.repatikosam.todolist.dto;

import lombok.Data;

@Data
public class UserDto {

    private Integer userId;
    private String username;
    private String email;
    private String password;
}
