import '../styles/GraffitiTfttStyles.css'

export default () => {
  return (
    <div className='graffitiContainer'>
      <h2 className='gcTitle'>EXPERIENCE THE <span>TRAP</span></h2>
      <h3>FROM THE INSIDE OUT</h3>
      <div className='reelContainer'>
        <div className='reel' />
        <div className='imagesContainer'>
          <div className='image'>
            <span>
              MEET THE STARS
            </span>
          </div>
          <div className='image'>
            <span>
              BE IN THE MOVIE
            </span>
          </div>
          <div className='image'>
            <span>
              PRIVATE MOVIE SHOWING
            </span>
          </div>
          <div className='image'>
            <span>
              WORK ON THE RED CARPET
            </span>
          </div>
        </div>
        <div className='reel' />
      </div>
    </div>
  )
}
