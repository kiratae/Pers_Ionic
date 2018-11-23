import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.page.html',
  styleUrls: ['./question-management.page.scss'],
})
export class QuestionManagementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  edit(item: any) {
    console.log(item)
    //item2.closeSlidingItems()
  }

}
