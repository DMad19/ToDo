package com.repatikosam.todolist.dto;

import com.repatikosam.todolist.entity.Status;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;
import org.hibernate.query.sql.internal.ParameterRecognizerImpl;

import java.util.List;

@Data
public class TaskDto    {

    private Integer taskId;
    private String title;
    private String description;
    private String deadline;
    private Integer userId;

    @Enumerated(EnumType.STRING)
    private Status status;


    private List<SubTaskDto> subTasks;

    // comparator to sort tasks by deadline
    public static class TaskDeadlineComparator implements java.util.Comparator<TaskDto> {
        public int compare(TaskDto t1, TaskDto t2) {
            return t1.getDeadline().compareTo(t2.getDeadline());
        }
    }

}
