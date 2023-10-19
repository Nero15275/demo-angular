import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  @Input() allProduct: any = ""
  constructor() { }

  ngOnInit(): void {
  }

}
