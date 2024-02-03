// document.getElementById('owl').onclick = function(){
//        alert("owl clicked")
//  }

// document.getElementById('owl').addEventListener('click', function(event){
//     //alert("owl clicked again")
//     console.log(event)
// }, false)

 
//  Event propogation

// document.getElementById('images').addEventListener('click', function(event){
//     console.log("clicked inside the ul")
// }, false);


// document.getElementById('owl').addEventListener('click', function(event){
//     console.log(" owl clicked");
//     event.stopPropagation();
// }, false);

// document.getElementById('google').addEventListener('click', function(event){
//     console.log("google clicked")
// event.preventDefault();
// event.stopPropagation();
// }, false);




//+++++++++  onClicked and image is removed +++++++++

document.querySelector('#images').addEventListener('click', function(event){
//console.log(event.target .parentNode);
console.log(event.target .tagName);

if(event.target.tagName ==='IMG'){
    console.log(event.target.id);
    let removeIt = event.target.parentNode;
    removeIt.remove();
}



//removeIt.parentNode.removeChild(removeIt)
}, false)