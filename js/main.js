
// ready handler
$(document).on('ready', function() {
    
    
    

    
  //  Define a validation object for use on your page:
    $( "#request-info" ).validate({
        // 3. Connect the validation object to an event handler tied to the submit button:
         submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        
        rules: {
            "your-name": {
                required: true,
                maxlength: 128,
                minlength: 2,
                lettersonly: true //used method created below so it may not contain numbers
            },
            "your-email": {
                required: true
            }
            
        }// End rules
    });// End validate function
    
        //Create method that only allows letters and spaces, no numbers:
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Letters only please")
           
           //alert tied to submit button click.
  $('#submit').on('click', function() {
     $('#success').show();
       });
           
     // Bootstrap Tooltips
    $('label span.glyphicon').tooltip();
    
});// End .on ready function