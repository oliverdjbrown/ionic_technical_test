import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {list, people, send, checkmarkCircleOutline, alertCircleOutline} from 'ionicons/icons'
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({list, people, send, checkmarkCircleOutline, alertCircleOutline})
  }
}
