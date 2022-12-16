import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizComponent} from "./quiz.component";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizItemComponent} from "./quiz-item/quiz-item.component";
import { ProgressBarComponent } from './quiz-item/progress-bar/progress-bar.component';
import {QuestionComponent} from "./quiz-item/question/question.component";


const routes: Routes = [
  {
    path: '',
    component: QuizListComponent,
  },
  {
    path: ':id',
    component: QuizItemComponent
  }

]

@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent,
    QuizListComponent,
    QuizItemComponent,
    ProgressBarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class QuizModule {}
