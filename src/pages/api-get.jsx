export const getStaticProps = async () => {
    const bekdanKevotkanMalumot = await fetch(
        "https://fakestoreapi.com/products"
    );
    const data = await bekdanKevotkanMalumot.json();

    return {
        props: { products: data },
    };
};

const ApiGet = ({ products }) => {
    return (
        <div>
            <div className="parent">
                {products?.map((el) => {
                    return (
                        <div className="card">
                            <img src={el.image} alt={el.title} />
                            <h3>{el.title}</h3>
                            <p>{el.price}$</p>
                            <button>Buy</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ApiGet;
