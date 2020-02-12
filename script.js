$(() => {
    $('form').submit((e) => {
        e.preventDefault();
        $.ajax({
            url: './createURL.php',
            type: 'POST',
            dataType: 'json',
            data: $('form').serialize(),
            success: (response) => {
                if(response) {
                    alert('form submitted!');
                }
            },
            error: (err) => {
                alert('Fail to submit form');
            }
        });
    });
})            