
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { VscCalendar } from "react-icons/vsc";

const HomePage = () => {
    return (
        <div>
    <section className="container max-w-screen-xl m-auto mt-16">
        <div className="flex justify-between items-center mb-4">
            <h2 className="fomt-semibold text-[40px]">New Products</h2>
            <a href="./shop.html" className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500 ">View all products</a>
        </div>
        <div className="grid grid-cols-4 gap-8">
            <div>
                <div className="overflow-hidden">
                    <img src="./src/assets/images/product1.jpg" alt="" className="hover:scale-125 duration-1000 "/>
                </div>
               <div className="bg-[#F5F5F5] p-4">
                <h3 className="font-semibold text-xl">Syltherine</h3>
                <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
                <p className="font-semibold text-xl text-red-600 mb-3">2.500.000đ</p>
                <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white" >Add to cart</button>
               </div>
            </div>
            <div>
                <div className="overflow-hidden">
                    <img src="./src/assets/images/product2.jpg" alt="" className="hover:scale-125 duration-1000 "/>
                </div>
               <div className="bg-[#F5F5F5] p-4">
                <h3 className="font-semibold text-xl">Leviosa</h3>
                <p className="text-[#898989] text-base mt-1 mb-2">Stylish cafe chair</p>
                <p className="font-semibold text-xl text-red-600 mb-3">1.800.000đ</p>
                <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
               </div>
            </div>
            <div>
                <div className="overflow-hidden">
                    <img src="./src/assets/images/product3.jpg" alt="" className="hover:scale-125 duration-1000 "/>
                </div>
               <div className="bg-[#F5F5F5] p-4">
                <h3 className="font-semibold text-xl">Lolito</h3>
                <p className="text-[#898989] text-base mt-1 mb-2">Luxury big sofa</p>
                <p className="font-semibold text-xl text-red-600 mb-3">2.000.000đ</p>
                <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
               </div>
            </div>
            <div>
                <div className="overflow-hidden">
                    <img src="./src/assets/images/product4.jpg" alt="" className="hover:scale-125 duration-1000 "/>
                </div>
               <div className="bg-[#F5F5F5] p-4">
                <h3 className="font-semibold text-xl">Respira</h3>
                <p className="text-[#898989] text-base mt-1 mb-2">Outdoor bar table and stool</p>
                <p className="font-semibold text-xl text-red-600 mb-3">4.500.000đ</p>
                <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
               </div>
            </div>
          
        </div>
    </section>


    <section className="container max-w-screen-xl m-auto mt-16">
        <div className="flex justify-between items-center mb-4">
            <h2 className="fomt-semibold text-[40px]">Gallery</h2>
            <a href="" className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500 ">View all gallery</a>
        </div>
       <div className="grid grid-cols-3 gap-8">
        <img src="./src/assets/images/gallery1.jpg" alt="" />
        <img src="./src/assets/images/gallery2.jpg" alt=""/>
        <img src="./src/assets/images/gallery3.jpg" alt=""/>
        <img src="./src/assets/images/gallery4.jpg" alt=""/>
        <img src="./src/assets/images/gallery5.jpg" alt=""/>
        <img src="./src/assets/images/gallery6.jpg" alt=""/>
       </div>
    </section>


<section className="container max-w-screen-xl m-auto mt-16">
    <div className="flex justify-between items-center mb-4">
        <h2 className="fomt-semibold text-[40px]">News</h2>
        <a href="" className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500 ">View all news</a>
    </div>
    <div className="grid grid-cols-4 gap-8" >
       <div>
        <div>
            <img src="./src/assets/images/news1.jpg" alt=""/>
           </div>
            <div>
                <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1">
                <Link to="/auth/login" className="mx-2">
                <VscCalendar/>
                        </Link>
                    
                    24/04/2024</p>
                <h3 className="font-semibold text-xl mb-3">A bedroom must have something like this</h3>
                <a href="" className="text-red-600 fomt-semibold text-base flex items-center" >Xem chi tiết
                <Link to="/auth/login" className="ml-3">
                <GoArrowRight />
                        </Link>
                </a>
            </div>
       </div>
       <div>
        <div>
            <img src="./src/assets/images/news2.jpg" alt=""/>
           </div>
            <div>
                <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1">
                <Link to="/auth/login" className="mx-2">
                <VscCalendar/>
                        </Link>24/04/2024</p>
                <h3 className="font-semibold text-xl mb-3">A bedroom must have something like this</h3>
                <a href="" className="text-red-600 fomt-semibold text-base flex items-center " >Xem chi tiết
                <Link to="/auth/login" className="ml-3">
                <GoArrowRight />
                        </Link>
                </a>
            </div>
       </div>
       <div>
        <div>
            <img src="./src/assets/images/news3.jpg" alt=""/>
           </div>
            <div>
                <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1">
                <Link to="/auth/login" className="mx-2">
                <VscCalendar/>
                        </Link>
                        24/04/2024</p>
                <h3 className="font-semibold text-xl mb-3">A bedroom must have something like this</h3>
                <a href="" className="text-red-600 fomt-semibold text-base flex items-center" >Xem chi tiết
                    <Link to="/auth/login" className="ml-3">
                <GoArrowRight />
                        </Link></a>
            </div>
       </div>
       <div>
        <div>
            <img src="./src/assets/images/news4.jpg" alt=""/>
           </div>
            <div>
                <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1">
                <Link to="/auth/login" className="mx-2">
                <VscCalendar/>
                        </Link>
                    24/04/2024</p>
                <h3 className="font-semibold text-xl mb-3">A bedroom must have something like this</h3>
                <a href="" className="text-red-600 fomt-semibold text-base flex items-center" >Xem chi tiết
                <Link to="/auth/login" className="ml-3">
                <GoArrowRight />
                        </Link>
                </a>
            </div>
       </div>
      
    </div>
</section>


<section className="bg-[#FFF7ED] py-16 mt-16">
<div className=" container max-w-screen-xl m-auto grid grid-cols-4">
    <div className="flex gap-5">
        <img src="./src/assets/images/quality.png" alt=""/>
    <div>
        <h3 className="font-semibold text-xl">High Quality</h3>
        <p className="text-[#898989]">Crafted from top materials</p>
    </div>
     </div>
     <div className="flex gap-5">
        <img src="./src/assets/images/support.png" alt=""/>
    <div>
        <h3 className="font-semibold text-xl">24 / 7 Support</h3>
        <p className="text-[#898989]">Dedicated support</p>
    </div>
     </div><div className="flex gap-5">
        <img src="./src/assets/images/protection.png" alt=""/>
    <div>
        <h3 className="font-semibold text-xl">Warranty Protection</h3>
        <p className="text-[#898989]">Over 2 years</p>
    </div>
     </div><div className="flex gap-5">
        <img src="./src/assets/images/shipping.png" alt=""/>
    <div>
        <h3 className="font-semibold text-xl">Free Shipping </h3>
        <p className="text-[#898989]">Order over 150 $</p>
    </div>
     </div>
</div>
</section>

   
        </div>
    );
};

export default HomePage;
