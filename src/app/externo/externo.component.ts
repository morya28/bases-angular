import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userID: any;
  public fecha: any;
  public new_user: any;

  constructor(
    private _peticionesService: PeticionesService 
  ) {
    this.userID = 1;
    this.fecha = new Date();
    this.new_user = {"name":"", "job":""};
  }

  ngOnInit() {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userID).subscribe(
      result =>{
        this.user = result.data;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
