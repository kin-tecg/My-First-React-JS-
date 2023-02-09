import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="ParentBox">
            <ProductPhoto />
            <ProductInfo category="GALAXY" title="Youniverse" isDiscount="coming" />
        </div>
    );
}

function ProductPhoto() {
    return (
        <div className="Foto">
            <img className="FotoImg" src="/images/shoes.png" alt="" />
        </div>
    );
}
function ProductInfo(props) {
    const { category, title, isDiscount } = props;
    const benefits = ["Not easily stained", "Sturdier material", "Limited Edition"];
    const listOfBenefit = benefits.map((itemBenefit) => <li>{itemBenefit}</li>);
    return (
        <div>
            <div className="Description">
                <p className="Cate">{category}</p>
                <h1 className="Title"> {title}</h1>
                <p className="Price"> IDR 730,000</p>
                <CheckDiscount isDiscount={isDiscount} />
                <p className="Info">
                    One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from '88'. Signature details and materials celebrate the game-changing icon.
                </p>
                <ul>{listOfBenefit}</ul>
                <a href="#" onClick={(e) => AddCart(title, e)}>
                    Add to Cart
                </a>
            </div>
        </div>
    );
}

function CheckDiscount(props) {
    const { isDiscount } = props;
    if (isDiscount == "yes") {
        return <p>Discount 50% off</p>;
    } else if (isDiscount == "coming") {
        return <p>Coming soon</p>;
    } else {
        return <p>No discount available</p>;
    }
}

function AddCart(e) {
    return console.log(`Add ${e} to the cart`);
}

export default App;
