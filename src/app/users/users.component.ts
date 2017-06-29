import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Hero } from '../services/MockServices/Heroes/hero';
import { HeroService } from '../services/MockServices/Heroes/hero.service';
import { ToastrService } from 'ngx-toastr';



@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css'],
	providers: [HeroService]
})
export class UsersComponent implements OnInit {

	dataSource;
	heroes: Hero[];
	selectedHero: Hero;
	rowSelectedClass: string;
	selectedRowIndex: Number;


	constructor(private router: Router,
		private heroService: HeroService,
		private toastrService: ToastrService) {
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
			}
		];
		//for (let i = 0; i < 15; ++i) {	  	
		//this.dataSource = this.dataSource.concat(this.dataSource);
		//}
	} //constructor

	settings = {
		pager: {
			perPage: 10
		}
		, columns: {
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
			}
		}
	};
	setClickedRow(hero, index) {
		this.selectedRowIndex = index;
		this.selectedHero = hero;

	}
	add() {
		debugger;
		this.router.navigate(['users/new']);
	}
	delete(item) {
		let id = item.id;
		this.deleteAHero(id);
	}
	getHeroes(): void {
		this.heroService
			.getHeroes()
			.then(heroes => this.heroes = heroes);
	}

	deleteAHero(id: number): void {
		this.heroService
			.delete(id)
			.then(function (response) {
				this.toastrService.success('Deleted', 'User Deleted Successfully');
				this.getHeroes();
			}.bind(this));
	}


	ngOnInit() {
		this.getHeroes();
	}

}



