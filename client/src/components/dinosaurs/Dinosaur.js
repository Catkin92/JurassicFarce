import React, { Fragment } from 'react';
import EditDinosaur from './EditDinosaur';


const Dinosaur = ({ dinosaur, paddocks }) => {

    if (!dinosaur) {
        return "Loading"
    }

    return (
        <Fragment>
            <h4>{dinosaur.name}</h4>
            <img src={dinosaur.species.image} />
            <p>{dinosaur.paddock.name}</p>
            <p>{dinosaur.species.type}</p>
            <p>{dinosaur.species.diet}</p>
            <EditDinosaur paddocks={paddocks} dinosaur={dinosaur} />
        </Fragment>
    )
}

export default Dinosaur;