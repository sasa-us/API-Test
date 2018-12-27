$(document).ready(getAll);

function getAll() {
    
    $('#AllInfoButton').click(getAllfromFile);
}

function getAllfromFile() { 
    $.ajax({
        url: 'dummy.json',
        dataType: 'text',
        method: 'get',
        success: function(response){
           console.log('response is ', response);
           insertAlltoDB(response);
        },
        error: function( ){
            console.log('server not response'); 
        }
    });
}//end getAllfromFile()