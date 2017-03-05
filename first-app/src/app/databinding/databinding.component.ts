import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

	stringInterpolation = 'This is string interpolation!';
	numerInterpolation = 2001;

	onTest() {
		return false;
	}

	onClicked(value: string) {
       alert(value);
	}

}
