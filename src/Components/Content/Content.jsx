import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getSpecificItems } from '../../Utils/utils'
import "./content.css";

const Content = () => {

    const { ID } = useParams()


    const [data,setData] = useState(getSpecificItems(ID))


    useEffect(() => {
    setData(getSpecificItems(ID))
    }, [ID])
    

   return (
    <div className="content-container">
        <div>
        {data.map((dataum)=>{
        return <div key={dataum.id}>{dataum.content}</div>
      })}
        </div>
    </div>
  );
};

export default Content;
