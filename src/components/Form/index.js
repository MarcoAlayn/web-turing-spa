import React from "react";

function Form() {
  return (
    <div>
      <h1>Form</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="phone" />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="company"
          />
        </div>
        <div>
          <label htmlFor="job">Job</label>
          <input type="text" id="job" name="job" placeholder="job" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="country"
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="city" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="message"
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form;
