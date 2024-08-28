import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="peeps-secondary-bg text-black">
        <form>
          <div className="flex flex-col w-1/3 gap-y-8 gap-x-8 m-20">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <input
                className="w-full rounded shadow-lg"
                name="name"
                id="name"
                type="text"
              />
            </div>

            <div className="flex space-x-4 max-w-full justify-between">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="w-full rounded shadow-lg"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>

              <div>
                <label htmlFor="phone">Phone No.</label>
                <input
                  className="w-full rounded shadow-lg"
                  name="phone"
                  id="phone"
                  type="text"
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="message">Message</label>
              <textarea
                className="w-full shadow-lg"
                name="message"
                rows={5}
                id="message"
              />
            </div>

            <div>
              <button type="submit" className=" peeps-tertiary-bg px-8 py-2 font-semibold text-white rounded-lg">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
