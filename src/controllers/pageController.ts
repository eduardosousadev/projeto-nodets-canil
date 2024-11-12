import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject'
import { createDescriptionObject } from '../helpers/createDescriptionObject';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: createDescriptionObject('Todos os animais', "allanimals.jpg"),
        list
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: createDescriptionObject('Cachorros', 'banner_dog.jpg'),
        list
    });
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: createDescriptionObject('Gatos', 'banner_cat.jpg'),
        list
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: createDescriptionObject('Peixes', 'banner_fish.jpg'),
        list
    });
};