$(document).ready(getAll);

function getAll() {
    
    $('#AllInfoButton').click(getAllfromFile);
}

function getAllfromFile() { 
    // alert('hi');
    $.ajax({
        url: 'dummy.json',
        dataType: 'text',
        method: 'get',
        success: function(response){
           console.log('response is ', response);
           console.log('response.length in getAllfromFile()', response.length);
           insertAlltoDB(response);
        },
        error: function( ){
            console.log('server not response'); 
        }
    });
}//end getAllfromFile()

function insertAlltoDB(updatedData) {
    console.log('isndie insert db', updatedData);
    debugger;
    var length = updatedData.length;
    console.log('updatedData.length is ', length);

    console.log('first data is ', updatedData[0].sku);
    // console.log(updatedData[0]['sku']);
    for(var i=0; i<length; i++) {
        var ajaxData = {
            action: 'insertAPI',
            sku: updatedData[i].sku,
            internal_id: updatedData[i].internal_id,
            chino_ca_warehouse: updatedData[i].chino_ca_warehouse,
            summerville_sc_warehouse: updatedData[i].summerville_sc_warehouse
        };

        $.ajax({
            url: url,
            method: 'get',
            dataType: 'json',
            data: ajaxData,
            success: function(response) {
                console.log('insert all ajax CALL response is ', response);
            
            },
            error: function () {
                console.log('server not response');    
            }
        });


    }//end for
    
    
}