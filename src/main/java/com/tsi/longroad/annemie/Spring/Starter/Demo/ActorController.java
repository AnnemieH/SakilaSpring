package com.tsi.longroad.annemie.Spring.Starter.Demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.hateoas.EntityModel;

import java.util.Optional;

@RestController
@RequestMapping("/home")
@CrossOrigin
public class ActorController
{
    @Autowired
    private ActorRepository actorRep;

    @GetMapping("/allActors")
    public Iterable<Actor> getAllActors()
    {
        return actorRep.findAll();
    }

    @GetMapping("/allActors/{actorID}")
    public Optional<Actor> getActorByID(@PathVariable("actorID") Integer id)
    {
        return actorRep.findById(id);
    }

    @GetMapping("allActors/{actorID}/films")
    public Iterable<Film> getFilmsOfActor(@PathVariable("actorID") Integer id)
    {
        Actor actor = actorRep.findById(id).get();

        return actor.getFilms();
    }
    @PostMapping("/allActors")
    public ResponseEntity<Actor> addActor(@RequestBody Actor actor)
    {
        Actor newActor = actor;
        actorRep.save(newActor);
        return ResponseEntity.status(HttpStatus.CREATED).body(newActor);
    }

    @PutMapping("allActors/{actorID}")
    public ResponseEntity<Actor> changeActor(@RequestBody Actor actor, @PathVariable("actorID") Integer id)
    {
        Optional<Actor> optActor = actorRep.findById(id);

        if (optActor.isPresent())
        {
            int actorID = optActor.get().getActorID();
            actor.setActorID(actorID);
            actorRep.save(actor);
            return ResponseEntity.status(HttpStatus.OK).body(actor);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(actor);
        }
    }


    @RequestMapping(value="/allActors/{actorID}", method=RequestMethod.DELETE)
    public void deleteActor(@PathVariable(value = "actorID") Integer id)
    {
        actorRep.deleteById(id);
    }
}
