
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "David",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects & Publications",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Blog",
			link: "/blog"
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm David",
	description: "A computational biologists with a passion for natural products.",
	image: profile.src,
	buttons: [
		{
			title: "Contact me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/15D9bM_Ivs5faLwDP7oxQ5xl78VCYV8QE/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I recently graduated with distinction from the MSc Bioinformatics program at Wageningen University in the Netherlands. Currently, I am furthering my MSc research project on elucidating the path from mined metabolic gene clusters to bioactive natural products, as a PhD candidate.",
		"My interests lay on the intersection between natural products, biotechnology, and software development - I have interdisciplenary knowledge on analytical chemistry, industrial fermentation, algorithm development, dynamic modeling and parameter optimization, and machine learning.",
		"Feel free to reach out and lets talk (bio|chem)informatics!",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "PhD candidate",
			description: "I help elucidating the path from genotype to interactome at Wageningen University.",
			icons: null,
		},
		{
			title: "Modeling fermentation",
			description: "I make proprietary dynamic fermentation models for testing bioreactor setups.",
			icons: null,
		},
		{
			title: "Learning Mandarin",
			description: "I am pursuing a lifelong wish to learn to speak Standard Northern Mandarin.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects & Publications",
	cards: [
		{
			title: "Molray",
			description: "Ray-tracer for drawing 3D filled-space molecular depictions, written in F#.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/davidmeijer/molray",
				},
			]
		},
		{
			title: "SMILES spell checker",
			description: "Spell checker for SMILES chemical representations, written in F#.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/davidmeijer/smiles_spell_checker",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out by email or message me on Twitter!",
	buttons: [
		{
			title: "Email me",
			link: "mailto:david.meijer@wur.nl",
			isPrimary: true,
		},
		{
			title: "Message me",
			link: "https://twitter.com/techmeijer",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "David Meijer",
	description: "Elucidating the path from genotype to interactome.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "David Meijer",
	description: "Computational biologist | Cheminformatician | F# enthusiast",
	cards: [
		{
			title: "My website",
			link: "https://davidmeijer.com/",
		},
		{
			title: "My Twitter",
			link: "https://twitter.com/techmeijer",
		},
		{
			title: "My GitHub",
			link: "https://github.com/davidmeijer/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/davidmeijerbif/",
		},
	]
}