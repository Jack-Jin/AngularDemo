import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() appHighlight = '';

    @HostListener('mouseenter') onMouseEnter() {
        this.hightLight(this.appHighlight);
    }
    
    @HostListener('mouseleave') onMouseLeave() {
        this.hightLight('');
    }

    constructor(private e1: ElementRef) {
        e1.nativeElement.style.backgroundColor = this.appHighlight;
    }

    private hightLight(color: string) {
        this.e1.nativeElement.style.backgroundColor = color;
    }
}
