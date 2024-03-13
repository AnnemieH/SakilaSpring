package com.tsi.longroad.annemie.Spring.Starter.Demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;


@SpringBootApplication
@RestController
@RequestMapping("/home")
@CrossOrigin
public class SpringStarterDemoApplication
{
	@Autowired
	private ActorRepository actorRep;
	@Autowired
	private FilmRepository filmRep;

	@GetMapping("/allActors")
	public Iterable<Actor> getAllActors()
	{
		return actorRep.findAll();
	}

	@GetMapping("/allFilms")
	public Iterable<Film> getAllFilms()
	{
		return filmRep.findAll();
	}

	public SpringStarterDemoApplication(ActorRepository actorRep, FilmRepository filmRep)
	{
		this.actorRep = actorRep;
		this.filmRep = filmRep;
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringStarterDemoApplication.class, args);
	}

}
