import './QrCodeComponent.scss'
import qrCodeImg from '../../assets/images/image-qr-code.png'

function QrCodeComponent() {
  return (
    <div className="qr-code-component">
      <img className="image" src={qrCodeImg} alt="image" />
      <p className="title">Improve your front-end skills by building projects</p>
      <p className="subtitle">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default QrCodeComponent
