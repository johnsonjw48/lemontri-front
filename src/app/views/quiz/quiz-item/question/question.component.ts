import {
  Component,
  ElementRef, EventEmitter,
  Input,
  OnChanges, Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnChanges {

  @Input() question: any;
  @Output() checkAnswerEvent = new EventEmitter<boolean>();

  type: string;
  statement: string;
  correctAnswer: string;
  explanation: string;
  choiceList: [] = [];
  selectedValue: any;

  result: any = {
    question: null,
    correctAnswer: null,
    userAnswer: null,
    isUserWasRight: null
  }

  isUserWasRight: boolean;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question'].currentValue) {
      this.setContent();
    }
  }

  onChoiceSelection(value: any) {
    this.selectedValue = value;
    this.checkAnswer();

    this.result.userAnswer = this.selectedValue;
  }

  setChoiceList() {
    switch (this.type) {
      case 'question-types.true-false' :
        this.choiceList.push(<never>this.question.attributes.type[0].a);
        this.choiceList.push(<never>this.question.attributes.type[0].b);
        break;
      case 'question-types.multiple-choice' :
      case 'question-types.multiple-answer' :
        this.choiceList.push(<never>this.question.attributes.type[0].a);
        this.choiceList.push(<never>this.question.attributes.type[0].b);
        this.choiceList.push(<never>this.question.attributes.type[0].c);
        this.choiceList.push(<never>this.question.attributes.type[0].d);
        break;
      default:
        console.log("error");
    }
  }

  setContent() {
    this.statement = this.question?.attributes.type[0].text;
    this.correctAnswer = this.question?.attributes.type[0].answer;
    this.type = this.question?.attributes.type[0].__component;
    this.explanation = this.question?.attributes.type[0].explanation;
    this.setChoiceList();

    this.result.question = this.statement;
    this.result.correctAnswer = this.correctAnswer;
  }

  checkAnswer() {
    if (this.selectedValue === this.correctAnswer) {
      console.log("bonne réponse");
      this.isUserWasRight = true;
    } else {
      console.log("mauvaise réponse");
      this.isUserWasRight = false
    }
    this.disabledButton();

    this.checkAnswerEvent.emit(this.isUserWasRight);
  }

  @ViewChildren('choices') choices: QueryList<ElementRef>;

  //désactive les mauvaises réponses
  disabledButton() {
    this.choices.forEach(item => {
      if (item.nativeElement.innerText !== this.correctAnswer) {
        item.nativeElement.classList.add('wrong');
        item.nativeElement.disabled = true;
      } else {
        //highlight en vert la bonne réponse
        item.nativeElement.style.backgroundColor = "#069B3E";
        item.nativeElement.style.borderColor = "#069B3E";
        item.nativeElement.style.color = "#FFFFFF";
      }
    })
  }
}
