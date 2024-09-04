import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarousalComponent = () => {
  const images = [
    "https://images.unsplash.com/photo-1720048169970-9c651cf17ccd?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723098232760-379e763a3f9b?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex space-x-4">
      {/* Thumbnails */}
      <div className="flex flex-col space-y-2">
        {images.map((img, index) => (
          <div key={index} className={`rounded overflow-hidden cursor-pointer`}>
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              className={`object-cover w-20 h-20 ${
                selectedImage === img ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
        <div
          className={`bg-gray-200 flex items-center justify-center text-sm cursor-pointer rounded`}
        >
          See More
        </div>
      </div>

      {/* Main Image */}
      <div>
        <img
          src={selectedImage}
          alt="Selected"
          className="object-cover w-40 h-40 rounded-lg cursor-pointer"
          onClick={openModal}
        />
      </div>

      {/* Modal for Full-Width View */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Click outside the modal content to close the modal
        >
          <div
            className="relative w-full max-w-6xl bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <Carousel
              showThumbs={false}
              showArrows={true}
              showStatus={false}
              selectedItem={images.indexOf(selectedImage)}
              onChange={(index) => setSelectedImage(images[index])}
              infiniteLoop
              useKeyboardArrows
            >
              {images.map((img, index) => (
                <div key={index} className="rounded-lg">
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="object-cover w-full h-screen"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarousalComponent;
