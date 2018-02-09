/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ProjectComponent } from './project/project.component';



export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'projects', component: ProjectComponent},
    {path: 'hobbies', component: HobbyComponent},
    {path: 'contact', component: ContactComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
