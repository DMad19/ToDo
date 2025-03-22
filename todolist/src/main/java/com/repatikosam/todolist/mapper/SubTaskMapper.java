package com.repatikosam.todolist.mapper;

import com.repatikosam.todolist.dto.SubTaskDto;
import com.repatikosam.todolist.dto.TaskDto;
import com.repatikosam.todolist.entity.SubTask;

import java.util.ArrayList;
import java.util.List;

public class SubTaskMapper {
    public static SubTaskDto mapToSubTaskDto(SubTask subTask, SubTaskDto subTaskDto) {
        subTaskDto.setSubtaskTitle(subTask.getSubTaskTitle());
       subTaskDto.setSubtaskId(subTask.getSubTaskId());
        return subTaskDto;
    }

    public static SubTask mapToSubTask(SubTaskDto subTaskDto, SubTask subTask) {
        subTask.setSubTaskTitle(subTaskDto.getSubtaskTitle());
       subTask.setStatus(subTaskDto.getStatus());
       subTask.setSubTaskId(subTaskDto.getSubtaskId());
        return subTask;
    }
    public static List<SubTask> mapToSubTasks(TaskDto TaskDto) {

        List<SubTaskDto> subTasks =  TaskDto.getSubTasks();
        List<SubTask> subTaskList = new ArrayList<>();
        for (SubTaskDto subTaskDto : subTasks) {
            SubTask subTask1 = new SubTask();
            subTask1 = SubTaskMapper.mapToSubTask(subTaskDto, subTask1);
            subTaskList.add(subTask1);
        }
        return subTaskList;
    }

    public static List<SubTaskDto> mapToSubTaskDtos(List<SubTask> subTasks) {
        List<SubTaskDto> subTaskDtos = new ArrayList<>();
        for (SubTask subTask : subTasks) {
            SubTaskDto subTaskDto = new SubTaskDto();
            subTaskDto.setSubtaskId(subTask.getSubTaskId());
            subTaskDto.setSubtaskTitle(subTask.getSubTaskTitle());
            subTaskDto.setStatus(subTask.getStatus());
            subTaskDtos.add(subTaskDto);
        }
        return subTaskDtos;
    }
}
