import TextEditor from "../../Admin/TextEditor";
import "./Booking.css";

const Booking = () => {
  return (
    <div className="event-detail-page">
      <header className="event-header">
        <h1>Register for event</h1>
      </header>

      <section className="f-registration-form">
        
        
        <form>
          <div className="f-form-field">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              required
            />
          </div>

          <div className="f-form-field">
            <label htmlFor="phone">Contact Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input-field"
              required
            />
          </div>

          <div className="f-form-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              required
            />
          </div>

          <div className="f-form-field">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              className="input-field"
              required
            />
          </div>

          <input type="hidden" name="eventName" />

          <div className="f-form-field">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
          
        </form>
        
      </section>
      <TextEditor/>
    </div>
  );
};

export default Booking;