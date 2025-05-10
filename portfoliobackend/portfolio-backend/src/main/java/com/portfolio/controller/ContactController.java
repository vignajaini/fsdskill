package com.portfolio.controller;

import com.portfolio.model.ContactMessage;
import com.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "*") // allow frontend to call this
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public ResponseEntity<ContactMessage> receiveContact(@RequestBody ContactMessage contact) {
        ContactMessage saved = contactRepository.save(contact);
        return ResponseEntity.ok(saved);
    }
}
