import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from './blog/blog.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BlogComponent,
        HobbyComponent,
        ContactComponent,
        ProjectComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
