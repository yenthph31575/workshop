

const About = () => {
  return (
    <div>
      <section className="flex py-16">
        <div className="container max-w-screen-xl m-auto text-center mx-12">
          <div className="ml-20">
            <img src="./src/assets/images/streamline_target-solid.png" alt="Mission Icon" className="pl-14 h-28" />
          </div>
          <div>
            <h3 className="font-bold text-2xl py-4">OUR MISSION</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
        <div className="container max-w-screen-xl m-auto text-center mx-12">
          <div className="ml-20">
            <img src="./src/assets/images/Vector (2).png" alt="Vision Icon" className="pl-14 h-28" />
          </div>
          <div>
            <h3 className="font-bold text-2xl py-4">OUR VISION</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
        <div className="container max-w-screen-xl m-auto text-center mx-12">
          <div className="ml-20">
            <img src="./src/assets/images/Group (2).png" alt="Values Icon" className="pl-14 h-28" />
          </div>
          <div>
            <h3 className="font-bold text-2xl py-4">OUR VALUES</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
      </section>

      <section className="container max-w-screen-xl grid grid-cols-2 mx-16">
        <div className="w-full">
          <img src="./src/assets/images/about2.png" alt="About Furniro Company" />
        </div>
        <div className="pt-8 ml-2">
          <h2 className="font-bold text-[32px]">ABOUT FURNIRO COMPANY</h2>
          <p className="font-normal mt-4 text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="font-normal mt-2 text-[18px]">It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      <section className="my-16">
        <div className="mb-4 mx-96">
          <h2 className="font-bold text-[32px] text-center">WE CREATE NATURAL WOOD FURNITURE AS WELL AS HIGH-QUALITY</h2>
        </div>
        <div className="grid grid-cols-4 mx-16">
          <div className="overflow-hidden">
            <img src="./src/assets/images/about3.png" alt="Furniture Example 1" className="hover:scale-125 duration-1000" />
          </div>
          <div className="overflow-hidden">
            <img src="./src/assets/images/about4.png" alt="Furniture Example 2" className="hover:scale-125 duration-1000" />
          </div>
          <div className="overflow-hidden">
            <img src="./src/assets/images/about5.png" alt="Furniture Example 3" className="hover:scale-125 duration-1000" />
          </div>
          <div className="overflow-hidden">
            <img src="./src/assets/images/about6.png" alt="Furniture Example 4" className="hover:scale-125 duration-1000" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
