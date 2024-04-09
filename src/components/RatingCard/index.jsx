import "./styles.css";

const RatingCard = ({name, picture, review}) => {
    return (
        <div className="ratingContent">
            <div className="ratingStars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
            <div className="userInfo">
                <img src={picture} alt="reviewer profile pic" />
                <strong>{name}</strong>
            </div>
            <p>{review}</p>
        </div>
    )
}

export default RatingCard;
