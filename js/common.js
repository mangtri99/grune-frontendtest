const select_disable = $("#cc-trx").prop("disabled");

console.log("select disable" + select_disable);

if(select_disable){
    $("#cc-trx").addClass("grayscale");
}