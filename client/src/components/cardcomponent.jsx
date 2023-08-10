import React from "react";

const CardComponent = ({ title, description, locality, phone }) => {
  return (
    <div className="w-full m-2 p-4  border border-gray-200 rounded-lg shadow-sm">
      <h5 className="mb-3 text-base text-white font-semibold">{title}</h5>

      <ul className="my-4 space-y-3">
        <li>
          <p className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
            Description:{description}
          </p>
        </li>
        <li>
          <p className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
            Locality:
            {locality}
          </p>
        </li>
        <li>
          <p className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
            Contact:
            {phone}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CardComponent;
