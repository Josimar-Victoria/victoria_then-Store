import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./components/contact/contact.component";
import { ContactRouterModule } from "./contact-routing.module";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ContactRouterModule
    ]
})
export class ContactModule{}