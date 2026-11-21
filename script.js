 $(document).ready(function () {
  $('.menu-items').hide();
  
  $('.menu-category h4').click(function () {
    $(this).siblings('.menu-items').toggle();
  });
});
  