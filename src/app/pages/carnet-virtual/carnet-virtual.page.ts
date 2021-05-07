import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-carnet-virtual',
  templateUrl: './carnet-virtual.page.html',
  styleUrls: ['./carnet-virtual.page.scss'],
})
export class CarnetVirtualPage implements OnInit {
  scannedData:any;
  encodedData:'';
  encodeData:any;
  inputData:any;
  
  createdCode=null;
  scannedCode = null;
  elementType: 'url' |'canvas'|'img'='canvas';
  nombre="";
  cedula="";
  egresado="";
  espacio="    ";
  qrData= [this.nombre,this.espacio,  this.cedula, this.espacio, this.egresado];
  
  constructor(private barcodeScanner: BarcodeScanner) { }
  createCode () {
    this.createdCode = this.qrData;
    console.log(this.createdCode);
  }

  scanCode () {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }

  ngOnInit() {
  }
 
       
}









