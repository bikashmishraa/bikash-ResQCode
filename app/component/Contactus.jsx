import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen p-5 w-full border bg-green-500 ">
    <section className="section-wrapper flex items-center justify-center mt-10 w-full border mt-10">
      <div className="flex-center  md:max-w-2xl">
      <div className="grid md:grid-cols-2 gap-6 flex gap-14 border">
          <div className="space-y-5 flex flex-col justify-center items-center border">
            <div className="space-y-3 text-neutral-content">
              <h2 className="text-3xl font-semibold flex items-center justify-center p-20">Contact Us</h2>
              <p className="text-lg ">
                Get in touch with us for any inquiries or support. We're here to
                help and would love to hear from you.
              </p>
            </div>
            <ul className="contact-list text-neutral-content">
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
          <div className="flex items-center justify-center border ">
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
    </section>
    </div>
  );
};

export default ContactUs;



