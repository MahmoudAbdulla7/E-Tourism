import { useNavigate } from "react-router-dom";

export interface museum {
  name: string;
  descroption: string;
  image: string;
}

const Card = ({ image, name, descroption }: museum) => {
  const navigate=useNavigate();
  return (
    <article className="card overflow-hidden rounded-2xl grid shadow-lg">
      <div>
      <img
        className="card__background w-full h-[73vh]"
        src={image}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      />
      </div>
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title text-white text-lg">{name}</h2>
          <p className="card__description text-white mt-3 text-md">
            {descroption}
          </p>
        </div>
        <button onClick={()=>{navigate(`${`/museums/${name.split(" ")[0]}`}`)}} className="card__button">Read more</button>
      </div>
    </article>
  );
};

export default Card;
