import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router";

const Lab2: React.FC = () => {
    const navigate = useNavigate()
    const [data, setData] = useState<string[][]>([]);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    useEffect(() => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && typeof e.target.result === 'string') {
                    const text = e.target.result;
                    const rows = text.split('\n');
                    const tableData = rows.map((row) => row.split(';'));
                    setData(tableData);
                }
            };
            reader.readAsText(selectedFile);
        }
    }, [selectedFile]);

    return (
        <div className="m-5">
            <button className="mx-5 p-1 border-black outline border-1 hover:bg-amber-400"
                    onClick={() => navigate('/')}>На главную</button>
            <input type="file" accept=".txt" onChange={handleFileChange} />
            <table>
                <thead>
                <tr>
                    <th>Компьютерная игра</th>
                    <th>Жанр</th>
                    <th>Год выхода</th>
                    <th>Разработчик</th>
                    <th>Издатель</th>
                </tr>
                </thead>
                <tbody>
                {data.map((rowData, index) => (
                    <tr key={index}>
                        {rowData.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lab2;
