import { EmailDistributionService } from './email-distribution.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VsNavBarComponent } from './vs-nav-bar/vs-nav-bar.component';
import { EmailListsComponent } from './email-lists/email-lists.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { DataTableModule } from 'angular-6-datatable';
import { EmailDistributionAddComponent } from './email-distribution-add/email-distribution-add.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { TokenInterceptor } from 'src/app/token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VsNavBarComponent,
    EmailListsComponent,
    ToolBarComponent,
    EmailDistributionAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'admin/emailLists/add',
        component: EmailDistributionAddComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'admin/emailLists',
        component: EmailListsComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'admin',
        component: VsNavBarComponent,
        canActivate: [ AuthGuard ]
      },
      { path: 'login', component: LoginComponent },
      {
        path: '',
        component: VsNavBarComponent,
        canActivate: [ AuthGuard ]
      }
    ])
  ],
  providers: [
    AuthGuard,
    AuthService,
    EmailDistributionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
