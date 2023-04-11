import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const storedUser = localStorage.getItem('account')
        console.log('Request Auth')

        if(storedUser) {
            const loggedUser = JSON.parse(storedUser)

            let authorizedRequest = req.clone({headers: req.headers.set('Authorization', `Bearer ${loggedUser.token}`)})

            return next.handle(authorizedRequest)
        }

        return next.handle(req)
    }

}
