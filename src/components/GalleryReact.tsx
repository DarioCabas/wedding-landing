import React, { useState } from 'react';
import Dialog from './Dialog';

const GalleryReact = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setOpenModal(true);
  }

  const handleCloseDialog = () => {
    setOpenModal(false);
  }

  const images = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(1).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(2).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(3).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(4).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(5).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(6).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(7).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(8).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(9).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(10).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(11).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(13).webp",
  ]


  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 w-full">

        <div className=" flex flex-wrap md:-m-2 lg:overflow-y-auto md:overflow-y-auto lg:h-[700px] md:h-[700px]" >

          {images.map((image, index) => (
            <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2 lg:h-[400px]">

              <div className="relative " onClick={handleDialogOpen} >
                <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md transition duration-200 hover:scale-105" src={image} key={index} />
                <div className="absolute bottom-0 left-0 p-2 bg-transparent text-white">
                  Description for the image
                </div>
                <div className="absolute bottom-2 right-2 cursor-pointer" onClick={handleDialogOpen}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-maximize text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
                    <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
                    <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
      <Dialog open={openModal} onClose={handleCloseDialog} />
    </div>
  );
}

export default GalleryReact;

