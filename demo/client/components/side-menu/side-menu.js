const { Component, View } = angular2now;

@Component({
  selector: 'side-menu',
  bind: {
    menu: '='
  }
})
@View({
  templateUrl: 'client/components/side-menu/side-menu.html'
})
class SideMenuComponent {
  constructor() {
  }
}
