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
    title: 'Service',
    subMenuItems: [
      {
        label: 'Service List',
        href: '/services',
      },
      {
        label: 'Service single',
        href: '/services/single',
      },
    ],
  },
  {
    label: 'Technologies',
    href: '/technologies',
  },
  {
    label: 'Careers',
    href: '/technologies',
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
