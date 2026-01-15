
const data =  async (city) => {
     const result=await fetch(``);
     return await result.json();
} 

const arr=[];
 const button=document.getElementById("button");
 const input=document.querySelector("input");
 const add=document.getElementById("btn2")
 const show = (city, region, country, temperature) => {
    const output = document.getElementById("output");
        const output2 = document.getElementById("output2");
    arr.push({name:city,region:region,country:country,temperature:temperature})
output.innerHTML=""
 arr.map( (val)=> { output.innerHTML += `
        <h2>${val.name}</h2>
        <p>${val.region}, ${val.country}</p>
        <p>Temperature: ${val.temperature}°C</p>
    `;})

};


button.addEventListener("click", async () => {
    const city = input.value.trim();
    if (!city) return;

    const res = await data(city);
    console.log(res);

    show(
        res.location.name,
        res.location.region,
        res.location.country,
        res.current.temp_c
    );
    
    
    input.value = "";


});


