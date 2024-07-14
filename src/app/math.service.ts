// src/app/math.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() { }

  generateQuestion(operation: string): { num1: number, num2: number, operator: string } {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let operator = '+';

    switch (operation) {
      case 'addition':
        operator = '+';
        break;
      case 'subtraction':
        operator = '-';
        // Assure que num1 est toujours plus grand ou égal à num2
        if (num1 < num2) {
          let temp = num1;
          num1 = num2;
          num2 = temp;
        }
        break;
      case 'multiplication':
        operator = '*';
        break;
      case 'division':
        operator = '/';
        // Assure que la division est toujours entière et que num2 n'est pas zéro
        num1 = num1 * num2;  // Ajuste num1 pour qu'il soit toujours un multiple de num2
        if (num2 === 0) num2 = 1;  // Évite la division par zéro
        break;
    }

    return { num1, num2, operator };
  }

  checkAnswer(num1: number, num2: number, operator: string, answer: number): boolean {
    let correctAnswer: number = 0;

    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      case '/':
        correctAnswer = num2 !== 0 ? num1 / num2 : 0;
        break;
    }

    return correctAnswer === answer;
  }
}
