import React from "react"
import "./style.css"
class Signup extends React.Component {
    state = {

    }
    render() {
        return (
<div className="container">
    <div className="row">
    <div className="col-sm-6"></div>
    <div className="col-sm-6">
            <div className="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2 className="text-center">Sign up</h2>
                    <div className="text-center social-btn">
                        <a href="#" className="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Signup  with <b> <i class="fab fa-facebook-square"></i> Facebook</b></a>
                        {/* <a href="#" className="btn btn-info btn-block"><i className="fa fa-twitter"></i> Sign in with <b>Twitter</b></a> */}
                        <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
                    </div>
                    <div className="or-seperator"><i>or</i></div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" name="date-of-birth" placeholder="email" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input type="text" className="form-control" name="date-of-birth" placeholder="Date of birth" required="required" />
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block login-btn">Sign up</button>
                    </div>
                    {/* <div className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                        <a href="#" className="pull-right text-success">Forgot Password?</a>
                    </div> */}
                    <div className="hint-text small">Already have an account? <a href="#" className="text-success">login</a></div>
                </form>
              
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Signup;