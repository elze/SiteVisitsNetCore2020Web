import { City } from './City';
import { Country } from './Country';
import { Region } from './Region';
import { Isp } from './Isp';
import { Visitor } from './Visitor';

export class IpAddress {    

    ipV4Address: string;
    numberOfTimes: number;
    postalCode: string;
    city: City;
    region: Region;
    country: Country;
    isp: Isp;
  visitor: Visitor

  constructor(options: {
    ipV4Address: string,
    numberOfTimes: number,
    postalCode: string,
    city: City,
    region: Region,
    country: Country,
    isp: Isp,
    visitor: Visitor
  }) {
    this.ipV4Address = options.ipV4Address;
    this.numberOfTimes = options.numberOfTimes;
    this.postalCode = options.postalCode;
    this.city = new City(options.city);
    this.region = new Region(options.region);
    this.country = new Country(options.country);
    this.isp = new Isp(options.isp);
    this.visitor = new Visitor(options.visitor);
  }
}
