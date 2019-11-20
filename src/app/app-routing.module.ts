import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component'
import { ReposComponent } from './repos/repos.component'


const routes: Routes = [
  {path:'',component:UserComponent,pathMatch: 'full'},
  {path : "userInfo",component:UserComponent},
  {path : "repos", component:ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
