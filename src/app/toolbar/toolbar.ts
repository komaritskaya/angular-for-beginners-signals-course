import { Component } from '@angular/core';
import { AngularLogo } from '../shared/angular-logo/angular-logo';
import { HelloWorld } from '../hello-world/hello-world';

@Component({
  selector: 'toolbar',
  imports: [AngularLogo, HelloWorld],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {

}
