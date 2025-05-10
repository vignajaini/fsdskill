package com.portfolio.controller;

import com.portfolio.model.Project;
import com.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepo;

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepo.findAll();
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectRepo.save(project);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectRepo.deleteById(id);
    }
}
