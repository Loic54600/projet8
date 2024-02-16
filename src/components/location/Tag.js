import React from 'react';

function Tag({logement}) {

	const tags = logement.tags;

    return (
        <div className="tag">
            <p className="element" key={logement.tags}>{logement.tags[1]}</p>
        </div>)

}

export default Tag;

