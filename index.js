
const data =  async (city) => {
     const result=await fetch(`own weather api link please`);
     return await result.json();
} 
 const button=document.getElementById("button");
 const input=document.querySelector("input");

 const show = (city, region, country, temperature) => {
    const output = document.getElementById("output");

    output.innerHTML = `
        <h2>${city}</h2>
        <p>${region}, ${country}</p>
        <p>Temperature: ${temperature}°C</p>
    `;
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