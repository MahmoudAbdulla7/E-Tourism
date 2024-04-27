import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "./BaseUrl";

 const postDataHock =()=>{

    const [isLoading, setIsLoading] = useState<boolean>();
    const navigate =useNavigate();

    const postData=(formData:any,endPoint:string,navigateTo:string):any=>{
        setIsLoading(true);
        axios.post(`${baseUrl}${endPoint}`,formData).then((res)=>{

          if (endPoint.split("/")[1]=="login") {
            localStorage.setItem("userData",JSON.stringify(res.data));
          };
          
        toast.success(res.data.message);
        navigate(navigateTo);
        setIsLoading(false);

      })
      .catch((err)=>{

        toast.error(err.response.data.message||"Network Error");
        console.log(err.response);
        
        setIsLoading(false);

      });
    };

    return {postData,isLoading};
};

export default postDataHock;