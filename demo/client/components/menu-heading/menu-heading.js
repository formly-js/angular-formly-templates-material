const { Component, View } = angular2now;

@Component({
  selector: 'menu-heading',
  bind: {
    name: '='
  }
})
@View({
  templateUrl: 'client/components/menu-heading/menu-heading.html'
})
class MenuHeadingComponent {
  constructor() {
  }
}
