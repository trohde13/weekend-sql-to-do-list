console.log('Autobots roll out');

$(document).ready(handleReady);

function handleReady() {
    console.log('in handleReady');
    //call GET
    getListItems();
    //click listeners
    $('#addNote').on('click', postListItems);
    $('#listBody').on('click', '.deleteBtn', deleteItem);
    $('#listBody').on('click', '.checkBtn', completeItem);
 
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
            let notes = response[i];
            let $tr = $(`<tr></tr>`);

            if(notes.completed === '✓') {
                $tr = $(`<tr class="completedRow"></tr>`);
            }

            $tr.data("notetask", notes);
            $tr.append(`<td><td><button class="checkBtn">✔️</td></td>`);
            $tr.append(`<td>${notes.completed}</td>`);
            $tr.append(`<td>${notes.priority}</td>`);
            $tr.append(`<td>${notes.note}</td>`);
            $tr.append(`<td><button class="deleteBtn">DELETE</td>`);


            $("#listBody").append($tr);
            // $('#listBody').append(`
            // <tr data-id=${response[i].id}>
            //     <td><button class="checkBtn">✔️</td>
            //     <td>${response[i].completed}</td>
            //     <td class="row">${response[i].priority}</td>
            //     <td class="row">${response[i].note}</td>
            //     <td><button class="deleteBtn">DELETE</td>
            // </tr>
            // `)
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
    const notetask = $(this).closest('tr').data('notetask');
    console.log(notetask);

    $.ajax({
        type: 'DELETE',
        url: `/listdata/${notetask.id}`
    }).then(function(response){
        getListItems();
    }).catch(function(error){
        alert('error deleting this note');
    })
}; //end deleteItem

function completeItem() {
    console.log('completed list item');
    
    //ajax PUT
    const notetask = $(this).closest('tr').data('notetask');
    console.log(notetask);
    const dataToSend = {
        completed: true
    }

    $.ajax({
        type: 'PUT',
        url: `/listdata/${notetask.id}`,
        data: dataToSend
    }).then(function(response) {
        console.log('task completed');
        
        getListItems();
        
    }).catch(function(error) {
        alert('error updating')
    })
    
    
}; //end completeItem

// function markCompleted() {
//     console.log('marked as completed');

//     $(this).closest('tr').removeClass('row');
//     $(this).closest('tr').addClass('completedRow');

    
    
// }; //end markCompleted

