import { Component } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  stringWithHtml: string;
  htmlProperty: SafeHtml;

  constructor(private _sanitizer: DomSanitizer) {
    this.stringWithHtml = `
      <button onClick="console.log('hello from old-school HTML/JS');">
        Press Me
      </button>
      <i>Hello from <b>HTML</b></i>
    `;
    this.htmlProperty = this._sanitizer.bypassSecurityTrustHtml(this.stringWithHtml);
  }
}
