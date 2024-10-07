import { useTranslations } from 'next-intl';

const useNavLinks = () => {
  const translation = useTranslations('common.nav');

  const pagesLinks = [
    { label: translation('home'), href: '/' },
    { label: translation('projects'), href: '/projects' },
    { label: translation('contacts'), href: '/contacts' },
    { label: translation('safety'), href: '/safety' },
  ];

  const documentsLinks = [
    { label: translation('privacyPolicy'), href: '/privacy-policy' },
    { label: translation('termsOfService'), href: '/terms-of-service' },
    { label: translation('statute'), href: '/statute' },
    { label: translation('reports'), href: '/reports' },
  ];

  return { pagesLinks, documentsLinks };
};

export default useNavLinks;
