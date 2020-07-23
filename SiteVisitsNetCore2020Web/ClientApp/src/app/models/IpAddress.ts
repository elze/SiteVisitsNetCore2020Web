import { City } from './City';
import { Country } from './Country';
import { Region } from './Region';
import { Organization } from './Organization';
import { Visitor } from './Visitor';

export class IpAddress {    

    ipV4Address: string;
    numberOfTimes: number;
    postalCode: string;
    city: City;
    region: Region;
    country: Country;
  organization: Organization;
  visitor: Visitor

  constructor(options: {
    ipV4Address: string,
    numberOfTimes: number,
    postalCode: string,
    city: City,
    region: Region,
    country: Country,
    organization: Organization,
    visitor: Visitor
  }) {
    this.ipV4Address = options.ipV4Address;
    this.numberOfTimes = options.numberOfTimes;
    this.postalCode = options.postalCode;
    this.city = new City(options.city);
    this.region = new Region(options.region);
    this.country = new Country(options.country);
    this.organization = new Organization(options.organization);
    this.visitor = new Visitor(options.visitor);
  }
}
