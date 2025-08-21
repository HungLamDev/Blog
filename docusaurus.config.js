// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus Tailwind Shadcn/ui',
  tagline: 'Templates Docusaurus with Tailwind CSS and Shadcn/ui',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'namnguyenthanhwork',
  projectName: 'docusaurus-tailwind-shadcn-template',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  future: { experimental_faster: true },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main',
          docItemComponent: '@theme/ApiItem'
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' }
      }
    ]
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: { alt: 'Docusaurus Tailwind Shadcn/ui Logo', src: 'img/logotest.png' },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/series/deployment', label: 'Deployment', position: 'left' },
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Tutorial' },
        { label: 'Petstore API', position: 'left', to: '/docs/category/petstore-versioned-api' },
        {
          'href': 'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template',
          'position': 'right',
          'className': 'header-github-link',
          'aria-label': 'GitHub repository'
        },
        { to: '/docs/web-development', label: 'Web Development', position: 'left' },
        { to: '/docs/front-end/intro', label: 'Front-End', position: 'left' }
      ]
    },
    docs: { sidebar: { autoCollapseCategories: true, hideable: true } },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'Tutorial', to: '/docs/intro' }] },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus'
            },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X', href: 'https://x.com/docusaurus' }
          ]
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' }
          ]
        }
      ],
      copyright: `© ${new Date().getFullYear()} - Blog <a href="https://github.com/HungLamDev" style="font-weight: bold;" target="_blank">Hưng Lâm</a>`
    },
    prism: {
      additionalLanguages: [
        'ruby',
        'csharp',
        'php',
        'java',
        'powershell',
        'json',
        'bash',
        'dart',
        'objectivec',
        'r'
      ]
    }
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        docsRouteBasePath: '/docs',
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ],
    'docusaurus-theme-openapi-docs'
  ],

  plugins: [
    ['./src/plugins/tailwind-config.js', {}],

    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          petstore_versioned: {
            specPath: 'api-swagger/petstore.yaml',
            outputDir: 'docs/petstore_versioned',
            sidebarOptions: { groupPathsBy: 'tag', categoryLinkSource: 'tag' },
            version: '2.0.0',
            label: 'v2.0.0',
            baseUrl: '/docs/petstore_versioned/swagger-petstore-yaml',
            downloadUrl:
              'https://raw.githubusercontent.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/main/api-swagger/petstore.yaml',
            versions: {
              '1.0.0': {
                specPath: 'api-swagger/petstore-1.0.0.yaml',
                outputDir: 'docs/petstore_versioned/1.0.0',
                label: 'v1.0.0',
                baseUrl: '/docs/petstore_versioned/1.0.0/swagger-petstore-yaml',
                downloadUrl:
                  'https://raw.githubusercontent.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/main/api-swagger/petstore-1.0.0.yaml'
              }
            }
          }
        }
      }
    ],

    ['ideal-image', { quality: 70, max: 1030, min: 640, steps: 2, disableInDev: true }],

    // Plugin blog chính
    [
      './src/plugins/blog-plugin',
      {
        id: 'main-blog',
        path: 'blog',
        routeBasePath: '/blog',
        blogTitle: 'Blog',
        blogDescription: 'Blog description is here ...',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List blog',
        postsPerPage: 6,
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**'
        ],
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ],

    // Plugin riêng cho series Deployment
    [
      './src/plugins/blog-plugin',
      {
        id: 'deployment-series',
        path: 'series/deployment',
        routeBasePath: '/series/deployment',
        blogTitle: 'Web Deployment ',
        blogDescription: 'Series chia sẻ kiến thức về phát triển website (Web Development)',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List deployment',
        postsPerPage: 6,
        include: ['**/*.md', '**/*.mdx'],
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/series/deployment',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ],
    [
      './src/plugins/blog-plugin',
      {
        id: 'web-development',
        path: 'series/web-development',
        routeBasePath: '/series/web-development',
        blogTitle: 'Web Deployment ',
        blogDescription: 'Series chia sẻ kiến thức về phát triển website (Web Development)',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List deployment',
        postsPerPage: 6,
        include: ['**/*.md', '**/*.mdx'],
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/series/deployment',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ],
    [
      './src/plugins/blog-plugin',
      {
        id: 'front-end',
        path: 'series/front-end',
        routeBasePath: '/series/front-end',
        blogTitle: 'front-end ',
        blogDescription: 'Series chia sẻ kiến thức về phát triển website (Web Development)',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List deployment',
        postsPerPage: 6,
        include: ['**/*.md', '**/*.mdx'],
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/series/deployment',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ],
    [
      './src/plugins/blog-plugin',
      {
        id: 'templates',
        path: 'series/templates',
        routeBasePath: '/series/templates',
        blogTitle: 'templates ',
        blogDescription: 'Series chia sẻ kiến thức về phát triển website (Web Development)',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List deployment',
        postsPerPage: 6,
        include: ['**/*.md', '**/*.mdx'],
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/series/deployment',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ],
    [
      './src/plugins/blog-plugin',
      {
        id: 'framework',
        path: 'series/framework',
        routeBasePath: '/series/framework',
        blogTitle: 'framework',
        blogDescription: 'Series chia sẻ kiến thức về phát triển website (Web Development)',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List deployment',
        postsPerPage: 6,
        include: ['**/*.md', '**/*.mdx'],
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/series/deployment',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ],
    [
      './src/plugins/blog-plugin',
      {
        id: 'thuat-toan',
        path: 'series/thuat-toan',
        routeBasePath: '/series/thuat-toan',
        blogTitle: 'thuat-toan',
        blogDescription: 'Series chia sẻ kiến thức về phát triển website (Web Development)',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List deployment',
        postsPerPage: 6,
        include: ['**/*.md', '**/*.mdx'],
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/series/deployment',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
      }
    ],
    [
      './src/plugins/blog-plugin',
      {
        id: 'about',
        path: 'about',
        routeBasePath: 'about',
        blogTitle: 'about ',
        blogDescription: 'Series chia sẻ kiến thức về phát triển website (Web Development)',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List deployment',
        postsPerPage: 6,
        include: ['**/*.md', '**/*.mdx'],
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/series/deployment',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ]
  ]
}

export default config
