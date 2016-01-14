const { Component, View } = angular2now;

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
class MenuLinkComponent {
  
}
