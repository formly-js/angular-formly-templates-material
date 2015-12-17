import angular from 'angular';

function addIfNotPresent(nodes, attr, val) {
  angular.forEach(nodes, (node) => {
    if (!node.getAttribute(attr)) {
      node.setAttribute(attr, val);
    }
  });
}

function getNgModelNodes(node) {
  const query = "[ng-model], [data-ng-model]";

  return node.querySelectorAll(query)
}

export function ngModelAttrsManipulator(template, options, attrName, attrValue) {
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

  addIfNotPresent(modelNodes, attrName, attrValue);

  return node.innerHTML;
}
