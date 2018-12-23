import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomPageComponent } from "../basic-components/hom-page/hom-page.component";

import { TaskComponent } from "../basic-components/task/task.component";
import { MySolutionComponent } from "../discont-components/my-solution/my-solution.component";
import { HowRunComponent } from "../basic-components/how-run/how-run.component";
import { AboutAutorComponent } from "../basic-components/about-autor/about-autor.component";
import { AddProductComponent } from "../discont-components/add-product/add-product.component";



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