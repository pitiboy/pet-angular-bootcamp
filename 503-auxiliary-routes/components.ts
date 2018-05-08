import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Components used in the main outlet

@Component({
  template: `
    <h2>Welcome Home</h2>
    <p>This is a simple example component.</p>
  `
})
export class HomeComponent { }

@Component({
  template: `
    <h2>Hello {{name | async}}!</h2>
    <p>I am a sample component.</p>
  `
})
export class NameComponent {
  name: Observable<string>;

  constructor(route: ActivatedRoute) {
    this.name = route.params.pipe(map(params => params['name']));
  }
}

@Component({
  template: `
    <div style="border: 3px solid blue; padding: 3px; margin: 3px">
      <h2>I am a blue box</h2>
    </div>
  `
})
export class BlueBoxComponent { }

// Components used in the side outlet

@Component({
  template: `
    <div style="border: 3px solid green; padding: 3px; margin: 3px">
      <h5>This is chat</h5>
    </div>
  `
})
export class ChatComponent { }

@Component({
  template: `
    <div style="border: 3px solid green; padding: 3px; margin: 3px">
      <h5>Here are some tasks</h5>
    </div>
  `
})
export class TaskComponent { }
