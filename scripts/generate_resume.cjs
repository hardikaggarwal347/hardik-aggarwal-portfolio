const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(0.06, 0.09, 0.16); // #0F172A
  const accentBlue = rgb(0.145, 0.388, 0.922); // #2563EB
  const textMuted = rgb(0.39, 0.45, 0.55); // #64748B
  const borderLine = rgb(0.88, 0.91, 0.94); // #E2E8F0

  let y = height - 42;

  // Header Title
  page.drawText('HARDIK AGGARWAL', {
    x: 40,
    y,
    size: 20,
    font: fontBold,
    color: primaryColor,
  });

  y -= 16;
  page.drawText('Computer Science Engineering (AI Specialization) • Chandigarh University', {
    x: 40,
    y,
    size: 10,
    font: fontBold,
    color: accentBlue,
  });

  y -= 14;
  page.drawText('UID: 25BAI10001  |  hardikaggarwal347@gmail.com  |  +91-9501500347  |  Gharuan, Punjab', {
    x: 40,
    y,
    size: 8,
    font: fontRegular,
    color: textMuted,
  });

  y -= 12;
  page.drawText('GitHub: github.com/hardikaggarwal347  |  LinkedIn: linkedin.com/in/hardik-aggarwal-253697384', {
    x: 40,
    y,
    size: 8,
    font: fontRegular,
    color: accentBlue,
  });

  y -= 10;
  page.drawLine({
    start: { x: 40, y },
    end: { x: width - 40, y },
    thickness: 1,
    color: borderLine,
  });

  y -= 16;

  // Section helper
  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: 40,
      y,
      size: 9.5,
      font: fontBold,
      color: accentBlue,
    });
    y -= 4;
    page.drawLine({
      start: { x: 40, y },
      end: { x: width - 40, y },
      thickness: 0.75,
      color: borderLine,
    });
    y -= 14;
  }

  // Summary
  drawSectionHeader('Profile Summary');
  const summaryText = "Second-year Computer Science student at Chandigarh University, specializing in AI, with a strong curiosity for end-to-end software engineering. Experienced in building automation tools, speech-to-text pipelines, and computer vision systems. Seeking an engineering internship to learn real-world industry practices and deliver meaningful product impact.";
  page.drawText(summaryText, {
    x: 40,
    y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
    lineHeight: 12,
    maxWidth: width - 80,
  });
  y -= 30;

  // Education
  drawSectionHeader('Education');
  
  // CU
  page.drawText('Chandigarh University, Gharuan, Punjab', {
    x: 40,
    y,
    size: 9,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText('2025 - 2029', {
    x: width - 95,
    y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 11;
  page.drawText('Bachelor of Engineering - Computer Science (AI Specialization)  |  CGPA: 7.5', {
    x: 40,
    y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 15;

  // LSMS
  page.drawText('LSMS, Khanna, Punjab', {
    x: 40,
    y,
    size: 9,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText('2023 - 2025', {
    x: width - 95,
    y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 11;
  page.drawText('Senior Secondary Education (Science - PCM)  |  Score: 89%', {
    x: 40,
    y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 15;

  // OPBMS
  page.drawText('OPBMS, Khanna, Punjab', {
    x: 40,
    y,
    size: 9,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText('2022 - 2023', {
    x: width - 95,
    y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 11;
  page.drawText('Secondary Education (Science - PCM)  |  Score: 91%', {
    x: 40,
    y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  y -= 20;

  // Projects
  drawSectionHeader('Technical Projects');
  
  // Project 1
  page.drawText('AI Video Summarizer', {
    x: 40,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText('Python, OpenAI Whisper, NLP, FFmpeg', {
    x: 170,
    y,
    size: 8.5,
    font: fontOblique,
    color: accentBlue,
  });
  y -= 12;
  page.drawText('• Built an end-to-end pipeline that extracts audio from video streams using FFmpeg and performs speech transcription using OpenAI Whisper.', {
    x: 46,
    y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
    maxWidth: width - 90,
    lineHeight: 11,
  });
  y -= 14;
  page.drawText('• Achieved ~95% transcription accuracy on tested audio/video clips with robust automated error recovery.', {
    x: 46,
    y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
    maxWidth: width - 90,
  });
  y -= 18;

  // Project 2
  page.drawText('Smart AI Attendance System', {
    x: 40,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText('Python, OpenCV, NumPy, scikit-learn', {
    x: 195,
    y,
    size: 8.5,
    font: fontOblique,
    color: accentBlue,
  });
  y -= 12;
  page.drawText('• Engineered a real-time facial recognition pipeline processing live camera feeds at ~25 FPS on consumer laptop hardware.', {
    x: 46,
    y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
    maxWidth: width - 90,
    lineHeight: 11,
  });
  y -= 14;
  page.drawText('• Achieved 92%+ identification accuracy across varying lighting and angles with automated CSV attendance record generation.', {
    x: 46,
    y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
    maxWidth: width - 90,
  });
  y -= 20;

  // Technical Skills
  drawSectionHeader('Skills & Competencies');
  page.drawText('Programming Languages:', { x: 40, y, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('Java, Python, C++, C', { x: 170, y, size: 8.5, font: fontRegular, color: primaryColor });
  y -= 14;
  page.drawText('Interpersonal Skills:', { x: 40, y, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('Active Listening, Smart Worker, Problem Solving Mindset', { x: 170, y, size: 8.5, font: fontRegular, color: primaryColor });
  y -= 14;
  page.drawText('Languages:', { x: 40, y, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('English (Professional), Hindi (Professional), Punjabi (Intermediate)', { x: 170, y, size: 8.5, font: fontRegular, color: primaryColor });
  y -= 20;

  // Certifications
  drawSectionHeader('Certifications');
  const certs = [
    { title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)', org: 'Microsoft / Certiport' },
    { title: 'Agile Foundations', org: 'LinkedIn Learning' },
    { title: 'Design Thinking: Understanding the Process & Implementing the Process', org: 'LinkedIn Learning' },
    { title: 'Critical Enquiry and Research Methodology', org: 'Coursera / Chandigarh University' },
    { title: 'Entrepreneurial Mindset: Build, Grow & Lead Your Own Venture', org: 'Coursera / Chandigarh University' }
  ];

  for (const c of certs) {
    page.drawText(`• ${c.title}`, { x: 46, y, size: 8.5, font: fontBold, color: primaryColor });
    page.drawText(`- ${c.org}`, { x: width - 180, y, size: 8, font: fontRegular, color: textMuted });
    y -= 13;
  }
  y -= 7;

  // Experience
  drawSectionHeader('Experience & Community Engagement');
  page.drawText('Social Internship - NGO', { x: 40, y, size: 9, font: fontBold, color: primaryColor });
  page.drawText('2026 (30 Hours)', { x: width - 110, y, size: 8.5, font: fontRegular, color: textMuted });
  y -= 11;
  page.drawText('• Volunteered 30 hours with a local NGO on community outreach, on-ground activities, and coordination.', {
    x: 46,
    y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
  });
  y -= 12;
  page.drawText('• Collaborated with team members and local residents, cultivating active listening, resilience, and agile problem solving.', {
    x: 46,
    y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
  });

  const pdfBytes = await pdfDoc.save();
  const outDir = path.join(__dirname, '../public/assets');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outFile = path.join(outDir, '25BAI10001_Hardik_Resume.pdf');
  fs.writeFileSync(outFile, pdfBytes);
  console.log('Resume successfully generated at:', outFile);
}

createResume().catch(console.error);
