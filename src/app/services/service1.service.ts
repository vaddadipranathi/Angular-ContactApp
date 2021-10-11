import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http: HttpClient) { }
  GetItems() {
    return this.http.get('http://localhost:3000/notedata');
  }
  GetItemsFromTrash() {
    return this.http.get('http://localhost:3000/trashdata');
  }
  addStudent(notedata: any) {
    return this.http.post(`http://localhost:3000/notedata`, notedata);
  }

  addtotrash(trashdata: any) {
    return this.http.post(`http://localhost:3000/trashdata`, trashdata);
  }
  deletedatanotes(id: number) {
    return this.http.delete(`http://localhost:3000/notedata/${id}`);
  }
  updatenotes(id: number, item: any) {
    return this.http.put(`http://localhost:3000/notedata/${id}`, item);
  }
  getnotee(id:any) {
    return this.http.get(`http://localhost:3000/notedata/${id}`);
  }
  restore(id:number,item:any){
    return this.http.put(`http://localhost:3000/notedata/${id}`, item);
  }
  deletefromtrash(id:number){
    return this.http.delete(`http://localhost:3000/trashdata/${id}`);
  }

}
