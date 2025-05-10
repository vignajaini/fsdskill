package com.portfolio.model;

import jakarta.persistence.*;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String imageUrl;
    private String githubUrl;
    private String liveUrl;

    // No-args constructor
    public Project() {
    }

    // All-args constructor
    public Project(Long id, String title, String description, String imageUrl, String githubUrl, String liveUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.githubUrl = githubUrl;
        this.liveUrl = liveUrl;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getLiveUrl() {
        return liveUrl;
    }

    public void setLiveUrl(String liveUrl) {
        this.liveUrl = liveUrl;
    }
}
