import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ApiAppService } from '../api-app.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

ListBooks:any;
arraybook=[];

  constructor(public nvctl:NavController,public service:ApiAppService) { }

  ngOnInit() {
    this.getData();
  }


  getData()
  {
    this.service.getPosts().then(data=>{
          this.ListBooks=data;
          console.log(this.ListBooks.response);
  });


}
}
