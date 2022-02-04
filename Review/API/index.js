function makeAjaxCall(){
    let text = document.getElementById("text");
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            text.innerHTML = this.responseText;
        }
      };
    xhttp.open("GET", "https://dog.ceo/api/breeds/list/all");
    xhttp.send();
}

async function fetchData(){
    let response = await fetch("https://dog.ceo/api/breeds/list/all", {
        method: 'GET'
    });
    let data = await response.json();
    console.log(data.message);

}