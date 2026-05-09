// ── Case Profile ────────────────────────────────────────────────────────────────
// All fields used across every generated document.
// Swap these values to generate documents for a different case.

export const C = {
  // Accused
  accusedName:        'Ramesh Kumar Sharma',
  accusedAge:         '34',
  accusedFather:      'Late Suresh Kumar Sharma',
  accusedAddress:     '#42, 5th Cross, Koramangala 4th Block, Bengaluru - 560034',
  accusedOccupation:  'Carpenter',

  // FIR & Arrest
  firNo:              '0442/2026',
  crimeDate:          '30.04.2026',
  arrestDate:         '02.05.2026',
  policeStation:      'Koramangala Police Station, South Division, Bengaluru',
  sections:           'Sections 303(2) and 333(1) of BNS, 2023',

  // Court
  courtName:          'Additional Sessions Judge, Bengaluru Urban District',
  courtRoom:          'Court Room No. 3, ASJ Court Complex, Bengaluru',
  judgeFullName:      "Hon'ble Shri Justice P.K. Reddy",
  caseNo:             'Crl.Misc.No.            /2026',

  // Complainant
  complainant:        'Mukesh Agarwal',
  complainantAddress: 'Agarwal Electronics, 80 Feet Road, Koramangala, Bengaluru',

  // Advocate on record
  advocate:           'Adv. S. Murthy',
  advocateEnrol:      'KAR/2009/1234',
  advocatePhone:      '+91-98450-12345',

  // Auto-populated
  today: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
};
