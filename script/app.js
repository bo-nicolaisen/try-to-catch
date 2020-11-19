

// load your data
//let myFetchedData=loadData('https://dog.ceo/api/breeds/image/random');

let myFetchedData=loadData('https://dog.ceo/api/breeds/image/random');



//Load Data function
function loadData(apiUrl){

    console.log("fetching data");
   

    fetch(apiUrl)

    .then(   (response) => {
      // wait for fetch to complete

      if (!response.ok) {
        throw Error(response.statusText);
    }

        return response.json();

      }
      )
      
      .then(    (data) => {
        // do something with 'data' 

        buildView(data.message,"Dagens Hund");
      
      })


      .catch( (err) => {
        // do something with 'error' 

        showError(err);
      
      }

      );
}



// dom setup
// get the Dom element to work within



function buildView(myImgUrl,myHeadline){
  let app=document.getElementById("app");

  let myTitle=document.createElement("h2");

  myTitle.innerText=myHeadline;
   
let dogImg=document.createElement("img");
dogImg.src=myImgUrl;

app.appendChild(myTitle);
app.appendChild(dogImg);

}

function showError(myError){
console.log("Error handling: "+myError);
  buildView("http://placekitten.com/200/300","hunden blev spist af:");
   // document.getElementById("app").innerHTML=myError;

}



   

