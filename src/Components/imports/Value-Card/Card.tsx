import './Card.css';
interface CardProps {
    icon: string;
    title: string;
    description: string;   
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return(
        <>
            <div className="v-card">
                <div className="v-card-icon">{icon}</div>
                <div className="v-card-title">{title}</div>
                <div className="v-card-devider"></div>
                <div className="v-card-description">{description}</div>
            </div>
        </>
    );
}
 export default Card;