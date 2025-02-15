import './ServiceCard.css';

interface ServicesCardProps{
    image: string
    title: string
}

const ServiceCard: React.FC<ServicesCardProps> = ({image, title}) => {
    return(
        <div className="service-card">
            <img src={image} alt={title} className='service-image'/>
            <h3 className="service-text">{title}</h3>
        </div>
    );
}

export default ServiceCard;