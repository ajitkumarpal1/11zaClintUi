import { Component } from '@angular/core';

interface optedMessage{
  id:number,
  value:string
}
@Component({
  selector: 'app-opt-in-settings',
  templateUrl: './opt-in-settings.component.html',
  styleUrl: './opt-in-settings.component.scss'
})
export class OptInSettingsComponent {
    optedInMessage:optedMessage[]=[];
    nextInId=0;
    messageToOptin(){
      this.optedInMessage.push({id:this.nextInId++,value:''});
    }

    deleteoptedInMessage(index:number){
      console.log(index);
      this.optedInMessage.splice(index,1)
    }

    optedOutMessage:optedMessage[]=[];
    nextoutId=0;
    messageToOptOut(){
      this.optedOutMessage.push({id:this.nextoutId++,value:''});
    }

    deleteoptedOutMessage(index:number){
      console.log(index);
      this.optedOutMessage.splice(index,1)
    }
}
