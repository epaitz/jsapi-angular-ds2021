import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookmarksComponent } from './map/bookmarks/bookmarks.component';
import { MapContentsComponent } from './map/map-contents/map-contents.component';
import { MapComponent } from './map/map.component';
import { NotificationsComponent } from './map/notifications/notifications.component';
import { SearchComponent } from './map/search/search.component';
import { SettingsComponent } from './map/settings/settings.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
            label: 'Home'
        }
    },
    {
        path: 'map',
        component: MapComponent,
        data: {
            label: 'Map'
        },
        children: [
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full'
            },
            {
                path: 'contents',
                component: MapContentsComponent,
                data: {
                    label: 'Map Contents',
                    icon: 'list'
                }
            },
            {
                path: 'search',
                component: SearchComponent,
                data: {
                    label: 'Search',
                    icon: 'search'
                }
            },
            {
                path: 'bookmarks',
                component: BookmarksComponent,
                data: {
                    label: 'Bookmarks',
                    icon: 'bookmarks'
                }
            },
            {
                path: 'notifications',
                component: NotificationsComponent,
                data: {
                    label: 'Notifications',
                    icon: 'notifications'
                }
            },
            {
                path: 'settings',
                component: SettingsComponent,
                data: {
                    label: 'Settings',
                    icon: 'settings'
                }
            }
        ]
    },
    {
        path: 'tools',
        component: ToolsComponent,
        data: {
            label: 'Tools'
        }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
