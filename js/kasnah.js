$(document).ready(function() { 
  
  // Detects change (e.g. tab to another form field) for any textbox or textarea on page
  $(':text, textarea').change(function() { 
    //
    var text = "";
    // Concats text user has entered in any textbox/textarea into one string for searching
    $(':text, textarea').each(function() {
      if ($(this).val()) {
        text += ' ' + $(this).val();
      }
    });
    // Searches all the text user entered against the array of keywords below
    String.prototype.textSearch = function(terms) {
      var regex = new RegExp(terms.join("|"));
      return regex.test(this);
    }

    // Keywords searched for in text that user enters into any textbox or textarea
    // Need to do more keyword research on most commonly used words and phrases
    var keywords = ["suicide", "suicidal", "kill myself", "killing myself", "kill yourself",
                    "want to die", "don't want to live", "dont want to live", "committing suicide", 
                    "depression help"];
    
    // For debugging
    //console.log(ksnhText);
    //console.log(text.textSearch(keywords));

    // If statement evaluating if there's a keyword match
    if (text.textSearch(keywords)) {

      // Stop the form submission since one of the keywords was matched
      $("form").submit(function(event) {
        event.preventDefault(); // Disables form for first attempt
        $(this).unbind('submit').submit() // Enables form for next attempt
      });
 
      $(function() {
        // jquery cookie workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375)
        $( "#dialog:ui-dialog" ).dialog( "destroy" );

        // Check for cookie that's set when user clicks "Don't show me this again"
        if ($.cookie('showDialog') == undefined || $.cookie('showDialog') == null || $.cookie('showDialog') != 'false') {

          // Temporary: iframe of another webpage with reliable and quality crisis resouce information
          var page = "http://mefiwiki.com/wiki/ThereIsHelp#Crisis:_Where_to_go_for_help";

          // Set height and width of resource popups
          var winW = $(window).width() - 100;
          var winH = $(window).height() - 40;

          // Popup of suicide resources based on user's location or zip/city autocomplete search
          // Location targetting not done yet and needs to be implemented very thoughtfully
          var $dialog = $('<div></div>')
            .css({overflow:"hidden"})
            .html('<iframe style="border: 0px; overflow: hidden;" src="' + page + '" width="100%" height="100%"></iframe>')
            .dialog({
              title: 'Crisis Support Resources',
              modal: true,
              buttons:{ "Don't show me this again": function() { $(this).dialog("close"); $.cookie('showDialog', 'false', { expires: 3650 });  } },
              height: winH,
              width: winW
            });
          $dialog.dialog();
        }

        // Check for cookie that's set when user clicks "Don't show me this again"
        if ($.cookie('showDialog') == undefined || $.cookie('showDialog') == null || $.cookie('showDialog') != 'false') {

          // Check for cookie that's set so that user only sees screening message once
          if ($.cookie('showPreDialog') == undefined || $.cookie('showPreDialog') == null || $.cookie('showPreDialog') != 'false') {

            // Temporary: iframe of screening message to see if individual is interested in support services
            var prePage = "http://cdn.kasnah.org/screening-message.html";

            var $preDialog = $('<div></div>')
              .css({overflow:"hidden"})
              .html('<iframe style="border: 0px; overflow: hidden;" src="' + prePage + '" width="100%" height="100%"></iframe>')
              .dialog({
                title: 'Hello there!',
                modal: true,
                buttons:{ 
                  "Yes, show me the resources": function() { $(this).dialog("close"); $.cookie('showPreDialog', 'false', { expires: 3650 }); },
                  "No thanks": function() { $(this).dialog("close"); $dialog.dialog("close"); $.cookie('showDialog', 'false', { expires: 3650 }); } },
                height: 400,
                width: 500
              });
            $preDialog.dialog();
          }
        }
      });
    }
  }); 
});
