import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service: Service1Service,private route:ActivatedRoute) { }

  public data: any;
  public datatrash: any;
  public name: any;
  public emailid: any;
  public phonenum: any;
  public notetexttrash: any;
  public textdelete: any;
  public   isLoggedIn: boolean = false;
  public   isclickedonaddbtton: boolean = false;
  public  dataa: any;

  public save: boolean=false;
  ngOnInit(): void {
    this.GetItems();
    this.route.params.subscribe(p=>{
      this.service.getnotee(p['id']).subscribe(data=>{
        this.dataa=data,
        this.name=this.dataa.name,
        this.phonenum=this.dataa.phonenum,
        this.emailid=this.dataa.emailid,
        this.save=true;
        console.log(this.dataa);
      })
    })
  }
  GetItems() {
    this.service.GetItems().subscribe(data1 => {
      this.data = data1;
      console.log(data1);
    });
  }
 
  AddNoteText() {
    let list = {
      emailid: this.emailid,
      phonenum: this.phonenum,
      name:this.name
    }
    this.service.addStudent(list).subscribe(data => {
      this.GetItems();
      console.log('added');
    })
  }
  
UpdateNotesList(item:any){
  item.emailid=this.emailid
  item.phonenum=this.phonenum
  item.name=this.name;
  this.service.updatenotes(item.id, item).subscribe(data => {
    this.isLoggedIn = false;
  });
  
}

}
