import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];
  
  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCusro(curso: string){
    if(curso !== ''){
      this.cursosService.addCurso(curso);
    }
  }

}
