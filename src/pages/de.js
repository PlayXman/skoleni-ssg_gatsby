import React from "react"

import SEO from "../components/seo"
import MainPage from "../components/mainPage";

const IndexPage = () => {
	const settings = {
		header: {
			title: 'Pension',
			text: <>
				<p>
					Wir bieten ihnen eine private Unterkunft in malerischer Umgebung des Erzgebirges, mit vielen Wäldern und großzügigen Wandermöglichkeiten. Das Gästehaus liegt in Oloví (Bleistadt). Zu dem Haus gehört eine Terrasse mit Grillplatz. Unseren Gästen steht kostenlos WIFI Internetzugang zur Verfügung.
				</p>
			</>
		},
		rooms: [
			{
				title: 'Appartments (Doppelbett mit Zusatzbett)',
				text: <p>
					Wir bieten zwei Appartments. Eines befindet sich im ersten Stock, das zweite im Erdgeschoss. Zu jedem gehört eine  Küchenzeile mit Kühlschrank, Wasserkocher, Kaffeemaschine und Einzel-Platten-Herd. Jedes Appartment verfügt über ein eigenes Bad mit Dusche, WC und Fön. Im Zimmer befindet sich ein Fernseher mit Satellitenanschluss und kostenloses WIFI.
				</p>
			},
			{
				title: 'Zimmer 01 - Dreibettzimmer',
				text: <p>
					Wir bieten ein Dreibettzimmer, ausgestattet mit einem Waschbecken (warmes und kaltes Wasser), kleinen Lampen und einem Spiegel. Auf der Etage befindet sich  eine gemeinsame Toilette sowie ein Badezimmer mit Dusche. Dem Zimmer steht ein Gemeinschaftsraum mit Küchenzeile, Kühlschrank, Zwei-Platten-Herd, Mikrowelle und kostenlose WIFI Nutzung zur Verfügung.
				</p>
			},
			{
				title: 'Zimmer 02 - Dreibettzimmer',
				text: <>
					<p>
						Wir bieten ein sonniges Dreibettzimmer, ausgestattet mit einem Waschbecken (warmes und kaltes Wasser), kleinen Lampen, einem Spiegel, Schrank, Sofa und Tisch mit Stühlen. Auf der Etage befindet sich eine gemeinsame Toilette sowie ein Badezimmer mit Dusche. Dem Zimmer steht ein Gemeinschaftsraum mit Küchenzeile, Kühlschrank, Zwei-Platten-Herd, Mikrowelle und kostenlose WIFI Nutzung zur Verfügung.
					</p>
				</>
			},
			{
				title: 'Zimmer 03 - Vierbettzimmer',
				text: <>
					<p>
						Wir bieten ein Vierbettzimmer, ausgestattet mit einem Waschbecken (warmes und kaltes Wasser), kleinem Lampen, Spiegel, Schrank, Tisch und Sessel. Auf der Etage befindet sich eine gemeinsame Toilette sowie ein Badezimmer mit Dusche. Dem Zimmer steht ein Gemeinschaftsraum mit Küchenzeile, Kühlschrank, Zwei-Platten-Herd, Mikrowelle und kostenlose WIFI Nutzung zur Verfügung.
					</p>
				</>
			},
		],
		contact: {
			title: 'Kontaktieren sie uns',
			isCz: false
		},
		map: {
			lang: 'de',
			button: 'Karte vergrößern'
		},
		gallery: {
			title: 'Pension und die Umgebung'
		},
		links: {
			title: 'Interessante links',
			linkTitles: [
				'Mieten Sokolov',
				'Oloví Stadt-Seiten',
				'Sokolov Stadt-Seiten',
				'Karlovy Vary Stadt-Seiten'
			]
		}
	};

	return (
		<MainPage {...settings}>
			<SEO title="Pension STEININGER" lang="de" />
			<h3>Sommerausflüge</h3>
			<ul>
				<li>
					Mit dem Fahrrad: Habartov, Sokolov, Loket, Karlsbad (neue Wege, einen Außenpool, Freibad Michal, Hallenbad mit Wasserrutsche)
				</li>
				<li>
					Zu Fuß: Wandern in den umliegenden Wäldern, Kapellen, Burgruinen Hartenberg, Türme, Pilze suchen,...
				</li>
				<li>
					Mit dem Zug: Zwickau, Kraslice (Grazlitz), Sokolov (Falkenau), Karlovy Vary (Karlsbad)
				</li>
				<li>
					Mit dem Auto: Sokolov (Falkenau), Karlovy Vary(Karlsbad) (Altstadt Kolonnade und Mineralquellen, heiße Quellen), Františkovy lázně (Franzensbad) - Wasserpark, Mariánské lázně (Marienbad) - Singende Fontäne,...
				</li>
			</ul>
			<h3>Winterausflüge</h3>
			<ul>
				<li>
					Langlauf: Přebuz
				</li>
				<li>
					Skibereiche:
					<ul>
						<li>
							in der Nähe: Bublava, Krajka (Zughaltestelle direkt unterhalb des Skilifts) und Saporo
						</li>
						<li>
							größere Skigebiete: Skigebiet Pernink, Klínovec (Keilberg), Boží Dar, Bublava
						</li>
					</ul>
				</li>
			</ul>
		</MainPage>
	);
};

export default IndexPage
