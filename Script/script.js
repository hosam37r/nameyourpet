	/*** Top-down tree for questions and names ***/

	var data = {
		initial: ['dogs', 'cats', 'others'],
		choices: {
				/*
				* TOP LEVEL
				*/
				'dogs': {
					name: 'Dogs',
					children: ['dog_male', 'dog_female']
				},

				'cats': {
					name: 'Cats',
					children: ['cat_male', 'cat_female']
				},

				'others': {
					name: 'Others',
					children: ['o_male', 'o_female']
				},

				/*
				* Dogs - Gender
				*/

				'dog_male': {
					name: 'Male',
					children: ['dog_male_color', 'dog_male_category']
				},

				'dog_female': {
					name: 'Female',
					children: ['dog_female_color', 'dog_female_category']
				},

				/*
				* Dogs - Name Preference
				*/

				'dog_male_color': {
					name: 'Name based on color?',
					children: ['dog_male_black', 'dog_male_white', 'dog_male_brown', 'dog_male_tan', 'dog_male_brindle', 'dog_male_gray']
				},

				'dog_male_category': {
					name: 'Name based on category?',
					children: ['dog_male_traditional', 'dog_male_unique', 'dog_male_pun_ny', 'dog_male_gender_neutral']
				},

				'dog_female_color': {
					name: 'Name based on color?',
					children: ['dog_female_black', 'dog_female_white', 'dog_female_brown', 'dog_female_tan', 'dog_female_brindle', 'dog_female_gray']
				},

				'dog_female_category': {
					name: 'Name based on category?',
					children: ['dog_female_traditional', 'dog_female_unique', 'dog_female_pun_ny', 'dog_female_gender_neutral']
				},

				/*
				* Dogs - Name by Color
				*/

				'dog_male_black': {
					name: 'Black',
					children: ['dog_male_black1', 'dog_male_black2', 'dog_male_black3', 'dog_male_black4', 'dog_male_black5']
				},

				'dog_male_white': {
					name: 'White',
					children: ['dog_male_white1', 'dog_male_white2', 'dog_male_white3', 'dog_male_white4', 'dog_male_white5']
				},

				'dog_male_brown': {
					name: 'Brown',
					children: ['dog_male_brown1', 'dog_male_brown2', 'dog_male_brown3', 'dog_male_brown4', 'dog_male_brown5']
				},

				'dog_male_tan': {
					name: 'Tan',
					children: ['dog_male_tan1', 'dog_male_tan2', 'dog_male_tan3', 'dog_male_tan4', 'dog_male_tan5']
				},

				'dog_male_brindle': {
					name: 'Brindle',
					children: ['dog_male_brindle1', 'dog_male_brindle2', 'dog_male_brindle3', 'dog_male_brindle4']
				},

				'dog_male_gray': {
					name: 'Gray',
					children: ['dog_male_gray1', 'dog_male_gray2', 'dog_male_gray3', 'dog_male_gray4', 'dog_male_gray5']
				},

				'dog_female_black': {
					name: 'Black',
					children: ['dog_female_black1', 'dog_female_black2', 'dog_female_black3', 'dog_female_black4', 'dog_female_black5']
				},

				'dog_female_white': {
					name: 'White',
					children: ['dog_female_white1', 'dog_female_white2', 'dog_female_white3', 'dog_female_white4', 'dog_female_white5']
				},

				'dog_female_brown': {
					name: 'Brown',
					children: ['dog_female_brown1', 'dog_female_brown2', 'dog_female_brown3', 'dog_female_brown4', 'dog_female_brown5']
				},

				'dog_female_tan': {
					name: 'Tan',
					children: ['dog_female_tan1', 'dog_female_tan2', 'dog_female_tan3', 'dog_female_tan4', 'dog_female_tan5']
				},

				'dog_female_brindle': {
					name: 'Brindle',
					children: ['dog_female_brindle1', 'dog_female_brindle2', 'dog_female_brindle3', 'dog_female_brindle4']
				},

				'dog_female_gray': {
					name: 'Gray',
					children: ['dog_female_gray1', 'dog_female_gray2', 'dog_female_gray3', 'dog_female_gray4', 'dog_female_gray5']
				},

				/*
				Dogs - Name by Category
				*/
				'dog_male_traditional': {
					name: 'Traditional',
					children: ['dog_male_traditional1', 'dog_male_traditional2', 'dog_male_traditional3', 'dog_male_traditional4', 'dog_male_traditional5', 'dog_male_traditional6', 'dog_male_traditional7', 'dog_male_traditional8', 'dog_male_traditional9', 'dog_male_traditional10']
				},

				'dog_male_unique': {
					name: 'Unique',
					children: ['dog_male_unique1', 'dog_male_unique2', 'dog_male_unique3', 'dog_male_unique4', 'dog_male_unique5']
				},

				'dog_male_pun_ny': {
					name: 'Punny',
					children: ['dog_male_pun_ny1', 'dog_male_pun_ny2', 'dog_male_pun_ny3', 'dog_male_pun_ny4', 'dog_male_pun_ny5', 'dog_male_pun_ny6', 'dog_male_pun_ny7', 'dog_male_pun_ny8', 'dog_male_pun_ny9', 'dog_male_pun_ny10']
				},

				'dog_male_gender_neutral': {
					name: 'Gender Neutral',
					children: ['dog_male_gender_neutral1', 'dog_male_gender_neutral2', 'dog_male_gender_neutral3', 'dog_male_gender_neutral4', 'dog_male_gender_neutral5', 'dog_male_gender_neutral6', 'dog_male_gender_neutral7', 'dog_male_gender_neutral8', 'dog_male_gender_neutral9', 'dog_male_gender_neutral10', 'dog_male_gender_neutral11', 'dog_male_gender_neutral12']
				},

				'dog_female_traditional': {
					name: 'Traditional',
					children: ['dog_female_traditional1', 'dog_female_traditional2', 'dog_female_traditional3', 'dog_female_traditional4', 'dog_female_traditional5', 'dog_female_traditional6', 'dog_female_traditional7', 'dog_female_traditional8', 'dog_female_traditional9', 'dog_female_traditional10']
				},

				'dog_female_unique': {
					name: 'Unique',
					children: ['dog_female_unique1', 'dog_female_unique2', 'dog_female_unique3', 'dog_female_unique4', 'dog_female_unique5']
				},

				'dog_female_pun_ny': {
					name: 'Punny',
					children: ['dog_female_pun_ny1', 'dog_female_pun_ny2', 'dog_female_pun_ny3', 'dog_female_pun_ny4', 'dog_female_pun_ny5', 'dog_female_pun_ny6', 'dog_female_pun_ny7', 'dog_female_pun_ny8', 'dog_female_pun_ny9', 'dog_female_pun_ny10']
				},

				'dog_female_gender_neutral': {
					name: 'Gender Neutral',
					children: ['dog_female_gender_neutral1', 'dog_female_gender_neutral2', 'dog_female_gender_neutral3', 'dog_female_gender_neutral4', 'dog_female_gender_neutral5', 'dog_female_gender_neutral6', 'dog_female_gender_neutral7', 'dog_female_gender_neutral8', 'dog_female_gender_neutral9', 'dog_female_gender_neutral10', 'dog_female_gender_neutral11', 'dog_female_gender_neutral12']
				},

				/*
				* Male Dog Names - Color specific
				*/
				'dog_male_black1': { name: 'Jett' },
				'dog_male_black2': { name: 'Cosmo' },
				'dog_male_black3': { name: 'Twilight' },
				'dog_male_black4': { name: 'Jaguar' },
				'dog_male_black5': { name: 'Midnight' },
				'dog_male_white1': { name: 'Blizzard' },
				'dog_male_white2': { name: 'Moonbeam' },
				'dog_male_white3': { name: 'Blanche' },
				'dog_male_white4': { name: 'Glacier' },
				'dog_male_white5': { name: 'Everest' },
				'dog_male_brown1': { name: 'Truffles' },
				'dog_male_brown2': { name: 'Hershey' },
				'dog_male_brown3': { name: 'Diablo' },
				'dog_male_brown4': { name: 'Chocolate' },
				'dog_male_brown5': { name: 'Charlie Brown' },
				'dog_male_tan1': { name: 'S`mores' },
				'dog_male_tan2': { name: 'Muffin' },
				'dog_male_tan3': { name: 'Nutmeg' },
				'dog_male_tan4': { name: 'Biscuit' },
				'dog_male_tan5': { name: 'Sunbeam' },
				'dog_male_brindle1': { name: 'Swatch' },
				'dog_male_brindle2': { name: 'Tigger' },
				'dog_male_brindle3': { name: 'Pyro' },
				'dog_male_brindle4': { name: 'Eclipse' },
				'dog_male_gray1': { name: 'Charcoal' },
				'dog_male_gray2': { name: 'Slate' },
				'dog_male_gray3': { name: 'Merlin' },
				'dog_male_gray4': { name: 'Phantom' },
				'dog_male_gray5': { name: 'Moonshine' },

				/*
				* Female Dog Names - Color Specific
				*/
				'dog_female_black1': { name: 'Onyx' },
				'dog_female_black2': { name: 'Ghost' },
				'dog_female_black3': { name: 'Panther' },
				'dog_female_black4': { name: 'Shadow' },
				'dog_female_black5': { name: 'Smokey' },
				'dog_female_white1': { name: 'Alaska' },
				'dog_female_white2': { name: 'Latte' },
				'dog_female_white3': { name: 'Brie' },
				'dog_female_white4': { name: 'Champagne' },
				'dog_female_white5': { name: 'Cloud' },
				'dog_female_brown1': { name: 'Cadbury' },
				'dog_female_brown2': { name: 'Godiva' },
				'dog_female_brown3': { name: 'Whiskey' },
				'dog_female_brown4': { name: 'Ebony' },
				'dog_female_brown5': { name: 'Nutella' },
				'dog_female_tan1': { name: 'Cinnamon' },
				'dog_female_tan2': { name: 'Sienna' },
				'dog_female_tan3': { name: 'Butterscotch' },
				'dog_female_tan4': { name: 'Maple' },
				'dog_female_tan5': { name: 'Apricot' },
				'dog_female_brindle1': { name: 'Mimosa' },
				'dog_female_brindle2': { name: 'Flame' },
				'dog_female_brindle3': { name: 'Ember' },
				'dog_female_brindle4': { name: 'Sunkist' },
				'dog_female_gray1': { name: 'Echo' },
				'dog_female_gray2': { name: 'Stardust' },
				'dog_female_gray3': { name: 'Luna' },
				'dog_female_gray4': { name: 'Stormy' },
				'dog_female_gray5': { name: 'Jupiter' },

				/*
				* Male Dog Names - Name Category
				*/
				'dog_male_traditional1': { name: 'Jack' },
				'dog_male_traditional2': { name: 'Oliver' },
				'dog_male_traditional3': { name: 'Charlie' },
				'dog_male_traditional4': { name: 'Winston' },
				'dog_male_traditional5': { name: 'Percy' },
				'dog_male_traditional6': { name: 'Brody' },
				'dog_male_traditional7': { name: 'Theodore' },
				'dog_male_traditional8': { name: 'Hugo' },
				'dog_male_traditional9': { name: 'Milo' },
				'dog_male_traditional10': { name: 'Axel' },
				'dog_male_unique1': { name: 'Grizzly' },
				'dog_male_unique2': { name: 'Bear' },
				'dog_male_unique3': { name: 'Kobe' },
				'dog_male_unique4': { name: 'Loki' },
				'dog_male_unique5': { name: 'Odin' },
				'dog_male_pun_ny1': { name: 'Chewbarka' },
				'dog_male_pun_ny2': { name: 'Pawcasso' },
				'dog_male_pun_ny3': { name: 'Pablo Escobark' },
				'dog_male_pun_ny4': { name: 'William Shakespaw' },
				'dog_male_pun_ny5': { name: 'Bark Twain' },
				'dog_male_pun_ny6': { name: 'Woofgang Puck' },
				'dog_male_pun_ny7': { name: 'Bilbo Waggins' },
				'dog_male_pun_ny8': { name: 'Indiana Bones' },
				'dog_male_pun_ny9': { name: 'Snarls Barkley' },
				'dog_male_pun_ny10': { name: 'Harry Pawter' },
				'dog_male_gender_neutral1': { name: 'Ollie' },
				'dog_male_gender_neutral2': { name: 'Loki' },
				'dog_male_gender_neutral3': { name: 'Archie' },
				'dog_male_gender_neutral4': { name: 'Blaze' },
				'dog_male_gender_neutral5': { name: 'Adrian' },
				'dog_male_gender_neutral6': { name: 'Jazz' },
				'dog_male_gender_neutral7': { name: 'Berkeley' },
				'dog_male_gender_neutral8': { name: 'Butterscotch' },
				'dog_male_gender_neutral9': { name: 'Whiskey' },
				'dog_male_gender_neutral10': { name: 'Espresso' },
				'dog_male_gender_neutral11': { name: 'Hershey' },
				'dog_male_gender_neutral12': { name: 'Frosty' },

				/*
				* Female Dog Names - Name Category
				*/
				'dog_female_traditional1': { name: 'Bella' },
				'dog_female_traditional2': { name: 'Luna' },
				'dog_female_traditional3': { name: 'Piper' },
				'dog_female_traditional4': { name: 'Layla' },
				'dog_female_traditional5': { name: 'Marley' },
				'dog_female_traditional6': { name: 'Stella' },
				'dog_female_traditional7': { name: 'Cocoa' },
				'dog_female_traditional8': { name: 'Lola' },
				'dog_female_traditional9': { name: 'Sophie' },
				'dog_female_traditional10': { name: 'Willow' },
				'dog_female_unique1': { name: 'Ziggy' },
				'dog_female_unique2': { name: 'Mimosa' },
				'dog_female_unique3': { name: 'Marlo' },
				'dog_female_unique4': { name: 'Raine' },
				'dog_female_unique5': { name: 'Nutella' },
				'dog_female_pun_ny1': { name: 'Mary Puppins' },
				'dog_female_pun_ny2': { name: 'Virginia Woof' },
				'dog_female_pun_ny3': { name: 'Queen Elizabark' },
				'dog_female_pun_ny4': { name: 'Aleasha Keys' },
				'dog_female_pun_ny5': { name: 'Pawdrey Hepburn' },
				'dog_female_pun_ny6': { name: 'Winnie the Pooch' },
				'dog_female_pun_ny7': { name: 'Woofie Goldberg' },
				'dog_female_pun_ny8': { name: 'Joan of Bark' },
				'dog_female_pun_ny9': { name: 'Helga Hufflepup' },
				'dog_female_pun_ny10': { name: 'Bone Crawford' },
				'dog_female_gender_neutral1': { name: 'Berkeley' },
				'dog_female_gender_neutral2': { name: 'Butterscotch' },
				'dog_female_gender_neutral3': { name: 'Whiskey' },
				'dog_female_gender_neutral4': { name: 'Espresso' },
				'dog_female_gender_neutral5': { name: 'Hershey' },
				'dog_female_gender_neutral6': { name: 'Frosty' },
				'dog_female_gender_neutral7': { name: 'Ollie' },
				'dog_female_gender_neutral8': { name: 'Loki' },
				'dog_female_gender_neutral9': { name: 'Archie' },
				'dog_female_gender_neutral10': { name: 'Blaze' },
				'dog_female_gender_neutral11': { name: 'Adrian' },
				'dog_female_gender_neutral12': { name: 'Jazz' },


				/*
				* Cats - Gender
				*/

				'cat_male': {
					name: 'Male',
					children: ['cat_male_color', 'cat_male_category']
				},

				'cat_female': {
					name: 'Female',
					children: ['cat_female_color', 'cat_female_category']
				},

				/*
				* Cats - Name Preference
				*/

				'cat_male_color': {
					name: 'Name based on color?',
					children: ['cat_male_black', 'cat_male_white', 'cat_male_brown', 'cat_male_tan', 'cat_male_brindle', 'cat_male_orange', 'cat_male_gray']
				},

				'cat_male_category': {
					name: 'Name based on category?',
					children: ['cat_male_traditional', 'cat_male_unique', 'cat_male_pun_ny', 'cat_male_gender_neutral']
				},

				'cat_female_color': {
					name: 'Name based on color?',
					children: ['cat_female_black', 'cat_female_white', 'cat_female_brown', 'cat_female_tan', 'cat_female_brindle', 'cat_female_orange', 'cat_female_gray']
				},

				'cat_female_category': {
					name: 'Name based on category?',
					children: ['cat_female_traditional', 'cat_female_unique', 'cat_female_pun_ny', 'cat_female_gender_neutral']
				},

				/*
				* Cats - Name by Color
				*/

				'cat_male_black': {
					name: 'Black',
					children: ['cat_male_black1', 'cat_male_black2', 'cat_male_black3', 'cat_male_black4', 'cat_male_black5']
				},

				'cat_male_white': {
					name: 'White',
					children: ['cat_male_white1', 'cat_male_white2', 'cat_male_white3', 'cat_male_white4', 'cat_male_white5']
				},

				'cat_male_brown': {
					name: 'Brown',
					children: ['cat_male_brown1', 'cat_male_brown2', 'cat_male_brown3', 'cat_male_brown4', 'cat_male_brown5']
				},

				'cat_male_tan': {
					name: 'Tan',
					children: ['cat_male_tan1', 'cat_male_tan2', 'cat_male_tan3', 'cat_male_tan4', 'cat_male_tan5']
				},

				'cat_male_brindle': {
					name: 'Brindle',
					children: ['cat_male_brindle1', 'cat_male_brindle2', 'cat_male_brindle3', 'cat_male_brindle4']
				},

				'cat_male_orange': {
					name: 'Orange',
					children: ['cat_male_orange1', 'cat_male_orange2', 'cat_male_orange3', 'cat_male_orange4', 'cat_male_orange5']
				},

				'cat_male_gray': {
					name: 'Gray',
					children: ['cat_male_gray1', 'cat_male_gray2', 'cat_male_gray3', 'cat_male_gray4', 'cat_male_gray5']
				},

				'cat_female_black': {
					name: 'Black',
					children: ['cat_female_black1', 'cat_female_black2', 'cat_female_black3', 'cat_female_black4', 'cat_female_black5']
				},

				'cat_female_white': {
					name: 'White',
					children: ['cat_female_white1', 'cat_female_white2', 'cat_female_white3', 'cat_female_white4', 'cat_female_white5']
				},

				'cat_female_brown': {
					name: 'Brown',
					children: ['cat_female_brown1', 'cat_female_brown2', 'cat_female_brown3', 'cat_female_brown4', 'cat_female_brown5']
				},

				'cat_female_tan': {
					name: 'Tan',
					children: ['cat_female_tan1', 'cat_female_tan2', 'cat_female_tan3', 'cat_female_tan4', 'cat_female_tan5']
				},

				'cat_female_brindle': {
					name: 'Brindle',
					children: ['cat_female_brindle1', 'cat_female_brindle2', 'cat_female_brindle3', 'cat_female_brindle4']
				},

				'cat_female_orange': {
					name: 'Orange',
					children: ['cat_female_orange1', 'cat_female_orange2', 'cat_female_orange3', 'cat_female_orange4', 'cat_female_orange5']
				},

				'cat_female_gray': {
					name: 'Gray',
					children: ['cat_female_gray1', 'cat_female_gray2', 'cat_female_gray3', 'cat_female_gray4', 'cat_female_gray5']
				},

				/*
				Cats - Name by Category
				*/
				'cat_male_traditional': {
					name: 'Traditional',
					children: ['cat_male_traditional1', 'cat_male_traditional2', 'cat_male_traditional3', 'cat_male_traditional4', 'cat_male_traditional5', 'cat_male_traditional6', 'cat_male_traditional7', 'cat_male_traditional8', 'cat_male_traditional9', 'cat_male_traditional10']
				},

				'cat_male_unique': {
					name: 'Unique',
					children: ['cat_male_unique1', 'cat_male_unique2', 'cat_male_unique3', 'cat_male_unique4', 'cat_male_unique5']
				},

				'cat_male_pun_ny': {
					name: 'Punny',
					children: ['cat_male_pun_ny1', 'cat_male_pun_ny2', 'cat_male_pun_ny3', 'cat_male_pun_ny4', 'cat_male_pun_ny5', 'cat_male_pun_ny6', 'cat_male_pun_ny7', 'cat_male_pun_ny8', 'cat_male_pun_ny9', 'cat_male_pun_ny10']
				},

				'cat_male_gender_neutral': {
					name: 'Gender Neutral',
					children: ['cat_male_gender_neutral1', 'cat_male_gender_neutral2', 'cat_male_gender_neutral3', 'cat_male_gender_neutral4', 'cat_male_gender_neutral5', 'cat_male_gender_neutral6', 'cat_male_gender_neutral7', 'cat_male_gender_neutral8', 'cat_male_gender_neutral9', 'cat_male_gender_neutral10', 'cat_male_gender_neutral11', 'cat_male_gender_neutral12']
				},

				'cat_female_traditional': {
					name: 'Traditional',
					children: ['cat_female_traditional1', 'cat_female_traditional2', 'cat_female_traditional3', 'cat_female_traditional4', 'cat_female_traditional5', 'cat_female_traditional6', 'cat_female_traditional7', 'cat_female_traditional8', 'cat_female_traditional9', 'cat_female_traditional10']
				},

				'cat_female_unique': {
					name: 'Unique',
					children: ['cat_female_unique1', 'cat_female_unique2', 'cat_female_unique3', 'cat_female_unique4', 'cat_female_unique5']
				},

				'cat_female_pun_ny': {
					name: 'Punny',
					children: ['cat_female_pun_ny1', 'cat_female_pun_ny2', 'cat_female_pun_ny3', 'cat_female_pun_ny4', 'cat_female_pun_ny5', 'cat_female_pun_ny6', 'cat_female_pun_ny7', 'cat_female_pun_ny8', 'cat_female_pun_ny9', 'cat_female_pun_ny10']
				},

				'cat_female_gender_neutral': {
					name: 'Gender Neutral',
					children: ['cat_female_gender_neutral1', 'cat_female_gender_neutral2', 'cat_female_gender_neutral3', 'cat_female_gender_neutral4', 'cat_female_gender_neutral5', 'cat_female_gender_neutral6', 'cat_female_gender_neutral7', 'cat_female_gender_neutral8', 'cat_female_gender_neutral9', 'cat_female_gender_neutral10', 'cat_female_gender_neutral11', 'cat_female_gender_neutral12']
				},

				/*
				* Male Cat Names - Color specific
				*/
				'cat_male_black1': { name: 'T`Challa' },
				'cat_male_black2': { name: 'Onyx' },
				'cat_male_black3': { name: 'Blackjack' },
				'cat_male_black4': { name: 'Shadow' },
				'cat_male_black5': { name: 'Zorro' },
				'cat_male_white1': { name: 'Blizzard' },
				'cat_male_white2': { name: 'Coconut' },
				'cat_male_white3': { name: 'Cottonball' },
				'cat_male_white4': { name: 'Eggnog' },
				'cat_male_white5': { name: 'Sugar' },
				'cat_male_brown1': { name: 'Snickers' },
				'cat_male_brown2': { name: 'Mars' },
				'cat_male_brown3': { name: 'Whiskey' },
				'cat_male_brown4': { name: 'Fudge' },
				'cat_male_brown5': { name: 'Java' },
				'cat_male_tan1': { name: 'S`mores' },
				'cat_male_tan2': { name: 'Muffin' },
				'cat_male_tan3': { name: 'Nutmeg' },
				'cat_male_tan4': { name: 'Caramel' },
				'cat_male_tan5': { name: 'Apricot' },
				'cat_male_brindle1': { name: 'Calliope' },
				'cat_male_brindle2': { name: 'Kaleidoscope' },
				'cat_male_brindle3': { name: 'Rorschach' },
				'cat_male_brindle4': { name: 'Mosaic' },
				'cat_male_orange1': { name: 'Mango' },
				'cat_male_orange2': { name: 'Marigold' },
				'cat_male_orange3': { name: 'Nemo' },
				'cat_male_orange4': { name: 'Cheeto' },
				'cat_male_orange5': { name: 'Foxy' },
				'cat_male_orange6': { name: 'Marmalade' },
				'cat_male_gray1': { name: 'Peppers' },
				'cat_male_gray2': { name: 'Shadow' },
				'cat_male_gray3': { name: 'Gandalf' },
				'cat_male_gray4': { name: 'Earl Grey' },
				'cat_male_gray5': { name: 'Oyster' },

				/*
				* Female Cat Names - Color Specific
				*/
				'cat_female_black1': { name: 'Blackberry' },
				'cat_female_black2': { name: 'Twilight' },
				'cat_female_black3': { name: 'Electra' },
				'cat_female_black4': { name: 'Raven' },
				'cat_female_black5': { name: 'Omen' },
				'cat_female_white1': { name: 'Marshmallow' },
				'cat_female_white2': { name: 'Alaska' },
				'cat_female_white3': { name: 'Casper' },
				'cat_female_white4': { name: 'Porcelain' },
				'cat_female_white5': { name: 'Tofu' },
				'cat_female_brown1': { name: 'Truffles' },
				'cat_female_brown2': { name: 'Toffee' },
				'cat_female_brown3': { name: 'Godiva' },
				'cat_female_brown4': { name: 'Mocha' },
				'cat_female_brown5': { name: 'Cocoa' },
				'cat_female_tan1': { name: 'Maple' },
				'cat_female_tan2': { name: 'Sahara' },
				'cat_female_tan3': { name: 'Buttercup' },
				'cat_female_tan4': { name: 'Coral' },
				'cat_female_tan5': { name: 'Honey' },
				'cat_female_brindle1': { name: 'Spice' },
				'cat_female_brindle2': { name: 'Amber' },
				'cat_female_brindle3': { name: 'Honeybee' },
				'cat_female_brindle4': { name: 'Glimmer' },
				'cat_female_orange1': { name: 'Blaze' },
				'cat_female_orange2': { name: 'Cheddar' },
				'cat_female_orange3': { name: 'Buttercup' },
				'cat_female_orange4': { name: 'Gingerbread' },
				'cat_female_orange5': { name: 'Persimmon' },
				'cat_female_orange6': { name: 'Peaches' },
				'cat_female_gray1': { name: 'Cinder' },
				'cat_female_gray2': { name: 'Lightning' },
				'cat_female_gray3': { name: 'Mercury' },
				'cat_female_gray4': { name: 'Mystique' },
				'cat_female_gray5': { name: 'Lavender' },

				/*
				* Male Cat Names - Name Category
				*/
				'cat_male_traditional1': { name: 'Jacques Pierre' },
				'cat_male_traditional2': { name: 'Orson' },
				'cat_male_traditional3': { name: 'Heathcliff' },
				'cat_male_traditional4': { name: 'Cooper' },
				'cat_male_traditional5': { name: 'Axel' },
				'cat_male_traditional6': { name: 'Felix' },
				'cat_male_traditional7': { name: 'Maxwell' },
				'cat_male_traditional8': { name: 'Oscar' },
				'cat_male_traditional9': { name: 'Dante' },
				'cat_male_traditional10': { name: 'Finn' },
				'cat_male_unique1': { name: 'Aristotle' },
				'cat_male_unique2': { name: 'Zorah' },
				'cat_male_unique3': { name: 'Atticus' },
				'cat_male_unique4': { name: 'Pippin' },
				'cat_male_unique5': { name: 'Sage' },
				'cat_male_pun_ny1': { name: 'Lickorish' },
				'cat_male_pun_ny2': { name: 'Isaac Mewton' },
				'cat_male_pun_ny3': { name: 'Oedipuss' },
				'cat_male_pun_ny4': { name: 'Furrcules' },
				'cat_male_pun_ny5': { name: 'Mewlius Caesar' },
				'cat_male_pun_ny6': { name: 'Catpurrnicus' },
				'cat_male_pun_ny7': { name: 'David Meowie' },
				'cat_male_pun_ny8': { name: 'Will Furrell' },
				'cat_male_pun_ny9': { name: 'Apawllo' },
				'cat_male_pun_ny10': { name: 'Catsanova' },
				'cat_male_gender_neutral1': { name: 'Huckleberry' },
				'cat_male_gender_neutral2': { name: 'Espresso' },
				'cat_male_gender_neutral3': { name: 'Monarch' },
				'cat_male_gender_neutral4': { name: 'Hugo' },
				'cat_male_gender_neutral5': { name: 'Shiloh' },
				'cat_male_gender_neutral6': { name: 'Butterscotch' },
				'cat_male_gender_neutral7': { name: 'Bowie' },
				'cat_male_gender_neutral8': { name: 'Bentley' },
				'cat_male_gender_neutral9': { name: 'Whiskers' },
				'cat_male_gender_neutral10': { name: 'Velvet' },
				'cat_male_gender_neutral11': { name: 'Marple' },
				'cat_male_gender_neutral12': { name: 'Ireland' },

				/*
				* Female Cat Names - Name Category
				*/
				'cat_female_traditional1': { name: 'Margeau' },
				'cat_female_traditional2': { name: 'Cassidy' },
				'cat_female_traditional3': { name: 'Cleopatra' },
				'cat_female_traditional4': { name: 'Poppy' },
				'cat_female_traditional5': { name: 'Cocoa' },
				'cat_female_traditional6': { name: 'Athena' },
				'cat_female_traditional7': { name: 'Flora' },
				'cat_female_traditional8': { name: 'Boots' },
				'cat_female_traditional9': { name: 'Sophie' },
				'cat_female_traditional10': { name: 'KitKat' },
				'cat_female_unique1': { name: 'Echo' },
				'cat_female_unique2': { name: 'Crimson' },
				'cat_female_unique3': { name: 'Mishka' },
				'cat_female_unique4': { name: 'Yarrah' },
				'cat_female_unique5': { name: 'Leighlah' },
				'cat_female_pun_ny1': { name: 'Marie Purrie' },
				'cat_female_pun_ny2': { name: 'Amewlia Earhart' },
				'cat_female_pun_ny3': { name: 'Purrincess Leia' },
				'cat_female_pun_ny4': { name: 'Meowgaret Catcher' },
				'cat_female_pun_ny5': { name: 'Kitty Purry' },
				'cat_female_pun_ny6': { name: 'Cindy Clawford' },
				'cat_female_pun_ny7': { name: 'Meowly Cyrus' },
				'cat_female_pun_ny8': { name: 'Dolly Purrton' },
				'cat_female_pun_ny9': { name: 'Catnip Evergreen' },
				'cat_female_pun_ny10': { name: 'Meowdeline Albright' },
				'cat_female_gender_neutral1': { name: 'Huckleberry' },
				'cat_female_gender_neutral2': { name: 'Espresso' },
				'cat_female_gender_neutral3': { name: 'Monarch' },
				'cat_female_gender_neutral4': { name: 'Hugo' },
				'cat_female_gender_neutral5': { name: 'Ireland' },
				'cat_female_gender_neutral6': { name: 'Marple' },
				'cat_female_gender_neutral7': { name: 'Velvet' },
				'cat_female_gender_neutral8': { name: 'Whiskers' },
				'cat_female_gender_neutral9': { name: 'Bentley' },
				'cat_female_gender_neutral10': { name: 'Bowie' },
				'cat_female_gender_neutral11': { name: 'Butterscotch' },
				'cat_female_gender_neutral12': { name: 'Shiloh' },
			}
		};


	/*
	* Main function
	*/
	$(function() {

		var tree = new DecisionTree(data);
		var $list = $('#choices');
		var $title = $('h1');

		var current_id = null;

		var renderList = function(items) {

			var title = tree.getParentName(items[0].id);
			if(title) {
				$title.text(title);
            }
            

			$list.empty();
			for(var i = 0; i < items.length; i++) {
				var item = items[i];
				$list.append('<li><a href="#" data-choice="' + item.id + '">' + item.name + '</a></li>');
			}
		};

		var _doInitial = function() {
			var initData = tree.getInitial();
			current_id = null;
			$title.text('');
			renderList(initData);
		};

		/* Click handler for each choice */
		$(document).on('click', '#choices a', function(e) {
			e.preventDefault();
			var choiceId = $(this).data('choice');

			var kids = tree.getChildren(choiceId);
			if(kids) {
				current_id = choiceId;
				renderList(kids);
			}
		});

		/* Click handler for back button */
		$('#back').on('click', function(e) {
			e.preventDefault();
			if(!current_id) return false;

			var parents = tree.getParents(current_id);

			if(parents.length > 0) {
				var prev_node = parents.pop();
				current_id = prev_node.id;
				renderList(tree.getChildren(prev_node.id));
			} else {
				_doInitial();
			}

		});

		_doInitial();

	});

	/**
	* Simple decision tree parser and traversal.
	* @param data - object {
	*     initial: [], (list of choice IDs for the root node)
	*     choices: {}  (keyed object of all possible choices)
	* }
	**/
	var DecisionTree = function(data) {

		this.initial = data.initial;
		this.choices = data.choices;

		/* Return an array of choice objects for the root of the tree */
		this.getInitial = function() {

			return this.getChoices(this.initial);

		};

		/* Get full choice data for list of choice IDs */
		this.getChoices = function(idList) {

			if(!idList) return [];
			var list = [];
			for(var i = 0; i < idList.length; i++) {
				var childChoice = this.getChoice(idList[i]);
				list.push(childChoice);
			}
			return list;

		};

		/* Get full choice data by specific id */
		this.getChoice = function(id) {

			if (!(id in this.choices)) return false;
			if (!('id' in this.choices[id])) this.choices[id].id = id;
			return this.choices[id];

		};


		/* Get an array of choice data for a parent id */
		this.getChildren = function(parentId) {

			if (!(parentId in this.choices)) return false;
			if (!('children' in this.choices[parentId])) return false;

			var childIds = this.choices[parentId].children;
			return this.getChoices(childIds);

		};

		/* Get an array of choice data for the parent(s) of an id */
		this.getParents = function(id) {

			var parents = [];
			var node = this.getChoice(id);

			while(node.parent) {
				node = this.getChoice(node.parent);
				parents.unshift(node);
			}

			return parents;

		};

		/* Get just an array of ids for the parents of a specific id */
		this.getParentIds = function(id) {
			var parents = this.getParents(id);
			var parentIds = [];
			for(var i = 0; i < parents.length; i++) {
				parentIds.push(parents[i].id);
			}
			return parentIds;
		};

		/* Get the 'name' for the parent of an id */
		this.getParentName = function(id) {
			var parent = this.getParents(id).pop();
			if(!parent) {
				return false;
			} else {
				return parent.name;
			}
		};

		/* Init - insert ids into choice objects, check dups, associate parents, etc */
		this.initialize = function() {

			var idList = [];
			for(var id in this.choices) {
				if(idList.indexOf(id) !== -1) throw 'DecisionTree: duplicate ID "' + id + '" in choice set';

				var choice = this.getChoice(id);
				choice.id = id;

				var children = this.getChildren(id);
				for(var i = 0; i < children.length; i++) {

					var child = children[i];
					if(child.parent) throw 'DecisionTree: tried to assign parent "' + id + '" to child "' + choice.children[i] + '" which already has parent "' + child.parent + '"';
					child.parent = id;

				}

			}

        };

        this.initialize();

	};
