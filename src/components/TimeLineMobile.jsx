import { Container, Grid } from '../styles/TimeLineMobileStyles'
import MiniCard from './MiniCard'

export default () => {
  return (
    <Container>
      <Grid>

        <MiniCard
          text='Angel Investment Round'
          date='DEC 2021'
        />

        <MiniCard
          text='Initiate the Flag-Ship Movie Development'
          date='JAN 2022'
        />

        <MiniCard
          text='Token & Smart Contract Development'
          date='JAN 2022'
        />

        <MiniCard
          text='Token Generation'
          date='JAN 2022'
        />

        <MiniCard
          text='Wallet Module & API Development'
          date='FEB 2022'
        />

        <MiniCard
          text='Payment and Token Allocation Development'
          date='FEB 2022'
        />

        <MiniCard
          text='Project Beta Launching'
          date=' FEB 2022'
        />

        <MiniCard
          text='Token Project Official Launching FEB 2022'
          date='FEB 2022'
        />

        <MiniCard
          text='Mobile App Development '
          date='MARCH 2022'
        />

        <MiniCard
          text='Gamiﬁcation NFTs '
          date='APR 2022'
        />
      </Grid>

    </Container>
  )
}
