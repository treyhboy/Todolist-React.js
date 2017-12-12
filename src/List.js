import React from 'react';
import {List} from 'antd';
import 'antd/dist/antd.css';

const EList = (props) => {

    return(<List
        size="large"
        bordered
        dataSource={props.item}
        renderItem={(val,i)=><List.Item ><span className={val.class} onClick={(event)=>{props.delfun(event.target,i)}} >{val.val}</span></List.Item>}
    />);
}

export default EList;