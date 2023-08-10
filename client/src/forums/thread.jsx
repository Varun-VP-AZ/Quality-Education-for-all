import React from 'react'

const thread = ({title,name,description}) => {
  return (
    <div>
               <div className="border-b border-gray-300 py-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600">Posted by {name}</p>
            <p className="mt-2">
             {description}
            </p>
          </div>
      
    </div>
  )
}

export default thread
