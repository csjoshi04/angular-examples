import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";
@Directive({
    selector:"[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit{

    @Input() defaultColor:string;
    // @Input() highlightColor: string;
    @Input("appBetterHighlight") highlightColor: string;

    @HostBinding('style.backgroundColor') backgroundColor:string = "transparent"

    constructor(private renderer: Renderer2, private elementRef: ElementRef){}

    ngOnInit(): void {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData : Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
        // this.backgroundColor = 'blue'
        this.backgroundColor = this.highlightColor;
    }


    @HostListener('mouseleave') mouseleave(eventData : Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
        // this.backgroundColor = 'transparent'
        this.backgroundColor = this.defaultColor;
    }
}