function openTab(evt, tabName) {
    
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabs-content__item" and hide them
    tabcontent = document.getElementsByClassName('tabs-content__item');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tabs__link" and remove the class "active"
    tablinks = document.getElementsByClassName('tabs__link');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' tabs__link_active', '');
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' tabs__link_active';
};
