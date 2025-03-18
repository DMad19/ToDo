package com.repatikosam.todolist.dto;

import com.repatikosam.todolist.entity.Status;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

@Data
public class SubTaskDto {

   private Integer subtaskId;

    private String subtaskTitle;

    @Enumerated(EnumType.STRING)
    private Status status;
}
