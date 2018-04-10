const APPLICATION_URL =
    'https://docs.google.com/forms/d/13nxekUy4RLz84ldQRJ7683I8pIZUY_0PoJVaiqKQ7vc/formResponse'

$('#submitAppBtn').click(function (e) {
    e.preventDefault();

    var $position = $('form input[name="position"]'),
        $name = $('form input[name="name"]'),
        $email = $('form input[name="email"]'),
        $resume = $('form input[name="resume"]'),
        $link = $('form input[name="link"]'),
        hasErrors = false;

    $('.form-error').addClass('is-hidden');

    if ($name.is(':invalid')) {
        hasErrors = true;
        $('#nameError').removeClass('is-hidden');
    }

    if ($email.is(':invalid')) {
        hasErrors = true;
        $('#emailError').removeClass('is-hidden');
    }

    if ($resume.is(':invalid')) {
        hasErrors = true;
        $('#resumeError').removeClass('is-hidden');
    }

    if ($link.is(':invalid')) {
        hasErrors = true;
        $('#linkError').removeClass('is-hidden');
    }

    if (!hasErrors) {
        const form = new FormData();
        form.append('entry.576707614', $position.val());
        form.append('entry.1336788624', $name.val());
        form.append('entry.804589195', $email.val());
        form.append('entry.9110849', $resume.val());
        form.append('entry.1775675393', $link.val());

        window.fetch(APPLICATION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: form
        })
        .then(function() {
            $('#applyModal').removeClass('is-active');
            $('#confirmAppModal').addClass('is-active');
        });
    }
})
