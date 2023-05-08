import Swal from "sweetalert2";


const AddCoffee = () => {

    const handleCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;

        const newCoffee = { name, quantity, supplier, category, details };

        console.log(newCoffee)

        // send data to the server

        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <h1 className='text-4xl m-6 p-6 text-white'>Add Coffee</h1>
            <form className="md:w-[90%] mx-auto" onSubmit={handleCoffee}>
                {/* form name and quantity row */}
                <div className="m-20 md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">coffee Name</span>
                            <input type="text" name="name" placeholder="coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">Available Quantity</span>
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" />
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
                            <input type="text" name='supplier' placeholder="Supplier" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">Taste</span>
                            <input type="text" name='taste' placeholder="Taste" className="input input-bordered" />
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
                            <input type="text" name='category' placeholder="Category" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span className="w-[40%]">Details</span>
                            <input type="text" name='details' placeholder="Details " className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <input type="submit" className="btn btn-block  " value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;