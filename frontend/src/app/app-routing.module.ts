import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { RegcComponent } from './condidate/regc/regc.component';
import { RegeComponent } from './entreuprise/rege/rege.component';
import { HomeComponent } from './home/home/home.component';
import { JobComponent } from './home/job/job.component';
import { ContactComponent } from './home/contact/contact.component';
import { PosteComponent } from './entreuprise/poste/poste.component';
import { PostcComponent } from './condidate/postc/postc.component';
import { ServiseComponent } from './home/servise/servise.component';
import { HomeeComponent } from './entreuprise/homee/homee.component';
import { HomComponent } from './condidate/hom/hom.component';
import { JobseComponent } from './entreuprise/jobse/jobse.component';
import { JobscComponent } from './condidate/jobsc/jobsc.component';
import { ServiseeComponent } from './entreuprise/servisee/servisee.component';
import { ServisecComponent } from './condidate/servisec/servisec.component';
import { JdComponent } from './home/jd/jd.component';
import { JdeComponent } from './entreuprise/jde/jde.component';
import { JdcComponent } from './condidate/jdc/jdc.component';
import { ApplayComponent } from './condidate/applay/applay.component';
import { SpacecComponent } from './condidate/spacec/spacec.component';
import { SpaceeComponent } from './entreuprise/spacee/spacee.component';
import { CondidateComponent } from './entreuprise/condidate/condidate.component';
import { ServComponent } from './condidate/serv/serv.component';
import { AppComponent } from './app.component';
import { ApppComponent } from './condidate/appp/appp.component';
import { ApplComponent } from './condidate/appl/appl.component';
import { ForgComponent } from './home/forg/forg.component';
import { ForggComponent } from './home/forgg/forgg.component';
import { ForgggComponent } from './home/forggg/forggg.component';
import { ForgGuard } from './gard/forg.guard';
import { ForGuard } from './gardd/for.guard';

const routes: Routes = [
  { path: 'log', component: LogComponent },
  { path: 'regc', component: RegcComponent },
  { path: 'rege', component: RegeComponent },
  { path: '', component: HomeComponent },
  { path: 'job', component: JobComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'poste', component: PosteComponent },
  { path: 'postc', component: PostcComponent },
  { path: 'servise', component: ServiseComponent },
  { path: 'he', component: HomeeComponent },
  { path: 'hc', component: HomComponent },
  { path: 'je', component: JobseComponent },
  { path: 'jc', component: JobscComponent },
  { path: 'se', component: ServiseeComponent },
  { path: 'sc', component: ServisecComponent },
  { path: 'jd/:id', component: JdComponent },
  { path: 'jde/:id', component: JdeComponent },
  { path: 'jdc/:id', component: JdcComponent },
  { path: 'app/:id', component: ApplayComponent },
  { path: 'spacec', component: SpacecComponent },
  { path: 'spacee', component: SpaceeComponent },
  { path: 'con/:id', component: CondidateComponent },
  { path: 'servcon', component: ServComponent },
  { path: 'appl/:id', component: ApplComponent },
  { path: 'forg', component: ForgComponent },
  { path: 'forgg', component: ForggComponent, canActivate: [ForGuard] },
  { path: 'forggg', component: ForgggComponent, canActivate: [ForgGuard] }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
