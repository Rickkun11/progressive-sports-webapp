
const cardItemFavorite = ({idTeam, nameTeam, location, stadion, pathImage, clubColor}) => {
	const render = () => {
		return `
		  <div class="item-card w-full h-[400px] flex flex-col bg-[#f2f2f2] rounded-[8%] shadow-lg">
			  <div class="side-top w-full h-3/6 max-h-[50%] min-h-[50%] flex items-center bg-white p-4">
			    <img class="mx-auto h-full" src="${pathImage}" alt="picture team">
			  </div>
			  <div class="side-mid flex pt-2 px-4 h-2/6 w-full items-center">
				  <div class="description min-w-[85%] mr-4">
				  	<h1 class="truncate text-2xl font-semibold">${nameTeam}</h1>
				  	<h2 class="truncate text-lg mt-[2px] text-gray-700">${location}</h2>
				  	<h3 class="truncate text-md mt-[2px] text-gray-700">${stadion}</h3>
				  </div>
				  <div class="colors-team ml-auto flex flex-col items-center">
				  	${addColorsTeams(clubColor)}
				  </div>
			  </div>
			  <div class="side-bottom w-full h-1/6 mb-2 flex">
			  		<a href="#/teams/${idTeam}" class="btn-favorite rounded-[15%] w-[30%] h-5/6 bg-[#f9f9f9] mx-auto my-auto shadow-md group hover:shadow-inner flex">
						<svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6 text-gray-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
						</svg>
					</a>
			  		<a href="#/teams/${idTeam}" class="btn-favorite rounded-[15%] w-[30%] h-5/6 bg-[#f9f9f9] mx-auto my-auto shadow-md group hover:shadow-inner flex">
			  			<svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-6 w-6 text-gray-400 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
			  		</a>
			  </div>
		  </div>
		`;
	}
	
	const addColorsTeams = (colors) =>{
		let item = '';
		let maxItem = {
			'start' : 0,
			'stop' : 3,
		};
		colors.forEach((e)=>{
			if(maxItem['start'] != maxItem['stop']){
				let deleteSpaceInText = e.toLowerCase().replace(/\s/g, '');
				let color = (typoColorNames[deleteSpaceInText] != null) ? typoColorNames[deleteSpaceInText] : deleteSpaceInText;
				item += `<div style="background-color : ${color}" class="w-[25px] h-[25px] rounded-[100%] my-[5px] shadow-inner"></div>`
			}
			maxItem['start']++;
		});
		return item;
	};

	const typoColorNames = {
		"navyblue" : "navy",
		"claret" : "#811331",
	}
	
	return render();


}

export default cardItemFavorite;
