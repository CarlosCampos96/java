const getProduct = ()=>
fetch('http://localhost:5000/api/getProduct?productId=1')
.then(response=>response.json())
.then(data => {
    console.log(data)
    document.getElementById("name").innerText = data.name;
    document.getElementById("brand").innerText = data.brand;
    document.getElementById("partnership").innerText = data.partnership;
    document.getElementById("madeIn").innerText = data.madeIn;
    document.getElementById("description").innerText = data.description;
    document.getElementById("image").src = data.image;
    document.getElementById("price").innerText = data.price;
    
}
    );

    

getProduct()

document.get