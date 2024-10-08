import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>

            <section className="container max-w-screen-xl m-auto flex items-center justify-between py-4">
                <img src="./src/assets/images/logo.png" alt="Logo" className="h-10" />
                <ul className="flex gap-8 font-medium text-xl">
                    <li className="hover:text-amber-500 "><a href="" >Home</a></li>
                    <li className="hover:text-amber-500"><a href="./shop.html">Shop</a></li>
                    <li className="hover:text-amber-500"><a href="./about.html">About</a></li>
                    <li className="hover:text-amber-500"><a href="./contact.html">Contact</a></li>
                </ul>
                <div className="flex justify-end space-x-4">
                    <Link to="/auth/login">
                        <AiOutlineUser />
                    </Link>
                    <Link to="/search">
                        <AiOutlineSearch />
                    </Link>
                    <Link to="/wishlist">
                        <AiOutlineHeart />
                    </Link>
                    <Link to="/wishlist">
                        <IoCartOutline />
                    </Link>
                </div>
            </section>

            <section>
                <img src="./src/assets/images/banner2.jpg" alt="Banner" className="w-full" />
            </section>


        </div>
    )
}

export default Header
