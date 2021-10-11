import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  // {path:'**',component:NotfoundComponent},
  {path:'', component:DashboardComponent},
  { path:'add/:id', component:AddComponent},
  { path:'delete', component:DeleteComponent},
  // { path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//  { path: 'movie', component: SearchmovieComponent },
//   { path: 'result/:id', component: ResultComponent },
//   { path: '**', component: NotfoundComponent }
