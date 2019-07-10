import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [BrowserModule,
        AppRoutingModule,
        RouterModule,
        // RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules }),
        NgbModule.forRoot()
],
providers: [AppService],
    declarations: [AppComponent,HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
