let coffee= {
    color:"dark",
    drink: function(){
        console.log("gut gut gut ")
    }
}
let arabiancofeee=Object.create(coffee)
arabiancofeee.taste="bitter"
arabiancofeee.drink()