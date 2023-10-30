import reactLogo from '../assets/react.svg'
import {useNavigate} from "react-router";

const Lab1 = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="poem-container m-5">
                <div className="stanza" style={{ color: 'red' }}>
                    Русская зима, белая красавица,
                </div>
                <div className="stanza" style={{ color: 'blue' }}>
                    Сквозь снеговые вуали шагает в тишине.
                </div>
                <div className="stanza" style={{ color: 'green' }}>
                    Снежинки пляшут, как перья в сказке,
                </div>
                <div className="stanza" style={{ color: 'purple' }}>
                    Зима пришла, и волшебство начинается.
                </div>
                <div className="stanza" style={{ color: 'orange' }}>
                    Подчеркнутая строка: <u>Снежинки пляшут, как перья в сказке,</u>
                </div>
                <div className="stanza" style={{ color: 'teal' }}>
                    Курсивом выделенная строка: <i>Зима пришла, и волшебство начинается.</i>
                </div>
                <div className="image-container">
                    <img src={reactLogo} alt="Зима" className="poem-image" />
                </div>
            </div>
            <button className="ml-5 p-2 border-black outline border-1 hover:bg-amber-400"
            onClick={() => navigate('/')}>На главную</button>

        </>
    );
};

export default Lab1;