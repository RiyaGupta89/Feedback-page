import React from "react";
import {Container, FeedbackContainer, FeedbackButton, MessageBox, Text, Textarea, SendFeedbackContainer, SendFeedbackButton, ContactUsContainer, ContactUs, Icons, Icon, Box, Span} from "./styles/Feedback.styled"


function Feedback() {
  return (
    <Container>
      <FeedbackContainer>
        <FeedbackButton>Feedback</FeedbackButton>
      </FeedbackContainer>
      <MessageBox>
        <Text>
          Please tell us what do you think, any kind of feedback is highly
          appreciated.
        </Text>
        <Textarea placeholder="Your Feedback"></Textarea>
        <SendFeedbackContainer>
          <SendFeedbackButton>Send Feedback</SendFeedbackButton>
        </SendFeedbackContainer>
      </MessageBox>

      <ContactUsContainer>
        <ContactUs>Contact Us</ContactUs>
      </ContactUsContainer>
      <Icons>
        <Box>
          <Icon src="/mail.png" alt="icon" />
          <Span>we will give email@gmail.com</Span>
        </Box>
        <Icon src="/twitter.svg" alt="icon"/>
        <Icon src="/instagram.svg" alt="icon"/>
        <Icon src="/linkedin.svg" alt="icon" />
      </Icons>
    </Container>
  );
}

export default Feedback;

