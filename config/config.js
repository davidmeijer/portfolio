
import profile from './profile.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faDatabase, faEye } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "David",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
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
	description: "Computational biologist with a passion for natural products.",
	image: profile.src,
	buttons: [
		{
			title: "Contact me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1T7X-gqZ5RiWvr6OPGpgeX2ms_La6EFuM/view?usp=sharing",
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
			icons: [
				{
					icon: faGraduationCap,
					link: "https://www.wur.nl/en/Persons/David-D-David-Meijer-MSc.htm"
				}
			],
		},
		{
			title: "Modeling fermentation",
			description: "I make proprietary dynamic fermentation models for testing bioreactor setups.",
			icons: null,
		},
		// {
		// 	title: "Learning Mandarin",
		// 	description: "I am pursuing a lifelong wish to learn to speak Standard Northern Mandarin fluently.",
		// 	icons: null,
		// }
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "DONPHAN",
			description: "A web repository for bioactive compounds.",
			icons: [
				{
					icon: faDatabase,
					link: "https://donphan-database.github.io/#/Molecule",
				},		
				{
					icon: faGithub,
					link: "https://github.com/donphan-database",
				},
			]
		},
		{
			title: "monomer-aligner",
			description: "Platform for researching polyketide substructure motifs. Work in progress.",
			icons: [
				{	
					icon: faGithub,
					link: "https://github.com/davidmeijer/monomer-aligner",
				},
			]
		},
		{
			title: "TERP",
			description: "Tailoring enzyme regioselectivity predictor for biosynthetic gene cluster compounds. Work in progress.",
			icons: []
		},
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
			title: "mol2html",
			description: "3dmol.js wrapper for creating HTML pages for showing molecules.",
			icons: [
				{
					icon: faEye,
					link: "https://davidmeijer.com/daptomycin.html",
				},
				{
					icon: faGithub,
					link: "https://github.com/davidmeijer/mol2html",
				},
			]
		},
		{
			title: "pyvista-molecule",
			description: "PyVista wrapper for drawing hi-res 3D molecular conformers. Work in progress.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/davidmeijer/pyvista-molecule",
				},
			]
		}
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
