import { Component } from '@angular/core';
import { swalHelper } from '../../../../../core/constants/swal-helper';


interface AccordionSection {
  title: string;
  cards: string[];
  isOpen: boolean;
}

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss'
})

export class PermissionComponent {
  checkboxOptions = ["All", "View", "Insert/Update", "Delete", "Export"];
  accordian:AccordionSection[]=[
    {
      title:'Chat',
      isOpen: false,
      cards:["Quick Replies","Broadcasts","Interactive Messages","Auto Reply","Message Logs","Tags","Auto-Reply Groups","Queue Chats","Interactive Gruops","Opt-In Setting","Wallet","Chats","Label"],
    },
    {
      title:'Template',
      isOpen: false,
      cards:["Templates","Template Groups"]
    },
    {
      title:'File Uploader',
      isOpen: false,
      cards:["File Uploader","Media Sets"]
    },
    {
      title:'Team Member',
      isOpen: false,
      cards:["Teams","Role","Permissions","Team Members","Customers"]
    },
    {
      title:'Shipping Integration',
      isOpen: false,
      cards:["Shiprockets","iThinkLogistics","Ship Turtle","Ecom Express","Ship Day","Smart Ship"]
    },
    {
      title:'Ecommerce Integration',
      isOpen: false,
      cards:["Shopify AddOn","Products","Suppliers","Direct Order","Order","Woocommerce"]
    },
    {
      title:'Api Integration',
      isOpen: false,
      cards:["InboundWebhook","API Integration","Open Chat"]
    },
    {
      title:'ThirdParty Integration',
      isOpen: false,
      cards:["Meta Leadgen","Flexi Leads","Indiamart","Document Locker","Google Sheet","Meta Form Flow","Graphy","Calendly"]
    },
  ]
  
  toggleAccordion(index: number) {
    this.accordian[index].isOpen = !this.accordian[index].isOpen;
  }

  showAccordian:boolean=false
  onSelectPerson=(event:any)=>{
    const selectedPerson=event.target.value;
    this.showAccordian=true;
    if(!selectedPerson){
      swalHelper.warning('Nothing Selected');
      this.showAccordian=false
    }
  }
}
