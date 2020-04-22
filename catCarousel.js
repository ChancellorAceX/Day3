/*$('.thumbnail').on('click', e => {
  console.log(e.target);
});
*/

$('.thumbnail').click(function(e){
    $('.hero img').replaceWith($(e.target).clone())})

