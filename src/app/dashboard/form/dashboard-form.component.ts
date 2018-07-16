import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IFormAnswer } from '../form-answer';


@Component({
  selector: 'dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.css'],

})
export class FormComponent implements OnInit {
  @Input() questions: string[];
  formAnswer: IFormAnswer = {answer:[]};
  
  @Output() answerSubmitted: EventEmitter<IFormAnswer> = new EventEmitter<IFormAnswer>();

  constructor() {
   }

  ngOnInit() {
  }

  onSubmit(): void {
    let submittedFormAnswer = <IFormAnswer>{answer: []};
    submittedFormAnswer.answer = this.formAnswer.answer.slice(0);
    this.answerSubmitted.emit(submittedFormAnswer);
    this.formAnswer.answer = [];
  }
}
