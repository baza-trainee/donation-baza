import { useTranslations } from 'next-intl';

const useNavLinks = () => {
  const translation = useTranslations('common.nav');

  const links = [
    { label: translation('home'), href: '/' },
    { label: translation('projects'), href: '/projects' },
    { label: translation('safety'), href: '/safety' },
    { label: translation('contacts'), href: '/contacts' },
  ];

  return links;
};

export default useNavLinks;
