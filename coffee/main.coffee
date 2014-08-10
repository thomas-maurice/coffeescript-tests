hitcount = 0;

hitlink = ->
    hitcount = hitcount + 1
    $('#hitcount').html hitcount
    console.log hitcount

$ -> # Initialization code for jquery
    $('#emptyp').html "The webpage is ready, this is filled with CS !"
    $('#hitlink').click ->
        console.log "Hit !"
        hitlink()
    
    # How to perform an ajax call
    $('#postlink').click ->
        console.log "Posting to /"
        $.ajax
            type: "POST"
            url: '/'
            data: {'glu': 'glu'}
            dataType: 'json'
            success: (data, status, jqxhr) ->
                $('#postresult').html JSON.stringify data
