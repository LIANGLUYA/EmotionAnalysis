import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { EmotionService } from '../services/emotion.service';

@Component({
  selector: 'app-reflect-form',
  templateUrl: './reflect-form.component.html',
  styleUrl: './reflect-form.component.css',
  animations: [
    trigger('blockTransition', [
      state('clear', style({ filter: 'blur(0)' })),
      state('blur', style({ filter: 'blur(5px)' })),
      transition('blur <=> clear', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class ReflectFormComponent {
  formData: any = {};

  // Initialize allQuestionsAnswered as false
  allQuestionsAnswered = false;

  // Update this function based on your actual logic
  checkIfAllQuestionsAnswered() {
    console.log('Checking questions...');
    // Example: Check if all 5 inputs are not empty
    this.allQuestionsAnswered = !!(
      this.formData.Visualization &&
      this.formData.Challenges &&
      this.formData.ImprovementWays &&
      this.formData.PositivePlan &&
      this.formData.Action
    );
  }

  constructor(private router: Router, private emotionService: EmotionService) {}

  goToReflectHistory() {
    this.router.navigate(['reflect-history']);
  }

  submit() {
    // const formData = {
    //   GroupMembers: 'GroupMembers',
    //   Visualization: 'Visualization',
    //   Challenges: 'Challenges',
    //   ImprovementWays: 'ImprovementWays',
    //   PositivePlan: 'PositivePlan',
    //   Action: 'Action',
    // };
    console.log(this.formData);
    this.emotionService.addReg(this.formData).subscribe((EmoReadWrite) => {
      console.log(EmoReadWrite);
    });
  }

  onSubmitClick() {
    // Call both functions
    this.goToReflectHistory();
    this.submit();
  }
}
