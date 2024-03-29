import sprite from "../../assets/icons/sprite.svg";

const ReviewsTab = ({ reviews }) => {
    
    return (
        <div>
            <ul>
                {reviews.map(review => (
                    <li kye={review.reviewer_name}>
                        <p>{review.reviewer_name}</p>
                        <ul>
                            {
                                [...Array(5)].map(i => (
 console.log([...Array(5)])
                                ))
                                
                            }
                        </ul>
                        <svg width="16px" height="16px" stroke="red">
                            <use href={`${sprite}#starWhite`}></use>
                        </svg>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ReviewsTab; 