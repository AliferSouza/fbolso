export default function download(dados, tipo){

    let blob = new Blob([`${dados}`], { type: `${tipo}`});
    const link= window.document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'export.txt';
    link.click();
    window.URL.revokeObjectURL(link.href);

}