$(document).ready(()=> {
    $.ajax({
        url:"http://localhost:1337/products",
        type:"GET",
        success: (result) => console.log(result),
        error: (error) => console.error(error)
    })
})