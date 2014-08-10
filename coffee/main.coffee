hitcount = 0;

socket = io.connect("127.0.0.1:8080")

hitlink = ->
    hitcount = hitcount + 1
    $('#hitcount').html hitcount
    console.log "Hit " + hitcount + " times"

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
            success: (data, status) ->
                $('#postresult').html "Result = " + JSON.stringify data
                $('#cmpresult').html if data.value > 50
                        "Greater than 50"
                    else if data.value is 50
                        "Equals 50"
                    else
                        "Lower than 50"
    
    setInterval ->
            socket.emit "random"
        ,1000
    
    socket.on "number", (num) ->
        $('#wsrand').html(num);
        
