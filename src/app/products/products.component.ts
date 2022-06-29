import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
products: Array<any> = [
  {
    name: "POCO C31 (Royal Blue, 64 GB) ",
   imgSrc: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
   price: 12000,
   specifications: ['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',' 16.59 cm (6.53 inch) HD+ Display',' 13MP + 2MP + 2MP | 5MP Front Camera',
  '5000 mAh Lithium-ion Polymer Battery','MediaTek Helio G35 Processor','1 Year Warranty for Handset, 6 Months for '],
  avgRating: 4.4,
  rating: 75822,
  review: 4396,
  inStock: false
},

 {
  name: " Infinix HOT 12 Play (Horizon Blue, 64 GB) ",
  imgSrc: "https://rukminim1.flixcart.com/image/312/312/l3dcl8w0/mobile/j/o/x/-original-imagehxy5hzshkdv.jpeg?q=70",
  price: 8999 ,
  specifications:['Infinix HOT 12 Play (Horizon Blue, 64 GB)','4 GB RAM | 64 GB ROM | Expandable Upto 256 GB','17.32 cm (6.82 inch) HD+ Display','13MP + Depth Lens | 8MP Front Camera','6000 mAh Li-ion Polymer Battery','Unisoc T610 Processor','1 Year on Handset And 6 Months on Accessories'],
 avgRating: '4.315,750',
 rating: ' & 1,280',
 review: 4396,
 inStock: true
 },
 {
  name: "POCO C30 (Royal Blue, 64 GB) ",
 imgSrc: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
 price: 15500,
 specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB',' 16.59 cm (6.53 inch) HD+ Display',' 13MP + 2MP + 2MP | 5MP Front Camera','5000 mAh Lithium-ion Polymer Battery','MediaTek Helio G35 Processor','1 Year Warranty for Handset, 6 Months for '],
avgRating: 4.4,
rating: '75,822',
review: 4396,
inStock:true
}
]
  constructor() { }

  ngOnInit(): void {
  }
  getColor(name: string){
  if(name.includes('POCO C31'))
  {
  return 'red';
    }else if(name.includes('Infinix'))
    {
    return 'violet';
    }else (name.includes('POCO C30'))
    {
      return 'green';
    }
  }
}
