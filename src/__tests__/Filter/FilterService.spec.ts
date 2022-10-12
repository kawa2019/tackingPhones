import { getFilteredPhones } from '../../Services/Filter';

describe('FilterService', () => {
  describe('getFilteredPhones()', () => {
    it('should return one phone with speed less than 10 and sim number including number 33', () => {
      const data = [
        {
          id: '1',
          sim_number: '2347123458700',
          imei: '112345863307200',
          last_longitude: '12.36703',
          last_latitude: '12.38062',
          last_altitude: '0',
          last_speed: '41.7',
          last_status: 'No Alarm',
          last_track_time: '2022-07-28 23:20:12',
          last_heartbeat: '1659046812',
        },
        {
          id: '4',
          sim_number: '2348045119891',
          imei: '153865853307200',
          last_longitude: '8.5537',
          last_latitude: '6.92729',
          last_altitude: '0',
          last_speed: '10.7',
          last_status: 'No Alarm',
          last_track_time: '2022-07-28 23:20:12',
          last_heartbeat: '1659046812',
        },
        {
          id: '164',
          sim_number: '2348091239233',
          imei: '865205035850860',
          last_longitude: '9.05654',
          last_latitude: '7.459463',
          last_altitude: '0',
          last_speed: '0',
          last_status: 'Device Offline',
          last_track_time: '2022-07-27 10:05:26',
          last_heartbeat: '1658912726',
        },
      ];

      const values = {
        fasterThan: '',
        slowerThan: 10,
        sim: '33',
        status: 'all',
        heartbeat: '',
        imei: '',
      };

      const filteredPhones = getFilteredPhones(values, data);

      expect(filteredPhones).toEqual([
        {
          id: '164',
          sim_number: '2348091239233',
          imei: '865205035850860',
          last_longitude: '9.05654',
          last_latitude: '7.459463',
          last_altitude: '0',
          last_speed: '0',
          last_status: 'Device Offline',
          last_track_time: '2022-07-27 10:05:26',
          last_heartbeat: '1658912726',
        },
      ]);
    });
  });
});
