import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/service/item.service";
import { Item } from "src/app/models/item";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      // console.log(items);
      this.items = items;
    });
  }
}
