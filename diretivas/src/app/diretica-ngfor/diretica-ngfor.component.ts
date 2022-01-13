import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretica-ngfor',
  templateUrl: './diretica-ngfor.component.html',
  styleUrls: ['./diretica-ngfor.component.css']
})
export class DireticaNgforComponent implements OnInit {

  cursos: string[] = ["Angular", "Java", "Phonegap"];

  constructor() { }

  ngOnInit(): void {
    
  }

}
