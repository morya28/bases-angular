import { Component, OnInit } from "@angular/core";
import { Libro } from '../models/libro';
import { LibrosService } from '../services/libros.service';

@Component({
    selector: 'libros',
    templateUrl: './libros.component.html',
    providers: [LibrosService]
})

export class LibrosComponent implements OnInit{
    public titulo: string;
    public listadoLibros: Array<Libro>;
    public autores: String[];
    public color: string;
    public nuevoEscritor: string;

    constructor(
        private _librosService: LibrosService
    ){
        this.autores = new Array();
        this.color = '#108cd3';
        this.nuevoEscritor = "";
    }

    getAutores(){
        this.listadoLibros.forEach( libro =>{
            if(this.autores.indexOf(libro.autor) < 0){
                this.autores.push(libro.autor);
            }
        });
        console.log(this.autores);
    }

    ngOnInit(){
        this.listadoLibros = this._librosService.getLibros();
        this.getAutores();
    }

    add_escritor(){
        if(this.nuevoEscritor !== ""){
            this.listadoLibros.forEach( libro =>{
                if(this.autores.indexOf(this.nuevoEscritor) < 0){
                    this.autores.push(this.nuevoEscritor);
                }
            });
        }
    }

    delete_autor(indice){
        this.autores.splice(indice, 1);
    }
}