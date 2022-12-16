import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./views/home/home.component";

import {ScannerComponent} from "./components/scanner/scanner.component";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'quiz',
    loadChildren: () => import('./views/quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'scan',
    component: ScannerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
