import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    lat: number = 52.358;
    lng: number = 4.916;

    constructor() {
    }

    ngOnInit(): void {
    }

}
