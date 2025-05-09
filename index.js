function parseHoras(entrada, salida) {
    if (!entrada && !salida || entrada === "--------" && salida === "--------") return "No trabajado";
    if ((!entrada || entrada === "--------") && salida) return "Sin entrada";
    if(entrada && (!salida || salida === "--------")) return "Sin salida";

    const [h1, m1] = entrada.split(':').map(Number);
    const [h2, m2] = salida.split(':').map(Number);
    const inicio = h1 * 60 + m1;
    let fin = h2 * 60 + m2;

    if (h1 > h2) {
        fin += 24 * 60;
    }

    if (fin - inicio <= 1) return "Entrada y salida similares";

    const horas = (fin - inicio) / 60;
    return horas.toFixed(2);
}

function procesarArchivo() {
    const input = document.getElementById('fileInput');
    if (!input.files.length) return alert("Selecciona un archivo TXT");

    const reader = new FileReader();
    reader.onload = function (e) {
        const lines = e.target.result.split(/\r?\n/);
        // Preparamos datos: fila de encabezados + luego cada línea
        const data = [["Línea original", "Día", "Entrada", "Salida", "Horas trabajadas", "Observaciones"]];
        const diaRegex  = /^(dom|lun|mar|mié|mie|jue|vie|sáb|sab)\s+\d{1,2}/i;
        const horaRegex = /(?:\d{2}:\d{2}|--------)/g;

        for (const line of lines) {
            const matchDia = diaRegex.exec(line);
            const matchHoras = line.match(horaRegex);
            if (matchDia) {
                const dia = matchDia[0];
                const entrada = matchHoras?.[0] || "--------";
                const salida = matchHoras?.[1] || "--------";
                const horas = parseHoras(entrada, salida);
                data.push([line, dia, entrada, salida, horas, ""]);
            } else {
                ata.push([line, "", "", "", "", ""]);
            }
        }

        // Creamos worksheet
        const ws = XLSX.utils.aoa_to_sheet(data);

        // 1) Centrar encabezados (fila 1)
        const colsCount = data[0].length;
        for (let c = 0; c < colsCount; c++) {
            const addr = XLSX.utils.encode_cell({ r: 0, c });
            if (!ws[addr]) continue;
            ws[addr].s = {
            alignment: { horizontal: "center", vertical: "center" }
            };
        }

        // 2) Auto-ajustar ancho de columnas
        const colWidths = data[0].map((_, colIdx) => {
            // calcular longitud máxima de texto en esta columna
            const maxLen = data.reduce((max, row) => {
            const cell = row[colIdx] == null ? "" : row[colIdx].toString();
            return Math.max(max, cell.length);
            }, 10);
            return { wch: maxLen + 2 }; // +2 para un poco de padding
        });
        ws['!cols'] = colWidths;

        // Generar workbook y descargar
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Asistencia");
        XLSX.writeFile(wb, "asistencia_convertida.xlsx");
    };

    reader.readAsText(input.files[0]);
}