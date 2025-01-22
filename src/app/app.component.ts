import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatNavList,
      MatSidenav,
      MatSidenavContent,
      MatSidenavContainer,
      MatIcon,
      MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ponto-eletronico-spa-funcionario';
  isSidenavOpen = false;
}
