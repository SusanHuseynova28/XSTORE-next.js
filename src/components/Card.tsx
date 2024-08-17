import React from 'react';

interface CardProps {
    image: string;
    title: string;
    price: string;
}

const Card: React.FC<CardProps> = ({ image, title, price }) => {
    return (
        <div className="bg-[#3d3d3d] rounded-lg overflow-hidden p-4">
            <div className="overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="rounded-t-lg transform transition-transform duration-300 hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <p className="text-green-400 text-sm mt-2">{price}</p>
            </div>
        </div>
    );
};

export default Card;
