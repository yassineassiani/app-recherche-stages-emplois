import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RegcComponent } from './condidate/regc/regc.component';
import { RegeComponent } from './entreuprise/rege/rege.component';
import { HomeComponent } from './home/home/home.component';
import { JobComponent } from './home/job/job.component';
import { ContactComponent } from './home/contact/contact.component';
import { PostcComponent } from './condidate/postc/postc.component';
import { PosteComponent } from './entreuprise/poste/poste.component';
import { HomComponent } from './condidate/hom/hom.component';

import { JobscComponent } from './condidate/jobsc/jobsc.component';
import { ServisecComponent } from './condidate/servisec/servisec.component';
import { HomeeComponent } from './entreuprise/homee/homee.component';
import { JobseComponent } from './entreuprise/jobse/jobse.component';
import { ServiseeComponent } from './entreuprise/servisee/servisee.component';
import { ServiseComponent } from './home/servise/servise.component';
import { JdcComponent } from './condidate/jdc/jdc.component';
import { JdeComponent } from './entreuprise/jde/jde.component';
import { JdComponent } from './home/jd/jd.component';
import { ApplayComponent } from './condidate/applay/applay.component';
import { SpacecComponent } from './condidate/spacec/spacec.component';
import { SpaceeComponent } from './entreuprise/spacee/spacee.component';
import { CondidateComponent } from './entreuprise/condidate/condidate.component';
import { ServComponent } from './condidate/serv/serv.component';
import { ApppComponent } from './condidate/appp/appp.component';
import { ApplComponent } from './condidate/appl/appl.component';
import { ForgComponent } from './home/forg/forg.component';
import { ForggComponent } from './home/forgg/forgg.component';
import { ForgggComponent } from './home/forggg/forggg.component';



@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    RegcComponent,
    RegeComponent,
    HomeComponent,
    JobComponent,
    ContactComponent,
    PostcComponent,
    PosteComponent,
    HomComponent,

    JobscComponent,
    ServisecComponent,
    HomeeComponent,
    JobseComponent,
    ServiseeComponent,
    ServiseComponent,
    JdcComponent,
    JdeComponent,
    JdComponent,
    ApplayComponent,
    SpacecComponent,
    SpaceeComponent,
    CondidateComponent,
    ServComponent,
    ApppComponent,
    ApplComponent,
    ForgComponent,
    ForggComponent,
    ForgggComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
