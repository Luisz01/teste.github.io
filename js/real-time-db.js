const { default: firebase } = require("firebase/compat/app");
var usersList = document.getElementById('usersList');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var addbutton = document.getElementById('addButtom');

addbutton.addEventListener('click', function(){
    create(nameInput.value, ageIput.value);
});

function create(name, age){
    var data = {
        name: name,
        age: age
    };
    return firebase.database().ref().child('users').push(data);
}

firebase.database().ref('users').on('value', function(snapshot){
    usersList.innerHTML = '';
    snapshot.forEach(function(item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name +':' + item.val().age));
        usersList.appendChild(li);
    });
});