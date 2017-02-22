$(document).ready(function() {
    $('#modal-open').magnificPopup({
        showCloseBtn: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        },
        removalDelay: 250,
        mainClass: 'mfp-fade'
    });
});

$('#modal-close').on( "click", function() {
    $.magnificPopup.close();
});