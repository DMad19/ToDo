package com.repatikosam.todolist.service;

import com.repatikosam.todolist.dto.TaskDto;
import com.repatikosam.todolist.dto.UserDto;
import com.repatikosam.todolist.entity.Task;
import com.repatikosam.todolist.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;


public interface ITaskService {

void addTask(TaskDto taskDto);

boolean deleteTask(Integer taskId);

boolean updateTask(TaskDto taskDto);

TaskDto getTask(Integer taskId);
List<TaskDto> getAllTasksByUserId(Integer userId);

UserDto createUser(UserDto userDto);

    boolean updateUser(UserDto userDto);

    boolean deleteUser(Integer userId);
}
