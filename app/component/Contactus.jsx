import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactUs(){

  const handleSubmit = () =>{
    alert("form submitted sucessfully!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="w-[80%] h-full flex items-center justify-center">
        <div className=" w-full flex flex-wrap items-left justify-center flex-col mb-[8%]">
          <div className="space-y-5 flex flex-wrap text neutral-content flex flex-col justify-start w-[90%] ">
            <h1 className="text-5xl font-semibold flex items-center justify-left p-6 mt-[-8%]">Contact Us</h1>
            <p className="p-6 mb-[10%] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo architecto in vel odit libero officia neque sunt optio repellat, quos consequuntur natus blanditiis. Non odio architecto, aliquam minima voluptas illum iusto earum quaerat consequuntur praesentium sint quos mollitia nemo possimus.</p>
          </div>
            <ul className="contact-list text-neutral-content ml-3 p-3">
              <li>
                <span>
                  <FaLocationDot />
                </span>
                Kathmandu, Nepal
              </li>
              <li>
                <span>
                  <MdMail />
                </span>
                <a href="mailto:bikash.mishra2079@gmail.com">
                  bikash.mishra2079@gmail.com
                </a>
              </li>
              <li>
                <span>
                  <FaPhoneAlt />
                </span>
                <a href="tel:+9779823659360">+977 9823659360</a>
              </li>
            </ul>
        </div>
        <div className="w-[30%]">
        <form
            className="space-y-1 max-w-md md:ml-auto w-full"
            onSubmit={handleSubmit}
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-neutral-content font-medium">
                  Name
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                />
                <br/>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-neutral-content font-medium">
                  Email
                </span>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              <br/>
            </label>
            <label className="form-control w-full pb-3">
              <div className="label">
                <span className="label-text text-neutral-content font-medium">
                  Message
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 "
                placeholder="Enter your message"
              ></textarea>
              <br/>
            </label>
            <button
              type="submit"
              className="btn btn-primary text-[white] cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}