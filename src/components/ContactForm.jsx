import {
  Button,
  Checkbox,
  Container,
  Description,
  Form,
  Hr,
  Input,
  Label,
  Section,
  TermsContainer,
  TextArea,
  Title
} from '../styles/ContactFormStyles'

export default () => {
  return (
    <Section>
      <Container>
        <Form>
          <Title>What’s up?</Title>
          <Description>
            Wanna talk with us? Let us know the deal
            and we will message you shortly.
          </Description>
          <Hr />
          <Label required>Contact Mail</Label>
          <Input type='email' placeholder='Enter email address' />
          <Label required>Phone Number</Label>
          <Input type='phone' />
          <Label required>Subject</Label>
          <Input type='text' />
          <Label required>Let us know</Label>
          <TextArea placeholder='Message' />
          <TermsContainer>
            <Checkbox checked />
            <Label>I agree to terms &amp; conditions</Label>
          </TermsContainer>
          <Button>Send</Button>
        </Form>
      </Container>
    </Section>
  )
}
