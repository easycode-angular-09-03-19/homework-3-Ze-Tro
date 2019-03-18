import { Component, } from '@angular/core';

import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements Car {
	public carName:string = 'Zaz';
	public mileage: number = 100;
	public fuelValue: number = 20;
	
	public characteristics: string[] = [
		'engine: 2000 cc',
		'maxSpeed: 200 kmph'
	];
	
	protected _addFuel: string;
	protected _addMiles: string;
	protected _fuelTankVolume: number = 60;

	constructor() { }
	
	public drive(addMiles: string): void {
		let miles: number = +addMiles;

		if (!validNumber(miles)) {
			throw new Error('Enter valid number:');
		}
		if (miles > this.fuelValue) {
			this.mileage += this.fuelValue;
			this.fuelValue = 0;
			this._addMiles = '';
		} else {
			this.mileage += miles;
			this.fuelValue -= miles;
			this._addMiles = '';
		}
	}

	public refuel(_addFuel: string): void {
		if (!validNumber(+this._addFuel)) {
			throw new Error('Enter valid number:');
		}

		let refuelValue = +this._addFuel;
		this.fuelValue += refuelValue;
		this._addFuel = '';
	}
}

function validNumber(someNumber: number): boolean {
	return (isFinite(someNumber) && someNumber > 0);
}