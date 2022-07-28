// Archivo exclusivo para crear rutas
import { RouterModule, Routes } from "@angular/router";
//Principal
import { HomeComponent } from "./components/home/home.component";
//Productos
import { ProductsComponent } from "./components/products/products.component";
//Personal
import { EmployeesComponent } from "./components/employees/employees.component";
//Clientes
import { CustomersComponent } from "./components/customers/customers.component";
//Ordenes de compra
import { OdcComponent } from "./components/odc/odc.component";
//Status
import { StatusComponent } from "./components/status/status.component";
//Login
import { LoginComponent } from "./components/login/login.component";



const APP_ROUTES: Routes = [
    {path:'login', component: LoginComponent},
    {path:'home', component: HomeComponent},
    {path:'products', component: ProductsComponent}, 
    {path:'employees', component: EmployeesComponent},
    {path:'customers', component: CustomersComponent},
    {path:'odc', component: OdcComponent},
    {path:'status', component: StatusComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

//Manejo del # se encuentra despues de APP_ROUTES, convencional para parametros , 
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
