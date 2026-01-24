import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch("categories.json").then(response => response.json());

const Categories = () => {
    const newsCategories = use(categoriesPromise);
    // console.log(newsCategories);
    return (
        <div>
            <h2 className='font-semibold text-xl text-left'>All Categories</h2>
            <div className='grid grid-cols-1 mt-3'>
                {
                    newsCategories.map(
                        category => <NavLink key={category.id} className={"w-[60%] rounded-md px-5 py-3 text-accent font-medium  hover:bg-base-200 hover:text-black hover:font-semibold"} to={`/category/${category.id}`}>{category.name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;