import React from 'react';
import { Link } from 'react-router';

const NewsCardDetails = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        category_id
    } = news;

    return (
        <div className="border border-base-300 rounded-lg overflow-hidden bg-white">
            {/* News Image */}
            <div className="p-4">
                <img 
                    src={image_url} 
                    alt={title}
                    className="w-full h-auto object-cover rounded-lg mb-6"
                />

                {/* News Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {title}
                </h2>

                {/* Author Info */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <span>Published on:</span>
                    <span className="font-medium">
                        {new Date(author.published_date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </span>
                    <span>|</span>
                    <span>Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News)</span>
                </div>

                {/* Full News Details */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 whitespace-pre-line">
                    {details}
                </p>

                {/* Additional Content - Matching the image */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                    – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country. The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.
                </p>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country. The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.
                </p>

                {/* Back to Category Button */}
                <Link 
                    to={`/category/${category_id}`}
                    className="btn bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition inline-flex items-center gap-2"
                >
                    <span>←</span>
                    All news in this category
                </Link>
            </div>
        </div>
    );
};

export default NewsCardDetails;