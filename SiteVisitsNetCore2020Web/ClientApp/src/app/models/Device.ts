export class Device {
  //id: number;
  id: string;
  operatingSystem: string;
  resolution: string;

  constructor(options: {
    //id: number,
    id: string,
    operatingSystem: string,
    resolution: string
  }) {
    if (options) {
      this.id = options.id;
      this.operatingSystem = options.operatingSystem;
      this.resolution = options.resolution;
    }
  }

}
