
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-800  flex flex-col p-6 max-sm:mt-60">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h4 className="text-white  font-semibold mb-4">
              About Our Project
            </h4>
            <p className="text-gray-400 text-sm">
              Our Planning and Budget Management System is a smart website that
              helps individuals and businesses effectively plan and manage their
              budgets. With our user-friendly features, you can track expenses,
              set budget limits, generate reports, and gain valuable insights
              into your financial habits.
            </p>
          </div>
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0 ">
            <h4 className="text-white font-semibold mb-4 text-sm">Follow Us</h4>
            <div className="flex items-center justify-center lg:justify-start space-x-4 max-md:flex-row">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Planning and Budget Management System.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
