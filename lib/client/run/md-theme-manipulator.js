var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config((formlyConfigProvider) => {

        const addIfNotPresent = (nodes, attr, val) => {
            angular.forEach((nodes, node) => {
                if (!node.getAttribute(attr)) {
                    node.setAttribute(attr, val)
                }
            })
        };

        const nodeMatches = (node, selector) => {
            const div = document.createElement('div');

            div.innerHTML = node.outerHTML;
            return div.querySelector(selector)
        };

        const getNgModelNodes = (node, skip) => {
            const selectorNot = angular.isString(skip) ? `:not(${skip})` : '';
            const skipNot = ':not([formly-skip-ng-model-attrs-manipulator])';
            const query = `[ng-model]${selectorNot}${skipNot}, [data-ng-model]${selectorNot}${skipNot}`;

            try {
                return node.querySelectorAll(query)
            } catch (e) {
                //this code is needed for IE8, as it does not support the CSS3 ':not' selector
                //it should be removed when IE8 support is dropped
                return getNgModelNodesFallback(node, skip)
            }
        };

        const getNgModelNodesFallback = (node, skip) => {
            const allNgModelNodes = node.querySelectorAll('[ng-model], [data-ng-model]');
            const matchingNgModelNodes = [];

            //make sure this array is compatible with NodeList type by adding an 'item' function
            matchingNgModelNodes.item = function (i) {
                return this[i]
            };

            for (let i = 0; i < allNgModelNodes.length; i++) {
                const ngModelNode = allNgModelNodes[i];

                if (!ngModelNode.hasAttribute('formly-skip-ng-model-attrs-manipulator') && !(angular.isString(skip) && nodeMatches(ngModelNode, skip))) {
                    matchingNgModelNodes.push(ngModelNode)
                }
            }

            return matchingNgModelNodes
        };

        formlyConfigProvider.templateManipulators.preWrapper.push((template, options) => {
            if (angular.isDefined(options.templateOptions.theme)) {
                const node = document.createElement('div');
                const skip = options.extras && options.extras.skipNgModelAttrsManipulator;

                if (skip === true) {
                    return template
                }
                node.innerHTML = template;
                const modelNodes = getNgModelNodes(node, skip);

                if (!modelNodes || !modelNodes.length) {
                    return template;
                }

                addIfNotPresent(modelNodes, 'md-theme', options.templateOptions.theme);

                return node.innerHTML;

            }
            return template;
        });

    });
