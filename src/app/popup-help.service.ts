import { Injectable } from '@angular/core';

@Injectable()
export class PopupHelpService {
  // controls if popupview is to be displayed
  public show:Boolean = true;

  // content of popup to be displayed
  public title:String = "Pop title";
  public content:String = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nostrum cumque dolorum corporis repellendus natus nulla recusandae exercitationem accusamus fugiat aspernatur similique, mollitia, deserunt error vero laudantium nihil! Perferendis, vero!";

  constructor() { }

  // executed when the popup ok button is pressed
  okBtnPress() {
    // closes the popup
    this.show = false;
  }

}
