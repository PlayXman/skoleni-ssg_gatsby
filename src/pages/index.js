import React from "react"

import SEO from "../components/seo"
import MainPage from "../components/mainPage";

const IndexPage = () => {
	const settings = {
		header: {
			title: 'Penzion',
			text: <>
				<p>
					V našem penzionu se můžete ubytovat v jednom z pokojů či apartmánů. K dispozici budete mít plně vybavenou společenskou místnost s kuchyňským koutem, televizí a bezplatnou WIFI. V létě také můžete využít venkovní terasu s grilem.
				</p>
				<p>
					Penzion naleznete v městě Oloví (Bleistadt), obklopeném lesy Krušných hor, vhodnými pro cyklisty, houbaře a pro ty, co se rádi procházejí.
				</p>
			</>
		},
		rooms: [
			{
				title: 'Apartmány (dvoulůžko s přistýlkou)',
				text: <p>
					Nabízíme dva apartmány, jeden v prvním patře a druhý
					<br />
					v přízemí. Součástí každého je kuchyňka s lednicí, varnou konvicí, kávovarem a malým vařičem. Apartmán má vlastní koupelnu se sprchovým koutem a s wc. K dispozici je fén.
					<br />
					V obývacím pokoji se nachází TV se satelitem
					<br />
					a možnost připojení se zdarma k WIFI internetu (apartmán
					<br />
					v 1. patře).
				</p>
			},
			{
				title: 'Pokoj 01 - trojlůžkový',
				text: <p>
					Nabízíme třílůžkový pokoj s umyvadlem (teplá a studená voda), malými lampičkami, skříní, a zrcadlem. Na patře se nachází společné WC a koupelna se sprchovým koutem.<br />K pokojům patří společná kuchyňka s lednicí, dvou plotýnkovým vařičem, mikrovlnou troubou a FREE WIFI zónou.
				</p>
			},
			{
				title: 'Pokoj 02 - trojlůžkový',
				text: <p>
					Nabízíme slunný pokoj s umyvadlem (teplá a studená voda), malými lampičkami, zrcadlem, skříní, gaučem a malým stolkem se židlemi. Na patře se nachází společné WC a koupelna se sprchovým koutem. K pokojům patří společná kuchyňka s lednicí, dvou plotýnkovým vařičem, mikrovlnou troubou a FREE WIFI zónou.
				</p>
			},
			{
				title: 'Pokoj 03 - čtyřlůžkový',
				text: <p>
					Nabízíme čtyřlůžkový pokoj s umyvadlem (teplá a studená voda), malými lampičkami, skříní, a zrcadlem. Na patře se nachází společné WC a koupelna se sprchovým koutem.<br /> K pokojům patří společná kuchyňka s lednicí, dvou plotýnkovým vařičem, mikrovlnou troubou a FREE WIFI zónou.
				</p>
			},
		],
		contact: {
			title: 'Kontaktujte nás',
			isCz: true
		},
		map: {
			lang: 'cs',
			button: 'Zvětšit mapu'
		},
		gallery: {
			title: 'Penzion a okolí'
		},
		links: {
			title: 'Zajimavé odkazy',
			linkTitles: [
				'Pronájem Sokolov',
				'Stránky města Oloví',
				'Stránky města Sokolov',
				'Stránky města Karlovy Vary'
			]
		}
	};

	return (
		<MainPage {...settings}>
			<SEO title="Penzion STEININGER" lang="cs" />
			<h3>Výlety v létě</h3>
			<ul>
				<li>
					na kole: Habartov, Sokolov, Loket, Karlovy Vary (nové cyklostezky, venkovní koupaliště, přírodní koupaliště Michal, krytý bazén s tobogány)
				</li>
				<li>
					pěšky: pěší túry do okolních lesů, kapličky, zřícenina hradu Hartenberg (Hřebeny), rozhledny, houbaření
				</li>
				<li>
					vlakem: Zwikau, Kraslice, Sokolov, Karlovy Vary
				</li>
				<li>
					autem: Sokolov, Karlovy Vary (historické centrum mlýnské kolonády a vřídelní prameny, Vřídlo), Františkovy lázně (aquapark), Mariánské lázně (zpívající fontána),...
				</li>
			</ul>
			<h3>Výlety v zimě</h3>
			<ul>
				<li>
					běžkování: Přebuz
				</li>
				<li>
					lyžování:
					<ul>
						<li>
							v blízkosti: Bublava, Krajka (train stop by) and Saporo
						</li>
						<li>
							větší areály: Ski areál Pernink, Klínovec, Boží Dar, Bublava, Krajka
						</li>
					</ul>
				</li>
			</ul>
		</MainPage>
	);
};

export default IndexPage
