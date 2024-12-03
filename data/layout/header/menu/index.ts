import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',
    href:'/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Service',
    href: '/services',
  },
  {
    label: 'Technologies',
    href: '/technologies',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    title: 'Blog',
    subMenuItems: [
      {
        label: 'Blog List',
        href: '/blog',
      },
      {
        label: 'Blog single',
        href: '/blog/single',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
