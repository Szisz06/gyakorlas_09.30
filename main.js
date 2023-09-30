import {terveim} from "./adatok.js"
import ListaMegjelenit from "./megjelenit.js";


$(function () {
    const szülElem=$(".tartalom")
    new ListaMegjelenit(terveim, szülElem)
}
)


