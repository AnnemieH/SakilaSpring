package com.tsi.longroad.annemie.Spring.Starter.Demo;

import jakarta.persistence.*;

import java.time.Year;
import java.lang.Short;

@Entity
@Table(name="film")
public class Film
{
    @Id
    @Column(name = "film_id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int filmID;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "release_year")
    private Year releaseYear;

    @Column(name = "language_id")
    private short languageID;

//    @Column(name = "original_language_id")
//    private Short origLanguageID;

    @Column(name = "rental_duration")
    private short rentalDuration;

    @Column(name = "rental_rate")
    private double rentalRate;

    @Column(name = "length")
    private short length;

    @Column(name = "replacement_cost")
    private double replacementCost;

     // Store enum from the database as a string
    @Column(name = "rating")
    private String rating;

    @Column(name="special_features")
    private String specialFeatures;

    // SETTERS

    public void setFilmID(int filmID)
    {
        this.filmID = filmID;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public void setReleaseYear(Year releaseYear)
    {
        this.releaseYear = releaseYear;
    }

    public void setLanguageID(short languageID)
    {
        this.languageID = languageID;
    }

    public void setRentalDuration(short rentalDuration)
    {
        this.rentalDuration = rentalDuration;
    }

    public void setRentalRate(double rentalRate)
    {
        this.rentalRate = rentalRate;
    }

    public void setLength(short length)
    {
        this.length = length;
    }

    public void setReplacementCost(double replacementCost)
    {
        this.replacementCost = replacementCost;
    }

    public void setRating(String rating)
    {
        this.rating = rating;
    }

    public void setSpecialFeatures(String specialFeatures)
    {
        this.specialFeatures = specialFeatures;
    }

    // GETTERS

    public int getFilmID()
    {
        return filmID;
    }

    public String getTitle()
    {
        return title;
    }

    public String getDescription()
    {
        return description;
    }

    public Year getReleaseYear()
    {
        return releaseYear;
    }

    public short getLanguageID()
    {
        return languageID;
    }

//    public short getOrigLanguageID()
//    {
//        return origLanguageID;
//    }

    public short getRentalDuration()
    {
        return rentalDuration;
    }

    public double getRentalRate()
    {
        return rentalRate;
    }

    public short getLength()
    {
        return length;
    }

    public double getReplacementCost()
    {
        return replacementCost;
    }

    public String getRating()
    {
        return rating;
    }

    public String getSpecialFeatures()
    {
        return specialFeatures;
    }

    // CONSTRUCTORS
    public Film()
    {
        title = "";
        languageID = 1;
        rentalDuration = 0;
        rentalRate = 0.00d;
        replacementCost = 0.00d;
    }
}
