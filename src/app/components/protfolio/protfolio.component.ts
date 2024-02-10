import { Component } from '@angular/core';
import { PortImgs } from 'src/app/port-imgs';


@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.css']
})
export class ProtfolioComponent {

  imagesPort:PortImgs[]=[
    {imgSrc:'./assets//images/port1.png',imgAlt:'port1'},
    {imgSrc:'./assets/images/port2.png',imgAlt:'port1'},
    {imgSrc:'./assets/images/port3.png',imgAlt:'port1'},
    {imgSrc:'./assets/images/port1.png',imgAlt:'port1'},
    {imgSrc:'./assets/images/port2.png',imgAlt:'port1'},
    {imgSrc:'./assets/images/port3.png',imgAlt:'port1'}


  ]

  imgSelected:string='';
  showImg(i:number){

    this.imgSelected=this.imagesPort[i].imgSrc;
    

  }
}
