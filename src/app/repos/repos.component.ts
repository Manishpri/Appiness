import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  userrepos :any=[]
  name:string;
  constructor(private userservice : UserService) { }

  ngOnInit() {
    this.userservice.getUserRepos().subscribe(res=>{
       this.userrepos = res
      console.log('repos',res)
    })
  }
  search(){
    this.userrepos =this.userrepos.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
    })
  }
}
