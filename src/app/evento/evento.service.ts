import { HttpBaseService } from "../base/http.base.service";
import { InjectorHttpService } from "../base/http.injector.service";
import { Inject } from "@angular/core";
import { APIConfig } from "../app.config";
import { environment } from "../../environments/environment";

export class EventoService extends HttpBaseService {
    constructor( @Inject(InjectorHttpService) public injectorHttpService: InjectorHttpService) {
        super(injectorHttpService, APIConfig.Sites.Portal.Recursos.Eventos, environment.Api.Eventos.baseUrl);
    }

    conteudoNav: any;

    //Exemplo
    public getEvents() {
        return this.getAll();
    }

    public teste(){
        return this._getAll("http://demo1797138.mockable.io/teste");
    }

    public atualizarNav(objeto:any){
        debugger;
        this.conteudoNav = objeto.titulo;
    }
}