import "./feedback.css";

const Feedback = () => {
  return (
    <div className="feedback-container container">
      <h2 className="feedback-title">GET UPDATES</h2>
      <form action="" className="feedback-form">
        <label htmlFor="feedback" className="feedback-form-text">
          Enter your email below:
        </label>
        <input
          type="text"
          name="feedback"
          id="feedback"
          className="feedback-form-input"
        />
        <button className="feedback-form-button">SEND</button>
      </form>
    </div>
  );
};

export default Feedback;
