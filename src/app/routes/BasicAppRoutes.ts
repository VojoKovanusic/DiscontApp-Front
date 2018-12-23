import { HomPageComponent } from "../components/hom-page/hom-page.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HowRunComponent } from "../components/how-run/how-run.component";
import { AboutAutorComponent } from "../components/about-autor/about-autor.component";
import { AddProductComponent } from "../components/add-product/add-product.component";
import { TaskComponent } from "../components/task/task.component";
import { MySolutionComponent } from "../components/my-solution/my-solution.component";

const appRoutes: Routes=[ {
    path: '',
    component: HomPageComponent,
  } ,
  {
    path:'add-update', 
    component: AddProductComponent
  },
  {
    path:'task', 
    component: TaskComponent
  },
  {
    path:'all/product', 
    component: MySolutionComponent
  },
  {
    path:'howToRun', 
    component: HowRunComponent
  },
  {
    path:'mySolution', 
    component: MySolutionComponent
  },
  {
    path:'autor', 
    component: AboutAutorComponent
  } 
];

export const myRouting: ModuleWithProviders= RouterModule.forRoot(appRoutes);