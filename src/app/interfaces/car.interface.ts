export interface Car {
	carName: string;
	mileage: number;
	fuelValue: number;
	characteristics: string[];

	drive(addMiles: string): void;
	refuel(_addFuel: string): void;

}