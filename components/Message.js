
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components"
import { auth } from "../firebase";
import Anime from 'react-animejs-wrapper'

function Message({user, message}) {
    const [userLoggedIn] = useAuthState(auth);

    const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;


    return (
        <Container>
           <Anime style={{
        backgroundColor: '#ffffff00',
        
      }}
      config={{
        translateY: [0, 20],
        scale: [0.8, 1],
        loop: true,
        duration: 60000,
      }}> 
               <TypeOfMessage>{message.message}<Timestamp>{message.timestamp? moment(message.timestamp).format("LT") : "..."}</Timestamp></TypeOfMessage>
            </Anime>
        </Container>
    );
}

export default Message;

const Container = styled.div`
    margin-top:10px;
`;

const MessageElement = styled.p`
    width:fit-content;
    padding: 15px;
    border-radius: 8px;
    margin:10px;
    min-width:60px;
    padding-bottom: 26px;
    position:relative;
    text-align: right;
`;


const Reciever = styled(MessageElement)`
    text-align:left;
    background-color:whitesmoke;

    `
const Sender = styled(MessageElement)`
    margin-left:auto;
    background-color:#dcf8c6;
`

const Timestamp = styled.span`
    color:gray;
    padding:10px;
    font-size:9px;
    position:absolute;
    bottom:0;
    text-align:right;
    right:0;
`
