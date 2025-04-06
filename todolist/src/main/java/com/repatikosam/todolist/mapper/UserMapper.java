package com.repatikosam.todolist.mapper;

import com.repatikosam.todolist.dto.UserDto;
import com.repatikosam.todolist.entity.User;

public class UserMapper {

    public  static User mapToUser(UserDto userDto, User user) {
        user.setUserId(userDto.getUserId());
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setEmail(userDto.getEmail());
        return user;
    }

    public static UserDto mapToUserDto(User user, UserDto userDto) {
        userDto.setUserId(user.getUserId());
        userDto.setUsername(user.getUsername());
        userDto.setPassword(user.getPassword());
        userDto.setEmail(user.getEmail());
        return userDto;
    }

}

