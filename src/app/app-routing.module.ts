import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./views/home/home.component";

import {ScannerComponent} from "./components/scanner/scanner.component";


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'scan', component: ScannerComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]

})
export class AppRoutingModule { }
