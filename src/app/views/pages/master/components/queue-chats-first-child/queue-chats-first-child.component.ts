import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-queue-chats-first-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './queue-chats-first-child.component.html',
  styleUrl: './queue-chats-first-child.component.scss'
})
export class QueueChatsFirstChildComponent {
  user:{ userName: string, date:Date }[] = new Array(10).fill({userName:'Ajit kumar pal',date:new Date()})

}
