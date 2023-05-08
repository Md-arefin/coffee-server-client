import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, category, details, taste } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const taste = form.taste.value;

        const UpdatedCoffee = { name, quantity, supplier, category, details, taste };

        console.log(UpdatedCoffee)

        // send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>
            <h1 className='text-4xl m-6 p-6 text-white text-center'>Update Your Coffee</h1>
            <form className="md:w-[90%] mx-auto" onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="m-20 md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">coffee Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">Available Quantity</span>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className="m-20 md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">supplier</span>
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">Taste</span>
                            <input type="text" name='taste'
                                defaultValue={taste}
                                placeholder="Taste" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form category and details Row */}
                <div className="m-20 md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">Category</span>
                            <input type="text" name='category'
                                defaultValue={category} placeholder="Category" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">Details</span>
                            <input type="text" name='details' defaultValue={details} placeholder="Details " className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <input type="submit" className="btn btn-block  " value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;