import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [{
    nameFood: "Salmon - Canned",
    price: "$91.56",
    info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    review: [
      {
        name: "Denis",
        text: "Some review text"
      }
    ]
  },
  {
    nameFood: "Soup - Beef, Base Mix",
    price: "$126.14",
    info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    review: [
      {
        name: "Ivan",
        text: "Some review text Some review text Some review text Some review text"
      },
      {
        name: "Maks",
        text: "Some review text Some review text Some review text Some review text"
      },

    ]
  },
  {
    nameFood: "Veal steak",
    price: "$74.56",
    info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    review: [

    ]
  },
  {
    nameFood: "Mushrooms with potatoes",
    price: "$46.14",
    info: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    review: [
      {
        name: "Katy",
        text: "Some review text Some review text Some review text Some review text"
      },
      {
        name: "Ivan",
        text: "Some review text Some review text Some review text Some review text"
      }
    ]
  }];

  constructor() { }

  ngOnInit() {
  }

  deleteItem(item) {
    this.items = this.items.filter(el => el !== item);
  }

}
