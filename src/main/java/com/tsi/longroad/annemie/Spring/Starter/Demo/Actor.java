package com.tsi.longroad.annemie.Spring.Starter.Demo;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name="actor")
public class Actor
{
    @Id
    @Column(name="actor_id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int actorID;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @ManyToMany( cascade = CascadeType.ALL )
    @JoinTable
            (
                    name = "film_actor",
                    joinColumns = @JoinColumn(name = "actor_id", referencedColumnName = "actor_id"),
                    inverseJoinColumns = @JoinColumn(name = "film_id", referencedColumnName = "film_id")
            )
    private Set<Film> films;

    // GETTERS

    public int getActorID()
    {
        return actorID;
    }

    public String getFirstName()
    {
        return firstName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public Set<Film> getFilms()
    {
        return films;
    }
    // SETTERS

    public void setActorID(int actorID)
    {
        this.actorID = actorID;
    }

    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public void setLastName(String lastName)
    {
        this.lastName = lastName;
    }
}
