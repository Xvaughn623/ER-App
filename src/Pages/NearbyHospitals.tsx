import React from 'react';
import './NearbyHospitals.css';
import logo from './logo.png';


interface Hospital {
  name: string;
  address: string;
  phone: string;
  website: string;
}

const hospitals: Hospital[] = [
  {
    name: 'Howard University Hospital',
    address: '2041 Georgia Ave NW, Washington, DC 20060',
    phone: '(202) 865-6100',
    website: 'https://www.huhealthcare.com/'
  },
  {
    name: 'Unity Health Care, Inc.',
    address: '6 Bennett Pl NE, Washington, DC 20002',
    phone: '(202) 469-4699',
    website: 'https://www.unityhealthcare.org/'
  },
  {
    name: 'Sibley Memorial Hospital',
    address: '5255 Loughboro Rd NW, Washington, DC 20016',
    phone: '(202) 537-4000',
    website: 'https://www.hopkinsmedicine.org/sibley-memorial-hospital/'
  },
  {
    name: 'MedStar Georgetown University Hospital',
    address: '3800 Reservoir Rd NW, Washington, DC 20007',
    phone: '(202) 444-2000',
    website: 'https://www.medstargeorgetown.org/'
  },
  {
    name: 'United Medical Center',
    address: '1310 Southern Ave SE, Washington, DC 20032',
    phone: '(202) 574-6000',
    website: 'https://unitedmedicaldc.com/'
  },
  {
    name: 'George Washington University Hospital',
    address: '900 23rd St NW, Washington, DC 20037',
    phone: '(202) 715-4000',
    website: 'https://www.gwhospital.com/'
  },
  {
    name: 'Children\'s National Hospital',
    address: '111 Michigan Ave NW, Washington, DC 20010',
    phone: '(202) 476-5000',
    website: 'https://childrensnational.org/'
  }
];

const NearbyHospitals: React.FC = () => {
  return (
    <div className="nearby-hospitals">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Nearby Hospitals : Washington D.C.</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{hospital.name}</td>
              <td>{hospital.address}</td>
              <td>{hospital.phone}</td>
              <td><a href={hospital.website} target="_blank" rel="noopener noreferrer">{hospital.website}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NearbyHospitals;