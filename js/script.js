
// loader
$(document).ready(function(){
    $(".loader").delay(2000).fadeOut('slow');
  });

// Go to top
var mybutton = document.getElementById('myBtn');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}
function topFunction(){
  // window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
      


//  modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function cancel(){
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
}

function showModal(){
  document.getElementById('id01').style.display='block';
  
}

function showModal2(){
  document.getElementById('id02').style.display='block';
}


// Check testmonials
  
  let leftArrow  = $('.testmonials .fa-chevron-left');  
      rightArrow = $('.testmonials .fa-chevron-right');
  
  function checkClients(){
    if($('.client:first').hasClass('active')){
    leftArrow.fadeOut();
    }else{
    leftArrow.fadeIn();
    }
  
    if($('.client:last').hasClass('active')){
      rightArrow.fadeOut();
      }else{
      rightArrow.fadeIn();
      }
      
  }
  checkClients();
  
  $('.testmonials i').click(function(){
    if($(this).hasClass('fa-chevron-right')){
      $('.testmonials .active').fadeOut(100, function(){
        $(this).removeClass('active').next('.client').addClass('active').fadeIn();
        checkClients();
      });
    }else{
      $('.testmonials .active').fadeOut(100, function(){
        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
        checkClients();
      });
    }
  
  });


// load Arabic Page
function arabicPage() {
  location.replace("index-ar.html")
}

// load English Page
function englishPage() {
  location.replace("index.html")
}



// window.onscroll = function(){

//     if(window.scrollY > 10){

//        document.getElementById('Nav').classList.add('navcolor');

//        document.getElementById('Nav').classList.remove('navbar');

//     }else{
//         document.getElementById('Nav').classList.add('navbar');
//        document.getElementById('Nav').classList.remove('navcolor');

//     }
// }

