import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share/share.module';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { DomainsModule } from './domains/domains.module';
import { HeaderModule } from './share/components/header/header.component.module';
import { SideBarModule } from './share/components/side-bar/side-bar.component.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DomainsModule,
    ShareModule,
    MatIconModule,
    HeaderModule,
    SideBarModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
