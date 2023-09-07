import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit{
  fechaActual: Date = new Date(); // Inicializar con la fecha actual
  ngOnInit(){
    
    // Actualiza la fecha cada día (cada 24 horas)
    interval(1000 * 60 * 60 * 24).subscribe(() => {
      this.fechaActual = new Date();
    });
  }

}
