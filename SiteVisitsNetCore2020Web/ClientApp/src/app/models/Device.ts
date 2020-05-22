export class Device {
  id: number;
  operatingSystem: string;
  resolution: string;

  constructor(options: {
    id: number,
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
