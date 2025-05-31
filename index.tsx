import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-12 px-4 py-8 mb-12 md:flex-row md:flex-wrap lg:px-6 lg:py-10">
        <div className="md:max-w-[200px]">
          <div className="flex items-center tracking-[0.25em] text-xl text-bright-red mb-6">
            PHLOX
          </div>
          <p className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            tempora tempore quaerat doloremque, consectetur dolorum.
            Consequuntur in quisquam officia quas.
          </p>
        </div>
        <div className="flex flex-col gap-12 sm:flex-row md:gap-24">
          <div>
            <h3 className="font-bold text-xl">Quick Links</h3>
            <ul className="flex flex-col gap-4 mt-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="shop">Shop</Link>
              </li>
              <li>
                <Link href="about">About</Link>
              </li>
              <li>
                <Link href="contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl">Contact</h3>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3">
                <p>(217) 555-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <p>123 Elm Street Springfield, IL 62704 USA</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold text-xl">Subscribe To Our Email</p>
          <h3 className="text-3xl mt-4 mb-6 font-bold md:text-4xl">
            For Latest News & Updates
          </h3>
          <div className="flex items-center justify-between w-full max-w-[450px] gap-4 py-2 px-2 rounded-full bg-secondary-white">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email..."
              className="bg-transparent pl-4 w-3/4 focus:outline-none"
            />
            <button className="bg-bright-red px-6 py-2 md:px-8 rounded-full text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full bg-black text-gray-400 p-4 md:flex-row md:justify-between">
        <div>&copy;2024 shop-digital-All Rights Reserved. Phlox Theme</div>
        <div className="flex items-center gap-4">
          <span>
            <Link href="/">Privary Policy</Link>
          </span>
          <span>
            <Link href="/">Term Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
