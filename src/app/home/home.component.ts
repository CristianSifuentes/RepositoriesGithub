import {MatGridListModule} from '@angular/material/grid-list';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatGridListModule, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent {

}
