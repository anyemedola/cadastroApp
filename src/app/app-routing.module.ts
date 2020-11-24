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
  {
    path: 'cardphp1',
    loadChildren: () => import('./cardphp1/cardphp1.module').then( m => m.Cardphp1PageModule)
  },
  {
    path: 'cardphp1back',
    loadChildren: () => import('./cardphp1back/cardphp1back.module').then( m => m.Cardphp1backPageModule)
  },
  {
    path: 'cardphp2',
    loadChildren: () => import('./cardphp2/cardphp2.module').then( m => m.Cardphp2PageModule)
  },
  {
    path: 'cardphp2back',
    loadChildren: () => import('./cardphp2back/cardphp2back.module').then( m => m.Cardphp2backPageModule)
  },
  {
    path: 'cardphp3',
    loadChildren: () => import('./cardphp3/cardphp3.module').then( m => m.Cardphp3PageModule)
  },
  {
    path: 'cardphp3back',
    loadChildren: () => import('./cardphp3back/cardphp3back.module').then( m => m.Cardphp3backPageModule)
  },
  {
    path: 'cardphp4',
    loadChildren: () => import('./cardphp4/cardphp4.module').then( m => m.Cardphp4PageModule)
  },
  {
    path: 'cardphp4back',
    loadChildren: () => import('./cardphp4back/cardphp4back.module').then( m => m.Cardphp4backPageModule)
  },
  {
    path: 'cardjava1',
    loadChildren: () => import('./cardjava1/cardjava1.module').then( m => m.Cardjava1PageModule)
  },
  {
    path: 'cardjava1back',
    loadChildren: () => import('./cardjava1back/cardjava1back.module').then( m => m.Cardjava1backPageModule)
  },
  {
    path: 'cardjava2',
    loadChildren: () => import('./cardjava2/cardjava2.module').then( m => m.Cardjava2PageModule)
  },
  {
    path: 'cardjava2back',
    loadChildren: () => import('./cardjava2back/cardjava2back.module').then( m => m.Cardjava2backPageModule)
  },
  {
    path: 'cardjava3',
    loadChildren: () => import('./cardjava3/cardjava3.module').then( m => m.Cardjava3PageModule)
  },
  {
    path: 'cardjava3back',
    loadChildren: () => import('./cardjava3back/cardjava3back.module').then( m => m.Cardjava3backPageModule)
  },
  {
    path: 'cardjava4',
    loadChildren: () => import('./cardjava4/cardjava4.module').then( m => m.Cardjava4PageModule)
  },
  {
    path: 'cardjava4back',
    loadChildren: () => import('./cardjava4back/cardjava4back.module').then( m => m.Cardjava4backPageModule)
  },
  {
    path: 'cardcplus1',
    loadChildren: () => import('./cardcplus1/cardcplus1.module').then( m => m.Cardcplus1PageModule)
  },
  {
    path: 'cardcplus1back',
    loadChildren: () => import('./cardcplus1back/cardcplus1back.module').then( m => m.Cardcplus1backPageModule)
  },
  {
    path: 'cardcplus2',
    loadChildren: () => import('./cardcplus2/cardcplus2.module').then( m => m.Cardcplus2PageModule)
  },
  {
    path: 'cardcplus2back',
    loadChildren: () => import('./cardcplus2back/cardcplus2back.module').then( m => m.Cardcplus2backPageModule)
  },
  {
    path: 'cardcplus3',
    loadChildren: () => import('./cardcplus3/cardcplus3.module').then( m => m.Cardcplus3PageModule)
  },
  {
    path: 'cardcplus3back',
    loadChildren: () => import('./cardcplus3back/cardcplus3back.module').then( m => m.Cardcplus3backPageModule)
  },
  {
    path: 'cardcplus4',
    loadChildren: () => import('./cardcplus4/cardcplus4.module').then( m => m.Cardcplus4PageModule)
  },
  {
    path: 'cardcplus4back',
    loadChildren: () => import('./cardcplus4back/cardcplus4back.module').then( m => m.Cardcplus4backPageModule)
  },


  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
