$(document).ready(function(){

    /** These are the animations on the Projects page. */
    $('.project').hide();
    $('#proj-1').show();
    $('#proj-1').addClass('selected-proj');
    $('#circ-1').addClass("selected-circ");
    $(".right-arrow").on('click', function(){
        var proj = $('.selected-proj').attr('id');
        $('.project').hide();
        $('.circle').removeClass('selected-circ');
        $('.project').removeClass('selected-proj');
        if (proj == "proj-1") {
            $('#proj-2').show();
            $('#proj-2').addClass('selected-proj');
            $('#circ-2').addClass("selected-circ");
        } else if (proj == "proj-2") {
            $('#proj-3').show();
            $('#proj-3').addClass('selected-proj');
            $('#circ-3').addClass("selected-circ");
        } else if (proj == "proj-3") {
            $('#proj-1').show();
            $('#proj-1').addClass('selected-proj');
            $('#circ-1').addClass("selected-circ");
        } else if (proj == "proj-4") {
            $('#proj-1').show();
            $('#proj-1').addClass('selected-proj');
            $('#circ-1').addClass("selected-circ");
        } 
    });
    $(".left-arrow").on('click', function(){
        var proj = $('.selected-proj').attr('id');
        $('.project').hide();
        $('.circle').removeClass('selected-circ');
        $('.project').removeClass('selected-proj');
        if (proj == "proj-3") {
            $('#proj-2').show();
            $('#proj-2').addClass('selected-proj');
            $('#circ-2').addClass("selected-circ");
        } else if (proj == "proj-4") {
            $('#proj-3').show();
            $('#proj-3').addClass('selected-proj');
            $('#circ-3').addClass("selected-circ");
        } else if (proj == "proj-1") {
            $('#proj-3').show();
            $('#proj-3').addClass('selected-proj');
            $('#circ-3').addClass("selected-circ");
        } else if (proj == "proj-2") {
            $('#proj-1').show();
            $('#proj-1').addClass('selected-proj');
            $('#circ-1').addClass("selected-circ");
        } 
    });
    $(document).on('keydown', function(e){
        if (e.keyCode == 37) {
            var proj = $('.selected-proj').attr('id');
            $('.project').hide();
            $('.circle').removeClass('selected-circ');
            $('.project').removeClass('selected-proj');
            if (proj == "proj-3") {
                $('#proj-2').show();
                $('#proj-2').addClass('selected-proj');
                $('#circ-2').addClass("selected-circ");
            } else if (proj == "proj-4") {
                $('#proj-3').show();
                $('#proj-3').addClass('selected-proj');
                $('#circ-3').addClass("selected-circ");
            } else if (proj == "proj-1") {
                $('#proj-3').show();
                $('#proj-3').addClass('selected-proj');
                $('#circ-3').addClass("selected-circ");
            } else if (proj == "proj-2") {
                $('#proj-1').show();
                $('#proj-1').addClass('selected-proj');
                $('#circ-1').addClass("selected-circ");
            }
        } else if (e.keyCode == 39) {
            var proj = $('.selected-proj').attr('id');
            $('.project').hide();
            $('.circle').removeClass('selected-circ');
            $('.project').removeClass('selected-proj');
            if (proj == "proj-1") {
                $('#proj-2').show();
                $('#proj-2').addClass('selected-proj');
                $('#circ-2').addClass("selected-circ");
            } else if (proj == "proj-2") {
                $('#proj-3').show();
                $('#proj-3').addClass('selected-proj');
                $('#circ-3').addClass("selected-circ");
            } else if (proj == "proj-3") {
                $('#proj-1').show();
                $('#proj-1').addClass('selected-proj');
                $('#circ-1').addClass("selected-circ");
            } else if (proj == "proj-4") {
                $('#proj-1').show();
                $('#proj-1').addClass('selected-proj');
                $('#circ-1').addClass("selected-circ");
            } 
        } 
    });
    $(".circle").on("click", function() {
        var proj = $(this).attr('id');
        $('.project').hide();
        $('.circle').removeClass('selected-circ');
        $('.project').removeClass('selected-proj');
        if (proj == "circ-1") {
            $('#proj-1').show();
            $('#proj-1').addClass('selected-proj');
            $('#circ-1').addClass("selected-circ");
        } else if (proj == "circ-2") {
            $('#proj-2').show();
            $('#proj-2').addClass('selected-proj');
            $('#circ-2').addClass("selected-circ");  
        } else if (proj == "circ-3") {
            $('#proj-3').show();
            $('#proj-3').addClass('selected-proj');
            $('#circ-3').addClass("selected-circ");  
        } else if (proj == "circ-4") {
            $('#proj-4').show();
            $('#proj-4').addClass('selected-proj');
            $('#circ-4').addClass("selected-circ");        
        }
    });

});