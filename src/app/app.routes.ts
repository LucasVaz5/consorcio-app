import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ScreenDetailsGroupsComponent } from './screen-details-groups/screen-details-groups.component';
import { BannerDetailsGroupsComponent } from './components/banner-details-groups/banner-details-groups.component';
import { FormDetailsGroupsComponent } from './components/form-details-groups/form-details-groups.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'detailsgroups', component: ScreenDetailsGroupsComponent},
  { path: 'bannerdetailsgroups', component: BannerDetailsGroupsComponent},
  { path: 'formdetailsgroups', component: FormDetailsGroupsComponent}

  ];

export class AppRoutingModule { }
