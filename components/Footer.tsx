import Link from 'next/link';

const navigation = {
  product: [
    { name: 'المميزات', href: '#features' },
    { name: 'الأسعار', href: '#pricing' },
    { name: 'المدونة', href: '/blog' },
    { name: 'تحديثات', href: '/changelog' },
  ],
  company: [
    { name: 'من نحن', href: '/about' },
    { name: 'اتصل بنا', href: '/contact' },
    { name: 'شركاء', href: '/partners' },
  ],
  legal: [
    { name: 'الخصوصية', href: '/privacy' },
    { name: 'شروط الإستخدام', href: '/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 4.123-.06h.08v.001zm0-2c-2.709 0-3.04.011-4.108.06-1.1.05-1.85.228-2.52.488a6.947 6.947 0 00-2.528 1.646A6.947 6.947 0 001.446 4.745c-.26.67-.44 1.42-.489 2.52-.049 1.068-.06 1.4-.06 4.108 0 2.71.011 3.04.06 4.108.05 1.1.229 1.85.489 2.52a6.948 6.948 0 001.646 2.528 6.948 6.948 0 002.528 1.646c.67.26 1.42.44 2.52.489 1.068.049 1.4.06 4.108.06 2.71 0 3.04-.011 4.108-.06 1.1-.05 1.85-.228 2.52-.488a6.947 6.947 0 002.528-1.646 6.947 6.947 0 001.646-2.528c.26-.67.44-1.42.489-2.52.049-1.068.06-1.4.06-4.108 0-2.71-.011-3.04-.06-4.108-.05-1.1-.229-1.85-.489-2.52a6.947 6.947 0 00-1.646-2.528 6.947 6.947 0 00-2.528-1.646c-.67-.26-1.42-.44-2.52-.489-1.068-.049-1.4-.06-4.108-.06zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">

          {/* Column 1: Brand */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              {/* Fallback "C" icon if logo is missing, or use your Image component */}
              <img
                src="/assets/logo.svg"
                alt="Codeshade"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-6 text-gray-600 max-w-xs">
              برنامج تسيير المحلات التجارية رقم 1 في الجزائر. Le meilleur logiciel de gestion en Algérie.
            </p>
            <div className="flex space-x-6 gap-4">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2 & 3: Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">المنتج</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">الشركة</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">قانوني</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500 text-center">
            &copy; 2025 Codeshade Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;