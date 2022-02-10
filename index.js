//USANDO ASYNC/AWAIT, FETCH, TRY/CATCH
const boton = document.getElementById("boton");
boton.addEventListener("click", getPhotos)
async function getPhotos(){
    const url = "https://dog.ceo/api/breeds/image/random";
    try{
        for(i = 1; i <= 2; i++){
            let img = document.getElementById(`img${i}`);
            let waitFetch = await fetch(url);
            let fetchParseado = await waitFetch.json();
            img.setAttribute("src", fetchParseado.message);
            
        };
    }catch(error){
        console.error(error);
    };
}
getPhotos();
