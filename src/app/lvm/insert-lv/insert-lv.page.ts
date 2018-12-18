import { Component, OnInit } from '@angular/core';
import { NavController, BackButton } from '@ionic/angular';
import { LevelService } from '../../services/level.service'

@Component({
  selector: 'app-insert-lv',
  templateUrl: './insert-lv.page.html',
  styleUrls: ['./insert-lv.page.scss'],
})
export class InsertLvPage implements OnInit {

  data = {}
  constructor(
    private levelService: LevelService,
    private navCtrl: NavController
    
    ) { }

  ngOnInit() {
    
  }


  
  back(){
    this.navCtrl.navigateBack('lvm');
  }

  form_post(){
    console.log(this.data)
    this.levelService.insert(this.data["lv_name_th"],this.data["lv_name_eng"],1)
   // setTimeout(() => { this.ionViewWillEnter() }, 3000)
    this.navCtrl.navigateForward('lvm');
  }
}
