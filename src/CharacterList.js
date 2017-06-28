import React from 'react';

function CharacterList(props){

    let list = null;

    if(props.list.length){
        list = (
            <ul>
                {props.list.map((character, index) =>
                    (<li key={index}>{character.name}</li>)
                )}
            </ul>
        )
    }

    return (
        <div>{list}</div>
    )
}

export default CharacterList;