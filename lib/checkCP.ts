export const checkCP  = async (cp: string): Promise<boolean> =>{
    const BASE_URL="https://zip-api.eu/api/v1/info";
    const url= `${BASE_URL}/ES-${cp}`;
    const data= await fetch (url);
    return data.status === 200;
}