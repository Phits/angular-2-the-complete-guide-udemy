import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { LogService } from './app/log.service';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule, [LogService]);
//# sourceMappingURL=/Fitzs-Jobs/Training/Udemy/angular-2-the-complete-guide-udemy/services-cli/src/main.js.map