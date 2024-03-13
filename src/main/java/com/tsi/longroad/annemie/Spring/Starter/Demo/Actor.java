package com.tsi.longroad.annemie.Spring.Starter.Demo;

import jakarta.persistence.*;

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
}
