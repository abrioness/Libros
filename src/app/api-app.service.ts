import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAppService {

  constructor(public http:HttpClient) { }

url_book='http://localhost:5161/api/Libros/Datos';
url_customer='';


getPosts(){
  return new Promise(resolve=>{
    this.http.get(this.url_book).subscribe(data=>{
        resolve(data);
    },error=>{
      console.log(error);
    });
  });
}


addPost(data:any) {
  return new Promise((resolve, reject) => {
    this.http.post(this.url_customer, JSON.stringify(data))
      .subscribe(response => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
  });
}


}
