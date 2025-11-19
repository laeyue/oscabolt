export interface PensionerRecord {
  id: string;
  firstName: string;
  lastName: string;
  barangay: string;
  birthdate: string;
  pensionType: 'Local' | 'National';
  monthlyAmount: number;
  lastValidated: string;
  nextPayout: string;
  status: 'active' | 'needs-review';
}

export const mockPensioners: PensionerRecord[] = [
  {
    id: 'OSCA-2024-001',
    firstName: 'Maria',
    lastName: 'Santos',
    barangay: 'Tibanga',
    birthdate: '1945-03-15',
    pensionType: 'National',
    monthlyAmount: 1500,
    lastValidated: '2024-10-15',
    nextPayout: '2024-12-01',
    status: 'active',
  },
  {
    id: 'OSCA-2024-002',
    firstName: 'Jose',
    lastName: 'Dela Cruz',
    barangay: 'Poblacion',
    birthdate: '1950-07-22',
    pensionType: 'Local',
    monthlyAmount: 1000,
    lastValidated: '2024-09-20',
    nextPayout: '2024-12-01',
    status: 'active',
  },
  {
    id: 'OSCA-2024-003',
    firstName: 'Rosario',
    lastName: 'Ramos',
    barangay: 'Pala-o',
    birthdate: '1948-11-05',
    pensionType: 'National',
    monthlyAmount: 1500,
    lastValidated: '2024-08-10',
    nextPayout: '2024-12-01',
    status: 'needs-review',
  },
  {
    id: 'OSCA-2024-004',
    firstName: 'Pedro',
    lastName: 'Garcia',
    barangay: 'Mahayahay',
    birthdate: '1952-01-30',
    pensionType: 'Local',
    monthlyAmount: 1000,
    lastValidated: '2024-10-25',
    nextPayout: '2024-12-01',
    status: 'active',
  },
];
