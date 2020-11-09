import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'php',
    loadChildren: () => import('./tela-php/tela-php.module').then( m => m.TelaPhpPageModule)
  },
  {
    path: 'java',
    loadChildren: () => import('./tela-java/tela-java.module').then( m => m.TelaJavaPageModule)
  },
  {
    path: 'cplus',
    loadChildren: () => import('./tela-cplus/tela-cplus.module').then( m => m.TelaCplusPageModule)
  },
  {
    path: 'csharp',
    loadChildren: () => import('./tela-csharp/tela-csharp.module').then( m => m.TelaCsharpPageModule)
  },
  {
    path: 'html5',
    loadChildren: () => import('./tela-html5/tela-html5.module').then( m => m.TelaHtml5PageModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./tela-css/tela-css.module').then( m => m.TelaCssPageModule)
  },
  {
    path: 'question2',
    loadChildren: () => import('./question2/question2.module').then( m => m.Question2PageModule)
  },
  {
    path: 'question3',
    loadChildren: () => import('./question3/question3.module').then( m => m.Question3PageModule)
  },
  {
    path: 'question4',
    loadChildren: () => import('./question4/question4.module').then( m => m.Question4PageModule)
  },
  {
    path: 'question5',
    loadChildren: () => import('./question5/question5.module').then( m => m.Question5PageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'java1',
    loadChildren: () => import('./java1/java1.module').then( m => m.Java1PageModule)
  },
  {
    path: 'java2',
    loadChildren: () => import('./java2/java2.module').then( m => m.Java2PageModule)
  },
  {
    path: 'java3',
    loadChildren: () => import('./java3/java3.module').then( m => m.Java3PageModule)
  },
  {
    path: 'java4',
    loadChildren: () => import('./java4/java4.module').then( m => m.Java4PageModule)
  },
  {
    path: 'cplus1',
    loadChildren: () => import('./cplus1/cplus1.module').then( m => m.Cplus1PageModule)
  },
  {
    path: 'cplus2',
    loadChildren: () => import('./cplus2/cplus2.module').then( m => m.Cplus2PageModule)
  },
  {
    path: 'cplus3',
    loadChildren: () => import('./cplus3/cplus3.module').then( m => m.Cplus3PageModule)
  },
  {
    path: 'cplus4',
    loadChildren: () => import('./cplus4/cplus4.module').then( m => m.Cplus4PageModule)
  },
  {
    path: 'csharp1',
    loadChildren: () => import('./csharp1/csharp1.module').then( m => m.Csharp1PageModule)
  },
  {
    path: 'csharp2',
    loadChildren: () => import('./csharp2/csharp2.module').then( m => m.Csharp2PageModule)
  },
  {
    path: 'csharp3',
    loadChildren: () => import('./csharp3/csharp3.module').then( m => m.Csharp3PageModule)
  },
  {
    path: 'csharp4',
    loadChildren: () => import('./csharp4/csharp4.module').then( m => m.Csharp4PageModule)
  },
  {
    path: 'html1',
    loadChildren: () => import('./html1/html1.module').then( m => m.Html1PageModule)
  },
  {
    path: 'html2',
    loadChildren: () => import('./html2/html2.module').then( m => m.Html2PageModule)
  },
  {
    path: 'html3',
    loadChildren: () => import('./html3/html3.module').then( m => m.Html3PageModule)
  },
  {
    path: 'html4',
    loadChildren: () => import('./html4/html4.module').then( m => m.Html4PageModule)
  },
  {
    path: 'css1',
    loadChildren: () => import('./css1/css1.module').then( m => m.Css1PageModule)
  },
  {
    path: 'css2',
    loadChildren: () => import('./css2/css2.module').then( m => m.Css2PageModule)
  },
  {
    path: 'css3',
    loadChildren: () => import('./css3/css3.module').then( m => m.Css3PageModule)
  },
  {
    path: 'css4',
    loadChildren: () => import('./css4/css4.module').then( m => m.Css4PageModule)
  },


  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
