import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Rx";

export interface ComponentCanDeativate {
	canDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<ComponentCanDeativate> {
    canDeactivate(component: ComponentCanDeativate): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}