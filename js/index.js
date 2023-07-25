var xl = 500;
var xr = 1;
var pastranks = [1,500];

var song1 = {
  title: "Stronger",
  artist: "Kanye West",
  rank: 500,
  release: 2007,
  imgsrc: "https://wallpaperaccess.com/full/425004.jpg",
};

var song2 = {
  title: "Respect",
  artist: "Arethra Franklin",
  rank: 1,
  release: 1967,
  imgsrc:
    "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534452282/respect-9781534452282_hr.jpg",
};


var songs = [song1, song2];

var allsongs = [500, "Stronger", "Kanye West", 2007, 499, "Baby Love", "The Supremes", 1964, 498, "Pancho and Lefty", "Townes Van Zandt", 1972,497, "Truth Hurts", "Lizzo", 2017,496, "Without You", "Nilsson", 1971,495, "You’re So Vain", "Carly Simon", 1972,494, "Time After Time", "Cyndi Lauper", 1983,493, "Where Is My Mind", "The Pixies", 1988,492, "So What", "Miles Davis", 1959,491, "Welcome to the Jungle", "Guns ‘n’ Roses", 1987,490, "Old Town Road", "Lil Nas X", 2019,489, "Cannonball", "The Breeders", 1993,488, "House of Balloons", "The Weeknd", 2011,487, "Cranes in the Sky", "Solange", 2016,486, "A Milli", "Lil Wayne", 2009,485, "212", "Azealia Banks", 2011,484, "Buddy Holly", "Weezer", 1994,483, "I Can’t Help Myself", "Four Tops", 1965,482, "Bad Romance Lady Gaga", 2009,481, "Cross Road Blues", "Robert Johnson", 1937,480, "Just a Friend", "Biz Markie", 1989,479, "Oye Como Va", "Santana", 1970,478, "Back That Azz Up", "Juvenile", 1998,477, "Our Lips Are Sealed", "The Go-Gos", 1981,476, "Sunday Morning Coming Down", "Kris Kristofferson", 1970,475, "Rhythm Nation", "Janet Jackson", 1989,474, "Move On Up", "Curtis Mayfield", 1970,473, "Stand By Your Man", "Tammy Wynette", 1968,472, "Solsbury Hill", "Peter Gabriel", 1977,471, "The House of the Rising Sun", "The Animals", 1964, 470, "Midnight Train to Georgia", "Gladys Knight and the Pips", 1973,469, "Goodbye Earl", "Dixie Chicks", 2000,468, "Fade Into You", "Mazzy Star", 1993,467, "Come As You Are", "Nirvana", 1991,466, "Never Too Much", "Luther Vandross", 1981,465, "Get Lucky", "Daft Punk", 2013,464, "Help Me", "Joni Mitchell", 1974,463, "Boom Boom", "John Lee Hooker", 1962,462, "Into the Mystic", "Van Morrison", 1970,461, "Crying", "Roy Orbison", 1962,460, "Ku Klux Klan", "Steel Pulse", 1978,459, "No Ordinary Love", "Sade", 1992,458, "Loser", "Beck", 1993,457, "Livin’ on a Prayer", "Bon Jovi", 1986,456, "Summertime Sadness", "Lana Del Rey", 2012,455, "White Rabbit", "Jefferson Airplane", 1967,454, "Bam Bam", "Sister Nancy", 1982,453, "The Rain", "Missy Elliot", 1997,452, "Africa", "Toto", 1982,451, "Bad and Boujee", "Migos", 2016,450, "Powderfinger", "Neil Young", 1979,449, "Don’t Fear the Reaper", "Blue Oyster Cult", 1976,448, "Tyrone", "Erykah Badu", 1997,447, "Help!", "The Beatles", 1965,446, "Rosalita", "Bruce Springsteen", 1973,445, "Cosmic Dancer", "T. Rex", 1971,444, "In Da Club", "50 Cent", 2003,443, "Sugar", "We’re Going Down", "Fall Out Boy", 2005,442, "Ace of Spades", "Motorhead", 1980,441, "The House That Built Me", "Miranda Lambert", 2010,440, "If I Ain’t Got You", "Alicia Keys", 2003,439, "La Vida Es un Carnaval", "Celia Cruz", 1998,438, "Savage (Remix)", "Megan Thee Stallion feat. Beyonce", 2020,437, "Passionate Kisses", "Lucinda Williams", 1988,436, "Call Me Maybe", "Carly Rae Jepsen", 2012,435, "Limelight", "Rush", 1981,434, "Sheena Is a Punk Rocker", "Ramones", 1977,433, "West End Girls", "Pet Shop Boys", 1984,432, "Summertime Blues", "Eddie Cochran", 1958,431, "Adore", "Prince", 1987,430, "They Reminiscence Over You", "Peter Rock and CL Smooth", 1992,429, "Under Pressure", "Queen and David Bowie", 1981,428, "Sign of the Times", "Harry Styles", 2017,427, "Rapper’s Delight", "Sugarhill Gang", 1979,426, "Super Bass", "Nicki Minaj", 2010,425, "Mannish Boy", "Muddy Waters", 1955,424, "No Diggity", "Blackstreet", 1996,423, "Criminal", "Fiona Apple", 1996,422, "Flava in Your Ear", "Craig Mack", 1994,421, "How Soon Is Now", "The Smiths", 1984,420, "California Dreamin’", "Mamas and the Papas", 1965,419, "Fantasy", "Mariah Carey", 1995,418, "Green Onions", "Booker T", 1962,417, "Uptown Funk", "Mark Ronson", 2015,416, "Alive", "Pearl Jam", 1991,415, "Enjoy the Silence", "Depeche Mode", 1990,414, "Dreaming", "Blondie", 1979,413, "Gloria", "Them", 1965,412, "Buffalo Stance", "Neneh Cherry", 1988,411, "Heavy Metal Drummer", "Wilco", 2002,410, "Whipping Post", "Allman Brother’s Band", 1969,409, "Everlong", "Foo Fighters", 1997,408, "Father and Son", "Cat Stevens", 1970,407, "Free Bird", "Skynyrd", 1973,406, "Sucker MC’s", "Run-DMC", 1984,405, "Amor Prohibido", "Selena", 1994,404, "Rock and Roll All Nite", "Kiss", 1974,403, "Ain’t Nobody", "Rufus and Chaka Khan", 1983,402, "Lovely Day", "Bill Withers", 1977,401, "Go Your Own Way", "Fleetwood Mac", 1977,400, "Station to Station", "David Bowie", 1976,399, "You Make Me Feel (Mighty Real)", "Sylvester", 1978,398, "Hungry Like the Wolf", "Duran Duran", 1982,397, "Bring the Noise", "Public Enemy", 1987,396, "Alison", "Elvis Costello", 1977,395, "Planet Rock", "Afrika Bambaataa", 1982,394, "Grace", "Jeff Buckley", 1994,393, "Say It Loud", "James Brown", 1968,392, "Fix You", "Coldplay", 2005,391, "Springsteen", "Eric Church", 2011,390, "Enter Sandman", "Metallica", 1991,389, "Brass in Pocket", "Pretenders", 1879,388, "Party Up (Up in Here)", "DMX", 1999,387, "Personality Crisis", "The New York Dolls", 1973,386, "Lola", "The Kinks", 1970,385, "I’m Coming Out", "Diana Ross", 1980,384, "I Like It", "Cardi B", 2018,383, "Redbone", "Childish Gambino", 2016,382, "Paper Bag", "Fiona Apple", 1999,381, "Typical Girls", "The Slits", 1979,380, "Radiation Vibe", "Fountains of Wayne", 1996,379, "Untitled (How Does It Feel)", "D’Angelo", 2000,378, "Mr. Brightside", "The Killers", 2003,377, "Pictures of You", "The Cure", 1989,376, "Mama Tried", "Merle Haggard", 1968,375, "Up On the Roof", "Drifters", 1964,374, "Be Thankful for What You Got", "William DeVaughn", 1974,373, "Hotline Bling", "Drake", 2015,372, "I Can’t Make You Love Me", "Bonnie Raitt", 1991,371, "Bennie and the Jets", "Elton John", 1973,370, "Peggy Sue", "Buddy Holly", 1958,369, "Just What I Needed", "The Cars", 1978,368, "Black Hole Sun", "Soundgarden", 1994,367, "Thinkin’ About You", "Frank Ocean", 2012,366, "Da Doo Run Run", "The Crystals", 1962,365, "God Save the Queen", "The Sex Pistols", 1977,364, "Box of Rain", "Grateful Dead", 1970,363, "Could You Be Loved", "Bob Marley", 1980,362, "Merry Go Round", "Kacey Musgraves", 2013,361, "The Harder They Come", "Jimmy Cliff", 1972,360, "Little Red Corvette", "Prince", 1982,359, "Killing Me Softly with His Song", "The Fugees", 1996,358, "Because the Night", "Patti Smith", 1978,357, "Blank Space", "Taylor Swift", 2014,356, "Surrender", "Cheap Trick", 1978,355, "Don’t Leave Me This Way", "Thelma Houston", 1976,354, "Rock With You", "Michael Jackson", 1979,353, "Sweet Dreams (Are Made of This)", "The Eurythmics", 1983,352, "It Was a Good Day", "Ice Cube", 1992,351, "Ponta De Lanca Africano (Umbabarauma)", "Jorge Ben", 1976,350, "Angel in Montgomery", "John Prine", 1971,349, "Time of the Season", "Zombies", 1968,348, "Virginia Plain", "Roxy Music", 1972,347, "Heartbreak Hotel", "Elvis", 1956,346, "Dynamite", "BTS", 2020,345, "It’s Too Late", "Carole King", 1971,344, "Iron Man", "Black Sabbath", 1971,343, "What a Fool Believes", "The Doobie Brothers", 1979,342, "Promised Land", "Chuck Berry", 1964,341, "I’m a Believer", "Monkees", 1966,340, "(White Man) in Hammersmith Palais", "The Clash", 1978,339, "1999", "Prince", 1982,338, "Paranoid", "Black Sabbath", 1970,337, "Believe", "Cher", 1998,336, "She’s Gone", "Hall and Oates", 1973,335, "Move Your Body (The House Music Anthem)", "Marshall Jefferson", 1986,334, "Ripple", "Grateful Dead", 1970,333, "Papa Was a Rollin’ Stone", "The Temptations", 1972,332, "Umbrella", "Rihanna", 2007,331, "Please Mr. Postman", "The Marvelettes", 1961,330, "Big Poppa", "The Notorious B.I.G.", 1994,329, "Safaera", "Bad Bunny", 2020,328, "Under the Bridge", "Red Hot Chili Peppers", 1991,327, "Real Love", "Mary J. Blige", 1992,326, "Portions for Foxes", "Rilo Kiley", 2004,325, "Lust for Life", "Iggy Pop", 1977,324, "Scenes from an Italian Restaurant", "Billy Joel", 1977,323, "All I Have to Do Is Dream", "Everly Brothers", 1958,322, "After the Gold Rush", "Neil Young", 1970,321, "I Still Haven’t Found", "U2", 1987,320, "California Love", "2Pac", 1995,319, "Everybody Wants to Rule the World", "Tears for Fears", 1985,318, "Hound Dog", "Big Mama Thornton", 1953,317, "Visions of Johanna", "Bob Dylan", 1966,316, "Leader of the Pack", "Shangri-Las", 1964,315, "Part 1 – Acknowledgement", "John Coltrane", 1965,314, "I Wanna Be Your Dog", "The Stooges", 1969,313, "The Tears of a Clown", "Smokey Robinson and the Miracles", 1967,312, "Walk on By", "Isaac Hayes", 1969,311, "Hotel California", "Eagles", 1977,310, "Light My Fire", "The Doors", 1967,309, "Ain’t No Sunshine", "Bill Withers", 1971,308, "Divorce Song", "Liz Phair", 1993,307, "Crazy", "Gnarls Barkley", 2006,306, "Chain of Fools", "Aretha Franklin", 1967,305, "Every Breath You Take", "The Police", 1983,304, "Trans-Europe Express", "Kraftwerk", 1977,303, "No Scrubs", "TLC", 1999,302, "Wish You Were Here", "Pink Floyd", 1975,301, "Night Moves", "Bob Seger", 1978,300, "Rock Lobster", "B-52s", 1978,299, "I Put a Spell on You", "Jay Hawkins", 1956,298, "Jungleland", "Bruce Springsteen", 1975,297, "Wouldn’t It Be Nice", "Beach Boys", 1966,296, "Rebel Girl", "Bikini Kill", 1996,295, "Won’t Get Fooled Again", "The Who", 1971,294, "Sweet Jane", "Velvet Underground", 1970,293, "School’s Out", "Alice Cooper", 1973,292, "Can I Kick it", "A Tribe Called Quest", 1990,291, "In the Air Tonight", "Phil Collins", 1981,290, "Yeah", "Usher", 2004,289, "Atlantic City", "Bruce Springsteen", 1982,288, "That’s the Joint", "The Funky Four Plus One", 1980,287, "You Shook Me All Night Long", "AC/DC", 1980,286, "Dancing Queen", "ABBA", 1976,285, "Say My Name", "Destiny’s Child", 1999,284, "Suzanne", "Leonard Cohen", 1967,283, "Georgia On My Mind", "Ray Charles", 1960,282, "Never Tear Us Apart", "INXS", 1988,281, "Grindin", "Clipse", 2002,280, "Penny Lane", "The Beatles", 1967,279, "Karma Police", "Radiohead", 1997,278, "Pressure Drop", "Toots and the Maytals", 1970,277, "Bo Diddley", "Bo Diddley", 1955,276, "Ever Fallen in Love", "Buzzcocks", 1977,275, "Sail Away", "Randy Newman", 1972,274, "Love and Happiness", "Al Green", 1972,273, "Killing Me Softly With His Song", "Roberta Flack", 1973,272, "The Boys are Back in Town", "Thin Lizzy", 1976,271, "A Whiter Shade of Pale", "Procol Harum", 1967,270, "Closer", "Nine Inch Nails", 1994,269, "Unchained Melody", "The Righteous Brothers", 1965,268, "Shout (Parts 1 and 2)", "The Isley Brothers", 1959,267, "Take Care", "Drake", 2011,266, "King Tubby Meets the Rockers Uptown", "Augustus Pablo", 1974,265, "Left of the Dial", "The Replacements", 1985,264, "Let’s Get It On", "Marvin Gaye", 1973,263, "Coat of Many Colors", "Dolly Parton", 1971,262, "American Tune", "Paul Simon", 1973,261, "Pusherman", "Curtis Mayfield", 1972,260, "Get Up Stand Up", "The Wailers", 1973,259, "Heart of Gold", "Neil Young", 1972,258, "The Revolution Will Not Be Televised", "Gil-Scott Heron", 1971,257, "Heat Wave", "Martha and the Vandellas", 1963,256, "Master of Puppets", "Metallica", 1986,255, "Coal Miner’s Daughter", "Loretta Lynn", 1970,254, "Stop! In the Name of Love", "The Supremes", 1965,253, "Blue Eyes Crying in the Rain", "Willie Nelson", 1975,252, "Flash Light", "Parliament", 1977,251, "I Will Survive", "Gloria Gaynor", 1978,250, "Purple Haze", "Jimi Hendrix", 1967,249, "Bad Reputation", "Joan Jett", 1980,248, "Straight Outta Compton", "N.W.A.", 1988,247, "River", "Joni Mitchell", 1971,246, "Ooh La La", "Faces", 1973,245, "Sabotage", "Beastie Boys", 1994,244, "Summer Babe (Winter Version)", "Pavement", 1992,243, "Eleanor Rigby", "The Beatles", 1966,242, "Great Balls of Fire", "Jerry Lee Lewis", 1957,241, "The Humpty Dance", "The Digital Underground", 1990,240, "I Want It That Way", "Backstreet Boys", 1999,239, "September Gurls", "Big Star", 1974,238, "Are You That Somebody", "Aaliyah", 1998,237, "Your Cheatin’ Heart", "Hank Williams", 1953,236, "Lean on Me", "Bill Withers", 1972,235, "Blue Monday", "New Order", 1983,234, "You Keep Me Hangin’ On", "Supremes", 1966,233, "Groove Is in the Heart", "Deee-Lite", 1990,232, "My Generation", "The Who", 1965,231, "I Wanna Dance with Somebody", "Whitney Houston", 1987,230, "Mr. Tambourine Man", "The Byrds", 1965,229, "This Land is Your Land", "Woody Guthrie", 1951,228, "Single Ladies", "Beyonce", 2008,227, "Fortunate Son", "CCR", 1969,226, "There Is a Light That Never Goes Out", "The Smiths", 1986,225, "Both Sides Now", "Joni Mitchell", 1969,224, "Layla", "Derek and the Dominoes", 1970,223, "Stan", "Eminem", 2000,222, "Suite: Judy Blue Eyes", "Crosby", "Stills & Nash", 1969,221, "River Deep – Mountain High", "Ike and Tina Turner", 1966,220, "Bizarre Love Triangle", "New Order", 1986,219, "Free Fallin’", "Tom Petty", 1989,218, "In the Midnight Hour", "Wilson Pickett", 1965,217, "Edge of Seventeen", "Stevie Nicks", 1981,216, "Jailhouse Rock", "Elvis", 1957,215, "Shook Ones (Pt. II)", "Mobb Deep", 1995,214, "Deacon Blues", "Steely Dan", 1977,213, "Paint It Black", "The Rolling Stones", 1966,212, "More Than a Feeling", "Boston", 1976,211, "With or Without You", "U2", 1987,210, "One Nation Under a Groove", "Funkadelic", 1978,209, "Boys of Summer", "Don Henley", 1984,208, "Doll Parts", "Hole", 1994,207, "Killing in the Name", "Rage Against the Machine", 1992,206, "Wichita Lineman", "Glen Campbell", 1968,205, "…Baby One More Time", "Britney Spears", 1998,204, "Young Americans", "David Bowie", 1975,203, "Signed", "Sealed", "Delivered", "I’m Yours", "Stevie Wonder", 1970,202, "Your Song", "Elton John", 1970,201, "Ring of Fire", "Johnny Cash", 1963,200, "Changes", "David Bowie", 1971,199, "Dream On", "Aerosmith", 1973,198, "Sexual Healing", "Marvin Gaye", 1982,197, "I Can’t Stand the Rain", "Ann Peebles", 1973,196, "Sex Machine", "James Brown", 1970,195, "Crazy", "Patsy Cline", 1961,194, "Rid of Me", "PJ Harvey", 1993,193, "Wild Horses", "Rolling Stones", 1971,192, "Mind Playing Tricks on Me", "Geto Boys", 1991,191, "Ode to Billie Joe", "Bobby Gentry", 1967,190, "Fuck the Police", "N.W.A.", 1988,189, "Space Oddity", "David Bowie", 1969,188, "Little Wing", "Jimi Hendrix", 1967,187, "Subterranean Homesick Blues", "Bob Dylan", 1965,186, "I’ll Take You There", "Staple Singers", 1972,185, "Beat It", "Michael Jackson", 1982,184, "Nothing Compares to U", "Sinead O’Connor", 1990,183, "You Are the Sunshine of My Life", "Stevie Wonder", 1972,182, "The Sounds of Silence", "Simon and Garfunkel", 1964,181, "Eight Miles High", "The Byrds", 1966,180, "Walk on the Wild Side", "Lou Reed", 1972,179, "Comfortably Numb", "Pink Floyd", 1979,178, "Bad Guy", "Billie Eilish", 2019,177, "Jump", "Van Halen", 1983,176, "You Really Got Me", "The Kinks", 1964,175, "I Only Have Eyes for You", "Flamingos", 1959,174, "Radio Free Europe", "R.E.M.", 1983,173, "Marquee Moon", "Television", 1977,172, "Mississippi Goddam", "Nina Simone", 1964,171, "What a Wonderful World", "Louis Armstrong", 1967,170, "In the Still of the Nite", "Five Satins", 1956,169, "American Girl", "Tom Petty", 1976,168, "‘Son of a Preacher Man", "Dusty Springfield", 1968,167, "Lose Yourself", "Eminem", 2002,166, "All the Young Dudes", "Mott the Hoople", 1972,165, "I’m So Lonesome I Could Cry", "Hank Williams", 1949,164, "Mr. Tambourine Man", "Bob Dylan", 1965,163, "Landslide", "Fleetwood Mac", 1975,162, "Pink Moon", "Nick Drake", 1972,161, "Into the Groove", "Madonna", 1985,160, "Nightswimming", "R.E.M.", 1992,159, "Baba O’Riley", "The Who", 1971,158, "Cissy Strut", "Meters", 1969,157, "Teenage Riot", "Sonic Youth", 1988,156, "Louie Louie", "The Kinsgmen", 1963,155, "Last Nite", "The Strokes", 2001,154, "Spoonful Howlin’", "Wolf", 1960,153, "Super Freak", "James Brown", 1981,152, "Proud Mary", "CCR", 1969,151, "Will You Love Me Tomorrow", "Shirelles", 1960,150, "Basket Case", "Green Day", 1994,149, "Rocket Man", "Elton John", 1972,148, "Kashmir", "Led Zeppelin", 1975,147, "Blueberry Hill", "Fats Domino", 1956,146, "Fire and Rain", "James Taylor", 1970,145, "Ms. Jackson", "Outkast", 2000,144, "Jumpin’ Jack Flash", "Rolling Stones", 1968,143, "London Calling", "The Clash", 1980,142, "He Stopped Loving Her Today", "George Jones", 1980,141, "Maggie May", "Rod Stewart", 1971,140, "No Woman No Cry", "Bob Marley", 1975,139, "Vogue", "Madonna", 1990,138, "Heart of Glass", "Blondie", 1979,137, "Thank U", "Next", "Ariana Grande", 2019,136, "Try a Little Tenderness", "Otis Redding", 1966,135, "She Loves You", "The Beatles", 1964,134, "What’s Love Got to Do With It", "Tina Turner", 1984,133, "Don’t Stop Believin’", "Journey", 1981,132, "Paid in Full", "Eric B. and Rakim", 1987,131, "Stand by Me", "Ben E. King", 1961,130, "Dancing in the Street", "Martha and the Vandellas", 1964,129, "Hold On We’re Going Home", "Drake", 2013,128, "Whole Lotta Love", "Led Zeppelin", 1969,127, "Waterfalls", "TLC", 1995,126, "Freedom! ‘90", "George Michael", 1990,125, "Anarchy in the U.K.", "The Sex Pistols", 1977,124, "That’ll Be the Day", "Buddy Holly", 1957,123, "This Must Be the Place (Naïve Melody)", "Talking Heads", 1983,122, "People Get Ready", "Impressions", 1965,121, "Let It Be", "The Beatles", 1970,120, "Oh Bondage! Up Yours!", "X-Ray Spex", 1977,119, "I Heard It Through the Grapevine", "Marvin Gaye", 1968,118, "Creep", "Radiohead", 1992,117, "I Say a Little Prayer", "Aretha Franklin", 1968,116, "It Takes Two", "Rob Base and DJ E-Z Rock", 1988,115, "At Last", "Etta James", 1960,114, "Toxic", "Britney Spears", 2003,113, "Higher Ground", "Stevie Wonder", 1973,112, "Losing My Religion", "REM", 1991,111, "Thunder Road", "Bruce Springsteen", 1975,110, "Something", "The Beatles", 1969,109, "Everyday People", "Sly and the Family Stone", 1968,108, "Just Like Heaven", "The Cure", 1987,107, "C.R.E.A.M.", "Wu-Tang Clan", 1994,106, "Sympathy for the Devil", "The Rolling Stones", 1968,105, "Life on Mars?", "David Bowie", 1971,104, "I Want You Back", "Jackson 5", 1969,103, "You Oughta Know", "Alanis Morisette", 1995,102, "Maybelline", "Chuck Berry", 1955,101, "Maps", "Yeah Yeah Yeahs", 2003,100, "Blowin’ in the Wind", "Bob Dylan", 1963,99, "‘Stayin’ Alive", "Bee Gees", 1977,98, "In My Life", "The Beatles", 1965,97, "Gloria", "Patti Smith", 1975,96, "99 Problems", "Jay-Z", 2003,95, "Wonderwall", "Oasis", 1995,94, "I Will Always Love You", "Whitney Houston", 1992,93, "Since U Been Gone", "Kelly Clarkson", 2004,92, "Good Golly Miss Molly", "Little Richard", 1958,91, "Int’l Players Anthem (I Choose You)", "UKG", 2007,90, "You Make Me Feel Like a Natural Woman", "Aretha Franklin", 1967,89, "Hey Jude", "The Beatles", 1968,88, "Sweet Child O’ Mine", "Guns ‘N’ Roses", 1987,87, "All My Friends", "LCD Soundsystem", 2007,86, "Tumbling Dice", "The Rolling Stones", 1972,85, "Kiss", "Prince", 1986,84, "Let’s Stay Together", "Al Green", 1971,83, "Desolation Row", "Bob Dylan", 1965,82, "Rolling in the Deep", "Adele", 2011,81, "I’m Waiting for the Man", "Velvet Underground", 1967,80, "What’d I Say", "Ray Charles", 1957,79, "Back to Black", "Amy Winehouse", 2006,78, "Reach Out (I’ll Be There)", "The Four Tops", 1967,77, "Roadrunner", "Modern Lovers", 1976,76, "I Walk the Line", "Johnny Cash", 1956,75, "Common People", "Pulp", 1996,74, "Hallelujah", "Leonard Cohen", 1984,73, "Formation", "Beyonce", 2016,72, "Yesterday", "The Beatles", 1965,71, "Fast Car", "Tracy Chapman", 1988,70, "Suspicious Minds", "Elvis", 1969,69, "All Too Well", "Taylor Swift", 2013,68, "Good Times", "Chic", 1979,67, "Tangled Up in Blue", "Bob Dylan", 1975,66, "Bridge Over Troubled Water", "Simon and Garfunkel", 1970,65, "September", "Earth", "Wind & Fire", 1978,64, "Blitzkrieg Bop", "The Ramones", 1976,63, "Jolene", "Dolly Parton", 1974,62, "One", "U2", 1992,61, "Stairway to Heaven", "Led Zeppelin", 1971,60, "Running Up That Hill", "Kate Bush", 1985,59, "The Message", "Grandmaster Flash", 1982,58, "The Weight", "The Band", 1968,57, "Family Affair", "Sly and the Family Stone", 1971,56, "Work It", "Missy Elliott", 2000,55, "Like a Prayer", "Madonna", 1989,54, "The Tracks of My Tears", "The Miracles", 1965,53, "Good Vibrations", "The Beach Boys", 1966,52, "I Feel Love", "Donna Summer", 1977,51, "Walk on By", "Dionne Warwick", 1964,50, "Gasolina", "Daddy Yankee", 2010,49, "Doo Wop (That Thing)", "Lauryn Hill", 1998,48, "Idioteque", "Radiohead", 2000,47, "Tiny Dancer", "Elton John", 1972,46, "Paper Planes", "M.I.A.", 2008,45, "Alright", "Kendrick Lamar", 2015,44, "Billie Jean", "Michael Jackson", 1982,43, "My Girl", "Temptations", 1965,42, "Redemption Song", "Bob Marley", 1980,41, "Love Will Tear Us Apart", "Joy Division", 1980,40, "All Along the Watchtower", "Jimi Hendrix", 1968,39, "B.O.B.", "Outkast", 2000,38, "(Sittin’ on) The Dock of the Bay", "Otis Redding", 1967,37, "When Doves Cry", "Prince", 1984,36, "Seven Nation Army", "White Stripes", 2003,35, "Tutti Frutti", "Little Richard", 1955,34, "Papa’s Got a Brand New Bag", "James Brown", 1966,33, "Johnny B. Goode", "Chuck Berry", 1958,32, "Juicy", "Notorious B.I.G.", 1994,31, "Satisfaction", "Rolling Stones", 1965,30, "Royals", "Lorde", 2011,29, "Nuthin’ but a ‘G’ Thang", "Dr. Dre", 1992,28, "Once in a Lifetime", "Talking Heads", 1980,27, "Born to Run", "Bruce Springsteen", 1975,26, "A Case of You", "Joni Mitchell", 1971,25, "Runaway", "Kanye West", 2010,24, "A Day in the Life", "The Beatles", 1967,23, "Heroes", "David Bowie", 1977,22, "Be My Baby", "Ronettes", 1963,21, "Strange Fruit", "Billie Holiday", 1939,20, "Dancing on My Own", "Robyn", 2010,19, "Imagine", "John Lennon", 1971,18, "Purple Rain", "Prince", 1984,17, "Bohemian Rhapsody", "Queen", 1975,16, "Crazy in Love", "Beyonce", 2003,15, "I Want to Hold Your Hand", "The Beatles", 1963,14, "Waterloo Sunset", "The Kinks", 1967,13, "Gimme Shelter", "Stones", 1969,12, "Superstition", "Stevie Wonder", 1972,11, "God Only Knows", "Beach Boys", 1966,10, "‘Hey Ya!", "Outkast", 2003,9,"Dreams", "Fleetwood Mac", 1977,8,"Get Ur Freak On", "Missy Elliott", 2001,7,"Strawberry Fields Forever", "The Beatles", 1967,6,"What’s Goin’ On?", "Marvin Gaye", 1971,5,"Smells Like Teen Spirit", "Nirvana", 1991,4,"Like a Rolling Stone", "Bob Dylan", 1965,3,"A Change is Gonna Come", "Sam Cooke", 1964,2,"Fight the Power", "Public Enemy", 1989,1,"Respect", "Aretha Franklin", 1967];

