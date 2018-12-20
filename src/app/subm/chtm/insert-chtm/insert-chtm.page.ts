import { Component, OnInit } from '@angular/core';
import { NavController, BackButton } from '@ionic/angular';
import { ChapterService } from '../../../services/chapter.service'

@Component({
  selector: 'app-insert-chtm',
  templateUrl: './insert-chtm.page.html',
  styleUrls: ['./insert-chtm.page.scss'],
})
export class InsertChtmPage implements OnInit {

  data = {}
  constructor(
    private navCtrl: NavController,
    private chapterService: ChapterService
  ) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('chtm/:id');
  }
  form_post(){
    console.log(this.data)
    this.chapterService.insert(this.data["cht_name"],1)
   // setTimeout(() => { this.ionViewWillEnter() }, 3000)
    this.navCtrl.navigateForward('chtm/:id');
  }

}
