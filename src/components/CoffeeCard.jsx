

const coffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, category, details } = coffee;
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
                    <button className="btn hover:btn-active">Edit</button>
                    <button className="btn hover:btn-active">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default coffeeCard;