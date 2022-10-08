import L from 'leaflet';

export const getMarkerIcon = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);

  return L.icon({
    iconUrl: `https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${color}&chf=a,s,ee00FFFF`,
  });
};
