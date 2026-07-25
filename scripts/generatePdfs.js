import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePdf(title, subtitle, sections, filename) {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const page = pdfDoc.addPage([600, 800]);

  const { width, height } = page.getSize();
  const margin = 50;

  // Header Banner Background
  page.drawRectangle({
    x: 0,
    y: height - 120,
    width: width,
    height: 120,
    color: rgb(0.05, 0.16, 0.27), // Navy #0E2A3F
  });

  // Header Gold Accent Bar
  page.drawRectangle({
    x: 0,
    y: height - 124,
    width: width,
    height: 4,
    color: rgb(0.72, 0.58, 0.30), // Gold #B8934D
  });

  // Title Text
  page.drawText('KRISHNA INTERNATIONAL SCHOOL, ALIGARH', {
    x: margin,
    y: height - 45,
    size: 16,
    font: fontBold,
    color: rgb(0.72, 0.58, 0.30),
  });

  page.drawText(title.toUpperCase(), {
    x: margin,
    y: height - 72,
    size: 18,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText(subtitle, {
    x: margin,
    y: height - 95,
    size: 10,
    font: font,
    color: rgb(0.85, 0.85, 0.85),
  });

  let currentY = height - 160;

  // Render Sections
  for (const section of sections) {
    if (currentY < 100) break;

    // Section Heading
    page.drawText(section.heading, {
      x: margin,
      y: currentY,
      size: 13,
      font: fontBold,
      color: rgb(0.05, 0.16, 0.27),
    });

    currentY -= 6;
    page.drawLine({
      start: { x: margin, y: currentY },
      end: { x: width - margin, y: currentY },
      thickness: 1,
      color: rgb(0.85, 0.85, 0.85),
    });

    currentY -= 18;

    // Section Lines
    for (const line of section.lines) {
      if (currentY < 60) break;
      page.drawText(line, {
        x: margin + 10,
        y: currentY,
        size: 10,
        font: font,
        color: rgb(0.25, 0.25, 0.25),
      });
      currentY -= 16;
    }

    currentY -= 14;
  }

  // Footer Branding
  page.drawRectangle({
    x: 0,
    y: 0,
    width: width,
    height: 35,
    color: rgb(0.95, 0.94, 0.91),
  });

  page.drawText('Official School Document • Krishna International School, Aligarh (CBSE Affiliated)', {
    x: margin,
    y: 12,
    size: 9,
    font: font,
    color: rgb(0.4, 0.4, 0.4),
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public', 'docs', filename);
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Generated: ${filename}`);
}

async function main() {
  const docsDir = path.join(process.cwd(), 'public', 'docs');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  // 1. Fee Structure PDF
  await generatePdf(
    'Fee Structure & Financial Schedule 2026-27',
    'Session 2026-2027 • Approved by Board of Management',
    [
      {
        heading: '1. One-Time Admission Charges (New Enrolments Only)',
        lines: [
          '• Registration & Processing Fee: INR 1,500 (Non-refundable)',
          '• Admission Fee (Nursery to Class XII): INR 15,000 (One-time)',
          '• Caution Security Deposit: INR 5,000 (Refundable upon withdrawal)'
        ]
      },
      {
        heading: '2. Composite Annual Tuition Fee (Quarterly Installments)',
        lines: [
          '• Foundational Stage (Pre-Nursery to UKG): INR 12,500 per quarter',
          '• Preparatory Stage (Classes I to V): INR 15,800 per quarter',
          '• Middle Stage (Classes VI to VIII): INR 18,200 per quarter',
          '• Secondary & Senior Secondary (Classes IX to XII): INR 22,500 per quarter'
        ]
      },
      {
        heading: '3. Optional Transport & Hostel Facilities',
        lines: [
          '• City Routes (Zone A - within 5km): INR 2,200 per month',
          '• Outer Routes (Zone B - 5km to 15km): INR 3,100 per month',
          '• AC Hostel Facilities (Class VI onwards): INR 1,10,000 per annum (includes mess & laundry)'
        ]
      },
      {
        heading: '4. Due Dates & Payment Terms',
        lines: [
          '• Quarter 1 (April - June): Due by April 10, 2026',
          '• Quarter 2 (July - September): Due by July 10, 2026',
          '• Quarter 3 (October - December): Due by October 10, 2026',
          '• Quarter 4 (January - March): Due by January 10, 2027',
          '• Modes of Payment: Online Portal, UPI, Demand Draft payable to "Krishna International School Aligarh"'
        ]
      }
    ],
    'fee-structure.pdf'
  );

  // 2. Mandatory Disclosure PDF
  await generatePdf(
    'CBSE Mandatory Public Disclosure',
    'As per CBSE Circular & Appendix IX Guidelines',
    [
      {
        heading: 'A. General Information',
        lines: [
          '• Name of the School: Krishna International School',
          '• Affiliation No.: 2132849 | School Code: 81754',
          '• Complete Address: NH-91, GT Road, Aligarh, Uttar Pradesh 202001',
          '• Principal Name & Qualification: Dr. S. K. Sharma (M.Sc., B.Ed., Ph.D.)',
          '• School Email: info@krishnainternationalschool.in | Phone: +91 94127 30005'
        ]
      },
      {
        heading: 'B. Documents & Information',
        lines: [
          '• Copies of Affiliation/Upgradation Letter: Verified & Granted till 2028',
          '• Societies/Trust Registration Certificate: Krishna Educational Trust Reg No. 448',
          '• No Objection Certificate (NOC) Issued by State Govt: Granted (NOC No. 714/15-5)',
          '• Building Safety Certificate: Certified by PWD Executive Engineer',
          '• Fire Safety Certificate: Certified by Chief Fire Officer Aligarh'
        ]
      },
      {
        heading: 'C. Result & Academics',
        lines: [
          '• Last 3 Years Class X CBSE Board Result: 100% Pass Rate (Highest 98.4%)',
          '• Last 3 Years Class XII CBSE Board Result: 99.2% Pass Rate (Highest 97.8%)',
          '• Teacher to Student Ratio: 1 : 20',
          '• Campus Area: 5.2 Acres (21,043 sq meters) with lush green botanical grounds'
        ]
      }
    ],
    'mandatory-disclosure.pdf'
  );

  // 3. Admission Brochure PDF
  await generatePdf(
    'Official Admission Brochure 2026-27',
    'Pathways to Excellence • Pre-Nursery to Grade 12',
    [
      {
        heading: '1. Welcome to Krishna International School',
        lines: [
          'Krishna International School is Aligarh premier co-educational institution set across a',
          'state-of-the-art 5-acre campus. Our holistic learning ecosystem nurtures academic rigor,',
          'ethical leadership, artistic expression, and athletic brilliance.'
        ]
      },
      {
        heading: '2. Four Pillars of KIS Education',
        lines: [
          '• Academic Mastery: CBSE Curriculum enriched with STEM & Olympiad coaching.',
          '• Global Citizenship: Exchange programs, Model UN, and Multilingual language labs.',
          '• Innovation & AI: Hands-on Robotics, Coding Labs, and Smart AI Learning Portals.',
          '• Sports Excellence: Olympic-size swimming pool, turf ground, and indoor badminton arena.'
        ]
      },
      {
        heading: '3. Step-by-Step Admission Process',
        lines: [
          '• Step 1: Submit Online Registration Form or visit the Campus Admission Cell.',
          '• Step 2: Interactive Session / Academic Aptitude Assessment.',
          '• Step 3: Interaction with Principal & Offer Letter issuance.',
          '• Step 4: Verification of Certificates and Fee Payment.'
        ]
      }
    ],
    'admission-brochure.pdf'
  );

  // 4. Prospectus PDF
  await generatePdf(
    'School Prospectus & Information Guide',
    'Nurturing Leaders for Tomorrow',
    [
      {
        heading: '1. Vision & Mission',
        lines: [
          'Our mission is to foster an environment of intellectual curiosity, moral integrity,',
          'and physical wellbeing. We empower students to meet global challenges with resilience',
          'and compassion.'
        ]
      },
      {
        heading: '2. World-Class Infrastructure',
        lines: [
          '• 40+ Digitally Enabled Smart Classrooms with interactive 4K panels.',
          '• Advanced Physics, Chemistry, Biology, and Biotechnology Laboratories.',
          '• 15,000+ Volume Automated Library & E-Resource Knowledge Center.',
          '• 400-Seat Air-Conditioned Auditorium and Fine Arts Studio.'
        ]
      },
      {
        heading: '3. Holistic Co-Curricular Program',
        lines: [
          '• Performing Arts: Indian & Western Music, Classical Dance, Theatre Guild.',
          '• Clubs & Societies: Eco Club, Debate Society, Quiz Club, Robotics & AI Lab.',
          '• House System: Agni, Jal, Vayu, and Prithvi Houses fostering healthy competition.'
        ]
      }
    ],
    'prospectus.pdf'
  );
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
