import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrl: './reward.component.css'
})
export class RewardComponent {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/menu']); // Assure-toi que la route '/menu' est bien configurée dans ton AppRoutingModule
  }
}

