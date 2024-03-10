import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemesAllComponent } from "./themes-all/themes-all.component";
import { ThemeDetailsComponent } from "./theme-details/theme-details.component";

const routes: Routes = [
    {
        path: 'themes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemesAllComponent
            },
            {
                path: ':themeId',
                component: ThemeDetailsComponent
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }