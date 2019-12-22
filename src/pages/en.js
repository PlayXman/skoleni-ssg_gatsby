import React from "react"

import SEO from "../components/seo"
import MainPage from "../components/mainPage";

const IndexPage = () => {
	const settings = {
		header: {
			title: 'Pension',
			text: <>
				<p>
					We offer a private accommodation in the west Bohemian Mountains (Krušné hory) all surrounded by forests which are excellent for cyclists, mushroom tourism and for those who loves to take a walk. You can stay in one of the separated room or the apartment. You will have a fully equipped living room with kitchenette, TV and FREE WIFI zone. You can also enjoy the outdoor terrace with barbecue during the summer.
				</p>
				<p>
					The guest house is located in Oloví (Bleistadt). We also extend a terrace with a grill and provide FREE WIFI in the building.
				</p>
			</>
		},
		rooms: [
			{
				title: 'Apartments (double bed with an extra bed)',
				text: <p>
					We offer two apartments, one on the first floor and one on the ground floor. Both includes a small kitchen with a fridge, a kettle, a coffeemaker and a one-burner stove. The apartment has a private bathroom with a shower and a toilet. The bathroom is also equipped with a hairdryer. The living room has a satellite TV and the free WIFI (WIFI includes only the apartment in the first floor).
				</p>
			},
			{
				title: 'Room 01 - Three beds',
				text: <p>
					We offer a triple bed room equipped with a sink (hot and cold water), two small lamps, a wardrobe and a mirror. The kitchen, the bathroom with a shower and the restroom are located in the same floor as the rooms. The kitchen includes a refrigerator, a two-burner stove and a microwave. There are also the FREE WIFI ZONE.
				</p>
			},
			{
				title: 'Room 02 - Three beds',
				text: <>
					<p>
						We offer a sunny three bed room equipped with a sink (hot and cold water), the small lamps, a wardrobe, a mirror, a sofa and a small table with chairs.
					</p>
					<p>
						The kitchen, the bathroom with a shower and the restroom are located in the same floor as the rooms. The kitchen includes a refrigerator, a two-burner stove and a microwave. There are also the FREE WIFI ZONE.
					</p>
				</>
			},
			{
				title: 'Room 03 - Four beds',
				text: <>
					<p>
						We offer a sunny four bed room equipped with a sink (hot and cold water), the small lamps, a wardrobe, a mirror, a sofa and a small table with chairs.
					</p>
					<p>
						The kitchen, the bathroom with a shower and the restroom are located in the same floor as the rooms. The kitchen includes a refrigerator, a two-burner stove and a microwave. There are also the FREE WIFI ZONE.
					</p>
				</>
			},
		],
		contact: {
			title: 'Contact us',
			isCz: false
		},
		map: {
			lang: 'en',
			button: 'Bigger the map'
		},
		gallery: {
			title: 'Pension and the surroundings'
		},
		links: {
			title: 'Interesting links',
			linkTitles: [
				'Lease Sokolov',
				'Web pages of the city Oloví',
				'Web pages of the city Sokolov',
				'Web pages of the city Karlovy Vary'
			]
		}
	};

	return (
		<MainPage {...settings}>
			<SEO title="Pension STEININGER" lang="en" />
			<h3>Summer Trips</h3>
			<ul>
				<li>
					by the bicycle: Habartov, Sokolov, Loket, Karlovy Vary (new cycling routes, outdoor swimming pool, indoor swimming pool with waterslides, natural pools)
				</li>
				<li>
					by the foot: hiking in the surrounding forests, chapels, ruins of castles Hartenberg (Hřebeny), towers, mushrooming
				</li>
				<li>
					by the train: Zwikau, Kraslice, Sokolov, Karlovy Vary
				</li>
				<li>
					by the car: Sokolov, Karlovy Vary Vary (historical Colonnade and the Hot Springs), Františkovy lázně (aquapark), Mariánké lázně (singing fountain),...
				</li>
			</ul>
			<h3>Winter trips</h3>
			<ul>
				<li>
					Cross-country skiing: Přebuz
				</li>
				<li>
					Skying areas:
					<ul>
						<li>
							very closed ones: Bublava, Krajka (train stop by) and Saporo
						</li>
						<li>
							big ones: Ski areal Pernink, Klínovec, Boží Dar
						</li>
					</ul>
				</li>
			</ul>
		</MainPage>
	);
};

export default IndexPage
