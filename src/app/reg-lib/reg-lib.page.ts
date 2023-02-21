import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-lib',
  templateUrl: './reg-lib.page.html',
  styleUrls: ['./reg-lib.page.scss'],
})
export class RegLibPage implements OnInit {
  data={
    id: 0,
nomLib:"",
 cantidad:0,
 precio: 0
    };
  service: any;
  constructor() { }

  ngOnInit() {
  }
  GuarReg(){
    {
      this.service.addPostLib(this.data);
      
    }
  }
  limpiarCampos()
  {
    this.data.nomLib="";
    this.data.cantidad=0;
    this.data.precio=0;
      
  }
}
