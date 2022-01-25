import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { C16ChildAComponent } from "./c16-child-a/c16-child-a.component";
import { C16ChildBComponent } from "./c16-child-b/c16-child-b.component";
import { C16FirstComponent } from "./c16-first/c16-first.component";
import { C16SecondComponent } from "./c16-second/c16-second.component";
import { C16YourGuardGuard } from "./c16-your-guard.guard";

const routes: Routes = [{
    path: 'first-component/:id', component: C16FirstComponent,
    children: [
        {path: 'child-a', component: C16ChildAComponent},
        {path: 'child-b', component: C16ChildBComponent}
    ]
}, {
    path: 'second-component', component: C16SecondComponent, canActivate: [C16YourGuardGuard]
}, {
    path: '**', component: C16FirstComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutringModule {}
