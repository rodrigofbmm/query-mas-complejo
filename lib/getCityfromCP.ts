const getCityfromCP = async(
    zip: string,
):Promise<string> =>{
    const BASE_URL="https://zip-api.eu/api/v1/info";
    const url= `${BASE_URL}/ES-${zip}`;
    const data= await fetch (url);
    if(data.status!==200){
        throw new Error("Errorrrr")
    }
    const respuesta = await data.json();
    return respuesta.place_name;
};

export default getCityfromCP;