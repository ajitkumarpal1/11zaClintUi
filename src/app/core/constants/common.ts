import { ViewChild } from '@angular/core';

class CommonConstant {
  appStorage: any;
  constructor() { }
  public TOKEN: string = 'v4SessionToken';
  public PERMISSION_SETS: string = 'v4PermissionSets';
  public USER_DATA: string = 'v4UserData';
  public SESID: string = 'v4SessionId';
  public PRINT_BILL: string = 'v4PrintBill';
  public PRINT_FLEET_ORDER_STICKER: string = 'v4FleetPrintSticker';
  public PRINT_FLEET_ORDER_BILL: string = 'v4FleetPrintBill';
  public VERIFICATION_TOKEN: string = 'v4VerificationToken';
  public DISTRIBUTOR_PRODUCT_PAGE_LAYOUT: string = 'distributorProductPageLayout';

  public playSound = () => {
    let sound = new Audio('assets/sounds/notify.mp3');
    sound.currentTime = 0;
    sound.play();
  };
}
export let common = new CommonConstant();
