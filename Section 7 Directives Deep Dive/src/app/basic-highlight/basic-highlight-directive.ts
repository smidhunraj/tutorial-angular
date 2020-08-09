import { Directive, ElementRef,OnInit } from "@angular/core";
import { HighlightDelayBarrier } from "blocking-proxy/built/lib/highlight_delay_barrier";

@Directive({
    selector:'[appBasicHighLight]'
})
export class BasicHighlightDirective implements OnInit{
    constructor(private  elementRef:ElementRef){

    }
    ngOnInit(){
   this.elementRef.nativeElement.style.backgroundColor="red";
    }

}