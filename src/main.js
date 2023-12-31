import { useNavigate } from "./lib/@prix.js";
import Pages from "./page/index.js";
import Components from "./Components/index.js";
import Config from "./config.js";
import api from"./api.js"

const Data = await api()




 useNavigate("/dashboard/", { Pages, Components, Data, Config});





