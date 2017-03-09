import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
	@HostListener('mouseenter') mouseover() {
        this.backgroundColor =  this.highlightColor;
	};
	@HostListener('mouseleave') mouseLeave() {
        this.backgroundColor = this.defaultColor;
	};
	@HostBinding('style.background-color') get setColor() {
		return this.backgroundColor;
	};
	@Input() defaultColor = 'white';
	@Input('dirHighlight') highlightColor = 'green';
	private backgroundColor: string;

	@HostListener('click', ['$event'])
	    onClick(event) {
	    	console.log("Event Target" + event.target);
	    }

  constructor() { 
      //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
    }

    ngOnInit() {
    	this.backgroundColor = this.defaultColor;
    }

}
