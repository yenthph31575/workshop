
const ProductDetail = () => {
  return (
    <div>
       <main className="container max-w-screen-xl m-auto">
    <section className="mt-16">
        <div className="grid grid-cols-2 gap-8 mb-16">
            <div className="grid grid-cols-6 gap-8">
                <div className="col-span-1 *:mb-4">
                    <img src="./src/assets/images/product-detail.jpg" alt=""/>
                    <img src="./src/assets/images/product-detail.jpg" alt=""/>
                    <img src="./src/assets/images/product-detail.jpg" alt=""/>
                    <img src="./src/assets/images/product-detail.jpg" alt=""/>
                    <img src="./src/assets/images/product-detail.jpg" alt=""/>
                </div>
                <div className="col-span-5">
                    <img src="./src/assets/images/product-detail.jpg" alt=""/>
                </div>
            </div>
          
            <div>
                <p className="font-medium text-xl">Asgaard sofa</p>
                <p className="font-bold text-[40px] text-[#EF4444] my-2">25.000.000đ</p>
                <div className="flex items-center">
                    <div className="*:text-[#FFC700] border-r border-solid border-neutral-400 pr-4 mr-4">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                </div>
                <span className="font-medium text-sm text-[#9F9F9F]">5 Customer Review</span>
            </div>
            <p className="font-medium my-4">Setting the bar as one of the loudest speakers in its className, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>
            <div>
                <p className="text-[#A3A3A3] mb-1"> Size</p>
                <div className="flex gap-4">
                    <div className="bg-yellow-600 w-[30px] h-[30px] flex items-center justify-center text-white rounded">L</div>
                    <div className="bg-neutral-400 w-[30px] h-[30px] flex items-center justify-center text-white rounded">XL</div>
                    <div className="bg-neutral-400 w-[30px] h-[30px] flex items-center justify-center text-white rounded">XS</div>
                </div>
            </div>
            <div className="mt-4 mb-8">
                <p className="text-[#A3A3A3] mb-1"> Color</p>
                <div className="flex gap-4">
                    <div className="bg-[#8160FA] w-[30px] h-[30px] rounded-full"></div>
                    <div className="bg-black w-[30px] h-[30px] rounded-full"></div>
                    <div className="bg-[#888E2F] w-[30px] h-[30px] rounded-full"></div>
                </div>
            </div>
            <div>
                <form action="">
                    <div className="border border-solid border-neutral-400 w-fit rounded inline-block">
                        <button className="py-2 px-4">-</button>
                        <input type="text" value="1" className="w-[30px] text-center"/>
                        <button className="py-2 px-4">+</button>
                    </div>
                    <button type="submit" className="border border-solid borde-yellow-600 text-yellow-600 rounded py-2 px-10 ml-3 hover:bg-yellow-600 hover:text-white">Add To Cart</button>
                    <button type="submit" className="border border-solid border-neutral-800 text-neutral-800 rounded py-2 px-10 ml-3 hover:bg-neutral-800 hover:text-white"> + Compare</button>
                </form>
                
            </div>
            <div className="text-neutral-400 mt-8 mb-3">
                <div className="*:mb-3 *:text-[#A3A3A3]">
                    <p>SKU : SS001</p>
                    <p>Category: Sofa</p>
                    <p>Tags: Sofa, Chair, Home, Shop</p>
                </div>
            </div>
        </div>
        </div>
        <div>
            <div className="*:font-semibold *:text-xl *:mr-16 border-b pb-4 mb-8" >
                <a href="">Description</a>
                <a href="" className="text-[#A3A3A3]">Additional Information</a>
                <a href="" className="text-[#A3A3A3]">Reviews [5]</a>

            </div>
            <div className="*:text-[#A3A3A3] *:font-medium  ">
                <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p >Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its className, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                <div className="flex gap-8 *:mt-8">
                    <img src="./src/assets/images/product-detail1.jpg" alt=""/>
                    <img src="./src/assets/images/product-detail2.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>
    <section className="my-16 ">
        <div className="mb-4">
            <h2 className="font-semibold text-[40px] text-center">Related Products</h2>
           
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
                <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">Add to cart</button>
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
  

   </main>
    </div>
  )
}

export default ProductDetail
