function Login(){

return(

<div className="container mt-5">

<h2>Login</h2>

<form>

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
className="btn btn-primary">

Login

</button>

</form>

</div>

);

}

export default Login;
