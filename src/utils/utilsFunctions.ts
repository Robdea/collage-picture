
export async function handleScroll () {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    if(scrollTop + windowHeight >= fullHeight){
        console.log("Ya se ha legado al final guachito");
    }
}
