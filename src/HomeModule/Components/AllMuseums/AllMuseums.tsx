import { useSelector } from 'react-redux'
import Card from '../../../SharedModules/Components/Card/Card'
import Navbar from '../../../SharedModules/Components/Navbar/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../Utls/BaseUrl';
import { useEffect, useState } from 'react';

export default function AllMuseums() {
  const [destinations, setDestinations] = useState([]);
  // const { monuments } = useSelector((state: any) => state.MonumentsReducer);
  // const { cities } = useSelector((state: any) => state.CitiesReducer);

 let {cityId}= useParams();
 console.log(cityId);
 


 const getByCityId=()=>{
  axios.get(`${baseUrl}city/${cityId}/destination`).then((res) => { 
    console.log(res?.data?.touristDestinations);
    setDestinations(res?.data?.touristDestinations);
   }).catch((err) => { 
    console.log(err);
    })
 }
  
 const getAll=()=>{
  axios.get(`${baseUrl}destinations`).then((res) => { 
    console.log(res?.data?.touristDestinations);
    setDestinations(res?.data?.touristDestinations);
   }).catch((err) => { 
    console.log(err);
    })
 }
  
  useEffect(() => {
    if(cityId)
      {
        return getByCityId();
      }
     return getAll();
  }, [])
  
 
  return <div className='Museums m-0 p-0'>
    <Navbar/>
<div className='bg-white bg-opacity-40 h-full w-full'>
  <div className=' mx-5 px-2 md:p-5 grid lg:grid-cols-3 md:grid-cols-2'>
    {destinations.map((monument:any)=><div className='md:p-6 p-2' key={monument?.id}><Card monument={monument} /></div>)}
  </div>
</div>
  </div>
}
