import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders   } from '@angular/common/http';
import { RequestOptions } from 'http';

@Injectable({   
  providedIn: 'root'
})
export class ApiAppService {


  constructor(public http:HttpClient) { }

private url_book='http://localhost:5161/api/';


getPosts(){
  return new Promise(resolve=>{
    this.http.get(`${this.url_book}Libros/Datos`)    
    .subscribe(data=>{
        resolve(data);
    },error=>{
      console.log(error);
    });
  });
}

//Registrar Cliente
addPost(data:any) {
//   const cabeceras = new HttpHeaders();
// cabeceras.append('accept', 'application/json');

// cabeceras.append('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, X-CSRF-Token');
   
  return new Promise((resolve, reject) => {
     this.http.post(`${this.url_book}Clientes/Insertar`, data)
      .subscribe(response => {
        resolve(response);
        console.log(response);
      }, (error) => {
        reject(error);
      });
  });
 }

//  addPostLib(data:any) {
// const headers=new HttpHeaders();
// headers.append('Content-Type','application/json');
// // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
// // curl -X 'POST' \
// // 'http://localhost:5161/api/Libros/Insertar' \
// // -H 'accept: */*' \
// // -H 'Content-Type: application/json' \
// // -d '{
// // "id": 0,
// // "nomLib": "quijote",
// // "cantidad": 2,
// // "precio": 50
// // }'
// this.http.post(this.url_inslib, JSON.stringify(data),{ headers: headers }).toPromise();
//   // return new Promise((resolve, reject) => {
//   //    this.http.post(this.url_inslib, JSON.stringify(data),{ headers: headers })
//   //     .subscribe(response => {
//   //       resolve(response);
//   //       console.log(response);
//   //     }, (error) => {
//   //       reject(error);
//   //     });
//   // });
//  }

}
