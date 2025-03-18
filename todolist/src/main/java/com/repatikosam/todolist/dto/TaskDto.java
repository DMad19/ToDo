package com.repatikosam.todolist.dto;

import com.repatikosam.todolist.entity.Status;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

import java.util.List;

@Data
public class TaskDto    {

    private Integer taskId;
    private String title;
    private String description;
    private String deadline;

    @Enumerated(EnumType.STRING)
    private Status status;


    private List<SubTaskDto> subTasks;

}
