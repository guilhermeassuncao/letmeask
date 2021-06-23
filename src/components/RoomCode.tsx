import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";


export function RoomCode() {
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copiar room code" />
            </div>
            <span>
                Sala #656554245
            </span>
        </button>
    ); 
}
