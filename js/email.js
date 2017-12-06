(function () {
    emailjs.init("user_PKw0oXna90j2YAkJOVIhM");
})();

$('#sendMsgBtn').click(function (e) {
    e.preventDefault();

    var name = $('form input[name="name"]').val(),
        email = $('form input[name="email"]').val(),
        message = $('form textarea[name="message"]').val();

    if (name !== '' && email != '' && message !== '') {
        emailjs.send("gmail", "contact_template", {
            "email": email,
            "name": name,
            "message": message
        })
        .then(function(response) {
            window.location.href = 'index.html';
        }, function(err) {
            console.log("FAILED. error=", err);
        });
    }
})
