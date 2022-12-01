import { Component } from '@angular/core';
import { Item } from 'interfaces';

@Component({
  selector: 'feed-app',
  templateUrl: './feed.component.html',
})
export class FeedAppComponent {
  items: Item[] = [
    {
      title: 'first item',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      title: 'second item',
      image: 'https://via.placeholder.com/350x150',
    },
    {
      title: 'third item',
      image: 'https://via.placeholder.com/350x150',
    },
  ];
}
