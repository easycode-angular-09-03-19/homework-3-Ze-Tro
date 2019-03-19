import { Component, } from '@angular/core';

import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
	
	public car: Car;
	public carName:string;
	public characteristics: string[];
	protected _fuelTankVolume: number;
	public mileage: number;
	public fuelValue: number;
	public addNewMilesValue: string;
	public addNewFuelValue: string;

	constructor() {
		this.car = {
			carName: 'Zaz',
			characteristics: [
				'engine: 2000 cc',
				'maxSpeed: 200 kmph'
			],
			fuelTankVolume: 60,
			mileage: 100,
			fuelValue: 20,
		};
	
	}
	
	
	public drive(addNewMilesValue: string): void {
		let newMilesValue: number = +addNewMilesValue;

		if (!validNumber(newMilesValue)) {
			throw new Error('Enter valid number:');
		}


		if (newMilesValue > this.car.fuelValue) {
			this.car.mileage += this.car.fuelValue;
			this.car.fuelValue = 0;
			this.addNewMilesValue = '';
		} else {
			this.car.mileage += newMilesValue;
			this.car.fuelValue -= newMilesValue;
			this.addNewMilesValue = '';
		}
	}

	public refuel(addNewFuelValue: string): void {
		let newFuelValue: number = +addNewFuelValue;

		if (!validNumber(newFuelValue)) {
			throw new Error('Enter valid number:');
		}

		let refuelValue = +this.addNewFuelValue;
		this.car.fuelValue += refuelValue;
		this.addNewFuelValue = '';
	}
}
function validNumber(someNumber: number): boolean {
	return (isFinite(someNumber) && someNumber > 0);
}

new CarComponent();