import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

const { apiUrl } = environment;

@Injectable()

class CookieInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                withCredentials: true
            })
        }       
        
        return next.handle(req)        
    }
}

export const cookieInterceptorProvider: Provider = {
    multi: true,
    useClass: CookieInterceptor,
    provide: HTTP_INTERCEPTORS,
};