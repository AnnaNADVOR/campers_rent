import sprite from "../../assets/icons/sprite.svg";
import {
    TabContainer,
    ReviewsItem,
    ReviewerContainer,
    NameLabel,
    ReviewerName,
    RatingList,
} from "./ReviewsTab.styled";
const ReviewsTab = ({ reviews }) => {
    
    return (
        <TabContainer>
            <ul>
                {reviews.map(review => (
                    <ReviewsItem key={review.reviewer_name}>
                        <ReviewerContainer>
                          <NameLabel>
                            {review.reviewer_name.slice(0,1)}
                            </NameLabel>
                            <div>
                                <ReviewerName>{review.reviewer_name}</ReviewerName>
                                <RatingList>
                                    {Array.from({ length: 5 }, (v, i) => i + 1).map(i => (
                                <li key={`${i} ${review.reviewer_name}`}>
                                    <svg width="16px" height="16px" >
                                        
                                        <use href={i <= review.reviewer_rating ? `${sprite}#star` : `${sprite}#starWhite`}></use>
                                    </svg>
                                </li>))                                
                            }
                            {/* {Array.from({ length: review.reviewer_rating }, (v, i) => i + 1).map(i => (
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
                            } */}
                        </RatingList>  
                            </div>
                        
                        </ReviewerContainer>
                        
                        <p>{review.comment}</p>
                    </ReviewsItem>
                ))}
            </ul>
        </TabContainer>
    )

}

export default ReviewsTab; 