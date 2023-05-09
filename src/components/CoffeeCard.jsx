import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const coffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, category, details } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    })

            }
        })
    }
    return (
        <div className="card w-[50%] mx-20 pr-10 my-10 border bg-base-500 shadow-xl text-white">
            <div className="card-body">
                <h2 className="text-4xl font-semibold text-center">{name}</h2>
                <p>{quantity}</p>
                <p>{supplier}</p>
                <p>{category}</p>
                <p>{details}</p>
                <div className="btn-group mx-auto my-5">
                    <button className="btn hover:btn-active">View</button>

                    <Link  to={`updateCoffee/${_id}`}>
                    <button className="btn hover:btn-active">Edit</button>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="btn hover:btn-active">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default coffeeCard;