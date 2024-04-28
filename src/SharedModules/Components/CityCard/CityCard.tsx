import React from 'react'
import styles from './CityCard.module.css'
import { FaTrashCan } from 'react-icons/fa6'
import { FaRegEdit } from 'react-icons/fa'
interface Prop{
    name:string;
    image:string
}

export default function CityCard({name,image}:Prop) {
  return (
    <>
   
<div className=''>
<div className={`${styles.ag_courses_item}`}>
      <a href="#" style={{backgroundImage: "url(" + `${image}` + ")"}} className={styles.ag_courses_item_link}>
        <div className={styles.ag_courses_item_bg}  />
        <div className={`text-main ${styles.ag_courses_item_title}`}>
          {name}
        </div>
        <div className={` flex items-center ${styles.ag_courses_item_date_box}`}>
        <FaRegEdit className={styles.edit}/>
          <span className={` ${styles.ag_courses_item_date}`}>
          <FaTrashCan className={` mx-2 ${styles.del}`} />
          </span>
        </div>
      </a>
    </div>
</div>

    </>
  )
}
