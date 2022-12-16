import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, tap} from "rxjs";
import {StrapiService} from "../../../services/strapi.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent implements OnInit, OnDestroy {
  constructor(
    private strapiService: StrapiService,
    private route: ActivatedRoute,
  ) { }

  routeSubscription: Subscription | undefined;
  quizSubscription: Subscription | undefined;
  quizId: number | undefined;
  questionList: any[] = [];
  currentStep: number = 1;
  form: FormGroup | undefined;

  history: {} = {};

  ngOnInit(): void {
    this.getQuizId();
    if (this.quizId) this.subscribeToSelectedQuiz(this.quizId);
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) this.routeSubscription.unsubscribe();
    if (this.quizSubscription) this.quizSubscription.unsubscribe();
  }

  getQuizId() {
    this.routeSubscription =
      this.route.url.subscribe(id => {
        //conversion du path en number
        let n = this.stringToNumber(id[0].path);
        this.quizId = n;
      })
  }

  stringToNumber(value: string): number {
    return Number(value);
  }

  subscribeToSelectedQuiz(quizId: number) {
    this.quizSubscription = this.strapiService.getQuiz(quizId)
      .pipe(
        tap((data) => {
          const array = data.data.attributes.questions.data;
          this.setQuiz(array);
        })
      ).subscribe()
  }

  setQuiz(data: any[]) {
    data.forEach((item: any) => {
      this.questionList.push(item);
    });

    this.initHistory();
  }

  incrementStep() {
    if (this.currentStep < this.questionList.length) {
      this.currentStep += 1;
    }
  }

  initHistory() {
    this.questionList.forEach((question, index) => {
      let key = `q${index + 1}`;

      //@ts-ignore
      this.history[key] = {
        id: question.id,
        type: question.attributes.type[0].__component,
        correctAnswer: question.attributes.type[0].answer,
        userAnswer: null,
        isUserWasRight: null
      }
    })
  }

  updateHistory() {

  }

  goToNextQuestion() {

  }
}
