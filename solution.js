const routes = [
	{
		id: 1,
		name: 'Route-A',
		peopleRiding: 2,
		stops: [
			{
				stop: 1,
				arrival: '10:00 AM',
				leave: '10:10 AM',
				location: 'locationA',
				peopleToPick: 1,
				peopleToDrop: 0,
			},
			{
				stop: 2,
				arrival: '10:45 AM',
				leave: '10:55 AM',
				location: 'locationB',
				peopleToPick: 1,
				peopleToDrop: 1,
			},
			{
				stop: 3,
				arrival: '11:30 AM',
				location: 'locationC',
				peopleToPick: 0,
				peopleToDrop: 1,
			},
		],
		vehicleCapacity: 2,
	},
	{
		id: 2,
		name: 'Route-B',
		peopleRiding: 3,
		stops: [
			{
				stop: 1,
				arrival: '11:05 AM',
				leave: '11:15 AM',
				location: 'locationA',
				peopleToPick: 2,
				peopleToDrop: 0,
			},
			{
				stop: 2,
				arrival: '12:00 PM',
				leave: '12:10 PM',
				location: 'locationC',
				peopleToPick: 1,
				peopleToDrop: 1,
			},
			{
				stop: 3,
				arrival: '12:45 PM',
				location: 'locationB',
				peopleToPick: 0,
				peopleToDrop: 2,
			},
		],
		vehicleCapacity: 2,
	},
];

/*
Write a program to find
A person wants to ride from locationA to locationC, he wants to know which route he can
travel(based upon the given routes).

• On which route or routes that person can travel?
• If there is any route or routes then also find which time the person will be picked up
and when will he reach the destination(for each route).
Please make sure that vehicle has enough space to move that person(if there is enough
capacity in vehicle based upon given information)
*/
const reqLocation = 'locationC';
const routeChecker = () => {
	let stopRiders = 0;
	routes.map((el) => {
		let { peopleRiding, stops, vehicleCapacity, name } = el;

		const stop = stops.map((el) => {
			const { peopleToPick, peopleToDrop, location } = el;
			if (location === reqLocation) {
				console.log(true);
			}
			const totalRiding = peopleToPick + peopleRiding;
			currentlyRiding = totalRiding - peopleToDrop + stopRiders;
			return currentlyRiding;
		});
		stopRiders += currentlyRiding;
		return stopRiders;
	});
	// Both routes have vehicles with the capacity to take the person to the location-C
};

routeChecker();
