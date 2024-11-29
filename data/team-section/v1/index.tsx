import { TeamSectionProps } from '@/src/sections/team/v1';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa6';

export const teamSectionData: TeamSectionProps = {
  sectionHeading: {
    subtitle: 'our active members',
    title: 'Transforming Challenges into Seamless Solutions',
  },
  cards: [
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-1.png',
        alt: 'Muhammad Ali Mughal',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Muhammad Ali Mughal',
      about: 'Co Founder & CEO',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-2.png',
        alt: 'Muhammad Mavia',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Muhammad Mavia',
      about: 'Co Founder & CTO',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-3.png',
        alt: 'Syed Danish Hussain',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Syed Danish Hussain',
      about: 'Co Founder & CFO',
    },
  ],
};
