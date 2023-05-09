import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { QuillModule } from 'ngx-quill';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from "./error/error-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule ,
        ReactiveFormsModule,
        NgbModule,
        NgxSpinnerModule,
        BrowserModule,
        
        BrowserAnimationsModule,
        QuillModule
        
    ],
    declarations: [
        ErrorPageComponent,
        LoginPageComponent,
        ForgotPasswordComponent
    ]
})
export class ContentPagesModule { }
