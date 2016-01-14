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

  addLink(name, id) {
    this.add(name, 'link', id || name);
  }

  addHeading(name) {
    this.add(name, 'heading');
  }

  addToggle(name) {
    this.add(name, 'toggle');
  }

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
  }

  find(id) {
    
  }

  get() {
    return {
      sections: this.menu
    };
  }
}
