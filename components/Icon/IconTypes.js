import Icon from './Icon'
import Apartment from '../../images/icons/svg/apartment-icon.svg'
import SquareMeters from '../../images/icons/svg/square-meters-icon.svg'
import Rooms from '../../images/icons/svg/room-icon.svg'
import CarSpot from '../../images/icons/svg/car-spot-icon.svg'
import Furniture from '../../images/icons/svg/furnitureIcon-icon.svg'
import YouTube from '../../images/icons/svg/youtube-icon.svg'
import Facebook from '../../images/icons/svg/facebook-icon.svg'
import Instagram from '../../images/icons/svg/instagram-icon.svg'
import Address from '../../images/icons/svg/address-icon.svg'
import Phone from '../../images/icons/svg/phone-icon.svg'
import Chat from '../../images/icons/svg/chat-icon.svg'
import Whatsapp from '../../images/icons/svg/whatsapp-icon.svg'

export default function IconTypes({type}){
  switch(type){
    case 'Apartment': return <Icon type={Apartment} />
    case 'SquareMeters': return <Icon type={SquareMeters} />
    case 'Rooms': return <Icon type={Rooms} />
    case 'CarSpot': return <Icon type={CarSpot} />
    case 'Furniture': return <Icon type={Furniture} />
    case 'YouTube': return <Icon type={YouTube} />
    case 'Facebook': return <Icon type={Facebook} />
    case 'Instagram': return <Icon type={Instagram} />
    case 'Address': return <Icon type={Address} />
    case 'Phone': return <Icon type={Phone} />
    case 'Chat': return <Icon type={Chat} />
    case 'Whatsapp': return <Icon type={Whatsapp} />
    default: return <Icon type="default" />
  }
}