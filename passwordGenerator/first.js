let name = "tarkeshwar" ;

function home(){
    let sirName = "gupta"
    let name = "saksham"
    function namaste(){
        console.log("Hello, by", name, sirName);
    }
    return namaste;
}


let greet = home();
greet();