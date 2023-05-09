import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '/page', title: 'Page', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/calculator', title: 'Calculator', icon: 'icon-calculator', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  
  {
    path: '/exercises/gallery', title: 'Gallery', icon: 'ft-image', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/data-tables', title: 'Data table', icon: 'ft-database', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/editor', title: 'Text Editor', icon: 'ft-edit-1', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/organigrama', title: 'Organigrama', icon: 'icon-layers', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/table', title: 'Table', icon: 'icon-layers', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  }
  /*
  {
    path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '3', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    submenu: [
        { path: '/YOUR-ROUTE-PATH', title: 'Second Level', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        {
            path: '', title: 'Second Level Child', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
            submenu: [
                { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            ]
        },
    ]
}*/
];
