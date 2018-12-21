import { Component, OnInit } from '@angular/core';
import { ItemSliding, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SubchapterService } from '../../../../services/subchapter.service'

interface Meta {
  table: string
  type: string
  total: number
  total_entries: number
}

interface subchapter {
  scht_id: number
  scht_cht_id: number
  scht_sequence: string
  scht_name: string
  scht_status: number
}

@Component({
  selector: 'app-schtm-insert',
  templateUrl: './schtm-insert.page.html',
  styleUrls: ['./schtm-insert.page.scss'],
})
export class SchtmInsertPage implements OnInit {

  private subchapterLists: subchapter[];
  private subchapter:subchapter;
  private meta: Meta;
  private sub_id;
  private scht_id;
  private data={};


  constructor(
    private navCtrl: NavController,
    private subchapterService: SubchapterService,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.scht_id = this.route.snapshot.paramMap.get('id')
    this.sub_id = this.route.snapshot.paramMap.get('sub_id')
    
  }

  save(){
    let scht_name = this.data['scht_name']
    console.log(scht_name);
    this.subchapterService.insert(this.scht_id, 1, scht_name,1).subscribe((res: any) => {
      this.navCtrl.navigateBack(`schtm/${this.scht_id}/${this.sub_id}`);
    })
  }

  back(){
    this.navCtrl.navigateBack('schtm/'+this.scht_id+'/'+this.sub_id);
  }

}