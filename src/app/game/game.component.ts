import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MathService } from '../math.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  currentQuestion: { num1: number; num2: number; operator: string } = { num1: 0, num2: 0, operator: '+' };
  userAnswer: number = 0;
  correctCount = 0;
  operation: string = 'addition';
  isAnswered = false;
  isCorrect = false;
  feedbackMessage: string = '';
  
  constructor(
    private mathService: MathService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.operation = params['operation'] || this.operation;
      this.nextQuestion();
    });
  }

  nextQuestion() {
    this.currentQuestion = this.mathService.generateQuestion(this.operation);
    this.userAnswer = 0;
    this.isAnswered = false;
    this.isCorrect = false;
    this.feedbackMessage = '';
  }

  submitAnswer() {
    this.isAnswered = true;
    this.isCorrect = this.mathService.checkAnswer(this.currentQuestion.num1, this.currentQuestion.num2, this.currentQuestion.operator, this.userAnswer);
    if (this.isCorrect) {
      this.correctCount++;
      this.feedbackMessage = 'Correct! Bon travail!';
      this.playSound('assets/BRAVO.mp3');
      if (this.correctCount >= 10) {
        this.router.navigate(['/reward']);
        this.correctCount = 0;
      }
    } else {
      this.feedbackMessage = 'Oops! Essaye encore.';
      this.playSound('assets/OHOHOH.mp3');
    }
  }

  playSound(soundUrl: string) {
    const audio = new Audio(soundUrl);
    audio.play();
  }
}
