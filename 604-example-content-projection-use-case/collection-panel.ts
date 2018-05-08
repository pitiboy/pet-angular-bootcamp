import { Component, Directive } from '@angular/core';

@Component({
  selector: 'collection-panel',
  templateUrl: './collection-panel.html'
})
export class CollectionPanelComponent { }

@Directive({
  // These are the base selector tags that can be used without incorporating a different Schema.
  // tslint:disable-next-line:directive-selector
  selector: 'header, content, footer'
})
export class CollectionPanelComponentTagsDirective { }
