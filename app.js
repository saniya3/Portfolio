function func1(){
    var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
    $('#1').addClass('anim');
    $('#1').one(animationEvent, function(event) {
        $('#1').removeClass('anim');
    });
}   

function func2(){
    document.getElementById("skills").scrollIntoView({behavior: 'smooth'});
    var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
    $('#header1').addClass('headerAnim');
    $('#skills2').addClass('contentAnim');
    $('#header1').one(animationEvent, function(event) {
        $('#header1').removeClass('headerAnim');
    });
    $('#skills2').one(animationEvent, function(event) {
        $('#skills2').removeClass('contentAnim');
    });
}

function func3(){
    document.getElementById("projects").scrollIntoView({behavior: 'smooth'});
    var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
    $('#header2').addClass('headerAnim');
    $('#projects2').addClass('contentAnim');
    $('#header2').one(animationEvent, function(event) {
        $('#header2').removeClass('headerAnim');
    });
    $('#projects2').one(animationEvent, function(event) {
        $('#projects2').removeClass('contentAnim');
    });

}

function func4(){
    window.open("https://github.com/saniya3");
}