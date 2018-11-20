import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { Routes, RouterModule } from '@angular/router'
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
    { path: 'test1', component: Test1Component },
    { path: 'test2', component: Test2Component }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: []
})


export class AppRoutingModule {


}