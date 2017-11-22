import { Component } from '@angular/core';
import { shortFade } from '../shared/animations/fade';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ shortFade ]
})
export class AboutComponent {
  title = 'DiscoverHS';
  constructor() { }

}
