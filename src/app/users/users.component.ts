import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	dataSource;
  constructor() {
	  this.dataSource = [
		  {
			  id: 1,
			  name: "Leanne Graham",
			  username: "Bret",
			  email: "Sincere@april.biz"
		  },
		  {
			  id: 2,
			  name: "Ervin Howell",
			  username: "Antonette",
			  email: "Shanna@melissa.tv"
		  },
		  {
			  id: 11,
			  name: "Nicholas DuBuque",
			  username: "Nicholas.Stanton",
			  email: "Rey.Padberg@rosamond.biz"
		  }, {
			  id: 1,
			  name: "Leanne Graham",
			  username: "Bret",
			  email: "Sincere@april.biz"
		  },
		  {
			  id: 2,
			  name: "Ervin Howell",
			  username: "Antonette",
			  email: "Shanna@melissa.tv"
		  },
		  {
			  id: 11,
			  name: "Nicholas DuBuque",
			  username: "Nicholas.Stanton",
			  email: "Rey.Padberg@rosamond.biz"
		  }
	  ];
	  for (let i = 0; i < 15; ++i) {	  	
		  this.dataSource = this.dataSource.concat(this.dataSource);
	  }

  }


  settings = {
	  pager: {
		  perPage:10
		}
	  ,columns: {
		  id: {
			  title: 'ID'
		  },
		  name: {
			  title: 'Full Name'
		  },
		  username: {
			  title: 'User Name'
		  },
		  email: {
			  title: 'Email'
		  },
		  id1: {
			  title: 'ID'
		  },
		  name1: {
			  title: 'Full Name'
		  },
		  username1: {
			  title: 'User Name'
		  },
		  email1: {
			  title: 'Email'
		  }
	  }
  };
 



  ngOnInit() {
  }

}



