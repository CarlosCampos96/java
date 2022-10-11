const getProduct = () =>
    fetch('/api/getProduct?productId=' + window.location.href.split('id=')[1])
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("name").innerText = data.name;
            document.getElementById("brand").innerText = data.brand;
            document.getElementById("partnership").innerText = data.partnership;
            document.getElementById("madeIn").innerText = data.madeIn;
            document.getElementById("description").innerText = data.description;
            document.getElementById("image").src = data.image;
            document.getElementById("price").innerText = data.price;

            let score = data.score;
            console.log(score)

            const nodes = document.getElementById("score").childNodes;
            for(var i=0; i< Math.round(score); i++){
                nodes[i].classList.add("primary");
            }
            nodes[nodes.length - 1].innerText =`${score} of 5`;

            const sizeBtns = document.querySelectorAll(".sizebtns > button");
            Object.keys(data.sizes).forEach(x=>{
                sizeBtns[Number(x)-1].disabled = false
            });
        });



getProduct()