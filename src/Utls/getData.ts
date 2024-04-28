import axios from "axios";
import { baseUrl } from "./BaseUrl";

export const getAllCities=(path:string,fn:([])=>void)=>{
    axios.get(`${baseUrl}${path}/`).then((res)=>{
      // console.log(res.data);
      fn(res.data.cities)
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }