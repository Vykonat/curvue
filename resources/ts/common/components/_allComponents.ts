import Vue from 'vue';
import { upperFirst, camelCase } from 'lodash';

const requireComponent = require.context('./', true, /\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(`${fileName}`);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/.*\//, '').replace(/\.vue$/, ''))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});
