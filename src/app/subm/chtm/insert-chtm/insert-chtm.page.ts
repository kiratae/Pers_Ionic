import { Component, OnInit } from '@angular/core';
import { NavController, BackButton } from '@ionic/angular';
import { ChapterService } from '../../../services/chapter.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insert-chtm',
  templateUrl: './insert-chtm.page.html',
  styleUrls: ['./insert-chtm.page.scss'],
})
export class InsertChtmPage implements OnInit {

  private sub_id;

  data = {}
  constructor(
    private navCtrl: NavController,
    private chapterService: ChapterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub_id = this.route.snapshot.paramMap.get('id')
  }

  back(){
    this.navCtrl.navigateBack('chtm/:id');
  }
  form_post(sub_id){
    console.log(this.data)
    this.chapterService.insert(1,1,this.data["cht_name"],1,sub_id)
   // setTimeout(() => { this.ionViewWillEnter() }, 3000)
    this.navCtrl.navigateForward('chtm/'+sub_id);
  }

}
