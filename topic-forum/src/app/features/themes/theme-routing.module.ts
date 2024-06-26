import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemeAddComponent } from "./theme-add/theme-add.component";
import { ThemesAllComponent } from "./themes-all/themes-all.component";
import { ThemeDetailsComponent } from "./theme-details/theme-details.component";
import { HowWorksComponent } from "../how-works/how-works.component";
import { PostEditComponent } from "./post-edit/post-edit.component";
import { ThemeSearchComponent } from "./theme-search/theme-search.component";
import { AuthActivate } from "src/app/core/guards/auth.activate";

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
    {
        path: 'add-theme',
        component: ThemeAddComponent,
        canActivate: [AuthActivate]
    },
    {
        path: 'post/edit/:postId',
        component: PostEditComponent,
        canActivate: [AuthActivate]
    },
    {
        path: 'how-works',
        component: HowWorksComponent
    },
    {
        path: 'search',
        component: ThemeSearchComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }