import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent {

  @Input() title: any;
  @ViewChild('trailer', { static: true }) trailer!: ElementRef<HTMLVideoElement> ;

  constructor() { }

  ngOnInit(){
  }

  playVideo(){
    this.trailer.nativeElement.play()
  }
  
  stopVideo(){
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause();
  }

  getMuted(): boolean{
    return this.trailer.nativeElement.muted;
  }

  toggleSound(){
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }

}