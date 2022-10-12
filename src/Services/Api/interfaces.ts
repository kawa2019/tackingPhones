export interface PhoneApi {
  id: string;
  sim_number: string;
  imei: string;
  last_longitude: string;
  last_latitude: string;
  last_altitude: string;
  last_speed: string;
  last_status: string;
  last_track_time: string;
  last_heartbeat: string;
}

export interface TrackedPhonesApi {
  request: string;
  status: string;
  data: PhoneApi[];
}
