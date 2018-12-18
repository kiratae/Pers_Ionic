import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-qt',
  templateUrl: './update-qt.page.html',
  styleUrls: ['./update-qt.page.scss'],
})
export class UpdateQtPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ionViewDidEnter(){
    let qt_id = this.route.snapshot.paramMap.get('id')
    console.log(qt_id)
  }

  ngOnInit() {
  }

}
