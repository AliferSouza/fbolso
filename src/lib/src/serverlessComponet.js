import Api from "./Api.js";

export default async function serverlessComponet(url, prop){
  const data = await Api(url);
  return  data[prop]
}