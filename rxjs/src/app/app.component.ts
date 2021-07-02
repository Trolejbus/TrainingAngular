import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public faStar = faStar;
}
