import { ReactComponent as GreenPing } from '../assets/icons/GreenPing.svg'
import { Card, ImgContainer } from '../styles/MiniCardStyles'
export default (props) => {
  return (
    <Card>
      <ImgContainer>
        <GreenPing />
      </ImgContainer>

      <p>
        {props.text}
      </p>
      <p>
        {props.date}
      </p>
    </Card>

  )
}
