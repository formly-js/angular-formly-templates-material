const {
  SetModule, Component, View, State, Inject, bootstrap, options
} = angular2now;

options({
  controllerAs: 'vm'
});

SetModule('demo', [
  'angular-meteor',
  'ui.router',
  'formlyMaterial',
  'hljs'
]).config(['$mdThemingProvider', '$mdIconProvider', ($mdThemingProvider, $mdIconProvider) => {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('green')
    .warnPalette('red')
    .backgroundPalette('grey');

  $mdIconProvider.iconSet('navigation',
    `/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg`);
}]);

@Component({
  selector: 'demo'
})
@View({
  templateUrl: 'client/components/demo/demo.html'
})
@State({
  name: 'demo',
  url: '/demo',
  abstract: true,
  html5Mode: true
})
@Inject(['Menu', '$mdSidenav'])
class DemoComponent {
  constructor(Menu, $mdSidenav) {
    this.$mdSidenav = $mdSidenav;

    this.menu = Menu.get();
  }

  toggleMenu() {
    this.$mdSidenav('left')
      .toggle();
  }
}

bootstrap(DemoComponent);
