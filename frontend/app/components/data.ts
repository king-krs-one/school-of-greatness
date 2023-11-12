import { TableInputField, TableSelectField } from '@/components/widgets/Table/Cells';

const myCountries = [
  { value: 'new_zealand', label: 'New Zealand' },
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'belgium', label: 'Belgium' },
  { value: 'sweden', label: 'Sweden' },
  { value: 'canada', label: 'Canada' },
];

const myFilter = [
  {
    id: 'first_name',
    label: 'First Name',
    type: 'input',
  },
  {
    id: 'last_name',
    label: 'Last Name',
    type: 'input',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'input',
  },
  {
    id: 'country',
    label: 'Country',
    type: 'select',
    multi: true,
  },
];

const myData = [
  {
    first_name: 'Russell',
    last_name: 'Morse',
    email: 'auctor.velit@aol.ca',
    country: { value: 'new_zealand', label: 'New Zealand' },
  },
  {
    first_name: 'Oscar',
    last_name: 'Austin',
    email: 'et.magna@aol.org',
    country: { value: 'nigeria', label: 'Nigeria' },
  },
  {
    first_name: 'Felicia',
    last_name: 'Hinton',
    email: 'nec.tempus.mauris@protonmail.net',
    country: { value: 'belgium', label: 'Belgium' },
  },
  {
    first_name: 'Reed',
    last_name: 'Curry',
    email: 'mi@hotmail.net',
    country: { value: 'sweden', label: 'Sweden' },
  },
  {
    first_name: 'Kylan',
    last_name: 'Haynes',
    email: 'phasellus.in@google.ca',
    country: { value: 'canada', label: 'Canada' },
  },
  {
    first_name: 'Russell',
    last_name: 'Morse',
    email: 'auctor.velit@aol.ca',
    country: { value: 'new_zealand', label: 'New Zealand' },
  },
  {
    first_name: 'Oscar',
    last_name: 'Austin',
    email: 'et.magna@aol.org',
    country: { value: 'nigeria', label: 'Nigeria' },
  },
  {
    first_name: 'Felicia',
    last_name: 'Hinton',
    email: 'nec.tempus.mauris@protonmail.net',
    country: { value: 'belgium', label: 'Belgium' },
  },
  {
    first_name: 'Reed',
    last_name: 'Curry',
    email: 'mi@hotmail.net',
    country: { value: 'sweden', label: 'Sweden' },
  },
  {
    first_name: 'Kylan',
    last_name: 'Haynes',
    email: 'phasellus.in@google.ca',
    country: { value: 'canada', label: 'Canada' },
  },
  {
    first_name: 'Russell',
    last_name: 'Morse',
    email: 'auctor.velit@aol.ca',
    country: { value: 'new_zealand', label: 'New Zealand' },
  },
  {
    first_name: 'Oscar',
    last_name: 'Austin',
    email: 'et.magna@aol.org',
    country: { value: 'nigeria', label: 'Nigeria' },
  },
  {
    first_name: 'Felicia',
    last_name: 'Hinton',
    email: 'nec.tempus.mauris@protonmail.net',
    country: { value: 'belgium', label: 'Belgium' },
  },
  {
    first_name: 'Reed',
    last_name: 'Curry',
    email: 'mi@hotmail.net',
    country: { value: 'sweden', label: 'Sweden' },
  },
  {
    first_name: 'Kylan',
    last_name: 'Haynes',
    email: 'phasellus.in@google.ca',
    country: { value: 'canada', label: 'Canada' },
  },
  {
    first_name: 'Russell',
    last_name: 'Morse',
    email: 'auctor.velit@aol.ca',
    country: { value: 'new_zealand', label: 'New Zealand' },
  },
  {
    first_name: 'Oscar',
    last_name: 'Austin',
    email: 'et.magna@aol.org',
    country: { value: 'nigeria', label: 'Nigeria' },
  },
  {
    first_name: 'Felicia',
    last_name: 'Hinton',
    email: 'nec.tempus.mauris@protonmail.net',
    country: { value: 'belgium', label: 'Belgium' },
  },
  {
    first_name: 'Reed',
    last_name: 'Curry',
    email: 'mi@hotmail.net',
    country: { value: 'sweden', label: 'Sweden' },
  },
  {
    first_name: 'Kylan',
    last_name: 'Haynes',
    email: 'phasellus.in@google.ca',
    country: { value: 'canada', label: 'Canada' },
  },
];

const myColumns = [
  {
    header: 'First Name',
    accessorKey: 'first_name',
    cell: TableInputField,
  },
  {
    header: 'Last Name',
    accessorKey: 'last_name',
    cell: TableInputField,
  },
  {
    header: 'Email',
    accessorKey: 'email',
    cell: (props: Record<string, any>) => props.renderValue(),
  },
  {
    header: 'Country',
    accessorKey: 'country',
    // cell: (props: any) => (props.getValue().label),
    options: myCountries,
    filterFn: (
      row: any,
      columnId: string,
      value: { value: string; label: string }[],
    ) => {
      if (value.length === 0) return true;

      const myVal = row.getValue(columnId);
      return value.includes(myVal?.value);
    },
    cell: TableSelectField,
  },
];

const tableData = { filter: myFilter, data: myData, columns: myColumns }

export default tableData;
