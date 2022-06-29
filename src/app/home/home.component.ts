import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
implements OnInit {
  banners: Array<any> =[
    {
        id: 1,
       imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_lJCeQ1jakgUIQGIv_m0KvIEoovLVIwXnS_kIyQj4ZBYuhQWAGDYVfrpQVSTs_K0_6o&usqp=CAU',
       alternateText: 'Banner 1' 
    },
    {
        id: 2,
        imgSrc: 'https://image.shutterstock.com/image-photo/omni-channel-technology-online-retail-600w-1564080871.jpg',
        alternateText: 'Banner 2'
    },
    {
        id: 3,
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguR88bEQbOV1Mk-4eWJ38ykjGVcPAA4AS3eC_ujmjK02rCxxrVAx_xUGyjU8nOLIHisI&usqp=CAU',
        alternateText:'Banner 3'
    }
];
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.banners[0].imgSrc); 
  }
getBannerInfo(bannerInfo: any){
console.log(bannerInfo);
}
}
