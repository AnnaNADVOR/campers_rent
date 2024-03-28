import sprite from "../../assets/icons/sprite.svg";

const Feature = ({ feature }) => {
    return (
        <>        
            {!!feature[1]  &&
                (<>
                    <svg fill="none" stroke="black">
                        <use href={`${sprite}#${feature[0]}`}></use>
                    </svg>
                    {`${feature[1]} ${feature[0]}`}
                </> ) 
            }          
        </>        
    )
}

export default Feature; 