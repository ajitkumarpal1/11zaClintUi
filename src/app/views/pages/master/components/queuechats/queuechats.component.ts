import { Component,OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queuechats',
  templateUrl: './queuechats.component.html',
  styleUrl: './queuechats.component.scss'
})
export class QueuechatsComponent implements  AfterViewChecked {
  constructor(private router: Router) {}

  ngAfterViewChecked():void{
    console.log(this.router.url)
  }

  
}
