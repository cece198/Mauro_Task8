
$('.btn').on('click', function(){
    var apiBase = 'https://jsonplaceholder.typicode.com/photos/';


    axios.get(apiBase).then(function(response){
    //console.log(response);
        var imageHTML = response.data.map(function(image){
            console.log(image);

            //For each item in the loop, output a div containing an image <img> with the URL as its source 
                //and the title as its alt tag, underneath the <img> tag, a <p> tag with the responses’ title.

            var $title = $('<h2>').html('Title: ');

            $('#tasks').html($title);

            //title
            //thumbnailUrl
            //return $('<img>')
        });
        //$('#tasks').html('loading.....');
    });
});