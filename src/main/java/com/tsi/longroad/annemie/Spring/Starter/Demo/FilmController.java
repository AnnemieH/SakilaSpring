package com.tsi.longroad.annemie.Spring.Starter.Demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FilmController
{
    @Autowired
    private FilmRepository filmRepo;

    @GetMapping("/allFilms")
    public Iterable<Film> getAllFilms()
    {
        return filmRepo.findAll();
    }
}
