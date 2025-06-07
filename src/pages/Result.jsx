import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Papa from 'papaparse';

export default function Result() {
    const { state } = useLocation();
    const data = state?.data || [];

    const downloadPDF = () => {
        const doc = new jsPDF();
        autoTable(doc, {
            head: [['Apellido', 'Nombre', 'Calificación', 'Comentarios']],
            body: data.map(d => [d.apellido, d.nombre, d.calificacion, d.comentarios]),
        });
        doc.save('evaluaciones.pdf');
    };

    const downloadCSV = () => {
        const csv = Papa.unparse(data);
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'evaluaciones.csv';
        link.click();
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Resultados</h2>
            <table className="w-full border mb-4">
                <thead>
                    <tr>
                        <th>Apellido</th><th>Nombre</th><th>Nota</th><th>Comentarios</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i} className="border-b border-gray-300">
                            <td>{d.apellido}</td>
                            <td>{d.nombre}</td>
                            <td>{d.calificacion}</td>
                            <td>{d.comentarios}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={downloadPDF} className="bg-green-500 text-white px-4 py-2 mr-2">Descargar PDF</button>
            <button onClick={downloadCSV} className="bg-yellow-500 text-black px-4 py-2">Descargar CSV</button>
        </div>
    );
}
