import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchContainerComponent } from './search/container/search-container.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: SearchContainerComponent
  },
  { path: ':id/repos', component: UserReposComponent },
  { path: '**', component: NotFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
