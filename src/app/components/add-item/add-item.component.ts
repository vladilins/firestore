import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/service/item.service";
import { Item } from "src/app/models/item";
import { Toast, ToasterService } from "angular2-toaster";

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
  constructor(
    private itemService: ItemService,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {}

  onSubmit() {
    const toast: Toast = {
      type: "success",
      body: "Employee details saved successfully.",
      showCloseButton: true
    };
    this.toasterService.pop(toast);
    if (this.item.title != "" && this.item.description != "") {
      this.itemService.addItem(this.item);
      this.item.title = "";
      this.item.description = "";
    }
  }
}
