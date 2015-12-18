import angular from 'angular';

import runs from './runs';
import wrappers from './wrappers';
import types from './types';

const ngModuleName = 'formlyMaterial';

angular.module(ngModuleName, ['ngMessages', 'ngMaterial', 'formly'])
  .config(['formlyConfigProvider', (formlyConfigProvider) => {
    const configs = [runs, wrappers, types];

    configs.forEach((config) => {
      let i = 0;
      for (; i < config.length; i++) {
        config[i](formlyConfigProvider);
      }
    });
  }]);

export default ngModuleName;
