import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'weather-panel',
  templateUrl: './weatherPanel.html'
})
export class WeatherPanelComponent implements OnInit {
  @Input() city: string;

  hourly: Observable<any[]>;
  currently: Observable<any>;

  constructor(private afDb: AngularFireDatabase) { }

  ngOnInit() {
    this.hourly = this.afDb.list(this.city + '/hourly/data',
      ref => ref.limitToLast(10)).valueChanges();

    this.currently = this.afDb.object(this.city + '/currently')
      .valueChanges();
  }
}
