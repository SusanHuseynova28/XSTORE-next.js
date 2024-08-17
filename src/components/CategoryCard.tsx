import React from 'react';

interface CategoryCardProps {
    image: string;
    name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, name }) => {
    return (
        <div className="flex flex-col items-center mt-4 ">
            <img src={image} alt={name} className="rounded-lg w-[250px] h-[150px] transform transition-transform duration-300 hover:scale-110 " />
            <h3 className="text-white text-center font-bold mt-2">{name}</h3>
        </div>
    );
};

export default CategoryCard;
