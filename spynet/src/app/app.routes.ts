import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { MarketplaceComponent } from './component/marketplace/marketplace.component';
import { WarehousesComponent } from './component/warehouses/warehouses.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: "dashboard", component: DashboardComponent },
    { path: "login", component: LoginComponent },
    { path: "marketplace", component: MarketplaceComponent },
    { path: "warehouses", component: WarehousesComponent },
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "**", component: PagenotfoundComponent }
];