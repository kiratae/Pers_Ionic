import { Component, OnInit } from '@angular/core';
import { NavController, BackButton } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-lv',
  templateUrl: './edit-lv.page.html',
  styleUrls: ['./edit-lv.page.scss'],
})
export class EditLvPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
    ) { }


    ionViewDidEnter(){
      let lv_id = this.route.snapshot.paramMap.get('id')
      console.log(lv_id)
    }
  ngOnInit() {
  }
  
  back(){
    this.navCtrl.navigateBack('lvm');
  }
}
