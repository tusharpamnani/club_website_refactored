import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter as faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="h-[25vw] w-full mt-[30px] bg-[#1A1E1E] opacity-[0.97] relative bottom-0 left-0 right-0">
      <div className="h-[20vw] w-full bg-[#078888] absolute bottom-0 text-center">
        <p className="inline-block text-[8vw] font-[Franklin Gothic Heavy], 'Arial Narrow', Arial, sans-serif bg-gradient-to-b from-[#078888] to-[#1A1E1E] bg-clip-text text-transparent transform -translate-y-1/2">
          CODEBREAKERS
        </p>
        <p className="text-white text-[2vw] mt-[-6vw]">Seasoned. Nimble. Remote.</p>
        <hr className="mt-[2vw] text-white text-[1vw] mx-[12vw]" />
        <Image src={'/Assets/footer.svg'} alt="footer-img" className="absolute left-0 bottom-0 w-[40vw]" width={40} height={40} unoptimized />
        <div className="mt-[2vw] mx-[12vw] flex justify-around items-center text-[1.5vw] text-white font-light">
          <div className="flex opacity-[0.65]">
            <FontAwesomeIcon icon={faCopyright} />
            <p className="ml-[0.5vw] text-white text-[1.5vw]">Copyright Codebreakers</p>
          </div>
          <div>
            <ul className="list-none text-[1.5vw]">
              <li className="inline-block">
                <Link href="google.com" className="text-white pr-[1vw] opacity-[0.65]">Terms</Link>
              </li>
              <li className="inline-block">
                <Link href="google.com" className="text-white pr-[1vw] opacity-[0.65]">Privacy</Link>
              </li>
              <li className="inline-block">
                <Link href="google.com" className="text-white pr-[1vw] opacity-[0.65]">Cookies</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-[2vw]">
            <div className="w-[3vw] h-[3vw] border border-white bg-white rounded-full flex justify-center items-center">
              <Link
                href="https://www.linkedin.com/company/thecodebreakers-rcoem/mycompany/verification/"
                aria-label="LinkedIn"
                className="text-black text-[1.5vw]"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
            <div className="w-[3vw] h-[3vw] border border-white bg-white rounded-full flex justify-center items-center">
              <Link
                href="https://www.instagram.com/thecodebreakers/"
                aria-label="Instagram"
                className="text-black text-[1.5vw]"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
            <div className="w-[3vw] h-[3vw] border border-white bg-white rounded-full flex justify-center items-center">
              <Link
                href="https://x.com/CodebreakersRBU"
                aria-label="Twitter"
                className="text-black text-[1.5vw]"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
