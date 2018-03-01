//console.log("hey")



jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
//======================= input text 
    
    
    $("#addbutton").click(function(){
      var com = $('#input').val()
      console.log(com)
    $("#review").append("<p style='background-color: #90EE90; text-align: center;margin: auto; width: 60%; border: 3px solid #90EE90; border-radius: 12px; padding: 10px;'>" + com + "</p>")
    
    $("#input").val("")

    })

//======================== function for lists 

//var butt = document.getElementById("one")

// var array = [{con:" <p><a href='#'>Link</a></p><ul><li>Tortilla Meatball Soup</li><li>Saffron Fish Stew with White Beans</li><li>Summer Squash and Corn Chowder</li><li>Broccoli-Cheese Soup</li></ul>", id:"one"},
//                   {con:"2", id:"two"},
//                   {con:"3", id:"three"},
//                   {con:"4", id:"four"},
//                   {con:"5", id:"five"}];

 

// var arr=[$("#one"),$("#two"),$("#three"),$("#four"),$("#five")]


// for (var i = 0 ; i < arr.length; i++) {
  
//       arr[i].click(function(){
//     //console.log()
//    for (var j = 0; j < array.length ; i++) {
//     if ( arr[i].attr("id")=== array[i].id) {
//       //console.log(array[i].con)
//       $("#list").html(array[i].con)
//     }

//     console.log(x.attr("id"))
//   }

  

// });



// }

  //========= lists 

    //for soups con 1
  
    // for healthy con 2 
  
    // for Appetizers  con 3

    // for vegan con 4

    // for salads con 5
     



}); 