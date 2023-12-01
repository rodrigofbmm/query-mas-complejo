const getlocaltime = async(
    zip: string,
):Promise<string> =>{
    const BASE_URL="http://api.weatherapi.com/v1/current.json?";
    const API_KEY="c5dc536080eb4d0e9b4105931230610";
    const url= `${BASE_URL}Key=${API_KEY}&q=${zip}`;
    const data= await fetch (url);
    if(data.status!==200){
        throw new Error("Errorrrr")
    }
    const respuesta = await data.json();
    return respuesta.location.localtime;
};

export default getlocaltime;