import * as $ from 'jquery';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jquery-test',
  templateUrl: './jquery-test.component.html',
  styleUrls: ['./jquery-test.component.css']
})
export class JqueryTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('button').on('click', function() {
      alert('GeeksForGeeks');
  });
  }

}
