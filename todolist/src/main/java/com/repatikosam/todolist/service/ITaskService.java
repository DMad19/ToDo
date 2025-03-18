package com.repatikosam.todolist.service;

import com.repatikosam.todolist.dto.TaskDto;
import com.repatikosam.todolist.entity.Task;
import org.springframework.stereotype.Component;

import java.util.List;


public interface ITaskService {

void addTask(TaskDto taskDto);

boolean deleteTask(Integer taskId);

boolean updateTask(TaskDto taskDto);

TaskDto getTask(Integer taskId);
  List<TaskDto> getAllTask();
}
