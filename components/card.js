import React, { Component } from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card

class card extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {
            text,
            img,
            value,
            name,
            onClick,
            selectedColor
        } = this.props
        let isSelected = (value === name)
        return (
            <Card
                hoverable
                onClick={() => onClick(name)}
                className={'container'}
                style={{
                    width: 120,
                    borderRadius: 0,
                    margin: '5px',
                    borderColor : (isSelected ? selectedColor : '#D8E0EA')  
                }}
                bodyStyle={{ 
                    padding: '2.5px 5px',
                    background : (isSelected ? selectedColor : '#D8E0EA')
                }}
                cover={<img alt="example" style={{ borderRadius: 0 }} src={img} />}
            >
                <div
                    style={{
                        display : 'flex',
                        flex : 1,
                        justifyContent : 'space-between',
                        alignItems : 'center',
                        
                    }}
                >
                    <p style={{
                        fontSize : 15,
                        margin : 0,
                        verticalAlign : 'center',
                        color : (isSelected ? 'white' : 'black')
                    }}>{text}</p>
                    {isSelected && (
                    <Icon type="check-circle" theme="filled" style={{color : '#D8E0EA'}}/>
                    )}
                </div>
            </Card>
        );
    }
}

export default card;
