import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    $('.carousel').carousel();
  }

}
