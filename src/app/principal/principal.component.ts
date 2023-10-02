import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router'; //Redigir a otras vistas

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit{
  constructor(private router: Router){}
  fechaActual: Date = new Date(); // Inicializar con la fecha actual
  nombre='';
  ngOnInit(){
    // Actualiza la fecha cada día (cada 24 horas)
    interval(1000 * 60 * 60 * 24).subscribe(() => {
      this.fechaActual = new Date();
    });
    this.nombre='assets/tarjetaErik.svg';
  }

  enviarRolAgua(){
    this.router.navigate(['rolAgua']); //Regresa al inicio
  }

}
