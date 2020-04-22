function count(num){
  for(let i=1;i<=num;i++){
    currentString = i%3===0&&i%5===0?' fizzbuzz':i%3===0?' fizz':i%5===0?' buzz':'' 
    currentValue = i%3===0&&i%5===0?'fizzbuzz':i%3===0?'fizz':i%5===0?'buzz':i
    $('.js-results').append($("<div class='fizz-buzz-item"+currentString+"'></div>"))
    $('.js-results div').last().append($("<span>"+currentValue+"</span>"))
    console.log(currentValue)
  }
}

$('#number-chooser').click(function(event){
  event.preventDefault();
  $('.js-results').empty()
  $('.js-results').text(count($('#number-choice').val()))
})
