import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const images = [
  "https://media.designcafe.com/wp-content/uploads/2021/04/28110847/middle-class-indian-bedroom-design.jpg",
  "https://i.pinimg.com/736x/2e/92/57/2e9257f6c7d679ee0d0dfdd5636bd327.jpg",
  "https://i.pinimg.com/originals/09/c7/8c/09c78c15f477ddff61b08817fff4c8b8.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IWv0d6ZRpjhNAqihyBZLnOclmhtHN969Gw&s",
  // "https://t4.ftcdn.net/jpg/04/55/10/71/360_F_455107170_36Is8hwPMPdg9fN78WaFiSwY57dkXBu3.jpg",
  // "https://thumbs.dreamstime.com/b/simple-interior-bed-room-wooden-bad-resort-172528707.jpg"
];

const PropertyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 sm:px-8">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full h-[15rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem]"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center bg-black">
              <img src={img} alt={`Property ${index}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Property ${index}`} className="w-full h-24 sm:h-32 md:h-44 object-cover rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
