import { Component } from '@angular/core';

export interface IAnnouncement {
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './news.html'
})
export class NewsComponent {
  announcements: IAnnouncement[] = [];
  descriptions: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales velit leo, id vestibulum risus maximus eget.',
    'Ut arcu eros, blandit ac sem vel, tincidunt efficitur risus. Curabitur tempor sapien massa, in bibendum mauris.',
    'Duis congue velit a nibh auctor hendrerit. In sollicitudin pulvinar magna ut vulputate. Duis semper, est maximus.'
  ];

  constructor() {
    for (let x = 0; x < 6; x++) {
      this.announcements.push({
        title: 'Announcement: ' + (x + 1),
        image: './stock-photos/image' + ((x % 2) + 1) + '.jpg',
        description: this.descriptions[x % 3]
      });
    }
  }
}
