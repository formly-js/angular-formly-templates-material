// package metadata file for AtmosphereJS

Package.describe({
  name: 'formly:angular-formly-templates-material',
  summary: '(official): Material design templates for angular-formly',
  version: '0.14.3',
  documentation: 'README.md',
  git: 'https://github.com/formly-js/angular-formly-templates-material.git'
});

Package.onUse(function formlyMaterialOnUse(api) {
  var packages = {
    use: [
      'angular@1.0.0',
      'angular:angular-messages@1.4.7',
      'angular:angular-material@1.0.0',
      'formly:angular-formly@7.3.9_3'
    ],
    imply: [
      'angular:angular@1.4.7',
      'angular:angular-messages',
      'angular:angular-material',
      'formly:angular-formly'
    ]
  };

  api.versionsFrom(['METEOR@1.0']);

  api.use(packages.use);
  api.imply(packages.imply);

  api.addFiles([
    'dist/formly-material.js'
  ], 'client');
});
