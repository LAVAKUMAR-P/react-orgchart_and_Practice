import image from '../../assets/image.png'


function ImageCard() {
  return (
    <div className="bg-green-50 rounded-s-sm max-w-52 p-4 rounded-md hover:cursor-pointer min-w-52">
      <img src={image} alt="profile picture 🔼" width={200} height={100} />
    </div>
  )
}

export default ImageCard