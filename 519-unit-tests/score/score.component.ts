import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-score',
  templateUrl: './score.component.html'
})
export class ScoreComponent {

  @Input() value: number;

}
