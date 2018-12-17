import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'qtm',
    loadChildren: './qtm/qtm.module#QTMPageModule'
  },
  {
    path: 'insert_qt',
    loadChildren: './qtm/insert-qt/insert-qt.module#InsertQTPageModule'
  },
  {
    path: 'insert_qt_cho_1',
    loadChildren: './qtm/insert-qt/insert-qt-cho-1.module#InsertQTCho1PageModule'
  },
  { 
    path: 'subm', 
    loadChildren: './subm/subm.module#SubmPageModule' 
  },
  { 
    path: 'lvm', 
    loadChildren: './lvm/lvm.module#LvmPageModule' 
  },
  { 
    path: 'insert_lv', 
    loadChildren: './insert-lv/insert-lv.module#InsertLvPageModule' 
  },
  { 
    path: 'insert_subm', 
    loadChildren: './subm/insert-subm/insert-subm.module#InsertSubmPageModule' 
  },
  { path: 'insert_lv', 
    loadChildren: './lvm/insert-lv/insert-lv.module#InsertLvPageModule' 

  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
