const { Component, View, Inject } = angular2now;

@Component({
  selector: 'menu-link',
  bind: {
    sectionId: '=',
    sectionName: '=',
  }
})
@View({
  templateUrl: 'client/components/menu-link/menu-link.html'
})
@Inject(['$mdSidenav'])
class MenuLinkComponent {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;

    this.componentId = 'left';
  }

  close() {
    if (!this.$mdSidenav(this.componentId).isLockedOpen()) {
      this.$mdSidenav(this.componentId).close();
    }
  }
}
