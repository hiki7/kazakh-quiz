import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export class TopicsComponent implements OnInit {
  topics!: any[];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTopics().subscribe(topics => {
      this.topics = topics;
    });
  }

  goToQuestions(topicId: number): void {
    this.router.navigate(['/topics', topicId, 'questions']);
  }
}
