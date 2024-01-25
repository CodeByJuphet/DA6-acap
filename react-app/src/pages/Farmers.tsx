export default function Farmers() {
    let farmers = [
        {'id':1,'name':'John Doe','rsbsa':'12324','address':'Brgy. Tibay'},
        {'id':2,'name':'Juan Dela Cruz','rsbsa':'12324','address':'Brgy. Tibay'},
        {'id':3,'name':'Johnny Deep','rsbsa':'12324','address':'Brgy. Tibay'}
    ];

  return (
    <>
    <div>
        <h1 className="text-center">List of Farmers(RSBSA Beneficiaries)</h1>
        <ul className="list-group">
           
        </ul>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">RSBSA No.</th>
                    <th scope="col">Address</th>
                    <th scope="col">action</th>
                </tr>
            </thead>
            <tbody>
            { farmers.map((farmer,index) =>
                <tr key={index}>
                    <th scope="row" >{ farmer.name } </th>
                    <td>{ farmer.rsbsa }</td>
                    <td>{ farmer.address }</td>
                    <td>
                        <span className="badge bg-primary rounded-pill">view</span> &nbsp;
                        <span className="badge bg-danger rounded-pill">delete</span>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
    </>
  )
}

