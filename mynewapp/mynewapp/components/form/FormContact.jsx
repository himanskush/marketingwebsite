function FormContact({ props }) {
    const {
      onSubmitHandler,
      onChangeHandler,
      stateFormData,
      stateFormError,
      stateFormMessage,
    } = props;
    return (
      <form className="form-contact card" method="POST" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <h2>Kindly fill the following form details : </h2>
          <hr />
          {stateFormMessage.status === "error" && (
            <h4 className="warning text-center">{stateFormMessage.error}</h4>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={onChangeHandler}
            value={stateFormData.name.value}
          />
          {stateFormError.name && (
            <span className="warning">{stateFormError.name.hint}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={onChangeHandler}
            value={stateFormData.email.value}
          />
          {stateFormError.email && (
            <span className="warning">{stateFormError.email.hint}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="contactno">Contact Number</label>
          <input
            className="form-control"
            type="tel"
            id="contactno"
            name="contactno"
            placeholder="Contact Number"
            onChange={onChangeHandler}
            value={stateFormData.contactno.value}
          />
          {stateFormError.contactno && (
            <span className="warning">{stateFormError.contactno.hint}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            className="form-control"
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            onChange={onChangeHandler}
            value={stateFormData.message.value}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-block btn-warning">
            Submit
          </button>
        </div>
      </form>
    );
  }
  export default FormContact;
  