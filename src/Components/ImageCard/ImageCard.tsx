import image from '../../assets/image.png'
import './imageCard.scss'

function ImageCard() {
  return (
    <div className="image-container ">
      <img src={image} alt="profile picture 🔼" width={200} height={150} />
    </div>
  )
}

export default ImageCard