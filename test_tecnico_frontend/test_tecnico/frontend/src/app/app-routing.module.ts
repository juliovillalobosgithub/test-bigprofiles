import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'bigprofiles',
          loadChildren: () =>
            import('./modules/pages/pages.module').then(
              m => m.PagesModule
            ),
        },
        // { path: 'pages/notfound', component: NotfoundComponent },
        { path: '**', redirectTo: 'bigprofiles/dashboard' },
        { path: '', redirectTo: 'bigprofiles/dashboard', pathMatch: 'full' },

      ],
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
