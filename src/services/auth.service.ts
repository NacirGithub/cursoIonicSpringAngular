import { LocalUser } from './../models/local_user';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { CredenciasDTO } from './../models/credencias.dto';
import { Injectable } from "@angular/core";
import { StorageService } from './storage.service';



@Injectable()
export class AuthService{

    constructor(public http: HttpClient, public storage: StorageService){

    }

    authenticate(creds: CredenciasDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds, 
            {
                observe: 'response',
                responseType:'text'
            });
    }

    successfullLogin(authorizationValue: string){
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok
        };
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}