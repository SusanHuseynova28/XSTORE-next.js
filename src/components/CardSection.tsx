import React from 'react';
import useSWR from 'swr';
import fetcher from '../swr/fetcher';
import Card from './Card';
import CategoryCard from './CategoryCard';

interface CardData {
    id: number;
    title: string;
    price: string;
    image: string;
}

interface CategoryData {
    id: number;
    name: string;
    image: string;
}

interface ApiResponse {
    cards: CardData[];
    categories: CategoryData[];
}

const CardSection: React.FC = () => {
    const { data, error } = useSWR<ApiResponse>('/static/db.json', fetcher);

    if (!data) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    const { cards, categories } = data;

    return (
        <div className="container mx-auto py-8 space-y-16">
            <section>
                <h2 className="text-white font-bold text-4xl mb-4 pl-6">Spotlight. Collection you'll love</h2>
                <div className="flex flex-nowrap justify-center p-6 gap-4">
                    {cards.map((card) => (
                        <div className="w-full ">
                            <Card key={card.id} image={card.image} title={card.title} price={card.price} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-white font-bold text-4xl mb-4 pl-16">All Categories. What's you like</h2>
                <div className="flex  justify-center ">
                    {categories.map((category) => (
                        <div className="w-full">
                            <CategoryCard key={category.id} image={category.image} name={category.name} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CardSection;
