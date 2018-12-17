import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insert-subm',
  templateUrl: './insert-subm.page.html',
  styleUrls: ['./insert-subm.page.scss'],
})
export class InsertSubmPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('subm');
  }


}
