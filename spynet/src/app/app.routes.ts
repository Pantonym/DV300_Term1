import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { MarketplaceComponent } from './component/marketplace/marketplace.component';
import { WarehousesComponent } from './component/warehouses/warehouses.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { MarketplaceAdminComponent } from './component/marketplace-admin/marketplace-admin.component';
import { AdminAuthGuard, AuthGuard } from './component/guards/auth.guard';
import { WarehousesSummaryComponent } from './component/warehousesSummary/warehousesSummary.component';

export const routes: Routes = [
    { path: "dashboard", component: DashboardComponent },
    { path: "login", component: LoginComponent },
    { path: "marketplace", component: MarketplaceComponent, canActivate: [AuthGuard]  },
    { path: "marketplace-admin", component: MarketplaceAdminComponent, canActivate: [AdminAuthGuard]  },
    { path: "warehouses/:id", component: WarehousesComponent, canActivate: [AuthGuard] },
    { path: "summary", component: WarehousesSummaryComponent, canActivate: [AuthGuard] },
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "**", component: PagenotfoundComponent }
];