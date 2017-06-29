import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var require: any;
var initDemo = require('../assets/js/charts.js');
//import * as initDemo from "../../assets/js/charts.js";
//import * from '../../assets/js/charts.js';
//import * as initDemo from '../assets/js/charts.js';
//import initDemo = require('../assets/js/charts.js');
// import * as initDemo:any from  '../assets/js/charts.js';

declare var $: any;


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'Vega!';
//
//   constructor() {
// // initDemo();
//
//     }
// }

export class AppComponent implements OnInit {
    location: Location;
    constructor(location: Location) {
        this.location = location;
        initDemo();

    }
    ngOnInit() {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
    public isMaps(path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    }
}
