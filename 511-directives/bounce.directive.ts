import { Directive, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[bounce]'
})
export class BounceDirective implements OnInit, OnDestroy {
  @HostBinding('style.transform') transform: string;
  @Input() public speed: number = 25;

  private intervalId: number;
  private n = 0;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.n = this.n + 0.1;
      const rotation = Math.sin(this.n) * 5;
      this.transform = `rotate(${rotation}deg)`;
    }, this.speed);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

// As with Blink, this could be done at a greater abstraction
// from the browser interval settings.
