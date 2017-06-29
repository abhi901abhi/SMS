import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BasicValidators } from '../../shared/basic-validators';
import { Hero } from '../../services/MockServices/Heroes/hero';
import { HeroService } from '../../services/MockServices/Heroes/hero.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
    providers: [HeroService]
})
export class UserFormComponent implements OnInit {
    form: FormGroup;
    title: string;
    user: Hero = new Hero();
    constructor(formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private HeroService: HeroService,
        private toastrService: ToastrService
    ) {
        this.form = formBuilder.group({
            id: ['', [
                Validators.required,
                Validators.minLength(2)
            ]],
            name: ['', [
                Validators.required,
                Validators.minLength(3)
                //BasicValidators.email
                //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]]
            // phone: [],
            // address: formBuilder.group({
            //     street: ['', Validators.minLength(3)],
            //     suite: [],
            //     city: ['', Validators.maxLength(30)],
            //     zipcode: ['', Validators.pattern('^([0-9]){5}([-])([0-9]){4}$')]
            // })
        });

    } //constructor  

    ngOnInit() {

        var id = this.route.params.subscribe(params => {
            var id = params['id'];

            this.title = id ? 'Edit User' : 'New User';

            if (!id) {
                return;
            }


            this.HeroService.getHero(id)
                .then(
                Hero => this.user = Hero,
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    } // ngOnInit

    create() {
        var result,
            userValue = this.form.value;

        if (userValue.id) {
            result = this.HeroService.update(userValue.name);
        } else {
            result = this.HeroService.create(userValue.name);
            this.toastrService.success('Created', 'User Created Successfully');
        }
        result.then(data => this.router.navigate(['users']));
    }

}



