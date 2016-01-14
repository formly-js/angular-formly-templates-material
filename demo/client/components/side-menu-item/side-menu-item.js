const { Component, View, Inject } = angular2now;

@Component({
  selector: 'side-menu-item',
  replace: true,
  bind: {
    section: '='
  }
})
@View({
  templateUrl: 'client/components/side-menu-item/side-menu-item.html'
})
@Inject(['$animate', '$element'])
class SideMenuItemComponent {
  constructor($animate, $element) {
    this.$animate = $animate;
    this.$element = $element;

    this.opened = false;
  }

  onOpen() {
    this.$animate.addClass(this.$element, 'opened');
    this.opened = true;
  }

  onClose() {
    this.$animate.removeClass(this.$element, 'opened');
    this.opened = false;
  }
}
