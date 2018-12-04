import { Observable } from 'rxjs/Rx';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";





export class ErrorIterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Passou");
        return next.handle(req)
            .catch((error, cautch) => {
                let errorObj = error;
                if (errorObj.error) {
                    errorObj.console.error;
                }
                if(!errorObj.status){
                    errorObj = JSON.parse(errorObj);
                }

                console.log("Erro detectado pelo interceptor: ")
                console.log(errorObj);

                return Observable.throw(errorObj);
            }) as any;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorIterceptor,
    multi: true,

};

