import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import * as _ from 'underscore';

@Component({
    selector: 'Home',
    templateUrl: './Home.html'
})

export class Home implements OnInit {

    today = moment().format('L');
    today_ = _.now();

    count: number;

    constructor() { }

    ngOnInit() {
    }

}