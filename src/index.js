import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js';
import faker from 'faker';
import {w3cwebsocket as W3CWebSocket} from 'websocket';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

class App extends React.Component {

    componentWillMount() {
        client.onopen = () => {
          console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
          console.log(message);
        };
    }

    onSession1Press() {
        client.send(JSON.stringify({
            type: "message",
            content: 'SES162377998364654613'
        }));
    }

    onSession2Press() {
        client.send(JSON.stringify({
            type: "message",
            content: 'SES162378004957260172'
        }));
    }

    render(){
        return (
            <div style={{width: '299px'}}>
                <div class="ui two item menu">
                    <a class="item" onClick = {() => this.onSession1Press()}>Arshad</a>
                    <a class="item" onClick = {() => this.onSession2Press()}>Prabhakar</a>
                </div>
                <div className="ui container comments">
                    <CommentDetail 
                        author="Myntra bot" 
                        timeAgo=" 4:15PM" 
                        comment="Good morning! How may I help you today?"
                        avatar = {faker.image.avatar()}
                    />
                    <CommentDetail 
                        author="Arshad" 
                        timeAgo="4:16PM" 
                        comment="I am unable to fetch my tracking details for my recent order"
                        avatar = {faker.image.avatar()}
                    />
                    <CommentDetail 
                        author="Myntra bot" 
                        timeAgo="4:18PM" 
                        comment="Please provide your order ID"
                        avatar = {faker.image.avatar()}
                    /> 
                </div>
            </div>
            
        );
    }
    
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);