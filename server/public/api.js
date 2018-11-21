(function() {
    const baseURL = 'http://localhost:8080/apiphotos';
    var savedPhoto = {};
    // define a utility function callAPI 
    async function callAPI(method, uri, params, body) {
        jsonMimeType = {
            'Content-type': 'application/json'
        }
        try {
            /*  Set up our fetch.
             *   'body' to be included only when method is POST
             *   If 'PUT', we need to be sure the mimetype is set to json
             *      (so bodyparser.json() will deal with it) and the body
             *      will need to be stringified.
             *   '...' syntax is the ES6 spread operator.
             *      It assigns new properties to an object, and in this case
             *      lets us use a conditional to create, or not create, a property
             *      on the object. (an empty 'body' property will cause an error
             *      on a GET request!)
             */

            var response = await fetch(baseURL + uri, {
                method: method, // GET, POST, PUT, DELETE, etc.
                ...(method == 'POST' ? { body: body } : {}),
                ...(method == 'PUT' ? { headers: jsonMimeType, body: JSON.stringify(body) } : {})
            });
            return response.json(); // parses response to JSON
        } catch (err) {
            console.error(err);
            return "{'status':'error'}";
        }
    }

    // Calls the specific function when click a button
    // create
    document.querySelector('#create').addEventListener("click", () => {
        //  validate that there's a file selected.
        let input = document.querySelector('input[type="file"]')
        if (input.value) {
            let data = new FormData()
            data.append('image', input.files[0]);
            data.append('title', 'My API Test Title');
            data.append('description', 'This is an AJAX API test');
            data.append('resort', 'This is an AJAX API resort');
            callAPI('POST', '/', null, data)
                .then((photo) => {
                    console.log('\n\n***************************\ncreate results:');
                    console.log(photo);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            alert("please select an image file first");
        }
    });
    // list
    document.querySelector('#list').addEventListener("click", () => {
        callAPI('GET', '/', null, null)
            .then((list) => {
                console.log('\n\n***************************\nlist results:');
                console.log(list);
                testId = list[0]._id;
            })
            .catch((err) => {
                console.error(err);
            });

    });
    // read
    document.querySelector('#read').addEventListener("click", () => {
        let photoId = document.querySelector('input[type="text"]')
        if (photoId.value) {
            //console.log(photoId.value);
            callAPI('GET', '/' + photoId.value, null, null)
                .then((photo) => {
                    savedPhoto = photo; // keep a handle to the created photo object
                    console.log('\n\n***************************\nfind results:');
                    console.log(photo);
                })
                .catch((err) => {
                    console.error(err);
                });
        }

    });
    // update
    document.querySelector('#update').addEventListener("click", () => {
        let photoId = document.querySelector('input[type="text"]')
        if (photoId.value) {
            callAPI('PUT', '/' + photoId.value, null, savedPhoto)
                .then((photo) => {
                    console.log('\n\n***************************\nupdate results:');
                    console.log(photo);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    });
    //delete
    document.querySelector('#delete').addEventListener("click", () => {
        let photoId = document.querySelector('input[type="text"]')
        if (photoId.value) {
            callAPI('DELETE', '/' + photoId.value, null, null)
                .then((result) => {
                    console.log('\n\n***************************\ndelete result:');
                    console.log(result);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    });
})();


/* alternative for reference

window.onload = function() {
    var createPhoto = document.getElementById("create");
    var listPhoto = document.getElementById("list");
    var readPhoto = document.getElementById("read");
    var updatePhoto = document.getElementById("update");
    var deletePhoto = document.getElementById("delete");

    createPhoto.addEventListener("click", createf);

    function createf() {
        var x = new XMLHttpRequest();
        x.open("GET", "https://google.com", true);
        x.send();

        // set up listener for the response
        x.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                alert(this.response);
            }
        }

    }
}
*/