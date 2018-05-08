import { Component, Input, Output, EventEmitter } from '@angular/core';

/*

  Notice that the component becomes a pass through...
  Q: So why not just remove the component?
  A: Why use multiple components at all?

*/
@Component({
  selector: 'position-list',
  templateUrl: './position-list.component.html'
})
export class PositionListComponent {
  @Input() curPositions: string[];
  @Input() newPositions: string[];
  @Output() ackPosition = new EventEmitter<string>();

  ackPos(position: string) {
    this.ackPosition.emit(position);
  }
}
