import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SvgIconComponent} from "../../svg-icon/svg-icon.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    SvgIconComponent,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'Home',
      icon: 'home',
      link: 'home'
    },
    {
      label: 'My page',
      icon: 'telegram',
      link: 'profile/me'
    },
    {
      label: 'Customers',
      icon: 'customers',
      link: 'customers'
    },
    {
      label: 'Products',
      icon: 'products',
      link: 'products'
    },
    {
      label: 'Inquiries',
      icon: 'reg',
      link: 'inquiries'
    },
    {
      label: 'Search',
      icon: 'search',
      link: 'search'
    },
    {
      label: 'login',
      icon: 'login',
      link: 'login'
    },
    {
      label: 'Registration',
      icon: 'reg',
      link: 'register'
    }
  ]
}
