import React from 'react';
import logement from "../../datas/logement.json";



function Tag() {
    return (
        <div className="tag">
            {logement.map((logement) => {
                return (
                    <p className="element" key={logement.tags}>{logement.tags[1]}</p>
                    
                );
            })}
        </div>)

}

export default Tag;

