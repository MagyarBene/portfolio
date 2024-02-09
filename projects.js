import {getData} from "./utils.js";
const url = "https://raw.githubusercontent.com/MagyarBene/projects-json/main/projects-json"
export const projects = ()=>{
    getData(url, renderProjects)
}

function renderProjects(data){
    console.log(data);
}
