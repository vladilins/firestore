import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/service/item.service";
import { Item } from "src/app/models/item";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.scss"]
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: "",
    description: ""
  };
  constructor(private itemService: ItemService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.item.title != "" && this.item.description != "") {
      this.itemService.addItem(this.item);
      this.item.title = "";
      this.item.description = "";
    }
  }
}
