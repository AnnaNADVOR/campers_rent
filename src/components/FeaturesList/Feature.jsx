import sprite from "../../assets/icons/sprite.svg";

const Feature = ({ feature }) => {
    return (
        <>        
            {!!feature[1]  &&
                (<div>
                    <svg fill="none" stroke="black">
                        <use href={`${sprite}#${feature[0]}`}></use>
                    </svg>
                    <p>{`${feature[1]} ${feature[0]}`}</p>
                </div> ) 
            }          
        </>        
    )
}

export default Feature; 