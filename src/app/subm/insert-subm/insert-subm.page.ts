import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SubjectsService } from '../../services/subjects.service'

@Component({
  selector: 'app-insert-subm',
  templateUrl: './insert-subm.page.html',
  styleUrls: ['./insert-subm.page.scss'],
})
export class InsertSubmPage implements OnInit {
  data = {}
  constructor(
    private navCtrl: NavController,
    private SubjectsService: SubjectsService
    ) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('subm');
  }

  form_post(){
    console.log(this.data)
    this.SubjectsService.insert(this.data["sub_code_th"],this.data["sub_code_en"],this.data["sub_name_th"],this.data["sub_name_en"],this.data["sub_objective"],1)
   // setTimeout(() => { this.ionViewWillEnter() }, 3000)
    this.navCtrl.navigateForward('subm');
  }

}
