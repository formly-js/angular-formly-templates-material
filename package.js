var both = ['client', 'server'];
var client = 'client';
var server = 'server';

Package.describe({
    name: "wieldo:angular-formly-templates-material",
    summary: "Material design templates for angular-formly",
    version: "0.0.3",

    documentation: 'README.md',
    git: 'https://github.com/wieldo/angular-formly-templates-material.git'
});

Package.onUse(function (api) {

    var packages = {
        use: [
            'angular@1.0.0',
            'pbastowski:angular-babel@1.0.2',
            'pbastowski:angular2-now@0.3.13',
            'wieldo:angular-formly@7.3.2'
        ],
        imply: [
            'angular:angular@1.4.7',
            'angular:angular-messages@1.4.7',
            'angular:angular-material@0.11.4',
            'wieldo:angular-formly@7.3.2'
        ]
    };

    api.versionsFrom("METEOR@1.0");

    api.use(packages.use);

    api.imply(packages.imply);

    api.addFiles([
        'lib/client/main.js',

        //
        // wrappers
        //

        // input-container
        'lib/client/wrappers/input-container/input-container.js',
        'lib/client/wrappers/input-container/input-container.ng.html',
        // label
        'lib/client/wrappers/label/label.js',
        'lib/client/wrappers/label/label.ng.html',
        // messages
        'lib/client/wrappers/messages/messages.js',
        'lib/client/wrappers/messages/messages.ng.html',

        //
        // types
        //

        // input
        'lib/client/types/input/input.js',
        'lib/client/types/input/input.ng.html',

        // checkbox
        'lib/client/types/checkbox/checkbox.js',
        'lib/client/types/checkbox/checkbox.ng.html',

        // switch
        'lib/client/types/switch/switch.js',
        'lib/client/types/switch/switch.ng.html'

    ], client);

});