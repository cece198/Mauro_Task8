
$('.btn').on('click', function(){
    var apiBase = 'https://jsonplaceholder.typicode.com/photos';

    //alert("hi");

    axios.get(apiBase).then(function(response){
    //console.log(response);
        var imageHTML = response.data.map(function(image){
            console.log(image);
        });
    });
});