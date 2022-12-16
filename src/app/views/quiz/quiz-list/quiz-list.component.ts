import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, tap} from "rxjs";
import {StrapiService} from "../../../services/strapi.service";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit, OnDestroy {
  constructor(private strapiService: StrapiService) { }

  quizzesSubscription: Subscription | undefined;
  quizList: any[] = [];

  ngOnInit(): void {
    this.subscribeToQuizzes();
  }

  subscribeToQuizzes() {
    this.quizzesSubscription = this.strapiService.getQuizzes()
      .pipe(
        tap((data) => {
          //console.log(data)
          this.setQuizList(data);
        })
      ).subscribe()
  }

  setQuizList(data: any) {
    data.data.forEach((item: any) => {
      this.quizList.push(item);
    })
  }

  ngOnDestroy(): void {
    if (this.quizzesSubscription) this.quizzesSubscription.unsubscribe();
  }

}
