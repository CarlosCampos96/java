const getProducts = ()=>
fetch('http://localhost:5000/api/getProductsList?nProducts=10')
.then(response=>response.json())
.then(data => {
    console.log(data.data)

    let prodList = document.getElementsByClassName("product-card col-6 col-d-4")
    
    let end = "</a>",
    mainT = document.getElementById("mainproductlist").innerHTML

    
    console.log(prodList[0].href.innerHTML)

    let category = ["Snickers","Coats","Pants","Jackets"]

   
    for(let i = 0; i<data.data.length; i++){

        let prodL = prodList[0]
        let href = "product.html?id=" + data.data[i]["id"] 
        let begR =  "<a class= \"product-card col-6 col-d-4\" href=" + href + " title=\"View Product\">"
        prodL.getElementsByClassName("imgfit")[0].src = data.data[i]["image"]
        prodL.getElementsByClassName("margintophalf marginbottomnone")[0].innerHTML = data.data[i]["name"]
        prodL.getElementsByClassName("secondary marginnone")[0].innerHTML = "$" + data.data[i]["price"]
        prodL.getElementsByClassName("gray marginnone")[0].innerHTML =data.data[i]["category"].map(d => category[d])

        document.getElementById("mainproductlist").innerHTML =  begR + prodL.innerHTML + end + mainT
        mainT = document.getElementById("mainproductlist").innerHTML


    }
    

    console.log(document.getElementById("mainproductlist"))
    

    
    
});

    

    getProducts()