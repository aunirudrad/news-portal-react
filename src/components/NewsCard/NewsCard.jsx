import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({news}) => {
    const {
        title,
        author,
        image_url,
        details,
        rating,
        total_view
    } = news;

    return (
        <div className="border border-base-300 rounded-lg overflow-hidden mb-6 bg-white">
            {/* Author Header */}
            <div className="flex items-center justify-between p-4 bg-gray-100">
                <div className="flex items-center gap-3">
                    <img 
                        src={author.img} 
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-900">{author.name}</h3>
                        <p className="text-sm text-gray-600">
                            {new Date(author.published_date).toISOString().split('T')[0]}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-200 rounded transition">
                        <FaRegBookmark className="text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded transition">
                        <FaShareAlt className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* News Content */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {title}
                </h2>
                
                {/* News Image */}
                <img 
                    src={image_url} 
                    alt={title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />

                {/* News Details */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {details.substring(0, 250)}...
                </p>

                {/* Read More Link */}
                <a 
                    href="#" 
                    className="text-orange-500 font-semibold text-sm hover:underline inline-block mb-4"
                >
                    Read More
                </a>

                {/* Footer - Rating and Views */}
                <div className="flex items-center justify-between pt-4 border-t border-base-300">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                            <FaStar 
                                key={index}
                                className={`${
                                    index < Math.floor(rating.number) 
                                        ? 'text-orange-500' 
                                        : 'text-gray-300'
                                }`}
                            />
                        ))}
                        <span className="ml-2 text-gray-700 font-semibold">
                            {rating.number}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;