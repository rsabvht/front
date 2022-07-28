import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
// ------------

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductsComponent } from './components/products/products.component';
import { StatusComponent } from './components/status/status.component';
import { OdcComponent } from './components/odc/odc.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    ProductsComponent,
    StatusComponent,
    OdcComponent,
    CustomersComponent,
    EmployeesComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
