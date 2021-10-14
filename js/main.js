// this code must be used with jquery
//ajax simple request using post method 
$(function() {
    $('#do').click(function() {
        $.ajax({

            cache: false,
            method: 'GET',
            url: 'https://catfact.ninja/fact',

            beforeSend: function() {
                document.getElementById('loading').style.display = "flex"
            },
            success: function(data, two, three) {
                let dt = JSON.stringify(data.fact)
                    // $('#img').attr('src', data.message)
                $('.fact').text(dt)
            },
            error: function() {

            },
            complete: function(data) {
                setTimeout(function() { document.getElementById('loading').style.display = "none" }, 500)

            }
        })
    })

})