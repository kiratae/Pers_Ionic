import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Content } from '@ionic/angular';
import { ChoicesService } from 'src/app/services/choices.service';

interface Choice{
  text: string
  P: number
  r: number
}

@Component({
  selector: 'app-insert-cho-incorrect',
  templateUrl: './insert-cho-incorrect.page.html',
  styleUrls: ['./insert-cho-incorrect.page.scss'],
})
export class InsertChoIncorrectPage implements OnInit {

  @ViewChild(Content) contentArea: Content;
  
  private qt_id: any
  private choiceLists: Choice[] = [ { 'text':null, 'P':null, 'r':null } ]

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private choicesService: ChoicesService
  ) {}

  ionViewDidEnter(){
    this.qt_id = this.route.snapshot.paramMap.get('id')
    console.log(this.qt_id)
  }

  ngOnInit() {
  }

  add_row(){
    this.choiceLists.push({ 'text':null, 'P':null, 'r':null })
    this.contentArea.scrollToBottom()
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  back(){
    this.navCtrl.navigateBack('insert_cho_correct/'+this.qt_id);
  }

  save(){
    console.log(this.choiceLists)
    this.choiceLists.forEach(element => {
      this.choicesService.insert(element.text, 0, element.P ,element.r, this.qt_id).subscribe((res: any) => {
        console.log(res['cho_id'])
        this.navCtrl.navigateBack('qtm')
      }, error => console.log(error))
    });
  }

}
