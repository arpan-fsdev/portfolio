import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Projects', url: '/folder/Projects', icon: 'paper-plane' },
    { title: 'About', url: '/folder/About', icon: 'information-circle' },
    { title: 'Contact', url: '/folder/Contact', icon: 'mail' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
