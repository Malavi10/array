function slicebtnFunc() {
    const places = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"];
    const myFav = places.slice(1,3);
    document.getElementById('slicebtn').innerHTML = myFav;
}

function splicebtnFunc(){
    const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"];
    place.splice(2,0,"Delhi");
    document.getElementById('splicebtn').innerHTML = place;    
}

function popbtnFunc(){
    const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"]; 
    place.pop();
    document.getElementById('popbtn').innerHTML = place;    
}

function pushbtnFunc(){
    const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"]; 
    place.push("Assam");
    document.getElementById('pushbtn').innerHTML = place;    
}

function sortbtnFunc(){
    const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"]; 
    place.sort();
    document.getElementById('sortbtn').innerHTML = place;    
}

function reversebtnFunc(){
    const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"]; 
    place.reverse();
    document.getElementById('reversebtn').innerHTML = place;    
}

function srbtnFunc(){
    const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"]; 
    place.sort();
    place.reverse();
    document.getElementById('srbtn').innerHTML = place;    
}

function conbtnFunc(){
    const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"]; 
    const country = ["America", " Italy", " France", " Belgium"];
    const pc = place.concat(country);
    document.getElementById('conbtn').innerHTML = pc;    
}

function shiftbtnFunc(){
    const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"]; 
    place.shift();
    document.getElementById('shiftbtn').innerHTML = place;    
}

function unsbtnFunc(){
    const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"]; 
    place.unshift("Andhra Pradesh ");
    document.getElementById('unsbtn').innerHTML = place;    
}

// function reversebtnFunc(){
//     const place = ["Kerala ", "Tamilnadu ", "Karnataka ", "Rajasthan ", "Gujarat"]; 
//     place.reverse();
//     document.getElementById('reversebtn').innerHTML = place;    
// }