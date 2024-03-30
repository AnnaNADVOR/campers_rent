import sprite from "../../assets/icons/sprite.svg";

const ReviewsTab = ({ reviews }) => {
    
    return (
        <div>
            <ul>
                {reviews.map(review => (
                    <li key={review.reviewer_name}>
                        <p>{review.reviewer_name}</p>
                        <ul>
                            {Array.from({ length: review.reviewer_rating }, (v, i) => i + 1).map(i => (
                                <li key={`${i} ${review.reviewer_name}`}>
                                    <svg width="16px" height="16px" >
                                        <use href={`${sprite}#star`}></use>
                                    </svg>
                                </li>))                                
                            }
                            {review.reviewer_rating < 5 && (
                                Array.from({ length: 5 - review.reviewer_rating }, (v, i) => i + 1).map(i => (
                                    <li key={i}>
                                        <svg width="16px" height="16px" >
                                            <use href={`${sprite}#starWhite`}></use>
                                         </svg>
                                    </li>
                                )))
                            }
                        </ul>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ReviewsTab; 