import {useNavigate} from "react-router";

const Home = () => {
    const navigate = useNavigate()

    return (
        <main className="flex flex-col ml-5 mt-5">
            <p className="text-xl">
                Здесь представлены лабораторные работы, выполненные на занятиях по дисциплине
                "Использование современных графических библиотек".
            </p>
            <p>Студент Когай В. Я. гр. М9122-01.04.02мкт</p>

            <div className="flex flex-col mt-5">
                <div>
                    <div className="mb-1.5">Лабораторная работа 1</div>
                    <button className="border-2 border-black p-2 hover:bg-amber-400"
                            onClick={() => navigate('/lab1')}>Перейти
                    </button>
                </div>
            </div>
            <div className="flex flex-col mt-5">
                <div>
                    <div className="mb-1.5">Лабораторная работа 2</div>
                    <button className="border-2 border-black p-2 hover:bg-amber-400"
                            onClick={() => navigate('/lab2')}>Перейти
                    </button>
                </div>
            </div>

            <div className="flex flex-col mt-5">
                <div>
                    <div className="mb-1.5">Лабораторная работа 3</div>
                    <button className="border-2 border-black p-2 hover:bg-amber-400"
                            onClick={() => navigate('/lab3')}>Перейти
                    </button>
                </div>
            </div>

        </main>
    );
};

export default Home