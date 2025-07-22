import './infoCard.css';

interface infoCardProps{
    title: string
    description: string
    image: string
    reverse: boolean
}

const InfoCard: React.FC<infoCardProps> = ({title, description, image, reverse}) => {
    return(
        <div className={`info-card ${reverse ? 'reverse' : ''}`}>
            <img src={image} alt={title} className='info-card-img'/>
            <div className={`info-card-title-desc ${reverse ? 'reverse' : ''}`}>
                <h3 className="info-card-title">{title}</h3>
                <p className="info-card-desc">{description}</p>
            </div>
        </div>
    )
}

export default InfoCard;

