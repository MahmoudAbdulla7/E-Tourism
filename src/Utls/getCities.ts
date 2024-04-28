import axios from "axios";
import { baseUrl } from "./BaseUrl";

export const getAllCities=(fn:([])=>void)=>{
    axios.get(`${baseUrl}city/`).then((res)=>{
      // console.log(res);
      fn(res.data.cities)
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }