import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI Red Teaming Playbook',
  tagline: 'AI Red Teaming Playbook',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Future flags for framework compatibility
  future: {
    v4: true, // Improve compatibility with the upcoming framework v4
  },

  // Set the production url of your site here
  url: 'https://pillar.security',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Deployment config for Pillar Security
  organizationName: 'pillar-security',
  projectName: 'redteam-playbook',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Edit links disabled as we don't have a public GitHub repo
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Pillar Security social card
    image: 'img/logo.png',
    navbar: {
      title: 'AI Red Teaming Playbook',
      logo: {
        alt: 'Pillar Security Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Playbook',
        },
        {
          href: 'https://pillar.security',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'AI Red Teaming',
              to: '/docs/ai-red-team/introduction',
            },
          ],
        },
        {
          title: 'Pillar Security',
          items: [
            {
              label: 'Website',
              href: 'https://pillar.security',
            },
            {
              label: 'Contact',
              href: 'https://www.pillar.security/about',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'AI Red Teaming',
              to: '/docs/ai-red-team/introduction',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pillar Security. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
