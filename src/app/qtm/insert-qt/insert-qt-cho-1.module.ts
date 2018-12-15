import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertQTCho1Page } from './insert-qt-cho-1.page';

const routes: Routes = [
  {
    path: '',
    component: InsertQTCho1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertQTCho1Page]
})
export class InsertQTCho1PageModule {}
