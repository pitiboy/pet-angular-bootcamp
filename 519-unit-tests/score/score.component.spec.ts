import { async as asynctest, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScoreComponent } from './score.component';

// Above we import with alias to work around Closure Compiler bug:
// https://github.com/google/closure-compiler/issues/2336
// You're probably not using Closure Compiler, so you can omit the "as asynctest"

// The boilerplace to unit test components, described in the documentation:
// https://angular.io/guide/testing#test-a-component-with-an-external-template

describe('ScoreComponent should', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(asynctest(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;

    // find the bit we expect to change
    de = fixture.debugElement.query(By.css('.value-display'));
    el = de.nativeElement;

    fixture.detectChanges();
  });

  it('should have been created', () => {
    expect(component).toBeTruthy();
  });

  it('should start with no score', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display score after first detection', () => {
    fixture.detectChanges();
    expect(el.textContent).toBe('');
  });

  it('should display a different score', () => {
    component.value = 50;
    fixture.detectChanges();
    expect(el.textContent).toContain('50');
  });
});

// All of this raises questions: why are we testing this? What are we
// testing? Should we expect Angular bindings to work, or should we
// test them?
