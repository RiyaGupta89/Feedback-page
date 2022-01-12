import styled from "styled-components";

export const Container = styled.div`
  background-color: #142424;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 60px;
  @media (max-width:513px) {
      padding: 30px;
  }
`;

export const FeedbackButton = styled.button`
  background-color: #00bd57;
  color: white;
  font-size: 37px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  border: none;
`;

export const FeedbackContainer = styled.div``;

export const MessageBox = styled.div``;

export const Text = styled.h3`
  font-weight: 400;
  font-size: 28px;
  color: #dbe2e4;
`;

export const Textarea = styled.textarea`
  backgroung-color: #c5ecc5;
  width: 100%;
  height: 150px;
  padding: 8px;
  font-size: 18px;
  color: #000000;
  outline: none;
  border: none;
`;

export const SendFeedbackContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`;

export const SendFeedbackButton = styled.button`
  background-color: #2d7d9f;
  margin-top: 15px;
  border: none;
  padding: 4px 9px;
  font-size: 18px;
  color: #02120a;
  font-weight: 500;
`;

export const ContactUs = styled.button`
  background-color: #00bd57;
  color: white;
  font-size: 37px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  border: none;
  @media (max-width:454px) {
      margin-top: 15px;
  }
`;

export const ContactUsContainer = styled.div``;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 25px;
`;

export const Span = styled.span`
color: #000;
background-color: #C4C4C4;
opacity: 0.6;
padding: 5px;
font-weight: 500;
`;

export const Box = styled.div`
display: flex;
align-items: center;
`;

export const Icon = styled.img`
margin-top: 15px;
margin-bottom: 15px;
background-color: white;
width: 30px;
height: 30px;
`
