async function sliderFetch() {
    let res = await fetch('http://127.0.0.1:4010/slider') // we can replace 127.0.0.0 to lacalhost
    let data = await res.json();

    console.log(data);
    
}
sliderFetch()