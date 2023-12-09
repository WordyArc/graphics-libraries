import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
interface Game {
    [key: string]: string | number;
    title: string;
    genre: string;
    releaseDate: number;
    developer: string;
    publisher: string;
}
const Lab3 = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<Game[]>([]);
    const [filteredData, setFilteredData] = useState<Game[]>([]);
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState<Game>({
        title: '',
        genre: '',
        releaseDate: 0,
        developer: '',
        publisher: ''
    });

    useEffect(() => {
        fetch('http://localhost:8080/api/video-game-service/video-games')
            .then(response => response.json())
            .then(data => {
                setData(data.games);
                setFilteredData(data.games);
            });

        console.log(data)
        console.log(filteredData)
    }, []);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        let result = data;
        for (const key in filters) {
            if (filters[key]) {
                result = result.filter((item: Game) => item[key as keyof Game] === filters[key as keyof Game]);
            }
        }
        result = result.filter((item: Game) => item.title.includes(search));
        setFilteredData(result);
    };

    return (
        <div className="m-5">
            <button className="mx-5 p-1 border-black outline border-1 hover:bg-amber-400"
                    onClick={() => navigate('/')}>На главную
            </button>
            <form onSubmit={handleSearch}>
                <select onChange={(e) => setFilters({...filters, title: e.target.value})}>
                    <option value="">All</option>
                    {data.map((item, index) => (
                        <option key={index} value={item.title}>{item.title}</option>
                    ))}
                </select>
                {/* Repeat the above select input for each field */}
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Developer</th>
                    <th>Publisher</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.genre}</td>
                        <td>{item.releaseDate}</td>
                        <td>{item.developer}</td>
                        <td>{item.publisher}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lab3;