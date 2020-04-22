$('.thumbnail').click(function(e){
  const eSrc = $(e.target).is('a')?$(e.target).find('img').attr('src'):e.target.src;
  const eAlt = $(e.target).is('a')?$(e.target).find('img').attr('alt'):e.target.alt;
  $('.hero img').attr('src',eSrc);
  $('.hero img').attr('alt',eAlt);
});

