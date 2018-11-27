//check off specific todos
$("ul").on("click", "li",   function(){
   $(this).toggleClass("completed");
});

//delete todos with X
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    }); 
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newTodo = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
    }
});

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});