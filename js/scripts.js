function Ticket(movieTitle, movieTime, ticketPrice) {
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.ticketPrice = ticketPrice;
}

Ticket.prototype.seniorDiscount = function() {
  this.ticketPrice -= 6;
};

Ticket.prototype.matineeDiscount = function() {
  this.ticketPrice -= 2;
};

$(document).ready(function(){

  $('#myCarousel').carousel({
            interval: 2000
        });

$("form#movie1").submit(function(event) {
  event.preventDefault();
  var movieName = $('#movie1-title').text;
  var movieTime = $('select#movie1-time option:selected').val();
  var ticketPrice = 12;
  debugger;

  newTicket = new Ticket(movieName, movieTime, ticketPrice);
  if ($("input#movie1-senior").checked){
    newTicket.seniorDiscount();
  }
  else if (newTicket.movieTime ==="11:00am"){
    newTicket.matineeDiscount();
  }

  $("#ticket-info").text("Your ticket for " + newTicket.movieName + " at " + newTicket.movieTime + "will cost $ " + newTicket.ticketPrice);

});

});
