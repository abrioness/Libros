import { Component, OnInit } from '@angular/core';

import { ApiAppService } from '../api-app.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

ListBooks:any;
arraybook=[];


  constructor(public service:ApiAppService) { }

  ngOnInit() {
    this.getData();
  }


  ionViewWillEnter(){
    this.getData();
  }

  getData()
  {
    this.service.getPosts().then(data=>{
    this.ListBooks=data;
    
   
  });

}


}
