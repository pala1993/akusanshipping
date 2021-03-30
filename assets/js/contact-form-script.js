/*==============================================================*/
// Ferry Contact Form  JS
/*==============================================================*/
(function($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm() {
        // Initiate Variables With Form Content
        var servicesSec = $("#services").val();
        if (servicesSec) {
            var formData = {
                name: $("#name").val(),
                email: $("#email").val(),
                msg_subject: $("#msg_subject").val(),
                phone_number: $("#phone").val(),
                servicesSec: 'servicesSec'
            }
        } else {
            var formData = {
                name: $("#name").val(),
                email: $("#email").val(),
                msg_subject: $("#msg_subject").val(),
                phone_number: $("#phone").val(),
                message: $("#message").val(),
                contact: 'contact-us'

            }
        }

        $.ajax({
            url: "https://0hsd6n4ijh.execute-api.ap-south-1.amazonaws.com/sendmail/sendmail",
            type: "POST",
            data: JSON.stringify(formData),
            dataType: "json",
            cache: false,
            processData: false,
            crossDomain: true,
            success: function(text) {
                if (text == "success") {
                    formSuccess();
                    console.log("error")
                } else {
                    formError();
                    console.log("success")
                    submitMSG(false, text);
                }
            },
            error: function(text) {
                if (text.statusText == "error") {
                    formSuccess();

                }

            }
        });
    }

    function formSuccess() {
        $("#openModal").modal('show');
        $("#name").val('');
        $("#email").val('');
        $("#msg_subject").val('');
        $("#phone").val('');
        $("#message").val('');
        $("#contactForm")[0].reset();
        submitMSG(true, "Mail Successfully Send! Our team will reach you soon!")
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h4 tada animated text-success";
        } else {
            var msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict