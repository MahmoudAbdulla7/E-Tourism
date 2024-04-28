import React from 'react'
import styles from './CityCard.module.css'
import { FaTrashCan } from 'react-icons/fa6'
import { FaRegEdit } from 'react-icons/fa'

export default function CityCard() {
  return (
    <>
   



<div className={styles.ag_format_container}>
  <div className={styles.ag_courses_box}>

    <div className={`${styles.ag_courses_item}`}>
      <a href="#" className={styles.ag_courses_item_link}>
        <div className={styles.ag_courses_item_bg}  />
        <div className={styles.ag_courses_item_title}>
          UX/UI Web-Design&nbsp;+ Mobile Design
        </div>
        <div className={` flex items-center ${styles.ag_courses_item_date_box}`}>
        <FaRegEdit className={styles.edit}/>
          <span className={` ${styles.ag_courses_item_date}`}>
          <FaTrashCan className={` mx-2 ${styles.del}`} />
          </span>
        </div>
      </a>
    </div>

    {/* <div className={styles.ag_courses_item}>
      <a href="#" className={styles.ag_courses_item_link}>
        <div className={styles.ag_courses_item_bg}  />
        <div className={styles.ag_courses_item_title}>
          UX/UI Web-Design&nbsp;+ Mobile Design
        </div>
        <div className={styles.ag_courses_item_date_box}>
          Start:
          <span className={styles.ag_courses_item_date}>
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div className={styles.ag_courses_item}>
      <a href="#" className={styles.ag_courses_item_link}>
        <div className={styles.ag_courses_item_bg}  />
        <div className={styles.ag_courses_item_title}>
          UX/UI Web-Design&nbsp;+ Mobile Design
        </div>
        <div className={styles.ag_courses_item_date_box}>
          Start:
          <span className={styles.ag_courses_item_date}>
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div className={styles.ag_courses_item}>
      <a href="#" className={styles.ag_courses_item_link}>
        <div className={styles.ag_courses_item_bg}  />
        <div className={styles.ag_courses_item_title}>
          UX/UI Web-Design&nbsp;+ Mobile Design
        </div>
        <div className={styles.ag_courses_item_date_box}>
          Start:
          <span className={styles.ag_courses_item_date}>
            04.11.2022
          </span>
        </div>
      </a>
    </div> */}

  </div>
</div>

    </>
  )
}
