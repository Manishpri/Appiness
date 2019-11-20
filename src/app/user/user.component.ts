import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users :any =[]
  login:string;
  constructor( private userservice : UserService, private router:Router) { }

  ngOnInit() {
    this.userservice.getUserData().subscribe(res=>{
      console.log('users',res)
      this.users = res
    })
  }
  

  userrepos(user){
    let repos_url = user.repos_url
    console.log(repos_url)
    localStorage.setItem('userurl',repos_url)
    // console.log(user)
    this.router.navigate(['/repos'])


  }
}
