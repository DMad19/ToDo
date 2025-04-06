package com.repatikosam.todolist.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class  Task extends BaseEntity {

    @Id
    @Column(name = "task_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer taskId;

    private String title;
    private String description;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String deadline;

    @OneToMany(mappedBy = "task", cascade = CascadeType.ALL)
    private List<SubTask> subTasks;


    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "user_id")
    private User user;
}
