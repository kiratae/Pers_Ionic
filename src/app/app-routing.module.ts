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
  { path: 'chtm', 
  loadChildren: './chtm/chtm.module#ChtmPageModule' 
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
