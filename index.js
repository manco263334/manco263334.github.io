document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('fileInput').addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('downloadExcel').disabled = false;
            const text = e.target.result;
            const result = parseAttendance(text);
            document.getElementById('output').textContent = JSON.stringify(result, null, 2);
            document.getElementById('downloadExcel').onclick = function () {
                generarExcel(result);
            };
        };
        reader.readAsText(file);
    });

    function parseAttendance(text) {
        const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
        const result = {
            modulo: lines[0],
            empleados: []
        };

        const dateRegex = /^\w{3} (\d{2}-\d{2}-\d{4})\s+([\d:-]+|--------)\s+([\d:-]+|--------)\s+([\d.]+)$/;
        let i = 0;

        while (i < lines.length) {
            if (lines[i].startsWith('Codigo')) {
                const codigo = lines[i].split(':')[1].trim();
                const nombre = lines[i + 1].split(':')[1].trim();
                i += 4; // Saltamos a la tabla de asistencia
                const dias = [];
                while (i < lines.length && !lines[i].startsWith('Codigo') && !lines[i].startsWith('Horas Trabajadas')) {
                    const match = lines[i].match(dateRegex);
                    if (match) {
                    const [_, fecha, entrada, salida, horasStr] = match;
                    dias.push({
                        fecha,
                        entrada: entrada === '--------' ? null : entrada,
                        salida: salida === '--------' ? null : salida,
                        horas: parseFloat(horasStr)
                    });
                    }
                    i++;
                }

                const mas7 = [];
                const menos7 = [];
                const noTrabajo = [];
                const sinEntrada = [];
                const sinSalida = [];
                const entradaSalidaIgual = [];

                dias.forEach(dia => {
                    if (dia.entrada && dia.salida) {
                        if (dia.horas > 7) mas7.push(dia.fecha);
                        else menos7.push(dia.fecha);

                        const entradaMin = toMinutes(dia.entrada);
                        const salidaMin = toMinutes(dia.salida);
                        if (Math.abs(salidaMin - entradaMin) < 1) {
                            entradaSalidaIgual.push(dia.fecha);
                        }
                    } else if (!dia.entrada && !dia.salida) {
                        noTrabajo.push(dia.fecha);
                    } else if (!dia.entrada && dia.salida) {
                        sinEntrada.push(dia.fecha);
                    } else if (dia.entrada && !dia.salida) {
                        sinSalida.push(dia.fecha);
                    }
                });

                result.empleados.push({
                    codigo,
                    nombre,
                    mas_de_7_horas: mas7,
                    menos_de_7_horas: menos7,
                    no_trabajo: noTrabajo,
                    solo_salida: sinEntrada,
                    solo_entrada: sinSalida,
                    entrada_salida_similares: entradaSalidaIgual
                });
            } else {
                i++;
            }
        }

        return result;
    }

    function toMinutes(hora) {
        const [h, m, s] = hora.split(':').map(Number);
        return h * 60 + m + s / 60;
    }

    function generarExcel(data) {
        const rows = [];

        data.empleados.forEach(emp => {
            const maxLength = Math.max(
                emp.mas_de_7_horas.length,
                emp.menos_de_7_horas.length,
                emp.no_trabajo.length,
                emp.solo_entrada.length,
                emp.solo_salida.length,
                emp.entrada_salida_similares.length
            );

            for (let i = 0; i < maxLength; i++) {
                rows.push({
                    'Código': emp.codigo,
                    'Nombre': emp.nombre,
                    'Días > 7h': emp.mas_de_7_horas[i] || '',
                    'Días < 7h': emp.menos_de_7_horas[i] || '',
                    'No trabajó': emp.no_trabajo[i] || '',
                    'Solo entrada': emp.solo_entrada[i] || '',
                    'Solo salida': emp.solo_salida[i] || '',
                    'Entrada ~ Salida': emp.entrada_salida_similares[i] || ''
                });
            }
        });

        const ws = XLSX.utils.json_to_sheet(rows);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Reporte Asistencia");

        XLSX.writeFile(wb, "reporte_asistencia.xlsx");
    }
});