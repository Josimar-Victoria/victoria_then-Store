import {NgModule} from "@angular/core";
import { HomeRouterModule } from "./home-router.module";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from "./components/home/home.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
      BannerComponent,
      HomeComponent
    ],
    imports: [
        SharedModule, 
        CommonModule,
        HomeRouterModule
    ]
})
export class HomeModule {

}