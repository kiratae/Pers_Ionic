import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insert-lv',
  templateUrl: './insert-lv.page.html',
  styleUrls: ['./insert-lv.page.scss'],
})
export class InsertLvPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    
  }

  back(){
    this.navCtrl.navigateBack('lvm');
  }
}
