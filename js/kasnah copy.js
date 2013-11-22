$(document).ready(function() { 
  // Detects change (e.g. tab to another form field) for any textbox or textarea on page
  $(':text, textarea').change(function() { 
    //
    var ksnhText = "";
    // Concats text user has entered in any textbox/textarea into one string for searching
    $(':text, textarea').each(function() {
      if ($(this).val()) {
        ksnhText += ' ' + $(this).val();
      }
    });
    // Searches all the text user entered against the array of keywords below
    String.prototype.ksnhSearch = function(terms) {
      var regex = new RegExp(terms.join("|"));
      return regex.test(this);
    }

    // Keywords searched for in text that user enters into any textbox or textarea
    // Need to do more keyword research on most commonly used words and phrases
    var ksnhKeywords = ["suicide", "suicidal", "kill myself", "kill yourself", "want to die", "don't want to live", "dont want to live", "committing suicide", "depression help"];
    
    // Debugging
    //console.log(ksnhText);
    console.log(ksnhText.ksnhSearch(ksnhKeywords));

    // If statement evaluating if there's a keyword match
    if (ksnhText.ksnhSearch(ksnhKeywords)) {

      // Stop the form submission since one of the keywords was matched
      $("form").submit(function(event) {
        event.preventDefault();
      });

      // Popup of suicide resources based on user's location or zip/city autocomplete search
      // Location targetting not done yet and needs to be implemented very thoughtfully
      //////////
      //////////
      //////////
      $(function() {
        $( "#dialog" ).dialog();
      });
      

      // Reactivates form if it's been disabled and user keeps clicking as
      // the intent is just to block the initial click and present resources
      $("form").submit(function(event) {
        $("form").unbind('submit');
      });
    }
  }); 
});
