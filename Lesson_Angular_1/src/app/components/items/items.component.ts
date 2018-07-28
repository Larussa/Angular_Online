import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [{
    name: "Salmon - Canned",
    price: "$91.56",
    info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    reviews: [
      {
        name: "Denis",
        text: "Some review text"
      }
    ]
  },
  {
    name: "Soup - Beef, Base Mix",
    price: "$126.14",
    info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    reviews: [
      {
        name: "Ivan",
        text: "Some review text Some review text Some review text Some review text"
      },
      {
        name: "Maks",
        text: "Some review text Some review text Some review text Some review text"
      }
    ]
  }];
  showMe:any = {};

  constructor() { }

  ngOnInit() {
  }
  deleteItem(name:string) {
    this.items = this.items.filter(item => item.name !== name);
  }

}
