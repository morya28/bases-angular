import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'videojuegos',
  templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent implements OnInit {
  
  public nombre: string;
  public year: number;
  
  constructor(
    
    private _route: ActivatedRoute,
    
    private _router: Router
  
  ) {}
  
  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{

      this.nombre = params.nombre;
      //this.nombre = params['nombre'];
      this.year = +params.year;
      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }
    
    });
  }

  redirigir(){
    this._router.navigate(['/libros']);
  }

}
