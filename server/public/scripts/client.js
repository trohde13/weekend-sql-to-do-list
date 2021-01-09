console.log('Autobots roll out');

$(document).ready(handleReady);

function handleReady() {
    console.log('in handleReady');
    //call GET
    getListItems();
    //click listeners
    $('#addNote').on('click', postListItems);
    $('#listBody').on('click', '.deleteBtn', deleteItem);

}; //end handleReady

function getListItems() {
    console.log('in getListItems');
    //ajax GET (append list data to DOM)
    $('#listBody').empty();
    $.ajax({
        type: 'GET',
        url: '/listdata'
    }).then(function(response) {
        //append to DOM
        for(let i = 0; i < response.length; i++) {
            $('#listBody').append(`
            <tr data-id=${response[i].id}>
                <td><button class="checkBtn">✔️</td>
                <td>${response[i].priority}</td>
                <td>${response[i].note}</td>
                <td><button class="deleteBtn">DELETE</td>
            </tr>
            `)
        }
    })

}; //end getListItems

function postListItems() {
    console.log('in postListItems');
    //ajax POST (input values)
    let listObject = {
        priority: $('#priorityIn').val(),
        note: $('#noteIn').val()
    }
    $.ajax({
        type: 'POST',
        url: '/listdata',
        data: listObject
    }).then(function(response) {
        $('#priorityIn').val(''),
        $('#noteIn').val('')
        getListItems();
    }).catch(function(error){
        console.log('error in POST');
        alert('unable to add note');
    })

}; //end postListItems

function deleteItem() {
    console.log('deleted item');
    //ajax DELETE
    const id = $(this).closest('tr').data('id');
    console.log(id);

    $.ajax({
        type: 'DELETE',
        url: `/listdata/${id}`
    }).then(function(response){
        getListItems();
    }).catch(function(error){
        alert('error deleting this note');
    })
}; //end deleteItem

function completeItem() {
    console.log('completed list item');
    //ajax PUT


}; //end completeItem

