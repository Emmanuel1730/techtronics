import { ReactNode } from 'react';
import './Card.css';
interface CardProps {
    Icon: ReactNode;
    title: string;
    // description: string;   
}

const Card: React.FC<CardProps> = ({ Icon, title }) => {
    return(
        <>
            <div className="v-card">
                <div className="v-card-icon">{Icon}</div>
                <div className="v-card-title">{title}</div>
                <div className="v-card-devider"></div>
                {/* <div className="v-card-description">{description}</div> */}
            </div>
        </>
    );
}
 export default Card;