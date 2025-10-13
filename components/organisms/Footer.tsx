/**
 * Footer Organism
 *
 * Site footer with navigation, social links, and copyright.
 * Background: bg-neutral-900 (dark footer).
 * Text: text-neutral-100 (light text on dark).
 * Layout: 3-column (desktop), 2-column (tablet), stacked (mobile).
 * Columns: Branding, Quick Links, Connect.
 * Bottom bar: Copyright + View Source link.
 * Padding: py-24 px-8 (96px vertical).
 * Accessibility: <footer> semantic, proper focus states.
 */

import { cn } from '@/lib/utils';
import { SocialLink } from '@/components/molecules/SocialLink';
import { Divider } from '@/components/atoms/Divider';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Design System', href: '/design-system' },
  { label: 'Skills', href: '/skills' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { platform: 'github' as const, href: 'https://github.com' },
  { platform: 'linkedin' as const, href: 'https://linkedin.com' },
  { platform: 'twitter' as const, href: 'https://twitter.com' },
  { platform: 'email' as const, href: 'mailto:hello@example.com' },
];

export interface FooterProps {
  /** Additional wrapper class */
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-neutral-900 text-neutral-100", className)}>
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-16 lg:py-20">
        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Column 1: Branding */}
          <div>
            <a
              href="/"
              className="inline-block mb-4 font-fraunces text-xl font-bold text-white tracking-[-0.02em] hover:text-terracotta-400 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-sm"
            >
              Logan [LastName]
            </a>
            <p className="font-inter text-base text-neutral-300">
              Building systems, not just sites
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-inter text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-inter text-base text-neutral-300 hover:text-terracotta-400 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="font-inter text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.platform}
                  platform={social.platform}
                  href={social.href}
                  className="text-neutral-300 hover:text-terracotta-400"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 md:mt-16 mb-6 md:mb-8">
          <Divider className="border-neutral-700" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p className="font-inter">
            © {currentYear} Logan [LastName]. Built with Next.js + Tailwind.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-neutral-400 hover:text-terracotta-400 transition-colors duration-[300ms] ease-[cubic-bezier(0.33,1,0.68,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-sm"
          >
            View Source
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
