import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  ids: any;

 
  constructor(private service: Service1Service) { }
  public data: any;
  public datatrash: any;
  public notetext: any;
  public notetitle: any;
  public notetexttrash: any;
  public status: any;
  public textdelete: any;
  public   isLoggedIn: boolean = false;
  public   istrashIn: boolean = false;
  ngOnInit(): void {
    this.GetItems();
    this.GetItemsFromTrash();
  }
  GetItems() {
    this.service.GetItems().subscribe(data1 => {
      this.data = data1;
      console.log(data1);
    });
  }
  GetItemsFromTrash() {
    this.service.GetItemsFromTrash().subscribe(data1 => {
      this.datatrash = data1;
      console.log(data1);
    });
  }public a:any='';
  public name:any;
  public phonenum:any;
  public emailid:any;
   SendItemsFromTrash(item:any){
   let a={
  
  name:item.name,
  phonenum:item.phonenum,
   emailid:item.emailid}
  this.isLoggedIn = true;
  this.ids=item.id
  this.a=item; 
  // this.service.restore(item.id,item).subscribe(data => {
  //   this.isLoggedIn = false;
  //   this.GetItems();
  //   this.GetItemsFromTrash();
  //   this.GetItems();
  // });
  this.service.deletefromtrash(item.id).subscribe(data => {
  //  this.isLoggedIn = false;
    this.GetItems();
    this.GetItemsFromTrash();
    this.GetItems();
  });
  this.service.addStudent(a).subscribe(data => {
    this.isLoggedIn = false;
    this.GetItems();
    this.GetItemsFromTrash();
    this.GetItems();
  });
 
} 
permenentelydelete(item:any){
  this.service.deletefromtrash(item.id).subscribe(data => {
    //  this.isLoggedIn = false;
      this.GetItems();
      this.GetItemsFromTrash();
      this.GetItems();
    });
}
   
}
