import React from 'react'

const Acknowledgement = () => {
  return (
    <>
      {/* Logo cloud */}
      <div className="relative isolate mt-12 sm:mt-8 my-40">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
         
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <h1 className=" text-4xl lg:text-6xl font-bold leading-8 text-gray-700" data-aos="fade-up">
            Brands we've helped to grow :
          </h1>
          <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-12 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4" data-aos="fade-up">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-04/Group%205613.webp"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-04/adani-logo-2012%201.webp"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-04/Abbott%20svg%20%282%29.webp"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-04/Layer_1.webp"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-04/brand-zoetis.webp"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-04/United_Rentals_Logo_1.webp"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-04/image%2064_0.webp"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Acknowledgement