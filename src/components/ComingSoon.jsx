import {
  Section,
  Container,
  Link,
  TexBox,
  Title,
  Text,
  ReadMoreBtn
} from '../styles/ComingSoonStyles'

export default () => {
  return (
    <Section>
      <Container>
        <TexBox>
          <Title>
            COMING SOON
          </Title>
          <Text>
            <span>TALES FROM THE TRAP </span>is a gritty no holds barred look at the world faced by many UK streets and council estates youths of today. A tale of gang culture, knife crime and cross county drug deals, however more than that TALES FROM THE TRAP is a story of brotherhood, loyalty and a friendship that runs deeper than any family.
          </Text>
          <Link
            href='https://talesfromthetrap.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ReadMoreBtn>Read More</ReadMoreBtn>
          </Link>
        </TexBox>
      </Container>
    </Section>
  )
}
