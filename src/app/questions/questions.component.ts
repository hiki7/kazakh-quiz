import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit {
  topicId!: number;
  questions!: any[];
  visibleAnswers: { [questionId: number]: boolean } = {};

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.topicId = params['topicId'];
      this.dataService.getQuestions(this.topicId).subscribe(questions => {
        this.questions = questions;
      });
    });
  }

  toggleAnswer(questionId: number): void {
    this.visibleAnswers[questionId] = !this.visibleAnswers[questionId];
  }

  isAnswerVisible(questionId: number): boolean {
    return this.visibleAnswers[questionId];
  }

}
