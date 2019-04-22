import { Component, OnInit, HostBinding } from "@angular/core";
import { AngularFire, AuthProviders, AuthMethods } from "firebase";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { moveIn } from "../router.animations";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: []
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
