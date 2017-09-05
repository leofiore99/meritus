import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }    from '@angular/http';
import { XHRBackend, RequestOptions } from '@angular/http';
import { InjectorHttpService } from "./base/http.injector.service";
import { HttpInterceptorModule } from "./base/http.interceptor.module";
import { AppRouting } from "./app.route";
import { CarreiraComponent } from './carreira/carreira.component';
import { CarreiraService } from "./carreira/carreira.service";
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { ObjetivoService } from "./objetivo/objetivo.service";
import { ReuniaoComponent } from './reuniao/reuniao.component';
import { ReuniaoService } from "./reuniao/reuniao.service";
import { EventoComponent } from "./evento/evento.component";
import { EventoService } from "./evento/evento.service";
import { NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    EventoComponent,
    CarreiraComponent,
    ObjetivoComponent,
    ReuniaoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpInterceptorModule,
    AppRouting,
    NgbModule.forRoot()
  ],
  providers: [
    InjectorHttpService,
    EventoService,
    CarreiraService,
    ObjetivoService,
    ReuniaoService,
    NavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
