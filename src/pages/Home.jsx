import { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [prompt, setPrompt] = useState('');
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('prompt', prompt);
        files.forEach(file => formData.append('files', file));

        const res = await axios.post('/evaluate', formData);
        navigate('/result', { state: { data: res.data } });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Evaluador C y PSEINT</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Escribe el enunciado aquí..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full p-2 border mb-4"
                    rows={4}
                />
                <input
                    type="file"
                    accept=".c,.psc"
                    multiple
                    onChange={(e) => setFiles([...e.target.files])}
                />
                <button className="bg-blue-500 text-white px-4 py-2 mt-4">Evaluar</button>
            </form>
        </div>
    );
}
