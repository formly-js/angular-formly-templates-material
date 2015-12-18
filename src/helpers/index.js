import angular from 'angular';

/**
 * Sets attribute with optional value.
 * Does not owerwrite.
 * @param {Array} nodes nodes
 * @param {String} attr  attribute name
 * @param {String} val   atrtibute value
 */
function addIfNotPresent(nodes, attr, val) {
  angular.forEach(nodes, (node) => {
    if (!node.getAttribute(attr)) {
      node.setAttribute(attr, val);
    }
  });
}

/**
 * Gets all ngModels from node
 */
function getNgModelNodes(node) {
  const query = '[ng-model], [data-ng-model]';

  return node.querySelectorAll(query);
}

/**
 * Adds attribute with optional value to all elements using ngModel directive.
 * Handles extras.skipNgModelAttrsManipulator
 * And does not overwrite attriutes
 *
 * @param  {String} template  Template provided by formly template manipulator
 * @param  {Object} options   Options provided by formly template manipulator
 * @param  {String} attrName  Attribute's name
 * @param  {String|undefined} Attribute's value (optional)
 * @return {String} result
 */
export function ngModelAttrsManipulator(template, options, attrName, attrValue) {
  const node = document.createElement('div');
  const skip = options.extras && options.extras.skipNgModelAttrsManipulator;

  if (skip === true) {
    return template;
  }
  node.innerHTML = template;
  const modelNodes = getNgModelNodes(node);

  if (!modelNodes || !modelNodes.length) {
    return template;
  }

  addIfNotPresent(modelNodes, attrName, attrValue);

  return node.innerHTML;
}
