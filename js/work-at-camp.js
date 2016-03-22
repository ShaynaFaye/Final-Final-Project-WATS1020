
// ready handler
$(document).on('ready', function() {
    
//Created method that only allows letters and spaces, no numbers:
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Letters only please")
    
  //  Defined a validation object for use on page & 
  //  connected the validation object to an event handler tied to the submit button::
    $( "#request-info" ).validate({
         submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        
        rules: {
            "your-name": {
                required: true,
                maxlength: 128,
                minlength: 2,
                lettersonly: true //used method created above so it may not contain numbers
            },
            "your-email": {
                required: true
            }
            
        }// End rules
    });// End validate function
}); // End .on ready function