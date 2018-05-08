import { Component } from '@angular/core';

@Component({
  selector: 'search-box',
  template: `
    <span>
      <input type="text" style="width: 25%" placeholder="Search">
      <i class="material-icons" style="position: relative;top: 7px;">search</i>
    </span>
  `
})
export class SearchBoxComponent { }
