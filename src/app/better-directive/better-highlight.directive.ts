import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
@Input() defaultcolor:string='transparent'
@Input() highlightcolor:string ='blue';
  constructor(private elRef:ElementRef, private rendere:Renderer2) { }

ngOnInit(){
 // this.rendere.setStyle(this.elRef.nativeElement,'background-color','blue');
 this.backgroundColor=this.defaultcolor;
}
@HostBinding('style.backgroundColor') backgroundColor:string;
@HostListener('mouseenter') mouseover(eventData:Event){
 // this.rendere.setStyle(this.elRef.nativeElement,'background-color','blue');
  this.backgroundColor=this.highlightcolor;
}
@HostListener('mouseleave') mouseleave(eventData:Event){
 // this.rendere.setStyle(this.elRef.nativeElement,'background-color','transparent');
  this.backgroundColor=this.defaultcolor;
}
}
