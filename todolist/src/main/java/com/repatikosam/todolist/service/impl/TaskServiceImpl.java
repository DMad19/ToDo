package com.repatikosam.todolist.service.impl;

import com.repatikosam.todolist.constants.TodolistConstants;
import com.repatikosam.todolist.dto.TaskDto;
import com.repatikosam.todolist.dto.UserDto;
import com.repatikosam.todolist.entity.SubTask;
import com.repatikosam.todolist.entity.Task;
import com.repatikosam.todolist.entity.User;
import com.repatikosam.todolist.exception.TaskNotFoundException;
import com.repatikosam.todolist.mapper.SubTaskMapper;
import com.repatikosam.todolist.mapper.TaskMapper;
import com.repatikosam.todolist.mapper.UserMapper;
import com.repatikosam.todolist.repository.SubTaskRepository;
import com.repatikosam.todolist.repository.TaskRepository;
import com.repatikosam.todolist.repository.UserRepository;
import com.repatikosam.todolist.service.ITaskService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements ITaskService {

<<<<<<< Updated upstream
    private TaskRepository taskRepository;
    private SubTaskRepository subTaskRepository;

    void TaskServiceImpl(TaskRepository taskRepository, SubTaskRepository subTaskRepository) {
=======
private TaskRepository taskRepository;
private SubTaskRepository subTaskRepository;
private UserRepository userRepository;

 void TaskServiceImpl(TaskRepository taskRepository, SubTaskRepository subTaskRepository,UserRepository userRepository) {
>>>>>>> Stashed changes
        this.taskRepository = taskRepository;
        this.subTaskRepository = subTaskRepository;
        this.userRepository=userRepository;
    }

    @Override
    public void addTask(TaskDto taskDto) {

        Task task = TaskMapper.mapToTask(taskDto, new Task());
<<<<<<< Updated upstream
        // System.out.println("task: "+task);
        // System.out.println("Created At: " + task.getCreatedAt());
        if (task.getDeadline() == null || task.getDeadline().isEmpty()) {
=======
        User user = userRepository.findById(taskDto.getUserId()).orElseThrow(() -> new TaskNotFoundException("User not found with id ", "user_id", taskDto.getUserId()+""));
        if(task.getDeadline() == null){
>>>>>>> Stashed changes
            task.setDeadline(TodolistConstants.DEADLINE);
        }
        task.setSubTasks(null);
        task.setUser(user);
        Task savedTask = taskRepository.save(task);
        List<SubTask> subTasks = SubTaskMapper.mapToSubTasks(taskDto);
        for (SubTask subTask : subTasks) {
            subTask.setTask(savedTask);
        }
        subTaskRepository.saveAll(subTasks);
        System.out.println("Task saved with id " + savedTask.getTaskId());
    }

    @Override
    public boolean deleteTask(Integer taskId) {

        boolean isDeleted = false;
        if (!taskRepository.existsById(taskId)) {
            throw new TaskNotFoundException("Task not found with id ", "task_id", taskId + "");
        }
        taskRepository.deleteById(taskId);
        isDeleted = true;
        return isDeleted;
    }

    @Override
    public boolean updateTask(TaskDto taskDto) {

        boolean isUpdated = false;

        Task task = TaskMapper.mapToTask(taskDto, new Task());
        System.out.println("task:          " + task + "   taskDto:   " + taskDto);
        if (taskRepository.existsById(task.getTaskId())) {
            task.setSubTasks(null);
            Task savedTask = taskRepository.save(task);
            List<SubTask> subTasks = SubTaskMapper.mapToSubTasks(taskDto);
            for (SubTask subTask : subTasks) {
                subTask.setTask(savedTask);
            }
            subTaskRepository.saveAll(subTasks);
            System.out.println("Task saved with id " + savedTask.getTaskId());
            isUpdated = true;
        }
        return isUpdated;

    }

    @Override
    public TaskDto getTask(Integer taskId) {
        if (taskRepository.existsById(taskId)) {
            System.out.println("Task found:   " + taskRepository.findById(taskId).get());
            return TaskMapper.mapToTaskDto(taskRepository.findById(taskId).get(), new TaskDto());
        } else {
            throw new TaskNotFoundException("Task not found with id ", "task_id", taskId + "");
        }
    }

    @Override
    public List<TaskDto> getAllTasksByUserId(Integer userId) {
     System.out.println("userId:   "+userId);
        List<Task> tasks = taskRepository.findByUser_UserId (userId);
        List<TaskDto> taskDtos = new ArrayList<>();
        for (Task task : tasks) {
            taskDtos.add(TaskMapper.mapToTaskDto(task, new TaskDto()));
        }
        Collections.sort(taskDtos, new TaskDto.TaskDeadlineComparator());
        return taskDtos;
    }

    @Override
    public UserDto createUser(UserDto userDto) {
     User user = UserMapper.mapToUser(userDto, new User());
     if(userRepository.existsByUsername(user.getUsername())) {
         throw new TaskNotFoundException("User already exists with email ", "email", user.getEmail());
     }
     User savedUser = userRepository.save(user);
     System.out.println("User saved with id " + savedUser.getUserId());

        return UserMapper.mapToUserDto(savedUser, new UserDto());
    }

    @Override
    public boolean updateUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto, new User());
        if(userRepository.existsByUsername(user.getUsername())) {
            User savedUser = userRepository.save(user);
            System.out.println("User saved with id " + savedUser.getUserId());
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteUser(Integer userId) {
        if(userRepository.existsById(userId)){
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }
}
