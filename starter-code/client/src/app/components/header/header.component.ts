import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../../styles/styles.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Output() views: EventEmitter<any> = new EventEmitter();
  selectView(viewAttr: string) {
    this.views.emit(viewAttr);
  }

}
