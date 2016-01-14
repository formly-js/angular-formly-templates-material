const { Component, View } = angular2now;

@Component({
  selector: 'menu-toggle',
  bind: {
    sectionName: '=',
    sectionState: '=',
    sectionChildren: '=',
    onOpen: '&?',
    onClose: '&?'
  }
})
@View({
  templateUrl: 'client/components/menu-toggle/menu-toggle.html'
})
class MenuToggleComponent {
  constructor() {
    this.opened = false;
  }

  open() {
    this.opened = true;
    this.onOpen();
  }

  close() {
    this.opened = false;
    this.onClose();
  }

  toggle() {
    if (this.opened === true) {
      this.close();
    } else {
      this.open();
    }
  }

  isOpen() {
    return this.opened === true;
  }
}
