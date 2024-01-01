import { useNavigate } from "./lib/@prix.js";
import Pages from "./page/index.js";
import Components from "./Components/index.js";
import Config from "../@prix_config.js";
import api from "./api.js"



async function main() {
    const Data = await api()
    useNavigate("/dashboard/", { Pages, Components, Data, Config });
}
main()





