import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  user = [
    {
      username:"Shivani",
      password:"123",

    },
    {
      username:"Rahul",
      password:"345",
      
    },
    {
      username:"Blueconch",
      password:"678",
      
    }
  ]
  products = [
    {
      id:1,
      name: "Oneplus 6T",
      price:40000,
      quantity:500,
      img_url:"https://5.imimg.com/data5/XT/UJ/TH/SELLER-53726935/oneplus-6t-500x500.jpg"
    },
    {
      id:2,
      name: "Sofa Set",
      price:15000,
      quantity:1000,
      img_url:"https://img1.exportersindia.com/product_images/bc-full/2020/1/4852280/9-seater-sofa-set-1580216618-5274212.jpeg"
    },
    {
      id:3,
      name: "Water Purifier",
      price:7000,
      quantity:2000,
      img_url:"https://media.croma.com/image/upload/v1606107056/Croma%20Assets/Small%20Appliances/Water%20Purifier/Images/9004873220126.png"
    },
    {
      id:4,
      name: "Women's Dress",
      price:2500,
      quantity:500,
      img_url:"https://i.pinimg.com/originals/6d/b2/cf/6db2cfd78fae829ff7de7f20a9891fd0.png"
    },
    {
      id:5,
      name: "Hand Sanitizer",
      price:250,
      quantity:5000,
      img_url:"https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hb2/h2f/8858116554782/RECK_9300701445577-0-1200x1200.jpg?width=1280&height=1280"
    },
    {
      id:6,
      name: "Backpacks",
      price:1200,
      quantity:8000,
      img_url:"https://rukminim1.flixcart.com/image/714/857/jylvde80/backpack/t/p/r/pu-leather-backpack-school-bag-student-backpack-women-travel-bag-original-imafhq4js7qg7m6f.jpeg?q=50"
    },
    {
      id:7,
      name: "Iphone 12 pro",
      price:70000,
      quantity:300,
      img_url:"https://m.media-amazon.com/images/I/71umuN8XVeL.jpg"
    },
    {
      id:8,
      name: "Non stick Cookware",
      price:1500,
      quantity:1000,
      img_url:"https://sc04.alicdn.com/kf/Ubea5dfd1913048cda1b0b513b138ffedg.jpg"
    },
    {
      id:9,
      name: "Suitcase Luggage",
      price:3000,
      quantity:6000,
      img_url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-luggage-1554348191.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
    }
  ]
  constructor() { }
}
