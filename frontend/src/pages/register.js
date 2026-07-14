function Register(){

return(

<div className="container mt-5">

<h2>Create Account</h2>

<form>

<input
className="form-control mb-3"
placeholder="Full Name"
/>

<input
className="form-control mb-3"
placeholder="Email"
/>

<input
className="form-control mb-3"
placeholder="Username"
/>

<input
type="password"
className="form-control mb-3"
placeholder="Password"
/>

<button
className="btn btn-success">

Register

</button>

</form>

</div>

);

}

export default Register;
