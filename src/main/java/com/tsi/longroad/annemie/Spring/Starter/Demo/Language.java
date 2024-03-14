package com.tsi.longroad.annemie.Spring.Starter.Demo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.ArrayList;

@Entity
@Table(name="language")
public class Language
{
    @Id
    @Column(name="language_id", unique = true)
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int languageID;

//    @OneToMany(targetEntity=Film.class, mappedBy="language", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    @JsonIgnore
//    private List<Film> films = new ArrayList<>();

    @Column(name="name")
    private String name;

    // GETTERS

    public int getLanguageID()
    {
        return languageID;
    }

    public String getName()
    {
        return name;
    }

    // CONSTRUCTORS
    public Language()
    {
        languageID = 1;
        name = "English";
    }
}
