// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars.js'),
      breadcrumbs: true,
      editUrl: 'https://github.com/BUTANE-Smart-Chain',
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('use'),
  defineSection('develop'),
  defineSection('validate'),
  defineSection('protocol'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Butane Docs',
  tagline: 'Develop on Butane',
  url: 'https://docs.butane.tech',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Butane', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    project: {
      name: "Butane",
      denom: "BBC",
      ticker: "$BBC",
      binary: "bbcsd",
      testnet_denom: "tBBC",
      testnet_ticker: "tBBC",
      rpc_url: "https://mainnet-rpc.bbcscan.io/",
      rpc_url_testnet: "https://testnet-rpc.bbcscan.io/",
      rpc_url_local: "http://localhost:8545/",
      chain_id: "535037",
      testnet_chain_id: "892272",
      latest_version: "v11.0.1",
      mainnet_version: "v11.0.1",
      testnet_version: "v11.0.1",
      version_number: "2",
      testnet_version_number: "4",
      testnet_evm_explorer_url: "https://testnet.bbcscan.io/",
      evm_explorer_url: "https://bbcscan.io/",
      testnet_butane_explorer_url: "https://testnet.bbcscan.io/",
      butane_explorer_url: "https://bbcscan.io/",
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-3JSJBBPS3L',
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    ...SECTIONS,
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Butane Docs',
        logo: {
          href: '/',
          alt: 'Flamez Logo',
          src: 'img/b icon.png',
        },
        items: [
          {
            position: 'left',
            label: 'Use',
            to: '/use',
          },
          {
            position: 'left',
            label: 'Develop',
            to: '/develop',
          },
          {
            position: 'left',
            label: 'Validators',
            to: '/validate',
          },
          {
            position: 'left',
            label: '$BBC Protocol',
            to: '/protocol',
          },
          {
            position: 'right',
            label: 'Tools',
            to: '/develop/tools',
          },
          {
            position: 'right',
            label: 'Networks',
            to: '/develop/api/networks',
          },
          {
            position: 'right',
            label: 'dApp',
            to: 'https://butane.tech/',
          },
          {
            href: 'https://github.com/BUTANE-Smart-Chain',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Build a Dapp',
                to: '/develop/smart-contracts',
              },
              {
                label: 'Contribute to Butane',
                to: '/use',
              },
              {
                label: 'Become a Validator',
                to: '/validate',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/butanechain',
              },
              {
                label: 'Youtbe Academy',
                href: 'https://www.youtube.com/@ButaneAcademy',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/zk4t92b9MX',
              },
              {
                label: 'Discord Developers',
                href: 'https://discord.gg/je3pBf2h',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Butane_Network',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://medium.com/@butanegas101',
              },
              {
                label: 'Butane GitHub',
                href: 'https://github.com/BUTANE-Smart-Chain',
              },
            ],
          },
        ],
        copyright: `Built with 🔥by the Butane Core Development Team. © ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "Butane Docs", 
          content: "Official Butane Docs. Come discover why we are the the home for native, cross-chain applications."
        },
        {
          name: "author",
          content: "The Butane Core Team @ButaneOrg"
        },
        {
          name: "keywords",
          content: "EMM, cross-chain, Butane SDK, IBC, fast-finality, native, cross-chain applications, EVM on Butane"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: 'DPTADG0ME1',
  
        // Public API key: it is safe to commit it
        apiKey: 'fbbcf85b58f500e5e4d301f9730f3526',
  
        indexName: 'Butanedocs',
  
        contextualSearch: true,
        searchParameters: {},
      },
    }),
};

module.exports = config;
