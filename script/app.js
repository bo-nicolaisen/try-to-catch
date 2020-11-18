
myErrorCatch();


function myErrorCatch() {
    try {

        // code error
        // bummer();

        //thrown error 
        //throw "test throw";

        //thrown error with message
        throw new Error('test message');

    }

    catch (err) {

        //document.getElementById("app").innerHTML =err.message; 
        // correct error catching

        if (err.message) {

            document.getElementById("app").innerHTML = "error name: " + err.name + "<br> message: " + err.message;
        }
        else {
            document.getElementById("app").innerHTML = "Error: " + err
        }

    }


}


