import { Component } from '@angular/core';

@Component({
  selector: 'hr-files-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">HR Functionality</span>
        <div>Search for Employee HR Records</div>
        <search-box></search-box>
      </div>
    </div>
  `
})
export class HrFilesSearchComponent { }
