import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { IFormAnswer } from "./form-answer";

@Component({
    selector:'app-dashboard',
    templateUrl: './app-dashboard.component.html',
    styleUrls: ['./app-dashboard.component.css'],
    providers: [DashboardService]
})

export class DashboardComponent implements OnInit{
    title: string = "Dashboard";
    questions: string[];
    answers: IFormAnswer[] = [];
    constructor(private dashboardService : DashboardService) {
     }

    ngOnInit() {
      this.questions = this.dashboardService.getQuestions();
    }

    onAnswerSubmitted(answer: IFormAnswer): void{
        this.answers.push(answer);
    }
}