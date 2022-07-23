import "./card.css";
import CreateGraph from "./CreateButton";
import DataInput from "./datainput";

function Card() {
    return (
            <div className="card">
                <h1>SPARKLINER</h1>
                <DataInput />
                <CreateGraph />
            </div>
    );
}

export default Card;