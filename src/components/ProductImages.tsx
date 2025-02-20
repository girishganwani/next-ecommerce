'use client';

import Image from 'next/image';
import { useState } from 'react';

// const images = [
//   {
//     id: 1,
//     url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg',
//   },
//   {
//     id: 2,
//     url: 'https://images.pexels.com/photos/27820284/pexels-photo-27820284.jpeg?cs=srgb&dl=pexels-drphotographer152-27820284.jpg&fm=jpg',
//   },
//   {
//     id: 3,
//     url: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: 4,
//     url: 'https://images.pexels.com/photos/268432/pexels-photo-268432.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
// ];
const ProductImages = ({ items }: { items: any }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[imageIndex].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, index: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setImageIndex(index)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="50vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
