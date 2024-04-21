import { useTranslation } from 'react-i18next'
import Card, { museum } from '../../../SharedModules/Components/Card/Card'
import Navbar from '../../../SharedModules/Components/Navbar/Navbar'
import alexandria from '../../../assets/Alexandria National Museum.jpg'
import coptic from '../../../assets/Coptic Museum.jpg'
import egyptianMuseum from '../../../assets/Egyptian Museum .jpg'
import luxor from '../../../assets/Luxor Museum.jpg'
import nubian from '../../../assets/Nubian Museum.jpg'

export default function AllMuseums() {
  const { t, i18n } = useTranslation();
  const data: museum[] = [
    {
      name:t("Egyptian Museum"),
      descroption:t("Located in Cairo, this museum is one of the most famous in the world, featuring a vast collection of artifacts from ancient Egypt."),
      image: egyptianMuseum,
    },
    {
      name:t("National Museum of Egyptian Civilization"),
      descroption:
      t("Located in New Cairo, the National Museum of Egyptian Civilization is a more recent museum that opened in 2016. The NMEC houses a collection of artifacts from all periods of Egyptian history, from prehistory to the present day. "),
      image: "https://vanillapapers.net/wp-content/uploads/2023/01/museum-3-1.jpg",
    },
    {
      name:t("Luxor Museum"),
      descroption:
      t("Situated on the east bank of the Nile River in Luxor, this museum houses a significant collection of artifacts from the area."),
      image: luxor,
    },
    {
      name: t("Coptic Museum"),
      descroption:
      t("Situated in Cairo, this museum is dedicated to the history of Egypt's Coptic Christian community."),
      image: coptic,
    },
    {
      name: t("Nubian Museum"),
      descroption:
      t("Located in Aswan, this museum focuses on the history and culture of the Nubian people."),
      image: nubian,
    },
    {
      name: t("Alexandria National Museum"),
      descroption:
        t("Located in Alexandria, this museum provides insights into the city's history, including artifacts from the Pharaonic."),
      image: alexandria,
    },
  ];
  return <div className='Museums m-0 p-0'>
    <Navbar/>
<div className='bg-white bg-opacity-40 h-full w-full'>

  <div className=' mx-5 px-2 md:p-5 grid lg:grid-cols-3 md:grid-cols-2 '>
    {data.map((el,idx)=><div className='md:p-6 p-2' key={idx}><Card name={el.name} image={el.image} descroption={el.descroption}/></div>)}
  </div>
</div>
  </div>
}
