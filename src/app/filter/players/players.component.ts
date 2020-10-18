import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players:any;
  fruits: any = [{'name':'aus',
                'team':" yellow",
                'run':'50'}];
  searchName:string="";
  constructor() { }

  ngOnInit(): void {
    this.players = [['Apple', 'Orange', 'Banana'],['Apple', 'Orange', 'Banana']];
  }
 

}
