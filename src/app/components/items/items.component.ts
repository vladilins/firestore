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
  editState: boolean = false;
  itemToEdit: Item;
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      // console.log(items);
      this.items = items;
    });
  }

  deleteItem(event, item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  clearState() {
    this.editState = false;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }
}
