import React from 'react';
import { IBrand, IImage } from '../constants';


type Props = {
  item: IBrand;
  image?: IImage;
};

function Card({ item, image }: Props) {
  return (
    <div className="cursor-pointer block p-6 mb-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {image && (
        <a href="#">
          <img
            className="rounded-t-lg mb-6 bg-indigo-100"
            src={image.Image}
            alt="noodle-image"
            style={{ width: '100%', height: 200, objectFit: 'contain' }}
          />
        </a>
      )}
      <div className="flex justify-between items-center mb-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {item.Brand}, <span className="text-blue">{item.Country}</span>
        </h5>
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="orange"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          {item.Stars !== 'NaN' ? item.Stars : 0}
        </div>
      </div>
      <p className="font-bold text-gray-500 my-1 dark:text-gray-400">
        {item.Variety}
      </p>
      <p className="font-bold text-gray-500 my-1 dark:text-gray-400">
        STYLE - {item.Style}
      </p>
      <p className="bg-black text-yellow w-20 p-1 text-center rounded mt-2 shadow font-normal text-gray-700 dark:text-gray-400">
        {item['Top Ten']}
      </p>
    </div>
  );
}

export default Card;
