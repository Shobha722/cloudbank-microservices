import "../styles/dashboard.css";

function DashboardCards(){

const cards=[

{
title:"Account Balance",
value:"₹2,45,600",
icon:"bi-wallet2"
},

{
title:"Savings",
value:"₹1,80,000",
icon:"bi-piggy-bank"
},

{
title:"Credit Card",
value:"₹75,000",
icon:"bi-credit-card-2-front"
},

{
title:"Loan Balance",
value:"₹6,20,000",
icon:"bi-bank"
}

];

return(

<div className="container mt-5">

<div className="row">

{

cards.map((card,index)=>(

<div className="col-lg-3 col-md-6 mb-4" key={index}>

<div className="dashboard-card">

<i className={`bi ${card.icon}`}></i>

<h6>{card.title}</h6>

<h3>{card.value}</h3>

</div>

</div>

))

}

</div>

</div>

);

}

export default DashboardCards;
