$(document).ready(function() {

  // Escaping Cross-Site Scripting (XSS)

    // const escape =  function(str) {
    //   let div = document.createElement('div');
    //   div.appendChild(document.createTextNode(str));
    //   return div.innerHTML;
    // };

  // Showing or hiding the received messages on the messages page
  $('#show-messages-button').on('click', function() {
    $('.previous-message').slideToggle('fast');
  });

  // Showing or hiding the received messages on the user's page

  $('#show-messages-button').on('click', function() {
    $('#received-messages').slideToggle('fast');
  });

  // Showing or hiding the user's favourites on the user's page

  $('#show-favorites-button').on('click', function() {
    $('#favorites-container').slideToggle('fast');
    $('#favorites-filter-button').slideToggle('fast');
  });

  // Adding to favourites on clicking the add to favourites icon

  $('.add-favorite-form').on('submit', function(event) {
    event.preventDefault();
    const icon = $(event.target).find('.button-favorite i');
    $(icon).removeClass("far fa-heart").addClass("fas fa-heart");
    // $(event.target).toggleClass("fas fa-heart far fa-heart");

    const currentListing = $(event.target).closest('.one-listing');
    const listingId = $(currentListing).attr("id");

    $.ajax({
      url: `/favorites/add_favorite/${listingId}`,
      method: 'POST',
    })
      // .then(console.log('working'));
  });

  // Removing from favourites on clicking the remove from favourites icon

  // Add empty container and render favourites to .then

  $('.remove-favorite-form').on('submit', function(event) {
    event.preventDefault();
    const icon = $(event.target).find('.button-favorite i');
    $(icon).removeClass("fas fa-heart").addClass("far fa-heart");
    // $(event.target).toggleClass("fas fa-heart far fa-heart");

    const currentListing = $(event.target).closest('.one-listing');
    const listingId = $(currentListing).attr("id");

    $.ajax({
      url: `/favorites/remove_favorite/${listingId}`,
      method: 'POST',
    })
      // .then(() => console.log(listingId))
      // .then(() => $(`#${listingId}`).hide('fast'));
  });

  // Showing an alert when a message is sent

  $('#new-message-button').on('click', function() {
    alert('Your message has been sent!');
  });

});
