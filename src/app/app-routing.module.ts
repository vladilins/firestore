import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemsComponent } from "./components/items/items.component";
import { AuthGuard } from "./guard/auth.guard";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";

const routes: Routes = [
  { path: "items", component: ItemsComponent, canActivate: [AuthGuard] },
  { path: "login", component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
