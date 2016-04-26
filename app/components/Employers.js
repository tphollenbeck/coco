var React = require('react');

function Employers (props) {
  return (
    <div>
      <h1 className="text-center">Hire the Best Talent</h1>
      <p className="col-md-10 col-md-offset-1">We believe that career changers with law degrees are an untapped resource for companies at any stage of the growth cycle. Their time achieving their JD and in challenging environments has molded them into uniquely intelligent, talented, and hard-working individuals. Our goal is to connect you to them.</p>
      <p className="col-md-10 col-md-offset-1">If you are interested in bringing this type of talent to your workplace, contact us below.</p>
      <div className=" col-md-6 col-md-offset-3">
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <label for="name" className="sr-only">Your Name</label>
            <input 
              className="form-control" 
              placeholder="Your Name" 
              type="text"
            />
          </div>
          <div className="form-group">
            <label for="email" className="sr-only">Email</label>
            <input 
              className="form-control" 
              placeholder="Email Address" 
              type="text"
            />
          </div>
          <div className="form-group">
            <label for="phone" className="sr-only">Phone Number</label>
            <input 
              className="form-control" 
              placeholder="Phone Number" 
              type="text"
            />
          </div>
          <div className="form-group">
            <label for="body" className="sr-only">About Your Company</label>
            <textarea 
              className="form-control" 
              placeholder="Tell us more about your company" 
              type="text"
              rows="3"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-success" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
};

module.exports = Employers;