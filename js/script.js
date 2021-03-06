
$('.btn').on('click', function(){
    var apiBase = 'https://jsonplaceholder.typicode.com/photos/';


    axios.get(apiBase).then(function(response){
        var imageHTML = response.data.map(function(image){
            //For each item in the loop, output a div containing an image 
            //<img> with the URL as its source and the title as its alt tag, 
            //underneath the <img> tag, a <p> tag with the responses’ title.
            
            //console.log(image);
            
            var img='<img src="' + image.url + '" alt= "' + image.title + '">' + '<br><p>' + image.title +'</p>';
            //console.log(img);

            return $('<div>').addClass('image').html(img);
        });
        $('#tasks').html(imageHTML);
    });
});