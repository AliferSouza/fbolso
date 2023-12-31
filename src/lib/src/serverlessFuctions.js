import Api from "./Api.js";

export default async function serverlessFuctions(url, prop){
  const data = await Api(url);

  return  Function("return " + data[prop]);


}