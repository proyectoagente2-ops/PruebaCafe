import { useLocation } from 'react-router-dom';

interface NavLinksProps {
  itemClassName?: string;
  className?: string;
  onItemClick?: () => void;
}

export default function NavLinks({ itemClassName = '', className = '', onItemClick }: NavLinksProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Café', href: '/cafe' },
    { name: 'Turismo', href: isHomePage ? '#tourism' : '/#tourism' },
    { name: 'Nosotros', href: isHomePage ? '#about' : '/#about' },
    { name: 'Contacto', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={itemClassName}
          onClick={onItemClick}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
