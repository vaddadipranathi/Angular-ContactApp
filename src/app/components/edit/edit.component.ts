import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  ids: any;
  constructor(private service: Service1Service) { }
  public data: any;
  public emailid: any;
  public phonenum: any;
  public name: any;
  public   isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.GetItems();
  }

    GetItems() {
    this.service.GetItems().subscribe(data1 => {
      this.data = data1;
      console.log(data1);
    });
  }
  public a:any='';
  EditNotesListt(item:any){
    this.emailid=item.emailid,
   this.phonenum=item.phonenum
   this.name=item.name
   this.isLoggedIn = true;
   this.ids=item.id
   this.a=item; 
 }
 
 UpdateNotesList(item:any){
  //  item.notetitle=this.notetitle
  //  item.notetext=this.notetext
   item.emailid=this.emailid,
   item.phonenum=this.phonenum
   item.name=this.name
   this.service.updatenotes(item.id, item).subscribe(data => {
     this.isLoggedIn = false;
   });
   
 }
}
