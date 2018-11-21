import { CategoriaDTO } from './../../models/categoria.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.confg";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){

    }

    findAll() : Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}