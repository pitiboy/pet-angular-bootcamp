import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PositionListService } from './position-list.service';

@Component({
  selector: 'position-list',
  templateUrl: './position-list.component.html'
})
export class PositionListComponent {
  curPositions: Observable<string[]>;
  newPositions: Observable<string[]>;

  constructor(private positionListService: PositionListService) {
    this.curPositions = positionListService.currentPositions;
    this.newPositions = positionListService.newPositions;
  }

  ackPos(position: string) {
    this.positionListService.ackPosition(position);
  }
}
