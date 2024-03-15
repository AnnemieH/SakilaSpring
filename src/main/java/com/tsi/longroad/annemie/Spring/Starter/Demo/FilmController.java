package com.tsi.longroad.annemie.Spring.Starter.Demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/home")
@CrossOrigin
public class FilmController
{
    @Autowired
    private FilmRepository filmRepo;
    private LanguageController langControl;

    @GetMapping("/allFilms")
    public Iterable<Film> getAllFilms()
    {
        return filmRepo.findAll();
    }

    @GetMapping("/allFilms/{filmID}")
    public Optional<Film> getFilmByID(@PathVariable("filmID") Integer id )
    {
        return filmRepo.findById(id);
    }

    @PostMapping("/allFilms")
    public ResponseEntity<Film> addFilm(@RequestBody Film film)
    {
        Film newFilm = film;
        if (newFilm.getLanguageID() == null)
        {
            newFilm.setLanguageID(1);
        }

        filmRepo.save(newFilm);
        return ResponseEntity.status(HttpStatus.CREATED).body(newFilm);
    }

    @PutMapping("allFilms/{filmID}")
    public ResponseEntity<Film> changeFilm (@RequestBody Film film, @PathVariable("filmID") Integer id )
    {
        Optional<Film> optFilm = filmRepo.findById(id);

        if (optFilm.isPresent())
        {
            int filmID = optFilm.get().getFilmID();
            film.setFilmID(filmID);

            if (film.getLanguageID() == null)
            {
                film.setLanguageID(1);
            }

            filmRepo.save(film);
            return ResponseEntity.status(HttpStatus.OK).body(film);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(film);
        }
    }

    @RequestMapping(value="/allFilms/{filmID}", method=RequestMethod.DELETE )
    public void deleteFilm(@PathVariable("filmID") Integer id )
    {
        filmRepo.deleteById(id);
    }

    public FilmController ( FilmRepository filmRepo )
    {
        this.filmRepo = filmRepo;
    }
}
