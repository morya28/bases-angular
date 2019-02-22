import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable()

export class LibrosService{
    public libros: Array<Libro>

    constructor(){
        this.libros = [
            new Libro('It','Stephen King',299.99,12),
            new Libro('Dispara, yo ya estoy muerto','Julia Navarro',315.00,2),
            new Libro('Darkfall','Dean Koontz',100.50,0),
            new Libro('The long way to a small, angry planet','Becky Chambers',220.00,18),
            new Libro('Neverwhere','Neil Gaiman',149.99,3),
            new Libro('100 años de soledad','Gabriel García Márquez',199.99,27),
            new Libro('Wizard and glass','Stephen King',159.00,11),
            new Libro('Intensity','Dean Koontz',99.99,0),
            new Libro('Coraline','Neil Gaiman',250.00,14)
        ];
    }

    getTexto(){
        return "Hola mundo!";
    }

    getLibros(): Array<Libro>{
        return this.libros;
    }
}