import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() age: string;
  @Input() accountId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
