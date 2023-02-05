/* Reyn Hisamoto */

eventHandler = function(event) {
    
}

$(function(){
    $("#Order").click(function(){
        var notes = document.getElementById("notes").value
        if(notes.includes("vegan")){
            alert("Warning, This Product Contains Dairy")
        } else {
            $(this).hide()
            $("#notes").hide()
            $("h2").hide()
            $(".topping").hide()
            $(".complete").show()


            
            var ele = document.getElementsByTagName('input');
            
            for(i = 0; i < ele.length; i++) {
                
                if(ele[i].type="radio") {
                
                    if(ele[i].checked)
                        document.getElementById("orderTopping").innerHTML
                                = "Toppings: " + ele[i].id + "<br>";
                }

                
            }

            var numToppings = document.getElementById("quantity")
            document.getElementById("orderQuantity").innerHTML = "Quantity: " + numToppings.value
        
            document.getElementById("orderNotes").innerHTML = "Notes: " + notes
        }
    });


    $("a").click(function(){
        document.getElementById("monthbtn").innerHTML = (this).id
    })

});