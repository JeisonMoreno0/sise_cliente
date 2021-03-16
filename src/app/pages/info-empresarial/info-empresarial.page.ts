import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-empresarial',
  templateUrl: './info-empresarial.page.html',
  styleUrls: ['./info-empresarial.page.scss'],
})
export class InfoEmpresarialPage implements OnInit {
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
