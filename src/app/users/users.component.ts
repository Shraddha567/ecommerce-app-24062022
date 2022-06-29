import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<any> =[
    {
      id: 1,
      name: 'Shraddha',
      email: 'Shraddha@gmail.com',
      city: 'Indore'
    },
    {
      id: 2,
      name: 'Dinesh',
      email: 'Dinesh@gmail.com',
      city: 'Hyderabad'
    },
    {
      id: 3,
      name: 'Karthik',
      email: 'Karthik@gmail.com',
      city: 'Bhopal'
    },
    {
      id: 4,
      name: 'Akash',
      email: 'Akash@gmail.com',
      city: 'Banglore'
    },
    {
     id: 5,
     name: 'Ram',
     email: 'Ram@gmail.com',
     city: 'Banglore'
    },
    {
      id: 6,
      name: 'Manoj',
      email: 'Manoj@gmail.com',
      city: 'Delhi'
    }
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
