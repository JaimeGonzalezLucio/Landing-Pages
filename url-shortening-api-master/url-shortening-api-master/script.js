const input = document.getElementById('link')
const btn = document.getElementById('btn')
const original_link = document.getElementById('original_link')
const short_link = document.getElementById('short_link')
const link__container = document.querySelector('.link__container_hidden')

btn.onclick = function() {
    if (input.value == "") {
        alert("Input vacio")
    }else{
        link__container.classList.add("link__container")
        GetLink(input.value)
    }
}

const GetLink = async(link) => {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        const data = await response.json()
        
        original_link.innerHTML = data.result.original_link;
        short_link.href = data.result.full_short_link;    
        short_link.innerHTML = data.result.full_short_link;    

        
        
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}
