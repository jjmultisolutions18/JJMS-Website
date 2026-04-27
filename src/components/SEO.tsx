import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Innovation & Digital Solutions | Upington | JJ Multi Solutions',
  '/about': 'About Our Innovation Hub | JJ Multi Solutions',
  '/services': 'ICT, Prototyping & Web Services Upington | JJ Multi Solutions',
  '/platform': 'Innovation Management Software SA | JJ Multi Solutions',
  '/projects': 'Innovation Portfolio Northern Cape | JJ Multi Solutions',
  '/insights': 'Tech Insights & Innovation Hub | JJ Multi Solutions',
  '/gallery': 'Gallery | 3D Printing & Tech Workshops',
  '/contact': 'Request a Quote | Web Design Upington',
};

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = pageTitles[pathname] || 'JJ Multi Solutions';
    document.title = title;
  }, [pathname]);

  return null;
}
