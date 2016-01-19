const { SetModule, Service, Inject } = angular2now;

SetModule('demo');

@Service({
  name: 'Menu'
})
@Inject(['Examples'])
class Menu {
  constructor(Examples) {
    this.menu = [];

    // move it from here
    this.addHeading('basic');
    this.addToggle('types');
    this.addToggle('wrappers');
    this.addHeading('advanced');
  }

  /**
   * Add new menu item
   * @param {String} name  Link's label
   * @param {String} type  Can be heading, toggle or link
   * @param {String|undefined} id  Used in /demo/:id
   */
  add(name, type, id) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new Error(`[Menu] name has to be a string`);
    }

    if (typeof type === 'undefined' || ['toggle', 'link', 'heading'].indexOf(type) === -1) {
      throw new Error(`[Menu] type has to be one of: heading, link, toggle`);
    }

    this.menu.push({
      name,
      type,
      id
    });
  }

  /**
   * Shorthand method to add menu-link
   * @param {String} name
   * @param {String} id
   */
  addLink(name, id) {
    this.add(name, 'link', id || name);
  }

  /**
   * Shorthand method to add menu-heading
   * @param {String} name
   */
  addHeading(name) {
    this.add(name, 'heading');
  }

  /**
   * Shorthand method to add menu-toggle
   * @param {String} name
   */
  addToggle(name) {
    this.add(name, 'toggle');
  }

  /**
   * Add a child to menu-toggle
   * @param {String} parent  Parent menu item id
   * @param {String} name  item's label
   * @param {String} id item's identifier used as value of id parameter
   */
  addChild(parent, name, id) {
    const found = _.find(this.menu, (item) => item.name === parent);

    if (!found) {
      throw new Error(`[Menu] There is no ${parent} available`);
    }

    found.children = found.children || [];

    if (_.find(found.children, (child) => child.name === name)) {
      throw new Error(`[Menu] There is a child ${name} already`);
    }

    found.children.push({
      name,
      id: id || name
    });

    found.children = _.sortBy(found.children, 'name');
  }

  /**
   * Get menu
   * @return {Object}
   */
  get() {
    return {
      sections: this.menu
    };
  }
}
