import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service1Service } from 'src/app/services/service1.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
ids:any;

  constructor(private service: Service1Service,private router: Router) { }
  public data: any;
  public datatrash: any;
  public name: any;
  public emailid: any;
  public notetexttrash: any;
  public phonenum: any;
  public status: any;
  public textdelete: any;
  public   isLoggedIn: boolean = false;
  public   istrashIn: boolean = false;
 
ngOnInit(): void {
    this.GetItems();
    this.GetItemsFromTrash();

  } public a:any='';
  EditNotesListt(item:any){
    this.a=item;
    console.log(this.a.id);
    this.router.navigate(['/add',this.a.id]);
    
  }
  
//  EditNotesListt(item:any){
//   this.name=item.name
//   this.phonenum=item.phonenum
//   this.emailid=this.emailid
//   this.isLoggedIn = true;
//   this.ids=item.id
//   this.a=item; 
//   this.routert.navigate(['/add',item]);
// }

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
  }
  AddNoteToTrash(item: any) {
    let list = {
      // notetexttrash: this.notetexttrash
      name: item.name,
      phonenum: item.phonenum,
      emailid: item.emailid
    }
    this.service.addtotrash(list).subscribe(data => {
      this.GetItems();
      this.GetItemsFromTrash();
      this.GetItems();
      console.log('added to trash');
    })
  }
  delDataAftteraddingTrash(item: any) {
    this.service.deletedatanotes(item.id).subscribe(data => {
      this.GetItems();
      this.GetItemsFromTrash();
      this.GetItems();
      console.log('deleted after adding');
    })
  }
 
}
