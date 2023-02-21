import { Component, ComponentFactory, OnInit } from '@angular/core';
import { ApiAppService } from '../api-app.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {


  data=
  {
    id:0,
   nombre:"",
    apellidos:"",
    correo:"",
    contacto:""

  };
  constructor(public service:ApiAppService) { }

  ngOnInit() {
  }

  async Registrar()
  {
    
    this.service.addPost(this.data);
    
  }
  

}
