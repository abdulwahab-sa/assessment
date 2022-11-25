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

const findRoute = (start, destination) => {
	let stopRiders = 0;
	routes.map((route) => {
		const { name, peopleRiding, stops } = route;
		stops.filter((stop) => {
			const { peopleToPick, peopleToDrop } = stop;

			const totalRiding = peopleToPick + peopleRiding;
			currentlyRiding = totalRiding - peopleToDrop + stopRiders;

			for (const [key, value] of Object.entries(stop)) {
				// checked for stops of all routes which have our destination

				if (value === start) {
					console.log(`${name} can be used and he will be pickup from ${start} = ${stop.leave}`);
				} else if (value === destination) {
					console.log(`arrival at ${destination} = ${stop.arrival}`);
				}
			}
			return currentlyRiding;
		});
		stopRiders += currentlyRiding;
		console.log(stopRiders);
	});
};

findRoute('locationA', 'locationC');
