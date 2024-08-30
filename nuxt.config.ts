// https://nuxt.com/docs/api/configuration/nuxt-config
const getStrapiURL = (env: 'local' | 'dev' | 'staging' | 'prod'): string => {
  const strapiURLs = {
    local: 'http://localhost:1337',
    dev: 'https://strapi-dev.nordbucket.com',
    staging: 'https://strapi-staging.nordbucket.com',
    prod: 'https://strapi.nordbucket.com'
  };

  return strapiURLs[env] || strapiURLs['local'];
};

// Use NODE_ENV as a narrower type
const nodeEnv =
  (process.env.APP_ENV as 'local' | 'dev' | 'staging' | 'prod') || 'local';

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: [
    'nuxt-medusa',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      strapiURL: getStrapiURL(nodeEnv),
      authToken: process.env.AUTH_TOKEN,
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || ''
    }
  },
  plugins: [{ src: '~/plugins/recaptcha', mode: 'client' }],
  typescript: {
    typeCheck: false,
    strict: false
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  medusa: {
    server: true
  },
  i18n: {
    strategy: 'prefix',
    locales: [
      { code: 'en', label: 'English', file: 'en.js' },
      { code: 'de', label: 'German', file: 'de.js' },
      { code: 'fr', label: 'French', file: 'fr.js' },
      { code: 'es', label: 'Spanish', file: 'es.js' }
    ],
    defaultLocale: 'en',
    langDir: 'locale',
    vueI18n: './i18n.config.ts'
  },
  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
});
