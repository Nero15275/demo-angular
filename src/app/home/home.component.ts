import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servics/product.service';
import { UserService } from '../servics/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProduct: any
  userData: any
  constructor(private productservice: ProductService, userservice: UserService) {
    userservice.userData.subscribe(uData => {
      this.userData = uData
    })
  }



  ngOnInit(): void {
    this.productservice.getProduct().subscribe((data: any) => {
      this.allProduct = data;
      console.log(data)
      console.log(this.userData);

    }, (err) => {
      console.log(err)
    })

  }

}
