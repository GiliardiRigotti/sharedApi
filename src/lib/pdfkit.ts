import PDFDocument from "pdfkit"

export function gerarPDFContrato(res) {
    const doc = new PDFDocument();
  
    // Configurar o cabeçalho da resposta para PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=contrato.pdf');
  
    // Pipe o documento PDF diretamente para a resposta
    doc.pipe(res);
  
    // Adicionar o título com tamanho 18px
    /* doc.fontSize(18).text(textoTitulo, {
      align: 'center',
      underline: true
    }); */
  
    // Adicionar espaçamento entre o título e o corpo do texto
    doc.moveDown(2);
  
    // Adicionar o corpo do contrato com tamanho 14px e justificado
    /* doc.fontSize(14).text(textoCorpo, {
      align: 'justify',
      lineGap: 8, // Espaçamento entre as linhas
      paragraphGap: 12 // Espaçamento entre parágrafos
    }); */
  
    // Finalizar o PDF
    doc.end();
  }