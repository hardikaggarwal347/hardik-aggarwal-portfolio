const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function createAssignmentPDF() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const primaryColor = rgb(0.06, 0.09, 0.16); // #0F172A
  const accentBlue = rgb(0.145, 0.388, 0.922); // #2563EB
  const textMuted = rgb(0.39, 0.45, 0.55); // #64748B
  const borderLine = rgb(0.88, 0.91, 0.94); // #E2E8F0

  // PAGE 1
  let page = pdfDoc.addPage([595.28, 841.89]);
  let { width, height } = page.getSize();
  let y = height - 45;

  page.drawText('Computer Organization & Architecture - Assignment 1', {
    x: 40,
    y,
    size: 16,
    font: fontBold,
    color: primaryColor,
  });
  y -= 16;
  page.drawText('Student: Hardik Aggarwal  |  UID: 25BAI10001  |  Chandigarh University', {
    x: 40,
    y,
    size: 9,
    font: fontRegular,
    color: accentBlue,
  });
  y -= 12;
  page.drawLine({
    start: { x: 40, y },
    end: { x: width - 40, y },
    thickness: 1,
    color: borderLine,
  });
  y -= 18;

  function drawQ(title, content) {
    if (y < 80) {
      page = pdfDoc.addPage([595.28, 841.89]);
      y = height - 45;
    }
    page.drawText(title, {
      x: 40,
      y,
      size: 9.5,
      font: fontBold,
      color: accentBlue,
    });
    y -= 12;

    const lines = typeof content === 'string' ? [content] : content;
    for (const line of lines) {
      if (y < 60) {
        page = pdfDoc.addPage([595.28, 841.89]);
        y = height - 45;
      }
      page.drawText(line, {
        x: 40,
        y,
        size: 8.5,
        font: fontRegular,
        color: primaryColor,
        maxWidth: width - 80,
        lineHeight: 11,
      });
      // approximate height offset based on text length
      const estLines = Math.ceil(line.length / 85);
      y -= Math.max(12, estLines * 11);
    }
    y -= 6;
  }

  drawQ('Q1. Raspberry Pi', [
    'Raspberry Pi is an inexpensive single-board computer developed in the UK. It is popular among schools, hobbyists, beginners, and IoT enthusiasts because of its low cost and compact size. Despite being small, it can perform many everyday computing tasks and is widely used in electronics, robotics, and programming projects.'
  ]);

  drawQ('Q2. AI Summit – 10 Takeaways', [
    '1. Artificial Intelligence is transforming almost every industry.  2. AI is changing software development and deployment.',
    '3. AI systems should be built responsibly and ethically.  4. High-quality data is more important than large amounts of data.',
    '5. Human creativity and judgment remain irreplaceable.  6. AI is improving healthcare outcomes.',
    '7. Demand for AI-skilled professionals will continue to grow.  8. Cloud infrastructure is essential for AI applications.',
    '9. AI has many sub-fields and active research areas.  10. As AI adoption increases, cybersecurity becomes even more important.'
  ]);

  drawQ('Q3. Yotta and NPTEL', [
    'Yotta: An Indian company that provides data center, cloud computing, GPU computing, and AI infrastructure services.',
    'NPTEL: National Programme on Technology Enhanced Learning, an online learning platform by the IITs and IISc that offers free courses in engineering, science, and technology with certification exams.'
  ]);

  drawQ('Q4. Factors for Choosing a Programming Language', [
    '• Type of application being developed  • Performance requirements  • Security requirements  • Availability of libraries and frameworks  • Scalability and future maintenance'
  ]);

  drawQ('Q5. RAM, Word Size, 64-bit System, Processor Speed, and Operating System', [
    'RAM Size: Temporary memory used by running programs. | Word Size: Number of bits the processor handles at one time.',
    '64-bit System: Can process 64 bits at once and access much more memory than 32-bit systems.',
    'Processor Speed (GHz): Number of processing cycles executed per second. | Operating System: macOS (Mac Laptop).'
  ]);

  drawQ('Q6. Why is a GPU Faster than a CPU?', [
    'A CPU has a few powerful cores designed for different tasks, while a GPU has thousands of smaller cores that perform many similar operations in parallel. This makes GPUs much faster for graphics processing and AI workloads.'
  ]);

  drawQ('Q7. CPU vs GPU vs TPU', [
    'CPU: General-purpose processor for everyday computing.',
    'GPU: Optimized for parallel processing, graphics, and AI training.',
    'TPU: Specialized processor developed for accelerating machine learning and deep learning workloads.'
  ]);

  drawQ('Q8. Winner of the 2025 ACM A.M. Turing Award', [
    'Andrew G. Barto and Richard S. Sutton received the 2025 ACM A.M. Turing Award for their pioneering contributions to reinforcement learning.'
  ]);

  drawQ('Q9. Stampeding Herd Problem', [
    'The Stampeding Herd Problem occurs when many users or processes try to access the same resource immediately after it becomes available, causing server overload, slower response times, and reduced performance.'
  ]);

  drawQ('Q10. Intel and AMD Founders', [
    'Intel: Founded by Gordon Moore and Robert Noyce.',
    'AMD: Co-founded by Jerry Sanders and a group of colleagues; Jerry Sanders served as the founding CEO.'
  ]);

  drawQ('Q11. CPU Organization of My Laptop', [
    'My laptop uses a 64-bit ARM-based processor running macOS.'
  ]);

  const pdfBytes = await pdfDoc.save();
  const outDir = path.join(__dirname, '../public/assets');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outFile = path.join(outDir, 'COA_Assignment_1.pdf');
  fs.writeFileSync(outFile, pdfBytes);
  console.log('Assignment PDF generated at:', outFile);
}

createAssignmentPDF().catch(console.error);
