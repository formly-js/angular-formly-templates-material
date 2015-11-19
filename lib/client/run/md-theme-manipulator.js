var {SetModule} = angular2now;

SetModule('formlyMaterial')
    .config(['formlyConfigProvider', (formlyConfigProvider) => {

        function addIfNotPresent(nodes, attr, val) {
            angular.forEach(nodes, (node) => {
                if (!node.getAttribute(attr)) {
                    node.setAttribute(attr, val)
                }
            });
        }

        function nodeMatches(node, selector) {
            const div = document.createElement('div');

            div.innerHTML = node.outerHTML;
            return div.querySelector(selector)
        }

        function getNgModelNodes(node) {
            const query = "[ng-model], [data-ng-model]";

            return node.querySelectorAll(query)
        }

        formlyConfigProvider.templateManipulators.preWrapper.push((template, options) => {
            if (angular.isDefined(options.templateOptions.theme)) {
                const node = document.createElement('div');
                const skip = options.extras && options.extras.skipNgModelAttrsManipulator;

                if (skip === true) {
                    return template
                }
                node.innerHTML = template;
                const modelNodes = getNgModelNodes(node);

                if (!modelNodes || !modelNodes.length) {
                    return template;
                }

                addIfNotPresent(modelNodes, 'md-theme', options.templateOptions.theme);

                return node.innerHTML;

            }
            return template;
        });

    }]);
