// $(document).ready(function() {
//     $('div').mouseenter(function() {
//         $(this).animate({
//             height: '+=20px'
//         });
//     })

//     $('div').mouseleave(function() {
//         $(this).animate({
//             height: '-=20px'
//         });
//     });

    $(document).ready(function() {
        // $(this).css('background-color', '#00AAFF');
        // $(this).hide(1000);
        
        $('div').click(function() {
            $("#img").animate({
                height: '+=20px'
            });
    });
});
