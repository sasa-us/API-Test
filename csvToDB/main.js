$(document).ready(getAll);

function getAll() {
    
    $('#AllInfoButton').click(getAllfromFile);
}

function getAllfromFile() { 

    alert('hi');

    $.ajax({
        url: 'dummy.json',
        dataType: 'json',
        method: 'get',
        success: function(response){
            
           console.log('response is ', response);
           
           len = response.length;
           console.log('response.length is', len);
         
    
           insertAlltoDB(response);
        },
        error: function( ){
            console.log('server not response'); 
        }
    });
}//end getAllfromFile()

function insertAlltoDB(updatedData) {
    console.log('isndie insert db', updatedData);
  
    var length = updatedData.length;
    console.log('updatedData.length is ', length);

    // console.log('first sku is ', updatedData[0].sku);
    // console.log('first sku is ', updatedData[0].internal_id);
    // console.log('first sku is ', updatedData[0].chino_ca_warehouse);
    // console.log('first sku is ', updatedData[0].summerville_sc_warehouse);
    // console.log('first sku is ', updatedData[0].wilmer_tx_warehouse);
    // console.log('first sku is ', updatedData[0].sumner_wa_warehouse);
    // console.log('first sku is ', updatedData[0].avenel_nj_warehouse);

    url = 'server.php';
    for(var i=0; i<length; i++) {
        var ajaxData = {
            action: 'insertAPI',
            sku: updatedData[i].sku,
            internal_id: updatedData[i].internal_id,
            chino_ca_warehouse: updatedData[i].chino_ca_warehouse,
            summerville_sc_warehouse: updatedData[i].summerville_sc_warehouse,
            wilmer_tx_warehouse: updatedData[i].wilmer_tx_warehouse,
            sumner_wa_warehouse: updatedData[i].sumner_wa_warehouse,
            avenel_nj_warehouse: updatedData[i].avenel_nj_warehouse
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