import {
  Automatic,
  Camper,
  CamperFully,
  CamperMid,
  Kitchen,
  Screen,
  Shower,
  Wind,
} from 'components/Icons';

export const vehicleEquipment = [
  { name: 'automatic', label: 'Automatic', icon: <Automatic /> },
  { name: 'AC', label: 'AC', icon: <Wind /> },
  { name: 'TV', label: 'TV', icon: <Screen /> },
  { name: 'kitchen', label: 'Kitchen', icon: <Kitchen /> },
  { name: 'shower', label: 'Shower/WC', icon: <Shower /> },
];

export const vehicleType = [
  { label: 'Van', icon: <Camper />, value: 'panelTruck' },
  {
    label: 'Fully Integrated',
    icon: <CamperFully />,
    value: 'fullyIntegrated',
  },
  { label: 'Alcove', icon: <CamperMid />, value: 'alcove' },
];
