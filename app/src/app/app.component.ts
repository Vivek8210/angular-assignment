import { Component } from '@angular/core';
import { faCoffee,faFileArrowDown,faRectangleXmark, faFilter, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  faCoffee = faCoffee;
  faFileArrowDown=faFileArrowDown;
  faRectangleXmark=faRectangleXmark;
  faFilter=faFilter;;
  faForwardStep=faForwardStep;
  faBackwardStep=faBackwardStep;
}
