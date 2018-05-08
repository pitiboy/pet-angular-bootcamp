import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './weatherScreen.html'
})
export class WeatherScreenComponent {
  cities: string[] = ['sanfrancisco', 'austin', 'boston'];
}
