import React from 'react';
import {List,Icon,Col} from 'antd';
import 'antd/dist/antd.css';

const EList = (props) => {
    return(<List
        size="large"
        bordered
        dataSource={props.item}
        renderItem={(val,i)=> <List.Item className="Row" >
                                <Col span={10}  >
                                        <span className={val.class} onClick={(event)=>{props.delfun(event.target,i)}} >{val.val}</span>
                                    </Col>
                                    <Col span={1} offset={8}>
                                        {i?<Icon type="up-circle-o" onClick={()=>{props.upfun(i)}} style={{ fontSize: 16, color: '#08c'}} />:"  "}
                                    </Col>
                                    <Col span={1} offset={1} xs={{offset:3}}>
                                        {i===props.item.length-1?" ":<Icon type="down-circle-o" onClick={()=>{props.downfun(i)}} style={{ fontSize: 16, color: '#08c'}} />}
                                    </Col>

                                </List.Item>}
    />);
}

export default EList;