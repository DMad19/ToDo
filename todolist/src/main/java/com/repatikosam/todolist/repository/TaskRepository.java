package com.repatikosam.todolist.repository;

import com.repatikosam.todolist.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {

    Optional<Task> findByTitle(String title); // findByMobileNumberOrEmail(String mobileNumber, (String email)>
    List<Task> findByUser_UserId (Integer userId);
}
