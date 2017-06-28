import React from 'react';
import lodash from 'lodash';

function CharacterAttributes(props) {
    let list = null;

    if(Object.keys(props.list)){
        const dataList = lodash.toPairs(props.list);
        console.log(dataList)

        list = (
            <ul>
                {dataList.map(item =>
                    <li>{item[0]}: {item[1]}</li>
                )}
            </ul>
        )
    }

    return (
        <div>{list}</div>
    )
}

export default CharacterAttributes;