package com.tsi.longroad.annemie.Spring.Starter.Demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;


@SpringBootApplication
@RestController
public class SpringStarterDemoApplication
{
	@Autowired
	private ActorController actorCont;

	@Autowired
	private FilmController filmCont;



	public SpringStarterDemoApplication(ActorController actorCont, FilmController filmCont)
	{
		this.actorCont = actorCont;
		this.filmCont = filmCont;
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringStarterDemoApplication.class, args);
	}

}
