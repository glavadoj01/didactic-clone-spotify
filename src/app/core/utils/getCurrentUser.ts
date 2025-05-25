import { inject } from "@angular/core"
import { CookieService } from "ngx-cookie-service";

export const getCurrentUser = (emailIn:string, idIn:number) => {
    const cookieSrv = inject(CookieService);
    const token = cookieSrv.get('token') as string;

    return {
        email: "abc@abc.abc",
        id: '1234',
        role: 'admin',
        token: token
    }
}