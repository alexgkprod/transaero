function Tabs() {

  var bindAll = function() {
    var tabsItems = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < tabsItems.length ; i++) {
      tabsItems[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var tabsItems = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < tabsItems.length ; i++) {
      tabsItems[i].classList.remove('tabs__link_active');
      var id = tabsItems[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('tabs-content__item_active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('tabs__link_active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('tabs-content__item_active');
  }

  bindAll();
}

var connectTabs = new Tabs();
