import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidemenuComponent
  ],
  templateUrl: 'dashboard.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class DashboardComponent { }
