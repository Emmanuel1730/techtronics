import './ServiceCard.css';

interface ServicesCardProps{
    image: string
    title: string
    description?: string;
    reverse: boolean;
}

const ServiceCard: React.FC<ServicesCardProps> = ({image, title, description, reverse}) => {
    return(
        <div className={`service-card ${ reverse ? 'reverse' : ''}`}>
            <img src={image} alt={title} className='service-image'/>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{description}</p>
        </div>
    );
}

export default ServiceCard;