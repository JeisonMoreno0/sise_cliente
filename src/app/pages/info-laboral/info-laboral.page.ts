import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-laboral',
  templateUrl: './info-laboral.page.html',
  styleUrls: ['./info-laboral.page.scss'],
})
export class InfoLaboralPage implements OnInit {
  sectores;
  constructor() { 
    this.sectores = [
      "Sector agropecuarios",
      "Sector de servicios",
      "Sector industrial",
      "Sector de transporte",
      "Sector de comercio",
      "Sector financiero",
      "Sector de la construcción",
      "Sector minero y energético",
      "Sector solidario",
      "Sector de comunicaciones",
    ];


  }

  ngOnInit() {
  }

}
