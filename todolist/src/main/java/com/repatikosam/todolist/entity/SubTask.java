package com.repatikosam.todolist.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.context.annotation.Lazy;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "subtask")
public class SubTask extends BaseEntity {

    @Id
    @Column(name = "subtask_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer subTaskId;

    @Column(name = "title")
    private String subTaskTitle;

    @Enumerated(EnumType.STRING)
    private Status status;

    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "task_id")
    private Task task;


}
