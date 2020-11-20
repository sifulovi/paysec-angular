import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    lat: number = 52.358;
    lng: number = 4.916;

    constructor() {
    }

    ngOnInit(): void {
    }

}
