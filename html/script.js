/*** Top-down tree for questions and names ***/

var data = {
	initial: ['dogs', 'cats', 'birds', 'fish', 'bunnies', 'smallAnimal', 'reptiles'],
	choices: {

		/*
		* TOP LEVEL
		*/
		'dogs': {
			name: 'Dogs',
			final: 'no',
			children: ['dog_male', 'dog_female', 'dog_gender_neutral']
		},

		'cats': {
			name: 'Cats',
			final: 'no',
			children: ['cat_male', 'cat_female', 'cat_gender_neutral']
		},

		'birds': {
			name: 'Birds',
			final: 'no',
			children: ['bird_male', 'bird_female', 'bird_gender_neutral']
		},

		'fish': {
			name: 'Fish',
			final: 'no',
			children: ['fish_male', 'fish_female', 'fish_gender_neutral']
		},

		'bunnies': {
			name: 'Bunnies',
			final: 'no',
			children: ['bunny_male', 'bunny_female', 'bunny_gender_neutral']
		},

		'smallAnimal': {
			name: 'Small Animals',
			final: 'no',
			children: ['smallAnimal_male', 'smallAnimal_female', 'smallAnimal_gender_neutral']
		},

		'reptiles': {
			name: 'Reptiles',
			final: 'no',
			children: ['reptile_male', 'reptile_female', 'reptile_gender_neutral']
		},

		/*
		* Dogs - Gender
		*/
		'dog_male': {
			name: 'Male',
			final: 'no',
			children: ['dog_male_color', 'dog_male_category']
		},

		'dog_female': {
			name: 'Female',
			final: 'no',
			children: ['dog_female_color', 'dog_female_category']
		},

		'dog_gender_neutral': {
			name: 'Gender Neutral',
			final: 'yes',
			children: ['dog_gender_neutral1', 'dog_gender_neutral2', 'dog_gender_neutral3', 'dog_gender_neutral4', 'dog_gender_neutral5', 'dog_gender_neutral6', 'dog_gender_neutral7', 'dog_gender_neutral8', 'dog_gender_neutral9', 'dog_gender_neutral10', 'dog_gender_neutral11', 'dog_gender_neutral12', 'dog_gender_neutral13']
		},

		/*
		* Dogs - Name Preference
		*/
		'dog_male_color': {
			name: 'Name based on color?',
			final: 'no',
			children: ['dog_male_black', 'dog_male_white', 'dog_male_brown', 'dog_male_tan', 'dog_male_brindle', 'dog_male_gray']
		},

		'dog_male_category': {
			name: 'Name based on category?',
			final: 'no',
			children: ['dog_male_traditional', 'dog_male_unique', 'dog_male_pun_ny']
		},

		'dog_female_color': {
			name: 'Name based on color?',
			final: 'no',
			children: ['dog_female_black', 'dog_female_white', 'dog_female_brown', 'dog_female_tan', 'dog_female_brindle', 'dog_female_gray']
		},

		'dog_female_category': {
			name: 'Name based on category?',
			final: 'no',
			children: ['dog_female_traditional', 'dog_female_unique', 'dog_female_pun_ny']
		},

		/*
		* Dogs - Name by Color
		*/
		'dog_male_black': {
			name: 'Black',
			final: 'yes',
			children: ['dog_male_black1', 'dog_male_black2', 'dog_male_black3', 'dog_male_black4', 'dog_male_black5', 'dog_male_black6', 'dog_male_black7', 'dog_male_black8', 'dog_male_black9', 'dog_male_black10']
		},

		'dog_male_white': {
			name: 'White',
			final: 'yes',
			children: ['dog_male_white1', 'dog_male_white2', 'dog_male_white3', 'dog_male_white4', 'dog_male_white5', 'dog_male_white6', 'dog_male_white7', 'dog_male_white8', 'dog_male_white9', 'dog_male_white10']
		},

		'dog_male_brown': {
			name: 'Brown',
			final: 'yes',
			children: ['dog_male_brown1', 'dog_male_brown2', 'dog_male_brown3', 'dog_male_brown4', 'dog_male_brown5', 'dog_male_brown6', 'dog_male_brown7', 'dog_male_brown8', 'dog_male_brown9', 'dog_male_brown10']
		},

		'dog_male_tan': {
			name: 'Tan',
			final: 'yes',
			children: ['dog_male_tan1', 'dog_male_tan2', 'dog_male_tan3', 'dog_male_tan4', 'dog_male_tan5', 'dog_male_tan6', 'dog_male_tan7', 'dog_male_tan8', 'dog_male_tan9', 'dog_male_tan10']
		},

		'dog_male_brindle': {
			name: 'Brindle',
			final: 'yes',
			children: ['dog_male_brindle1', 'dog_male_brindle2', 'dog_male_brindle3', 'dog_male_brindle4', 'dog_male_brindle5', 'dog_male_brindle6', 'dog_male_brindle7', 'dog_male_brindle8', 'dog_male_brindle9', 'dog_male_brindle10']
		},

		'dog_male_gray': {
			name: 'Gray',
			final: 'yes',
			children: ['dog_male_gray1', 'dog_male_gray2', 'dog_male_gray3', 'dog_male_gray4', 'dog_male_gray5', 'dog_male_gray6', 'dog_male_gray7', 'dog_male_gray8', 'dog_male_gray9', 'dog_male_gray10']
		},

		'dog_female_black': {
			name: 'Black',
			final: 'yes',
			children: ['dog_female_black1', 'dog_female_black2', 'dog_female_black3', 'dog_female_black4', 'dog_female_black5', 'dog_female_black6', 'dog_female_black7', 'dog_female_black8', 'dog_female_black9', 'dog_female_black10']
		},

		'dog_female_white': {
			name: 'White',
			final: 'yes',
			children: ['dog_female_white1', 'dog_female_white2', 'dog_female_white3', 'dog_female_white4', 'dog_female_white5', 'dog_female_white6', 'dog_female_white7', 'dog_female_white8', 'dog_female_white9', 'dog_female_white10']
		},

		'dog_female_brown': {
			name: 'Brown',
			final: 'yes',
			children: ['dog_female_brown1', 'dog_female_brown2', 'dog_female_brown3', 'dog_female_brown4', 'dog_female_brown5', 'dog_female_brown6', 'dog_female_brown7', 'dog_female_brown8', 'dog_female_brown9', 'dog_female_brown10']
		},

		'dog_female_tan': {
			name: 'Tan',
			final: 'yes',
			children: ['dog_female_tan1', 'dog_female_tan2', 'dog_female_tan3', 'dog_female_tan4', 'dog_female_tan5', 'dog_female_tan6', 'dog_female_tan7', 'dog_female_tan8', 'dog_female_tan9', 'dog_female_tan10']
		},

		'dog_female_brindle': {
			name: 'Brindle',
			final: 'yes',
			children: ['dog_female_brindle1', 'dog_female_brindle2', 'dog_female_brindle3', 'dog_female_brindle4', 'dog_female_brindle5', 'dog_female_brindle6', 'dog_female_brindle7', 'dog_female_brindle8', 'dog_female_brindle9', 'dog_female_brindle10']
		},

		'dog_female_gray': {
			name: 'Gray',
			final: 'yes',
			children: ['dog_female_gray1', 'dog_female_gray2', 'dog_female_gray3', 'dog_female_gray4', 'dog_female_gray5', 'dog_female_gray6', 'dog_female_gray7', 'dog_female_gray8', 'dog_female_gray9', 'dog_female_gray10']
		},

		/*
		* Dogs - Name by Category
		*/
		'dog_male_traditional': {
			name: 'Traditional',
			final: 'yes',
			children: ['dog_male_traditional1', 'dog_male_traditional2', 'dog_male_traditional3', 'dog_male_traditional4', 'dog_male_traditional5', 'dog_male_traditional6', 'dog_male_traditional7', 'dog_male_traditional8', 'dog_male_traditional9', 'dog_male_traditional10']
		},

		'dog_male_unique': {
			name: 'Unique',
			final: 'yes',
			children: ['dog_male_unique1', 'dog_male_unique2', 'dog_male_unique3', 'dog_male_unique4', 'dog_male_unique5', 'dog_male_unique6', 'dog_male_unique7', 'dog_male_unique8', 'dog_male_unique9', 'dog_male_unique10']
		},

		'dog_male_pun_ny': {
			name: 'Punny',
			final: 'yes',
			children: ['dog_male_pun_ny1', 'dog_male_pun_ny2', 'dog_male_pun_ny3', 'dog_male_pun_ny4', 'dog_male_pun_ny5', 'dog_male_pun_ny6', 'dog_male_pun_ny7', 'dog_male_pun_ny8', 'dog_male_pun_ny9', 'dog_male_pun_ny10']
		},

		'dog_female_traditional': {
			name: 'Traditional',
			final: 'yes',
			children: ['dog_female_traditional1', 'dog_female_traditional2', 'dog_female_traditional3', 'dog_female_traditional4', 'dog_female_traditional5', 'dog_female_traditional6', 'dog_female_traditional7', 'dog_female_traditional8', 'dog_female_traditional9', 'dog_female_traditional10']
		},

		'dog_female_unique': {
			name: 'Unique',
			final: 'yes',
			children: ['dog_female_unique1', 'dog_female_unique2', 'dog_female_unique3', 'dog_female_unique4', 'dog_female_unique5', 'dog_female_unique6', 'dog_female_unique7', 'dog_female_unique8', 'dog_female_unique9', 'dog_female_unique10']
		},

		'dog_female_pun_ny': {
			name: 'Punny',
			final: 'yes',
			children: ['dog_female_pun_ny1', 'dog_female_pun_ny2', 'dog_female_pun_ny3', 'dog_female_pun_ny4', 'dog_female_pun_ny5', 'dog_female_pun_ny6', 'dog_female_pun_ny7', 'dog_female_pun_ny8', 'dog_female_pun_ny9', 'dog_female_pun_ny10']
		},

		/*
		* Male Dog Names - Color specific
		*/
		'dog_male_black1': { name: 'Jett' },
		'dog_male_black2': { name: 'Cosmo' },
		'dog_male_black3': { name: 'Twilight' },
		'dog_male_black4': { name: 'Jaguar' },
		'dog_male_black5': { name: 'Midnight' },
		'dog_male_black6': { name: 'Emery' },
		'dog_male_black7': { name: 'Ash' },
		'dog_male_black8': { name: 'Asher' },
		'dog_male_black9': { name: 'Sirius' },
		'dog_male_black10': { name: 'Sable' },
		'dog_male_white1': { name: 'Blizzard' },
		'dog_male_white2': { name: 'Moonbeam' },
		'dog_male_white3': { name: 'Blanche' },
		'dog_male_white4': { name: 'Glacier' },
		'dog_male_white5': { name: 'Everest' },
		'dog_male_white6': { name: 'Silver' },
		'dog_male_white7': { name: 'Ice Cream' },
		'dog_male_white8': { name: 'Chip' },
		'dog_male_white9': { name: 'Dash' },
		'dog_male_white10': { name: 'Flake' },
		'dog_male_brown1': { name: 'Truffles' },
		'dog_male_brown2': { name: 'Hershey' },
		'dog_male_brown3': { name: 'Diablo' },
		'dog_male_brown4': { name: 'Chocolate' },
		'dog_male_brown5': { name: 'Charlie Brown' },
		'dog_male_brown6': { name: 'Cinnamon' },
		'dog_male_brown7': { name: 'Walnut' },
		'dog_male_brown8': { name: 'Coffee' },
		'dog_male_brown9': { name: 'Raisin' },
		'dog_male_brown10': { name: 'Rusty' },
		'dog_male_tan1': { name: 'S`mores' },
		'dog_male_tan2': { name: 'Muffin' },
		'dog_male_tan3': { name: 'Nutmeg' },
		'dog_male_tan4': { name: 'Biscuit' },
		'dog_male_tan5': { name: 'Prarie' },
		'dog_male_tan6': { name: 'Sunbeam' },
		'dog_male_tan7': { name: 'Lemon' },
		'dog_male_tan8': { name: 'Barley' },
		'dog_male_tan9': { name: 'Autumn' },
		'dog_male_tan10': { name: 'Cheddar' },
		'dog_male_brindle1': { name: 'Swatch' },
		'dog_male_brindle2': { name: 'Tigger' },
		'dog_male_brindle3': { name: 'Pyro' },
		'dog_male_brindle4': { name: 'Eclipse' },
		'dog_male_brindle5': { name: 'Tire' },
		'dog_male_brindle6': { name: 'Lava' },
		'dog_male_brindle7': { name: 'Mallow' },
		'dog_male_brindle8': { name: 'Campfire' },
		'dog_male_brindle9': { name: 'Magma' },
		'dog_male_brindle10': { name: 'Obsidian' },
		'dog_male_gray1': { name: 'Charcoal' },
		'dog_male_gray2': { name: 'Slate' },
		'dog_male_gray3': { name: 'Merlin' },
		'dog_male_gray4': { name: 'Phantom' },
		'dog_male_gray5': { name: 'Moonshine' },
		'dog_male_gray6': { name: 'Moon' },
		'dog_male_gray7': { name: 'Bolt' },
		'dog_male_gray8': { name: 'Link' },
		'dog_male_gray9': { name: 'Iroh' },
		'dog_male_gray10': { name: 'Dusty' },

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
		'dog_female_white6': { name: 'Lily' },
		'dog_female_white7': { name: 'Moby' },
		'dog_female_white8': { name: 'Dewdrop' },
		'dog_female_white9': { name: 'Blizzy' },
		'dog_female_white10': { name: 'Crystal' },
		'dog_female_brown1': { name: 'Cadbury' },
		'dog_female_brown2': { name: 'Godiva' },
		'dog_female_brown3': { name: 'Whiskey' },
		'dog_female_brown4': { name: 'Ebony' },
		'dog_female_brown5': { name: 'Nutella' },
		'dog_female_brown6': { name: 'Mocha' },
		'dog_female_brown7': { name: 'Manilla' },
		'dog_female_brown8': { name: 'Sepia' },
		'dog_female_brown9': { name: 'Ziv' },
		'dog_female_brown10': { name: 'Stella' },
		'dog_female_tan1': { name: 'Cinnamon' },
		'dog_female_tan2': { name: 'Sienna' },
		'dog_female_tan3': { name: 'Butterscotch' },
		'dog_female_tan4': { name: 'Maple' },
		'dog_female_tan5': { name: 'Apricot' },
		'dog_female_tan6': { name: 'Beau' },
		'dog_female_tan7': { name: 'Shea' },
		'dog_female_tan8': { name: 'Siv' },
		'dog_female_tan9': { name: 'Fizzy' },
		'dog_female_tan10': { name: 'Sunshine' },
		'dog_female_brindle1': { name: 'Mimosa' },
		'dog_female_brindle2': { name: 'Flame' },
		'dog_female_brindle3': { name: 'Ember' },
		'dog_female_brindle4': { name: 'Sunkist' },
		'dog_female_brindle5': { name: 'Swirl' },
		'dog_female_brindle6': { name: 'Strawberry' },
		'dog_female_brindle7': { name: 'Caramel' },
		'dog_female_brindle8': { name: 'Drizzle' },
		'dog_female_brindle9': { name: 'Amber' },
		'dog_female_brindle10': { name: 'Honey' },
		'dog_female_gray1': { name: 'Echo' },
		'dog_female_gray2': { name: 'Stardust' },
		'dog_female_gray3': { name: 'Luna' },
		'dog_female_gray4': { name: 'Stormy' },
		'dog_female_gray5': { name: 'Jupiter' },
		'dog_female_gray6': { name: 'Europa' },
		'dog_female_gray7': { name: 'Eurydice' },
		'dog_female_gray8': { name: 'Comet' },
		'dog_female_gray9': { name: 'Floe' },
		'dog_female_gray10': { name: 'Mae' },

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
		'dog_male_unique6': { name: 'Sharik' },
		'dog_male_unique7': { name: 'Captain' },
		'dog_male_unique8': { name: 'Dango' },
		'dog_male_unique9': { name: 'Spiff' },
		'dog_male_unique10': { name: 'Lorn' },
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
		'dog_female_unique6': { name: 'Marigold' },
		'dog_female_unique7': { name: 'Lorraine' },
		'dog_female_unique8': { name: 'Mochi' },
		'dog_female_unique9': { name: 'Cookie' },
		'dog_female_unique10': { name: 'Avalon' },
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

		/*
		* Dog Names - Gender Neutral
		*/
		'dog_gender_neutral1': { name: 'Ollie' },
		'dog_gender_neutral2': { name: 'Loki' },
		'dog_gender_neutral3': { name: 'Archie' },
		'dog_gender_neutral4': { name: 'Blaze' },
		'dog_gender_neutral5': { name: 'Adrian' },
		'dog_gender_neutral6': { name: 'Jazz' },
		'dog_gender_neutral7': { name: 'Berkeley' },
		'dog_gender_neutral8': { name: 'Butterscotch' },
		'dog_gender_neutral9': { name: 'Whiskey' },
		'dog_gender_neutral10': { name: 'Espresso' },
		'dog_gender_neutral11': { name: 'Hershey' },
		'dog_gender_neutral12': { name: 'Frosty' },
		'dog_gender_neutral13': { name: 'Lavender' },

		/*
		* Cats - Gender
		*/
		'cat_male': {
			name: 'Male',
			final: 'no',
			children: ['cat_male_color', 'cat_male_category']
		},

		'cat_female': {
			name: 'Female',
			final: 'no',
			children: ['cat_female_color', 'cat_female_category']
		},

		'cat_gender_neutral': {
			name: 'Gender Neutral',
			final: 'yes',
			children: ['cat_gender_neutral1', 'cat_gender_neutral2', 'cat_gender_neutral3', 'cat_gender_neutral4', 'cat_gender_neutral5', 'cat_gender_neutral6', 'cat_gender_neutral7', 'cat_gender_neutral8', 'cat_gender_neutral9', 'cat_gender_neutral10', 'cat_gender_neutral11', 'cat_gender_neutral12']
		},

		/*
		* Cats - Name Preference
		*/
		'cat_male_color': {
			name: 'Name based on color?',
			final: 'no',
			children: ['cat_male_black', 'cat_male_white', 'cat_male_brown', 'cat_male_tan', 'cat_male_brindle', 'cat_male_orange', 'cat_male_gray']
		},

		'cat_male_category': {
			name: 'Name based on category?',
			final: 'no',
			children: ['cat_male_traditional', 'cat_male_unique', 'cat_male_pun_ny']
		},

		'cat_female_color': {
			name: 'Name based on color?',
			final: 'no',
			children: ['cat_female_black', 'cat_female_white', 'cat_female_brown', 'cat_female_tan', 'cat_female_brindle', 'cat_female_orange', 'cat_female_gray']
		},

		'cat_female_category': {
			name: 'Name based on category?',
			final: 'no',
			children: ['cat_female_traditional', 'cat_female_unique', 'cat_female_pun_ny']
		},

		/*
		* Cats - Name by Color
		*/
		'cat_male_black': {
			name: 'Black',
			final: 'yes',
			children: ['cat_male_black1', 'cat_male_black2', 'cat_male_black3', 'cat_male_black4', 'cat_male_black5']
		},

		'cat_male_white': {
			name: 'White',
			final: 'yes',
			children: ['cat_male_white1', 'cat_male_white2', 'cat_male_white3', 'cat_male_white4', 'cat_male_white5']
		},

		'cat_male_brown': {
			name: 'Brown',
			final: 'yes',
			children: ['cat_male_brown1', 'cat_male_brown2', 'cat_male_brown3', 'cat_male_brown4', 'cat_male_brown5']
		},

		'cat_male_tan': {
			name: 'Tan',
			final: 'yes',
			children: ['cat_male_tan1', 'cat_male_tan2', 'cat_male_tan3', 'cat_male_tan4', 'cat_male_tan5']
		},

		'cat_male_brindle': {
			name: 'Brindle',
			final: 'yes',
			children: ['cat_male_brindle1', 'cat_male_brindle2', 'cat_male_brindle3', 'cat_male_brindle4']
		},

		'cat_male_orange': {
			name: 'Orange',
			final: 'yes',
			children: ['cat_male_orange1', 'cat_male_orange2', 'cat_male_orange3', 'cat_male_orange4', 'cat_male_orange5']
		},

		'cat_male_gray': {
			name: 'Gray',
			final: 'yes',
			children: ['cat_male_gray1', 'cat_male_gray2', 'cat_male_gray3', 'cat_male_gray4', 'cat_male_gray5']
		},

		'cat_female_black': {
			name: 'Black',
			final: 'yes',
			children: ['cat_female_black1', 'cat_female_black2', 'cat_female_black3', 'cat_female_black4', 'cat_female_black5']
		},

		'cat_female_white': {
			name: 'White',
			final: 'yes',
			children: ['cat_female_white1', 'cat_female_white2', 'cat_female_white3', 'cat_female_white4', 'cat_female_white5']
		},

		'cat_female_brown': {
			name: 'Brown',
			final: 'yes',
			children: ['cat_female_brown1', 'cat_female_brown2', 'cat_female_brown3', 'cat_female_brown4', 'cat_female_brown5']
		},

		'cat_female_tan': {
			name: 'Tan',
			final: 'yes',
			children: ['cat_female_tan1', 'cat_female_tan2', 'cat_female_tan3', 'cat_female_tan4', 'cat_female_tan5']
		},

		'cat_female_brindle': {
			name: 'Brindle',
			final: 'yes',
			children: ['cat_female_brindle1', 'cat_female_brindle2', 'cat_female_brindle3', 'cat_female_brindle4']
		},

		'cat_female_orange': {
			name: 'Orange',
			final: 'yes',
			children: ['cat_female_orange1', 'cat_female_orange2', 'cat_female_orange3', 'cat_female_orange4', 'cat_female_orange5']
		},

		'cat_female_gray': {
			name: 'Gray',
			final: 'yes',
			children: ['cat_female_gray1', 'cat_female_gray2', 'cat_female_gray3', 'cat_female_gray4', 'cat_female_gray5']
		},

		/*
		* Cats - Name by Category
		*/
		'cat_male_traditional': {
			name: 'Traditional',
			final: 'yes',
			children: ['cat_male_traditional1', 'cat_male_traditional2', 'cat_male_traditional3', 'cat_male_traditional4', 'cat_male_traditional5', 'cat_male_traditional6', 'cat_male_traditional7', 'cat_male_traditional8', 'cat_male_traditional9', 'cat_male_traditional10']
		},

		'cat_male_unique': {
			name: 'Unique',
			final: 'yes',
			children: ['cat_male_unique1', 'cat_male_unique2', 'cat_male_unique3', 'cat_male_unique4', 'cat_male_unique5']
		},

		'cat_male_pun_ny': {
			name: 'Punny',
			final: 'yes',
			children: ['cat_male_pun_ny1', 'cat_male_pun_ny2', 'cat_male_pun_ny3', 'cat_male_pun_ny4', 'cat_male_pun_ny5', 'cat_male_pun_ny6', 'cat_male_pun_ny7', 'cat_male_pun_ny8', 'cat_male_pun_ny9', 'cat_male_pun_ny10']
		},

		'cat_female_traditional': {
			name: 'Traditional',
			final: 'yes',
			children: ['cat_female_traditional1', 'cat_female_traditional2', 'cat_female_traditional3', 'cat_female_traditional4', 'cat_female_traditional5', 'cat_female_traditional6', 'cat_female_traditional7', 'cat_female_traditional8', 'cat_female_traditional9', 'cat_female_traditional10']
		},

		'cat_female_unique': {
			name: 'Unique',
			final: 'yes',
			children: ['cat_female_unique1', 'cat_female_unique2', 'cat_female_unique3', 'cat_female_unique4', 'cat_female_unique5']
		},

		'cat_female_pun_ny': {
			name: 'Punny',
			final: 'yes',
			children: ['cat_female_pun_ny1', 'cat_female_pun_ny2', 'cat_female_pun_ny3', 'cat_female_pun_ny4', 'cat_female_pun_ny5', 'cat_female_pun_ny6', 'cat_female_pun_ny7', 'cat_female_pun_ny8', 'cat_female_pun_ny9', 'cat_female_pun_ny10']
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

		/*
		* Cat Names - Gender Neutral
		*/
		'cat_gender_neutral1': { name: 'Huckleberry' },
		'cat_gender_neutral2': { name: 'Espresso' },
		'cat_gender_neutral3': { name: 'Monarch' },
		'cat_gender_neutral4': { name: 'Hugo' },
		'cat_gender_neutral5': { name: 'Shiloh' },
		'cat_gender_neutral6': { name: 'Butterscotch' },
		'cat_gender_neutral7': { name: 'Bowie' },
		'cat_gender_neutral8': { name: 'Bentley' },
		'cat_gender_neutral9': { name: 'Whiskers' },
		'cat_gender_neutral10': { name: 'Velvet' },
		'cat_gender_neutral11': { name: 'Marple' },
		'cat_gender_neutral12': { name: 'Ireland' },

		/*
		* Birds - Gender
		*/
		'bird_male': {
			name: 'Male',
			final: 'yes',
			children: ['bird_male1', 'bird_male2', 'bird_male3', 'bird_male4', 'bird_male5']
		},

		'bird_female': {
			name: 'Female',
			final: 'yes',
			children: ['bird_female1', 'bird_female2', 'bird_female3', 'bird_female4', 'bird_female5']
		},

		'bird_gender_neutral': {
			name: 'Gender Neutral',
			final: 'yes',
			children: ['bird_gender_neutral1', 'bird_gender_neutral2', 'bird_gender_neutral3', 'bird_gender_neutral4', 'bird_gender_neutral5']
		},

		/*
		* Bird Names
		*/
		bird_male1: { name: 'Excalibird' },
		bird_male2: { name: 'Lord of the Wings' },
		bird_male3: { name: 'Wing Man' },
		bird_male4: { name: 'Puff Daddy' },
		bird_male5: { name: 'Woodstock' },
		bird_female1: { name: 'Sweet Pea' },
		bird_female2: { name: 'Melody' },
		bird_female3: { name: 'Coo Coo Chanel' },
		bird_female4: { name: 'Kiwi' },
		bird_female5: { name: 'Pepper' },
		bird_gender_neutral1: { name: 'Mango' },
		bird_gender_neutral2: { name: 'Chick Jagger' },
		bird_gender_neutral3: { name: 'Pikachu' },
		bird_gender_neutral4: { name: 'Mojo' },
		bird_gender_neutral5: { name: 'Floyd' },

		/*
		* Fish - Gender
		*/
		'fish_male': {
			name: 'Male',
			final: 'yes',
			children: ['fish_male1', 'fish_male2', 'fish_male3', 'fish_male4', 'fish_male5']
		},

		'fish_female': {
			name: 'Female',
			final: 'yes',
			children: ['fish_female1', 'fish_female2', 'fish_female3', 'fish_female4', 'fish_female5']
		},

		'fish_gender_neutral': {
			name: 'Gender Neutral',
			final: 'yes',
			children: ['fish_gender_neutral1', 'fish_gender_neutral2', 'fish_gender_neutral3', 'fish_gender_neutral4', 'fish_gender_neutral5']
		},

		/*
		* Fish Names
		*/
		fish_male1: { name: 'Rocket' },
		fish_male2: { name: 'Neptune' },
		fish_male3: { name: 'James Pond' },
		fish_male4: { name: 'Aquaman' },
		fish_male5: { name: 'Chewbacca' },
		fish_female1: { name: 'Ariel' },
		fish_female2: { name: 'Ziggy' },
		fish_female3: { name: 'Bubbles' },
		fish_female4: { name: 'Sushi' },
		fish_female5: { name: 'Guppi Goldberg' },
		fish_gender_neutral1: { name: 'Snapper' },
		fish_gender_neutral2: { name: 'Shimmy' },
		fish_gender_neutral3: { name: 'Phelps' },
		fish_gender_neutral4: { name: 'Splash' },
		fish_gender_neutral5: { name: 'Speedy' },

		/*
		* Bunny - Gender
		*/
		'bunny_male': {
			name: 'Male',
			final: 'yes',
			children: ['bunny_male1', 'bunny_male2', 'bunny_male3', 'bunny_male4', 'bunny_male5']
		},

		'bunny_female': {
			name: 'Female',
			final: 'yes',
			children: ['bunny_female1', 'bunny_female2', 'bunny_female3', 'bunny_female4', 'bunny_female5']
		},

		'bunny_gender_neutral': {
			name: 'Gender Neutral',
			final: 'yes',
			children: ['bunny_gender_neutral1', 'bunny_gender_neutral2', 'bunny_gender_neutral3', 'bunny_gender_neutral4', 'bunny_gender_neutral5']
		},

		/*
		* Bunny Names
		*/
		bunny_male1: { name: 'Luke Skyhopper' },
		bunny_male2: { name: 'Rabbit Downey, Jr.' },
		bunny_male3: { name: 'Harry Hopper' },
		bunny_male4: { name: "Barack O'Bunny" },
		bunny_male5: { name: 'Rabbit De Niro' },
		bunny_female1: { name: 'Mary Hoppins' },
		bunny_female2: { name: 'Cadbury' },
		bunny_female3: { name: "Scarlett O'Hare-ah" },
		bunny_female4: { name: 'Hillary Fluff' },
		bunny_female5: { name: 'Flopsy Mopsy' },
		bunny_gender_neutral1: { name: 'Cinnabunny' },
		bunny_gender_neutral2: { name: 'Little Bunny Fu Fu' },
		bunny_gender_neutral3: { name: 'Bourbunny' },
		bunny_gender_neutral4: { name: 'Carrot Top' },
		bunny_gender_neutral5: { name: 'Jumpstart' },

		/*
		* Small Animal - Gender
		*/
		'smallAnimal_male': {
			name: 'Male',
			final: 'yes',
			children: ['smallAnimal_male1', 'smallAnimal_male2', 'smallAnimal_male3', 'smallAnimal_male4', 'smallAnimal_male5']
		},

		'smallAnimal_female': {
			name: 'Female',
			final: 'yes',
			children: ['smallAnimal_female1', 'smallAnimal_female2', 'smallAnimal_female3', 'smallAnimal_female4', 'smallAnimal_female5']
		},

		'smallAnimal_gender_neutral': {
			name: 'Gender Neutral',
			final: 'yes',
			children: ['smallAnimal_gender_neutral1', 'smallAnimal_gender_neutral2', 'smallAnimal_gender_neutral3', 'smallAnimal_gender_neutral4', 'smallAnimal_gender_neutral5']
		},

		/*
		* Small Animal Names
		*/
		smallAnimal_male1: { name: 'Hops Solo' },
		smallAnimal_male2: { name: 'Fluffinstein' },
		smallAnimal_male3: { name: 'Chinzilla' },
		smallAnimal_male4: { name: 'Churro' },
		smallAnimal_male5: { name: 'Graphite' },
		smallAnimal_female1: { name: 'Honeybun' },
		smallAnimal_female2: { name: 'Cashmere' },
		smallAnimal_female3: { name: 'Goldilocks' },
		smallAnimal_female4: { name: 'Coconut' },
		smallAnimal_female5: { name: 'Avalanche' },
		smallAnimal_gender_neutral1: { name: 'Nibblet' },
		smallAnimal_gender_neutral2: { name: 'Whiskers' },
		smallAnimal_gender_neutral3: { name: 'Butterscotch' },
		smallAnimal_gender_neutral4: { name: 'Gingersnap' },
		smallAnimal_gender_neutral5: { name: 'Peppermint' },


		/*
		* Reptile - Gender
		*/
		'reptile_male': {
			name: 'Male',
			final: 'yes',
			children: ['reptile_male1', 'reptile_male2', 'reptile_male3', 'reptile_male4', 'reptile_male5']
		},

		'reptile_female': {
			name: 'Female',
			final: 'yes',
			children: ['reptile_female1', 'reptile_female2', 'reptile_female3', 'reptile_female4', 'reptile_female5']
		},

		'reptile_gender_neutral': {
			name: 'Gender Neutral',
			final: 'yes',
			children: ['reptile_gender_neutral1', 'reptile_gender_neutral2', 'reptile_gender_neutral3', 'reptile_gender_neutral4', 'reptile_gender_neutral5']
		},

		/*
		* Reptile Names
		*/
		reptile_male1: { name: 'Drax' },
		reptile_male2: { name: 'Jaffar' },
		reptile_male3: { name: 'Diablo' },
		reptile_male4: { name: 'Severus' },
		reptile_male5: { name: 'Smaug' },
		reptile_female1: { name: 'Hydra' },
		reptile_female2: { name: 'Slinky' },
		reptile_female3: { name: 'Lizzy' },
		reptile_female4: { name: 'Spaghetti' },
		reptile_female5: { name: 'Shelly' },
		reptile_gender_neutral1: { name: 'Dragon' },
		reptile_gender_neutral2: { name: 'Slithers' },
		reptile_gender_neutral3: { name: 'Peakaboo' },
		reptile_gender_neutral4: { name: 'Snappy' },
		reptile_gender_neutral5: { name: 'Racer' },

	}
};


/*
* Main function
*/
$(function() {

	var tree = new DecisionTree(data);
	var $list = $('#choices');
	var $title = $('h1');
	var $backButton = $('#back');
	var $newnameButton = $('#newname');
	var $prompt = $('#emailPrompt');

	var current_id = null;
	var isNameNode = false;
	var emailReceived = false; 
	var current_rdm;
	var name_dict = {};

	var renderList = function(items) {

		var title = tree.getParentName(items[0].id);
		$title.text(title);

		$list.empty();
		for(var i = 0; i < items.length; i++) {
			var item = items[i];
			$list.append('<li><a href="#" data-choice="' + item.id + '">' + item.name + '</a></li>');
		}
	};

	var renderListRndm = function(item) {

		var title = tree.getParentName(item.id);
		$title.text(title);

		$list.empty();
		$list.append('<li>' + item.name + '</li>');
	};

	var _doInitial = function() {

		var initData = tree.getInitial();
		current_id = null;

		$backButton.css("display", "none");
		$newnameButton.css("display","none");
		display$prompt.css("display", "none");

		renderList(initData);
	};

	$('#submission').on('click', function(e) {

		var email = document.getElementById("email").value;

		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(email.toLowerCase())) { 
			title = "Invalid email address!";
			e.preventDefault(); 
			$title.text(title);
			return;
		}
		$.ajax({
			type: "POST",
			url: "addEmail.php",
			data: { "email": email }, 
			success : function (result) {
				var jsonData = JSON.parse(result);

				// user is logged in successfully in the back-end
				// let's redirect
				if (jsonData.success == "1")
				{
					alert(jsonData.message);

					emailReceived = true;
					var kids = tree.getChildren(current_id);
					var isFinal = tree.choices[current_id].final;

					$backButton.css("display", "inline");

					if (isFinal == 'yes') {
						isNameNode = true;
						$newnameButton.css("display", "inline");
						$prompt.css("display", "none");

						current_rdm = Math.floor(Math.random() * kids.length);
						name_dict[current_rdm] = 1;

						renderListRndm(kids[current_rdm]);
					}
				}
				else
				{
					alert('Invalid email address !!!');

					isNameNode = false;
					$newnameButton.css("display", "none");
					$prompt.css("display", "none");
				}
			}
		});

		var deletor = document.getElementById("emailPrompt");
		deletor.remove();
	});

	/* Click handler for each choice */
	$(document).on('click', '#choices a', function(e) {

		e.preventDefault();
		var choiceId = $(this).data('choice');
		current_id = choiceId;

		var kids = tree.getChildren(choiceId);
		var isFinal = tree.choices[choiceId].final;

		$backButton.css("display", "inline");

		if (isFinal == 'yes') {
			if (emailReceived == true) {
				isNameNode = true;
				$newnameButton.css("display", "inline");
				$prompt.css("display", "none");

				current_rdm = Math.floor(Math.random() * kids.length);
				name_dict[current_rdm] = 1;
				
				renderListRndm(kids[current_rdm]);
			}
			else {
				$list.empty();
				var title = "Please enter your email to reveal the names!";
				$prompt.css("display", "inline");
				$title.text(title);
			}
		}
		else {
			isNameNode = false;
			$newnameButton.css("display", "none");

			renderList(kids);
		}
	});

	/* Click handler for back button */
	$('#back').on('click', function(e) {

		e.preventDefault();
		if(!current_id) return false;

		var parents = tree.getParents(current_id);
		isNameNode = false;
		$newnameButton.css("display", "none");

		if(parents.length > 0) {
			var prev_node = parents.pop();
			current_id = prev_node.id;
			renderList(tree.getChildren(prev_node.id));
		} else {
			_doInitial();
		}

		name_dict = {};

	});

	/* Click handler for new name button */
	$('#newname').on('click', function(e) {

		e.preventDefault();
		if((!current_id) || (!isNameNode)) return false;

		var kids = tree.getChildren(current_id);
		var isFinal = tree.choices[current_id].final;

		if (isFinal == 'yes'){
			if (Object.keys(name_dict).length == kids.length) {
				name_dict = {};
			}

			var random;
			do {
				random = Math.floor(Math.random() * kids.length);
				if (!name_dict.hasOwnProperty(random)) {
					break;
				}
			}while (true);

			current_rdm = random;
			name_dict[current_rdm] = 1;
			renderListRndm(kids[random]);
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
			return "";
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