function calculate(guess) {
  if (xl > xr && guess == "higher") {
    console.log("correct!");
    newCompare();
  } else if (xl < xr && guess == "lower") {
    console.log("correct!");
    newCompare();
  } else {
    console.log("WRONG, YOU LOSE");
    loseScreen();
    
  }
}
function getRank(title){
  rankIndex = allsongs.indexOf(title) - 1;
  return allsongs[rankIndex];
}
function getTitle(rank){
  titleIndex = allsongs.indexOf(rank) + 1;
  return allsongs[titleIndex];
}
function getArtist(rank){
  artistIndex = allsongs.indexOf(rank) + 2;
  return allsongs[artistIndex];
}
function getYear(rank){
  yearIndex = allsongs.indexOf(rank) + 3;
  return allsongs[yearIndex];
}
function getAlbum(rank){
  albumIndex = allsongs.indexOf(rank) + 4;
  return allsongs[albumIndex];
}

function newCompare() {
  xl = xr;
  while (pastranks.includes(xr)){
    xr = Math.floor(Math.random() * (500)); 
  }
  pastranks.push(xr);

  var leftTitle = document.getElementById("titleLeft");
  var rightTitle = document.getElementById("titleRight");
  var rightPic = document.getElementById("picRight");
  var leftPic = document.getElementById("picLeft");
  var leftRank = document.getElementById("rankLeft");

  leftTitle.innerText = rightTitle.innerText;
  rightTitle.innerText = getTitle(xr) + "\n by \n" + getArtist(xr);
  if(getTitle(xl).length > getArtist(xl).length){
    leftTitle.style.left = 16 - Math.ceil((getTitle(xl).length - 10)/2) + "%";
  }
  else{
    leftTitle.style.left = 16 - Math.ceil((getArtist(xl).length - 10)/2) + "%";
  }
  if(getTitle(xr).length > getArtist(xr).length){
    rightTitle.style.right = 11 - Math.ceil((getTitle(xr).length - 10)/2) + "%";
  }
  else{
    rightTitleTitle.style.right = 11 - Math.ceil((getArtist(xr).length - 10)/2) + "%";
  }
      //should line break between song title and artist^
  leftPic.src = rightPic.src;
  rightPic.src = getAlbum(xr);
  if (xl.toString().length == 1 ){
    leftRank.style.left = "22%";
    leftRank.style.top = "140px";
    leftRank.style.fontSize = "90px";
    leftRank.innerText =  xl;
  } else if (xl.toString().length == 2 ){
    leftRank.style.left = "20%";
    leftRank.style.top = "170px";
    leftRank.style.fontSize = "75px";
    leftRank.innerText =  xl;  }
  else{leftRank.innerText = xl;}

}

function firstCompare() {
  var leftTitle = document.getElementById("titleLeft");
  var rightTitle = document.getElementById("titleRight");
  var rightPic = document.getElementById("picRight");
  var leftPic = document.getElementById("picLeft");
  var leftRank = document.getElementById("rankLeft");
  var than = document.getElementById("than");

  leftTitle.innerText = songs[0].title + "\n  by \n" + songs[0].artist; 
    //should line break between song title and artist^
  rightTitle.innerText = songs[1].title + "\n  by \n" + songs[1].artist;
  leftPic.src = songs[0].imgsrc;
  rightPic.src = songs[1].imgsrc;

  leftRank.innerText = songs[0].rank;
  than.innerText = "Than " + songs[0].title;
}

