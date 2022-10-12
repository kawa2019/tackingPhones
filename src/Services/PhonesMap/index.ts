import L from 'leaflet';

export const createPosition = (phone: any) => {
  return { lat: phone.last_longitude, lng: phone.last_longitude };
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'No Alarm': {
      return '00ff00';
    }
    case 'Device Offline': {
      return '808080';
    }
  }
};

export const getMarkerIcon = (status: string) => {
  const color = getStatusColor(status);

  return L.icon({
    iconSize: [35, 46],
    iconAnchor: [17, 46],
    iconUrl: `https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${color}&chf=a,s,ee00FFFF`,
  });
};
