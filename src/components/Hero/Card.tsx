import "./Card.css";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

function Card({ image, title, description }: CardProps) {
  return (
    <div className="parent">
      <div className="card">

        

        <div className="content-box">
            <img src={image} alt={title} className="card-image" />
          <span className="card-title">{title}</span>

          <p className="card-content">
            {description}
          </p>

          
        </div>

      </div>
    </div>
  );
}

export default Card;