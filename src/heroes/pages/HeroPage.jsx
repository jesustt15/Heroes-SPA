import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";


export const HeroPage = () => {
  
  const {id} = useParams();

  const hero = getHeroById(id);
  const navigate = useNavigate();

  console.log(hero);

  if(!hero){
    <Navigate to="/marvel" />
  }

  const onNavigateBack = () =>{
    navigate(-1);
  }
  const imageUrl = `/assets/heroes/${ id }.jpg`;
  
  
  return (
    <div className="row mt-5 animate__animated animate__fadeInLeftBig">
      <div className="col-4">
        <img src={imageUrl} alt={hero.superhero} 
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
      
      <ul className="list-group list-group-flushed">
        <li className="list-group-item">Alter ego: {hero.alter_ego}</li>
        <li className="list-group-item">Publisher: {hero.publisher}</li>
        <li className="list-group-item">First Appearence: {hero.first_appearance}</li>
      </ul>
      <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>
        </div>
    </div>
  )
}
