package com.repatikosam.todolist.controller;

import com.repatikosam.todolist.constants.TodolistConstants;
import com.repatikosam.todolist.dto.ResponseDto;
import com.repatikosam.todolist.dto.TaskDto;
import com.repatikosam.todolist.dto.UserDto;
import com.repatikosam.todolist.entity.Task;
import com.repatikosam.todolist.service.ITaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api",produces = {MediaType.APPLICATION_JSON_VALUE})
@AllArgsConstructor
public class TaskController {

private ITaskService  iTaskService;

@PostMapping("/tasks")
public ResponseEntity<ResponseDto> addTask( @RequestBody TaskDto taskDto) {

    System.out.println("Task saved with id " + taskDto);
    iTaskService.addTask(taskDto);


    return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(TodolistConstants.STATUS_201, TodolistConstants.MESSAGE_201));
}

@GetMapping("/tasks/task")
public ResponseEntity<TaskDto> getTask(@RequestParam  Integer taskId) {
    TaskDto taskDto = iTaskService.getTask(taskId);
    return ResponseEntity.status(HttpStatus.OK).body(taskDto);
}
    @GetMapping("/tasks")
    public ResponseEntity<List<TaskDto>> getAllTask(@RequestParam Integer userId) {

        System.out.println("userId:   "+userId);
        List<TaskDto> taskDto = iTaskService.getAllTasksByUserId(userId);
        return ResponseEntity.status(HttpStatus.OK).body(taskDto);
    }

@PutMapping("/tasks/task")
public ResponseEntity<ResponseDto> updateTask(@RequestBody TaskDto taskDto) {
    System.out.println("TaskDto:   " + taskDto);
    boolean isUpdated = iTaskService.updateTask(taskDto);
    if (isUpdated) {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(TodolistConstants.STATUS_200, TodolistConstants.MESSAGE_200));
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto(TodolistConstants.STATUS_417, TodolistConstants.MESSAGE_417_UPDATE));
    }
}

@DeleteMapping("/tasks/task")
public ResponseEntity<ResponseDto> deleteTask(@RequestParam Integer taskId) {
    boolean isDeleted = iTaskService.deleteTask(taskId);
    if (isDeleted) {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(TodolistConstants.STATUS_200, TodolistConstants.MESSAGE_200));
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto(TodolistConstants.STATUS_417, TodolistConstants.MESSAGE_417_DELETE));
    }
}

@PostMapping("/users")
public ResponseEntity<ResponseDto> createUser(@RequestBody UserDto userDto) {
    iTaskService.createUser(userDto);
    return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto(TodolistConstants.STATUS_201, TodolistConstants.MESSAGE_201));
}

@PutMapping("/users")
public ResponseEntity<ResponseDto> updateUser(@RequestBody UserDto userDto) {
    boolean isUpdated = iTaskService.updateUser(userDto);
    if (isUpdated) {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(TodolistConstants.STATUS_200, TodolistConstants.MESSAGE_200));
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto(TodolistConstants.STATUS_417, TodolistConstants.MESSAGE_417_UPDATE));
    }
}

    @DeleteMapping ("/users")
    public ResponseEntity<ResponseDto> deleteUser(@RequestParam Integer userId) {
        boolean isDeleted = iTaskService.deleteUser(userId);
        if (isDeleted) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(TodolistConstants.STATUS_200, TodolistConstants.MESSAGE_200));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto(TodolistConstants.STATUS_417, TodolistConstants.MESSAGE_417_UPDATE));
        }
    }


}
