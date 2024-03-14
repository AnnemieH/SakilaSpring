package com.tsi.longroad.annemie.Spring.Starter.Demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class LanguageController
{
    @Autowired
    private LanguageRepository langRepo;

    public List<Language> getAllLanguages()
    {
        return langRepo.findAll();
    }
}
