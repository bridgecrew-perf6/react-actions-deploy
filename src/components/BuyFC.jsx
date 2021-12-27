import {
  Asset,
  AssetsContainer,
  AssetTitle,
  Button,
  BuyFCSection,
  Container,
  Content,
  DownloadContainer,
  DownloadTitle,
  TextContainer,
  Title,
  Text
} from '../styles/BuyFCStyles'
// Images
import { ReactComponent as DocIcon } from '../assets/icons/DocIcon.svg'
import { ReactComponent as AssetIcon } from '../assets/icons/AssetIcon.svg'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <BuyFCSection>
      <Container>
        <TextContainer>
          <Title>Participate in FILMCOIN</Title>
          <Content>The Motion Picture Digital Currency Of Choice</Content>
        </TextContainer>
        <Button><Link to='/payment1'>Buy Now</Link></Button>
        <DownloadContainer>
          <DownloadTitle>Download</DownloadTitle>
          <AssetsContainer>
            <Asset
              href='https://drive.google.com/file/d/1mU5OsYmFkbLFzzmRoJdFamhrLkXJ-qkK/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <DocIcon />
              <AssetTitle>Whitepaper</AssetTitle>
            </Asset>
            <Asset
              href='https://drive.google.com/file/d/1roBPvKxMsZi1e3_g6lR3wD2EMMyQeTbx/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AssetIcon />
              <AssetTitle>Deck</AssetTitle>
            </Asset>
          </AssetsContainer>
        </DownloadContainer>
        <Text>
          The FilmCoin Utility Token will be created on the
          28th February 2022 using the ERC-20 standard and
          deployed to the Ethereum blockchain acting as a native
          currency for the Darkhorse Film Studios decentralized
          application program (DAPP)
        </Text>
      </Container>
    </BuyFCSection>
  )
}
