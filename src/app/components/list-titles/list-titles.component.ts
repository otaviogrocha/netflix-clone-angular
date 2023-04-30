import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.css']
})
export class ListTitlesComponent {

  @Input() title: string = '';
  @Input() list: any[] = [];

  constructor(){}

  ngOnInit(){

  }

}
