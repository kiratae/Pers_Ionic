import { Component, OnInit} from '@angular/core';
import { ItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.page.html',
  styleUrls: ['./question-management.page.scss'],
})
export class QuestionManagementPage implements OnInit {

  private items: string[]

  constructor() { }

  ngOnInit() {
    this.items = ['item1', 'item2']
  }

  edit(item: any, slidingItem: ItemSliding) {
    console.log(item)
    slidingItem.close();
    //item2.closeSlidingItems()
  }

}
