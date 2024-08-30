import { defineStore } from 'pinia';

export const useNavigateStore = defineStore('navigates', () => {
  const headerMenuItems = [
    {
      id: 0,
      name: 'home',
      url: '/'
    },
    {
      id: 1,
      name: 'company',
      url: '/company'
    },
    {
      id: 2,
      name: 'services',
      url: '/services'
    },
    {
      id: 3,
      name: 'hardware',
      url: '/hardware'
    },
    {
      id: 6,
      name: 'products',
      url: '/ecommerce'
    },
    {
      id: 4,
      name: 'solutions',
      url: '/solutions'
    },
    {
      id: 5,
      name: 'sustainability',
      url: '/sustainability'
    }
  ];
  const footerMenuItems = [
    {
      id: 0,
      name: 'About Us',
      url: '/company'
    },
    {
      id: 1,
      name: 'Services',
      url: '/services'
    },
    {
      id: 3,
      name: 'Hardware',
      url: '/hardware'
    },
    {
      id: 4,
      name: 'Solutions',
      url: '/solutions'
    },
    {
      id: 5,
      name: 'Sustainability',
      url: '/sustainability'
    }
  ];
  const footerInfoItems = [
    {
      id: 4,
      name: 'Blog',
      url: '/blog'
    },
    {
      id: 0,
      name: 'Contact Us',
      url: '/contact'
    },
    {
      id: 1,
      name: 'FAQ',
      url: '/faq'
    },
    {
      id: 3,
      name: 'Privacy Policy',
      url: '/privacyPolicy'
    }
  ];

  return {
    headerMenuItems,
    footerMenuItems,
    footerInfoItems
  };
});
