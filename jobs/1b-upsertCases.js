alterState(state => {
  const maritalMap = {
    1: 'single',
    2: 'married',
    3: 'widowed',
    4: 'divorced',
    5: 'separated',
    6: 'monk',
    7: 'unknown',
  };

  const nationalityMap = {
    100: 'Afghanistan',
    101: 'Bahrain',
    102: 'Bhutan',
    103: 'Jordan',
    104: 'North Korea',
    105: 'Maldives',
    106: 'Mongolia',
    107: 'Oman',
    108: 'Qatar',
    109: 'Yemen',
    111: 'Fiji',
    112: 'Kiribati',
    113: 'Nauru',
    114: 'Solomon Islands',
    115: 'Tonga',
    116: 'Tuvalu',
    117: 'Vanuatu',
    118: 'Samoan',
    119: 'Albania',
    120: 'Andorra',
    122: 'Iceland',
    123: 'Liechtenstein',
    124: 'Monaco',
    125: 'San Marino',
    126: 'British (English, Scottish)',
    127: 'Algeria',
    128: 'Angola',
    129: 'Benin',
    130: 'Botswana',
    131: 'Burkina Faso',
    132: 'Burundi',
    133: 'Cameroon',
    134: 'Cape Verde',
    135: 'Central African Republic',
    136: 'Chad',
    137: 'Costa Rica',
    138: 'Republic of the Congo',
    139: 'Ivory saurian',
    140: 'Djibouti',
    141: 'Equatorial Guinea',
    142: 'Gabon',
    143: 'Gambia',
    144: 'Ghana',
    145: 'B. Guinea Bissau',
    146: 'Lesotho',
    147: 'Liberia',
    148: 'Libya',
    149: 'Malagasy',
    150: 'Malawi',
    151: 'Mali',
    152: 'Mauritania',
    153: 'Mauritius',
    154: 'Morocco',
    155: 'Mozambique',
    156: 'Niger',
    157: 'Rwanda',
    158: 'Sao Tome and Principe.',
    159: 'Senegal',
    160: 'Seychelles',
    161: 'Sierra Leone',
    162: 'Somali',
    163: 'Sudan',
    164: 'Swaziland',
    165: 'Tanzania',
    166: 'Togo',
    167: 'Tunisia',
    168: 'Uganda',
    169: 'Zaire',
    170: 'Zambia',
    171: 'Zimbabwe',
    172: 'Antigua and Barbuda',
    173: 'Bahamas',
    174: 'Barbados',
    175: 'Belize',
    177: 'Dominica',
    178: 'Dominican Republic',
    179: 'El Salvador',
    180: 'Grenada',
    181: 'Guatemala',
    182: 'Haiti',
    183: 'Honduras',
    184: 'Jamaica',
    185: 'Nicaragua',
    186: 'St. Kitts and Nevis',
    187: 'St. Lucia',
    188: 'Turks and Caicos Islands.',
    189: 'Trinidad and Tobago',
    190: 'Boleyn Weir',
    191: 'Ecuador',
    192: 'Guyana',
    193: 'Paraguay',
    194: 'Suriname',
    195: 'Arabic',
    196: 'Kachin',
    197: 'Wow',
    198: 'Shan',
    199: 'Thai Lue',
    200: 'Khmu',
    201: 'Tong fight',
    203: 'Lawa',
    205: 'Cover the groove',
    206: 'Region',
    207: 'Pa-O',
    208: 'Mon',
    209: 'Mlabri',
    212: 'China (Chinese Yunnan or Haw independent)',
    214: 'China (Chinese Yunnan or Haw immigrants)',
    216: 'Ukraine',
    219: 'China (Hong Kong)',
    220: 'China (Taiwan)',
    221: 'Croatia',
    223: 'Kazakhstan',
    224: 'Armenia',
    225: 'Azerbaijan',
    226: 'Georgia',
    227: 'Kyrgyz',
    228: 'Tajikistan',
    229: 'Uzbekistan',
    230: 'Marshall Islands',
    231: 'Micronesia',
    232: 'Palau',
    233: 'Belarus',
    234: 'Bosnia and Herzegovina.',
    235: 'Turkmen',
    236: 'Estonia',
    237: 'Latvia',
    238: 'Lithuania',
    239: 'Macedonia',
    240: 'Moldova',
    241: 'Slovakia',
    242: 'Slovenia',
    243: 'Eritrea',
    244: 'Namibia',
    245: 'Bolivia',
    246: 'Cook Islands',
    247: 'Nepali (Nepalese immigrants)',
    248: 'Mon (Burmese IDPs)',
    249: 'Shan (Burmese IDPs)',
    250: 'Vietnam (Vietnamese refugees)',
    251: 'Malaysia (Chinese communist party in the past)',
    252: 'China (Chinese communist party in the past)',
    253: 'Singapore (Chinese communist party in the past)',
    254: 'Karen (Fugitives to the city)',
    255: 'Mon (Fugitives to the city)',
    256: 'Shan (Fugitives to the city)',
    257: 'Cambodia (Fugitives to the city)',
    258: 'Mon (Hilltribe communities)',
    259: 'Karen (Hilltribe communities)',
    260: 'Palestine',
    261: 'East Timor',
    262: 'Thai Citizenship Waiver',
    263: 'Serbia and Monte Negro.',
    264: 'Cambodia (Labor)',
    265: 'Myanmar (Labor)',
    266: 'Laos (Labor)',
    267: 'Serbians',
    268: 'Montenegro Lohengrin',
    989: 'People without state registration',
    999: 'Unknown / Unspecified',
  };
  return { ...state, maritalMap, nationalityMap };
});

each(
  '$.data[*]',
  alterState(state => {
    const patient = state.data;
    const national_id_no = `${patient.cid.substring(
      0,
      2
    )}-${patient.cid.substring(2, 6)}-${patient.cid.substring(
      6,
      11
    )}-${patient.cid.substring(11, 13)}`;
    const data = {
      case_id: '3e5a1131-084f-4186-8c06-44ecceab84a5',
      national_id_no,
      other_agency_id: '',
      name_last: patient.lname,
      name_first: patient.fname,
      date_of_birth: patient.birthday,
      age: patient.age_y,
      sex:
        patient.sex === '1'
          ? 'Male'
          : patient.sex === '2'
          ? 'Female '
          : 'Alternative gender',
      maritial_status: state.maritalMap[patient.marrystatus],
      nationality: state.nationalityMap[patient.nationality],
      address_current: patient.informaddr,
      registered_address: `${patient.roomno}, ${patient.condo}, ${patient.houseno},${patient.soisub}, ${patient.soimain}, ${patient.road}, ${patient.villaname}, ${patient.village}, ${patient.tambon}, ${patient.ampur}, ${patient.changwat}`,
      telephone_current: patient.telephone,
      insurance_type_2d79b49: patient.pttype,
    };
    console.log(data);
    return upsertCase(
      {
        externalIds: ['case_id'],
        data,
      },
      state => {
        console.log(state.data);
        return state;
      }
    )(state);
  })
);
