import './index.css';
import React from 'react';
import img from './img.png';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  return (
    <div className="App bg-[#549b98]  h-screen w-full pt-20 ">
      <div className="mx-auto h-[90%] w-[85%] flex bg-[#184d56] rounded-lg shadow overflow-hidden">
        <div className="relative hidden xl:block xl:w-1/2 h-full bg-[#184d56]  -skew-x-12 left-16">
          <div>
            <img src={img} className="absolute w-full object-cover" alt="img" />
          </div>
        </div>
        <div className="w-full xl:w-7/12 bg-[#FBB13C] h-full ">
          <div className="flex">
            <div className="p-6 mx-auto bg-white rounded-lg mt-32">
              <div className="w-full flex">
                <div>
                  <p className="text-sm mr-4 text-[#FBB13C]">ALREADY MEMBER</p>
                </div>
                <div>
                  <p className="text-sm ml-4 text-[#FBB13C]">Need help?</p>
                </div>
              </div>
              <form method="post" action="#" onSubmit="return false">
                <div className="mb-4 mt-6">
                  <input
                    className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                    id="email"
                    type="text"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-6 mt-6 ">
                  <input
                    className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10 relative"
                    id="password"
                    type="password"
                    placeholder="Your password"
                  />
                  <i className="fa fa-eye-slash absolute -ml-[28px] mt-3 text-gray-500" />
                </div>
                <div className="flex w-full mt-8">
                  <button
                    className="w-full bg-[#046865] hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                    type="button"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <p className="text-white text-sm text-center">Don't have an account yet?</p>
          </div>
          <div className="flex justify-center pt-1">
            <p className="text-gray-900 text-sm font-semibold text-center">Create an account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
