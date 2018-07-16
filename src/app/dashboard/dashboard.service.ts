import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getQuestions(): string[] {
    return ["First Name", "Last Name", "Email", "Birth Date"];
  }

  constructor() { }
}
