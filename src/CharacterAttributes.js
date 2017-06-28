import React from 'react';
import lodash from 'lodash';

function CharacterAttributes(props) {
    let list = null;

    if(Object.keys(props.list)){
        const dataList = lodash.toPairs(props.list);

        list = (
            <ul>
                {dataList.map((item, index) =>
                    <li key={index}><strong>{item[0]}</strong>: {item[1]}</li>
                )}
            </ul>
        )
    }

    return (
        <div>{list}</div>
    )
}

export default CharacterAttributes;