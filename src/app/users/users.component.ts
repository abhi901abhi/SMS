import { Component, OnInit } from '@angular/core';

import { Hero } from '../services/MockServices/Heroes/hero';
import { HeroService } from '../services/MockServices/Heroes/hero.service';

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

	constructor(private heroService: HeroService) {
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
	getHeroes(): void {
		debugger;
		this.heroService
			.getHeroes()
			.then(heroes => this.heroes = heroes);
	}
	ngOnInit() {
		this.getHeroes();
	}

}



