import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="flex py-16">
        <div className="container max-w-screen-xl m-auto grid grid-cols-3">
          <div className="ml-20">
            <span className="material-symbols-outlined py-4 px-4 inline-block text-[#CA8A04] font-bold border-2 border-[#CA8A04]">location_on</span>
          </div>
          <div>
            <h3 className="font-semibold text-2xl py-4">ADDRESS</h3>
            <p className="text-[#71717A]">60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội</p>
          </div>
        </div>
        <div className="container max-w-screen-xl m-auto grid grid-cols-3">
          <div className="ml-20">
            <span className="material-symbols-outlined py-4 px-4 inline-block text-[#CA8A04] font-bold border-2 border-[#CA8A04]">contacts</span>
          </div>
          <div>
            <h3 className="font-semibold text-xl py-4 w-52">CONTACT DETAILS</h3>
            <p className="text-[#71717A]">info@furniro.com</p>
            <p className="text-[#71717A] text-xl font-bold">02056278686</p>
          </div>
        </div>
        <div className="container max-w-screen-xl m-auto grid grid-cols-3">
          <div className="ml-20">
            <span className="material-symbols-outlined py-4 px-4 inline-block text-[#CA8A04] font-bold border-2 border-[#CA8A04]">share</span>
          </div>
          <div>
            <h3 className="font-semibold text-xl py-4 w-52">SOCIAL NETWORKS</h3>
            <div className="flex text-[#71717A] mr-4">
              <img src="./src/assets/images/facebook-square.png" alt="Facebook" />
              <img src="./src/assets/images/instagram.png" alt="Instagram" />
              <img src="./src/assets/images/image 40.png" alt="Other" />
              <img src="./src/assets/images/twitter-square.png" alt="Twitter" />
              <img src="./src/assets/images/youtube-square.png" alt="YouTube" />
            </div>
          </div>
        </div>
      </section>
      <section className="container max-w-screen-2xl grid grid-cols-2">
        <div>
          <img src="./src/assets/images/contact2.png" alt="Contact" />
        </div>
        <div className="bg-neutral-100 pt-16 pl-8">
          <h2 className="font-semibold text-[20px]">Contact</h2>
          <p className="font-bold text-[40px]">CONNECT WITH US NOW</p>
          <div>
            <form action="">
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <label htmlFor="firstname" className="font-normal mb-2 text-[#9CA3AF]">First Name</label>
                  <hr className="my-4 border-[#A3A3A3]" />
                </div>
                <div>
                  <label htmlFor="lastname" className="font-normal mb-2 text-[#9CA3A3]">Last Name</label>
                  <hr className="my-4 border-[#A3A3A3]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-2">
                <div>
                  <label htmlFor="email" className="font-normal mb-2 text-[#9CA3AF]">Email</label>
                  <hr className="my-4 border-[#A3A3A3]" />
                </div>
                <div>
                  <label htmlFor="phonenumber" className="font-normal mb-2 text-[#9CA3AF]">Phone Number</label>
                  <hr className="my-4 border-[#A3A3A3]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-2">
                <div>
                  <label htmlFor="message" className="font-normal mb-2 text-[#9CA3AF]">Message</label>
                  <hr className="my-4 border-[#A3A3A3]" />
                </div>
              </div>
              <div className="flex w-52 bg-[#CA8A04] text-[#FFFFFF] py-2 px-4 mt-4">
                <img src="./assets/images/fa_send-o.png" alt="Send" />
                <a href="#" className="ml-2">Send Information</a>
              </div>
            </form> {/* Correctly closed the form tag */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; // Changed 'contact' to 'Contact' for consistency
