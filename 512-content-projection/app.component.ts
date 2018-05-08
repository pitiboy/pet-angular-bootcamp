import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <content-wrapper>
      <p>
        This is a p tag. Its only job is to be
        transcluded into the wrapper directive.
      </p>
    </content-wrapper>

    <content-wrapper>
      Here's another block of transcluded text.
    </content-wrapper>
  `
})
export class AppComponent { }
