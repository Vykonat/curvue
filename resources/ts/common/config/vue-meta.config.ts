import Vue from 'vue';
import VueMeta from 'vue-meta';
import { APP_NAME, APP_URL } from '../config/app.config';

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

export const defaultMetaOptions = {
  title: 'Loading...',
  titleTemplate: `${APP_NAME} | %s`,
  meta: [
    {
      name: 'robots',
      content: 'INDEX,FOLLOW'
    },
    {
      name: 'keywords',
      content: 'lavuql, vue, boilerplate, laravel, graphql'
    },
    {
      name: 'og:site_name',
      content: `${APP_NAME}`
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:locale',
      content: 'en'
    },
    // TODO: ADD LOGO
    // {
    //   name: 'og:image:url',
    //   content: 'https://chinookwebdesign.ca/images/chinook-web-design-logo.svg'
    // },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: '@_Judicium'
    },
    {
      name: 'twitter:creator',
      content: '@_Judicium'
    },
    {
      name: 'application-name',
      content: `${APP_NAME}`
    },
    {
      name: 'apple-mobile-web-app-title',
      content: `${APP_NAME}`
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-statu-bar-style',
      content: 'default'
    }
  ]
};

export const setMetaInfo = (
  title: string,
  description: string,
  url: string,
  image: string
) => {
  return {
    title,
    description,
    meta: [
      {
        name: 'description',
        content: `${description}`
      },
      {
        name: 'og:title',
        content: `${title}`
      },
      {
        name: 'og:description',
        content: `${description}`
      },
      {
        name: 'og:url',
        content: `${APP_URL}/${url}`
      },
      {
        name: 'og:image:url',
        content: `${image}`
      },
      {
        name: 'twitter:title',
        content: `${title}`
      },
      {
        name: 'twitter:description',
        content: `${description}`
      },
      {
        name: 'twitter:url',
        content: `${APP_URL}/${url}`
      },
      {
        name: 'twitter:image',
        content: `${image}`
      }
    ]
  };
};
