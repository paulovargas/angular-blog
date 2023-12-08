import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string ="";
  @Input()
  cardTitle:string = "NOVO HOMEM DE FERRO EM 3D";
  @Input()
  cardDescription:string = "marvel anuncia um novo filme do homem de ferro, confira";
  @Input()
  Id:string = "";

  constructor(){}

  ngOnInit(): void {
  }

}
