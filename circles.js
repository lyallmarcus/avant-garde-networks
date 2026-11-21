// Groups: esoteric orders, movements, scenes, venues, screening programmes.
// Edit freely. Names in mem must match names in data.js exactly.
// kind: order | movement | scene | venue | show
// mem entries: [name, role, note, from, to]
//   role: "core" (default) or "member" = took part, counts as a group link;
//         "assoc" = close to it but not a member, "shown" = screened or played there.
//         assoc / shown count only as a weak link to core members, never to each other.
//   from/to: years in the group (default: the person's active years inside the group's years).
// near: [person, note] = people who influenced the group without belonging (not drawn in the blob).
window.NETGROUPS=[
{name:"Spiritualism & psychical research",loose:1,col:"#BA7517",kind:"order",yrs:[1848,1940],mem:[
 ["Georgiana Houghton","core","Medium; exhibited spirit drawings, 1871"],["Conan Doyle","core","Spiritualist evangelist; SPR member"],["W.T. Stead","core","Spiritualist journalist"],
 ["Frederic Myers","core","Co-founded the Society for Psychical Research, 1882"],["William James","core","SPR president, 1894–95"],["Théodore Flournoy","core","Studied the medium Hélène Smith"],["Hélène Smith","core","Medium"],
 ["Hilma af Klint","member","Séances with 'The Five', 1896–1906",1879,1906],["W.B. Yeats","member","Séances; automatic writing with his wife"],["Kupka","member","Practising medium in Prague and Vienna",1890,1910],
 ["Carl Jung","member","Doctoral thesis on a medium, 1902",1895,1905],["Sigmund Freud","assoc","Corresponding member of the SPR, 1911"]],
 near:[["Swedenborg","Spirit-world visions the movement drew on"]]},
{name:"Theosophical Society",col:"#1D9E75",kind:"order",yrs:[1875,2000],mem:[
 ["Blavatsky","core","Founder, 1875"],["Olcott","core","Co-founder and president"],["W.Q. Judge","core","Co-founder"],["A.P. Sinnett","core","London Lodge"],["Anna Kingsford","core","President of the London Lodge, 1883"],
 ["Annie Besant","core","President from 1907"],["Leadbeater","core","Clairvoyant; co-author of Thought-Forms"],["Rudolf Steiner","core","Led the German section, 1902–12",1902,1912],
 ["Mondrian","member","Joined the Dutch section, 1909",1909,1944],["Hilma af Klint","member","Joined 1889",1889,1920],["Claude Bragdon","member","US member; architect and stage designer"],
 ["George Russell (AE)","member","Dublin lodge"],["W.B. Yeats","member","Esoteric Section, 1888–90",1887,1890],["Krishnamurti","core","Groomed as World Teacher; broke away 1929",1909,1929],
 ["Dion Fortune","member","Member before founding her own order",1919,1927],["Talbot Mundy","member","Theosophist novelist; lived at Point Loma"],["Kirkpatrick Brice","member","Theosophist; co-founded the Prometheans"],
 ["Ouspensky","assoc","Theosophical contacts before Gurdjieff"],["Nicholas Roerich","assoc","Theosophical milieu; Helena Roerich translated The Secret Doctrine"],
 ["Hilla Rebay","assoc","Theosophy, Buddhism and astrology shaped her art and advocacy"],["Luigi Russolo","assoc","Took Theosophy as a main basis of his work"],["Oskar Fischinger","assoc","Read Theosophy and anthroposophy"],
 ["Harry Smith","assoc","Raised by Theosophist parents",1923,1940],["Thomas Edison","member","Joined April 1878, 162nd member; never very active",1878,1890],
 ["Jean Delville","member","First general secretary of the Belgian section, 1911–13"],["Scriabin","assoc","Mixed with Delville's Theosophist circle in Brussels, 1908–10"],
 ["Lawren Harris","member","Theosophist; his abstraction grew from it"],["Jackson Pollock","assoc","Krishnamurti camps at Ojai via his Theosophist teacher",1928,1930]],
 near:[["Thought-Forms (book, 1905)","The Society's best-known picture book of clairvoyant forms"]]},
{name:"Anthroposophy",col:"#3C9A7E",kind:"order",yrs:[1912,2000],mem:[["Rudolf Steiner","core","Founded the Anthroposophical Society after leaving the Theosophists, 1912–13"],["Hilma af Klint","member","Joined 1920",1920,1944],
 ["Kandinsky","assoc","Attended Steiner's lectures, Berlin 1908 (Ringbom)",1908,1914],["Mondrian","assoc","Wrote to Steiner, 1921",1921,1922],["Joseph Beuys","assoc","Anthroposophy a basis of his art and politics, from 1948"]]},
{name:"Transcendental Painting Group",col:"#2E9A8A",kind:"movement",yrs:[1938,1945],mem:[["Raymond Jonson","core","Co-founder"],["Emil Bisttram","core","Co-founder and leader"],["Lawren Harris","core","Co-founder"],["Agnes Pelton","member"]],
 near:[["Kandinsky","The group engaged him in its activities; all admired him"],["Nicholas Roerich","Bisttram and Jonson were followers"]]},
{name:"Prometheans",col:"#13836A",kind:"scene",yrs:[1919,1923],mem:[["Claude Bragdon","core","Co-founder"],["Kirkpatrick Brice","core","Co-founder"],["Thomas Wilfred","core","Built the Clavilux for the group; named the art Lumia"]]},
{name:"Golden Dawn",col:"#D85A30",kind:"order",yrs:[1888,1940],mem:[
 ["MacGregor Mathers","core","Founder"],["Wynn Westcott","core","Founder"],["Moina Mathers","core","First initiate; Mathers' wife"],["W.B. Yeats","core","Joined 1890",1890,1923],["Aleister Crowley","core","Joined 1898; expelled 1900",1898,1900],
 ["Florence Farr","core","Led the London temple"],["Maud Gonne","member","Briefly a member, 1891",1891,1894],["Annie Horniman","core","Member; funded the Abbey Theatre"],["Arthur Machen","member","Member"],
 ["Allan Bennett","core","Crowley's teacher in the order",1894,1900],["A.E. Waite","core","Led a breakaway temple"],["Pamela Colman Smith","member","Member; drew the Waite–Smith tarot"],
 ["Israel Regardie","member","Stella Matutina, 1934; published the rituals 1937–40",1933,1940],["Dion Fortune","member","Alpha et Omega offshoot, 1919",1919,1927]],
 near:[["Eliphas Lévi","Source for its ritual magic"]]},
{name:"Thelema & the OTO",col:"#A8321E",kind:"order",yrs:[1907,2000],mem:[
 ["Aleister Crowley","core","Founded the A∴A∴, 1907; head of the OTO, 1922–47"],["Austin Spare","member","A∴A∴ probationer, 1909",1909,1912],["Jack Parsons","core","Led the Agape Lodge, Pasadena"],
 ["Marjorie Cameron","member","Agape Lodge circle; married Parsons, 1946",1945,1995],["Grady McMurtry","core","Initiated at Agape Lodge, 1941; revived the OTO from 1969"],["Bill Breeze","core","Outer Head of the Order, 1985–"],
 ["Harry Smith","member","Bishop of the OTO's Gnostic Catholic Church",1975,1991],["Gerald Gardner","member","Received an OTO charter from Crowley",1946,1950],["Kenneth Grant","core","Crowley's secretary, 1945; led a breakaway Typhonian OTO"],
 ["Frieda Harris","assoc","Painted Crowley's Thoth tarot, 1938–43"],["Jane Wolfe","member","Abbey of Thelema, Cefalù, 1920–23; founder of the Agape Lodge",1920,1958],["Kenneth Anger","assoc","Thelemite; filmed Crowley's Abbey at Cefalù, 1955"]]},
{name:"Gurdjieff & the Fourth Way",col:"#6E7F2A",kind:"order",yrs:[1912,2000],mem:[
 ["Gurdjieff","core","Teacher"],["Ouspensky","core","Pupil, then teacher in London"],["P.L. Travers","member","Pupil of Gurdjieff"],["René Daumal","member","Pupil of Gurdjieff's Paris group"],
 ["Oscar Ichazo","assoc","Arica school, drawing on Gurdjieff's Enneagram"],["Claudio Naranjo","assoc","Enneagram teacher, trained with Ichazo"],["Alejandro Jodorowsky","assoc","The Holy Mountain uses the Enneagram and Arica training"]]},
{name:"Pleasure Dome circle",col:"#B33D6B",kind:"scene",yrs:[1946,1960],mem:[["Kenneth Anger","core","Inauguration of the Pleasure Dome, 1954"],["Samson De Brier","core","Host of an occult salon; played Shiva and the Great Beast"],["Marjorie Cameron","core","The Scarlet Woman / Kali"],["Curtis Harrington","core","Cesare; made The Wormwood Star with Cameron"],["Anaïs Nin","core","Astarte"],
 ["Jack Parsons","assoc","Part of De Brier's salon",1946,1952],["Anton LaVey","assoc","Part of De Brier's salon"]]},
{name:"Blaue Reiter",col:"#2F6DB5",kind:"movement",yrs:[1911,1914],mem:[["Kandinsky"],["Franz Marc"],["Schoenberg","member","Paintings and essay in the Almanac"],["Paul Klee","member"]]},
{name:"Bauhaus",col:"#C9A227",kind:"movement",yrs:[1919,1933],mem:[["Kandinsky","core","",1922,1933],["Paul Klee","core","",1921,1931],["Moholy-Nagy","core","",1923,1928],["Ludwig Hirschfeld-Mack","core","Reflected light plays, 1922–24",1920,1925],["Josef Albers","core","Student, then teacher",1920,1933]]},
{name:"Black Mountain College",col:"#A88C1F",kind:"venue",yrs:[1933,1957],mem:[["Josef Albers","core","First art teacher, bringing the Bauhaus with him",1933,1949],["John Cage","member","Taught 1948; Theater Piece No. 1, 1952",1948,1953],["Stan VanDerBeek","member","Student, early 1950s",1949,1953],["Buckminster Fuller","member","Summer sessions; first geodesic dome",1948,1950]]},
{name:"Dada & Surrealism",col:"#7F77DD",kind:"movement",yrs:[1916,1950],mem:[["Jean Arp"],["Hans Richter"],["Viking Eggeling"],["Marcel Duchamp"],["Man Ray"],["André Breton"],["Humphrey Jennings","member","Co-organised the London Surrealist show, 1936"]]},
{name:"Absolute film, Germany",col:"#378ADD",kind:"movement",yrs:[1919,1936],mem:[["Walter Ruttmann"],["Hans Richter"],["Viking Eggeling"],["Oskar Fischinger"],["Alexander László"],["Hans Fischinger","member","",1932,1939],["Lotte Reiniger","member"]]},
{name:"Rebay & the Guggenheim",col:"#888780",kind:"scene",yrs:[1929,1952],mem:[
 ["Hilla Rebay","core","Founding director of the Museum of Non-Objective Painting"],["Solomon Guggenheim","core","Patron"],["Rudolf Bauer","core","The museum's house painter"],
 ["Oskar Fischinger","member","Guggenheim grants from 1938"],["Norman McLaren","member","Ran the museum's film screenings, 1940s"],["Mary Ellen Bute","member","Supported by Rebay"],["Charles Dockum","member","Guggenheim grant for his MobilColor projector"],
 ["Jordan Belson","member","Guggenheim grants, early 1950s"],["Harry Smith","member","Guggenheim grants, 1950s"],["Frank Lloyd Wright","assoc","Commissioned by Rebay to design the museum, 1943"]]},
{name:"GPO & NFB",col:"#4E8F8B",kind:"scene",yrs:[1933,1975],mem:[["John Grierson","core","Head of the GPO Film Unit, then founder of the National Film Board of Canada"],["Len Lye","member","GPO, 1935–40"],["Norman McLaren","member","GPO, then NFB from 1941"],["Humphrey Jennings","member","GPO and Crown Film Unit"],["Low & Kroitor","member","NFB"],["Arthur Lipsett","member","NFB"]]},
{name:"Art in Cinema",col:"#3E7CB1",kind:"show",yrs:[1946,1954],mem:[["Frank Stauffacher","core","Created and ran the series at the San Francisco Museum of Art"],["Curtis Harrington","shown"],["Harry Smith","shown"],["Jordan Belson","shown"],["Oskar Fischinger","shown"],["Kenneth Anger","shown"],["Hy Hirsh","shown"],["James Whitney","shown"],["John Whitney","shown"]]},
{name:"Vortex",col:"#2C5F8A",kind:"show",yrs:[1957,1959],mem:[["Jordan Belson","core","Visuals"],["Henry Jacobs","core","Sound"],["James Whitney","shown","Yantra"],["Hy Hirsh","shown"]]},
{name:"West Coast visual music",col:"#1B6FA8",kind:"scene",yrs:[1940,1975],mem:[["Jordan Belson"],["Henry Jacobs"],["John Whitney"],["James Whitney"],["Hy Hirsh"],["Harry Smith","member","",1945,1951],["Oskar Fischinger","member","",1936,1967]]},
{name:"Burroughs–Gysin cut-up circle",col:"#9E3D62",kind:"scene",yrs:[1958,1975],mem:[["William Burroughs","core"],["Brion Gysin","core","Cut-ups and the Dreamachine"],["Ian Sommerville","core","Tape cut-ups; built the Dreamachine"],["Antony Balch","core","Cut-up films"],["Ira Cohen","assoc","Tangier and New York"]]},
{name:"Haight-Ashbury",col:"#D9534F",kind:"scene",yrs:[1965,1970],mem:[["Grateful Dead"],["Jefferson Airplane"],["Bill Graham (Fillmores)","member"],["Bill Ham","member"],["Stewart Brand","member"],["Goa Gil","member","Haight-Ashbury hippie until 1969",1966,1969],["Allen Ginsberg","assoc","Human Be-In, 1967"],["Timothy Leary","assoc","Human Be-In, 1967"]]},
{name:"Goa & psychedelic trance",loose:1,col:"#2BA88A",kind:"scene",yrs:[1970,2000],mem:[["Youth","core","Seasons in Goa; founded Dragonfly Records, Brixton, 1992–93",1985,2000],["Goa Gil","core","Goa parties from the 1970s; DJ from the mid-80s"],["Raja Ram","core","Quintessence (1969), then TIP Records (1994) and Shpongle"]]},
{name:"Beats",col:"#B0476A",kind:"movement",yrs:[1944,1970],mem:[["Allen Ginsberg"],["Jack Kerouac"],["William Burroughs"],["Neal Cassady"],["Robert Frank","member"],["Brion Gysin","member"]]},
{name:"Leary, Kesey & the Acid Tests",col:"#E24B4A",kind:"scene",yrs:[1960,1970],mem:[["Timothy Leary"],["Richard Alpert"],["Ken Kesey"],["Grateful Dead"],["Stewart Brand"],["Neal Cassady"],["Hitchcock siblings","member","Funded Leary's Millbrook estate"],["Aldous Huxley","assoc","Advised Leary at Harvard"],["Alan Watts","assoc"],["USCO","member","Light environments for Leary's Psychedelic Theater"]]},
{name:"SF light shows & ballrooms",col:"#E07B39",kind:"scene",yrs:[1952,1972],mem:[["Seymour Locks","core","Projected 'painting with light', San Francisco State, 1952"],
 ["Bill Ham","core","Red Dog Saloon 1965; Avalon Ballroom 1966"],["Elias Romero"],["Tony Martin"],["Headlights (McKay & Abrams)"],["Holy See"],["Light Sound Dimension"],["Ben Van Meter"],
 ["Bill Graham (Fillmores)","core","Fillmore promoter"],["Jefferson Airplane","shown"],["Grateful Dead","shown"]]},
{name:"SF Tape Music Center",col:"#C46A2E",kind:"scene",yrs:[1962,1966],mem:[["Morton Subotnick","core","Co-founder"],["Pauline Oliveros","core","Core member, later co-director"],["Tony Martin","core","Visual director from 1963"],["Stewart Brand","assoc","Co-produced the Trips Festival with Ramon Sender"],["USCO","assoc","Co-founder Michael Callahan came from the Tape Center"]]},
{name:"New York underground",col:"#9B59B6",kind:"scene",yrs:[1955,1975],mem:[["Andy Warhol"],["Velvet Underground"],["Jonas Mekas"],["Marie Menken"],["Joshua Light Show"],["Peter Kubelka","member"],["Brakhage","member"],["Harry Smith","member","",1951,1975],["Markopoulos","member"],["Jack Smith","core"],["Tony Conrad","member"],["Angus MacLise","member"],["Ira Cohen","member","",1965,1975],["Stan VanDerBeek","member"]]},
{name:"The Loft",col:"#9B6BB5",kind:"venue",yrs:[1970,2000],mem:[["David Mancuso","core","Host from Valentine's Day 1970"],["Larry Levan","member","Regular before the Garage",1972,1977],["Arthur Russell","shown","His records were Loft staples"]]},
{name:"London underground, 1960s",col:"#D4537E",kind:"scene",yrs:[1964,1972],mem:[
 ["John 'Hoppy' Hopkins","core","Co-founded UFO and International Times"],["Barry Miles","core","Ran Better Books' paperback shop; co-founded Indica and IT"],["Pink Floyd","core","UFO house band"],["Soft Machine","core","UFO house band"],
 ["Boyle Family (Boyle & Hills)","core","Liquid-light environments at UFO"],["Mike Leonard"],["Peter Wynne-Willson"],["Toni & Joel Brown"],["Jimi Hendrix","member","Played UFO"],["Daevid Allen","member"],
 ["Bruce Lacey","member","Happenings at Better Books"],["Jeff Keen","member","Expanded-cinema happenings at Better Books"],["John Latham","member","Happenings at Better Books"],["Gustav Metzger","member"],
 ["Yoko Ono","member","Showed at UFO and Indica",1966,1968],["Peter Whitehead","member"],["Kenneth Anger","shown","Films screened at UFO"]]},
{name:"Fluxus & experimental music",col:"#5D6D7E",kind:"movement",yrs:[1952,1985],mem:[["John Cage"],["Yoko Ono"],["Nam June Paik"],["Cornelius Cardew"],["Brian Eno","member"],["Karlheinz Stockhausen","member"],["Philip Glass","member"],["Arthur Russell","member"],["La Monte Young","member","Edited An Anthology of Chance Operations, 1963"],["Joseph Beuys","member","Fluxus festival, Düsseldorf, 1963",1962,1965],["Pauline Oliveros","member"],["Morton Subotnick","member"]]},
{name:"Theatre of Eternal Music",col:"#7A5FA6",kind:"scene",yrs:[1962,1966],mem:[["La Monte Young","core","Founder"],["Marian Zazeela","core","Voice and light"],["Angus MacLise","core","",1962,1964],["Tony Conrad","core","",1964,1966],["Velvet Underground","member","John Cale on viola, 1964–66",1964,1966]]},
{name:"Expanded Cinema Festival, 1965",col:"#8C63B8",kind:"show",yrs:[1965,1966],mem:[["Jonas Mekas","core","Ran the Film-Makers' Cinematheque"],["Stan VanDerBeek","shown"],["USCO","shown"],["Andy Warhol","shown"],["Angus MacLise","shown","Piero Heliczer's 'Launching the Dream Weapon', with the early Velvets (from memory)"],["Velvet Underground","shown","(from memory)"],["Nam June Paik","shown","(from memory)"]]},
{name:"Indica",col:"#C9477A",kind:"venue",yrs:[1965,1968],mem:[["Barry Miles","core","Co-founder with John Dunbar and Peter Asher"],["Yoko Ono","shown","Unfinished Paintings, Nov 1966, where she met Lennon"],["John Lennon","assoc","Met Ono at her Indica preview"],["Boyle Family (Boyle & Hills)","shown"],["Marianne Faithfull","assoc","Helped build the gallery; married to Dunbar"]]},
{name:"Arts Lab",col:"#B04A82",kind:"venue",yrs:[1967,1971],mem:[["David Curtis","core","Ran the cinema"],["Malcolm Le Grice","member","Co-op workshop and expanded cinema"],["John 'Hoppy' Hopkins","member","TVX video at the New Arts Lab"],["David Bowie","member","Rehearsed and performed mime there"],["Yoko Ono","shown","Build Around with Lennon, May 1968"],["John Lennon","shown"]]},
{name:"London Film-Makers' Co-op & LUX",col:"#2E86C1",kind:"scene",yrs:[1966,2025],mem:[
 ["Malcolm Le Grice","core","Co-founder; expanded cinema at the Arts Lab"],["Stephen Dwoskin","core","Co-founder"],["Peter Gidal","core","Filmmaker-theorist"],["Lis Rhodes","core","Cinema programmer"],["Karen Mirza & Brad Butler (no.w.here)","assoc","no.w.here saved the Co-op's film equipment",2004,2025],
 ["John Smith","core","The Girl Chewing Gum premiered there, 1976"],["Guy Sherwin","core","Live projector performances"],["Anthony McCall","core","Line Describing a Cone, 1973",1968,1973],["Sally Potter","member","",1968,1980],
 ["Annabel Nicolson","core","Cinema programmer"],["Gill Eatherley","core"],["William Raban","core"],["Cerith Wyn Evans","shown","First one-person show there"],
 ["Barry Miles","assoc","The Co-op began in Better Books' basement, 1966",1966,1967],["Jeff Keen","member"],["Bruce Lacey","assoc"]],
 near:[["Jonas Mekas","Modelled on his New York Film-Makers' Cooperative"]]},
{name:"onedotzero",col:"#1E9C8E",kind:"show",yrs:[1996,2025],mem:[["AntiVJ (Joanie Lemercier)","shown","Commissioned by onedotzero for EMPAC, 2010"],["The Light Surgeons","member","Live AV shows with onedotzero at the ICA from 1997; first feature-length live cinema show there, 2001"],["D-Fuse (Michael Faulkner)","member","Shown at onedotzero festivals; DVD on its label, 2004"]]},
{name:"Optronica",col:"#14806F",kind:"show",yrs:[2005,2007],mem:[["Addictive TV","core","Launched it with the BFI, 2005: 'visual music on the big screen'"],["Peter Greenaway","shown","Tulse Luper VJ set, 2007"],["Ryoichi Kurokawa","shown","2007"],["Coldcut","shown","Light and colour installations, 2007"]]},
{name:"MUTEK",col:"#0F6E66",kind:"show",yrs:[2000,2025],mem:[["Ryoichi Kurokawa","shown","Festival mainstay"],["Robert Henke (Monolake)","shown","Lumière and other AV works"],["Coil","shown","Montreal, May 2003",2003,2003],["Peter Christopherson","shown","Ran Coil's video projections at MUTEK 2003",2003,2003]]},
{name:"Tate expanded cinema revival",col:"#3B6FA0",kind:"show",yrs:[2009,2012],mem:[["Malcolm Le Grice","shown","Spoke at Tate Modern's expanded cinema conference, 2009"],["Lis Rhodes","shown","Light Music in the Tanks, 2012"],["Anthony McCall","shown","Complete cone films, 2012"],["David Curtis","assoc","Co-editor of Expanded Cinema: Art, Performance, Film (Tate, 2011) (from memory)"]]},
{name:"Lucky Cloud Sound System",col:"#8E63A8",kind:"venue",yrs:[2003,2025],mem:[["David Mancuso","core","Brought his Loft parties to The Light, Shoreditch, 2003–11",2003,2011],["Tim Lawrence","core","Co-founder"],["Colleen 'Cosmo' Murphy","core","Co-founder"]]},
{name:"no.w.here",col:"#2C6E9E",kind:"venue",yrs:[2004,2025],mem:[["Karen Mirza & Brad Butler (no.w.here)","core","Founders of the artist-run film lab, Bethnal Green"],["Bradley Eros","shown","10th-birthday programme, 2014"]]},
{name:"CTM & transmediale, Berlin",col:"#0E5C55",kind:"show",yrs:[1999,2025],mem:[["AntiVJ (Joanie Lemercier)","shown","Light Sculpture, Club Transmediale, 2007"],["Demdike Stare","shown","Incal AV set, 2013"],["Karen Mirza & Brad Butler (no.w.here)","shown","transmediale"]]},
{name:"Ghost Box & hauntology",col:"#6B5B3E",kind:"scene",yrs:[2004,2025],mem:[["Julian House (Ghost Box)","core","Co-founded Ghost Box with Jim Jupp; designs its sleeves and visuals"],["Demdike Stare","assoc","Occult library-music hauntology on Modern Love"]],
 near:[["Arthur Machen","Named as a touchstone"]]},
{name:"Technicolor Skull",col:"#A02C5A",kind:"scene",yrs:[2009,2016],mem:[["Kenneth Anger","core","Theremin and his films as projections"],["Brian Butler","core","Guitar, electronics; 'the psychic impact of a magick ritual' as live performance"]]},
{name:"Filmaktion",col:"#1F6FA6",kind:"scene",yrs:[1973,1976],mem:[["Malcolm Le Grice"],["Gill Eatherley"],["Annabel Nicolson"],["William Raban"]]},
{name:"Jarman's Super 8 circle",col:"#C0392B",kind:"scene",yrs:[1970,1994],mem:[["Derek Jarman"],["John Maybury"],["Cerith Wyn Evans"],["Richard Heslop"]]},
{name:"Electric Circus",col:"#8E5BA8",kind:"venue",yrs:[1967,1971],mem:[["Tony Martin","core","Designed its visual systems"],["Morton Subotnick","core","Music director (from memory)"],["Joshua Light Show","assoc","Cited as an influence"]]},
{name:"Whirl-y-Gig",col:"#4FA894",kind:"venue",yrs:[1981,2000],mem:[["Monkey Pilot","core","Resident DJ, then co-organiser; parachute finale and psychedelic lightshow from 1988"]]},
{name:"New York downtown & disco",col:"#AF7AC5",kind:"scene",yrs:[1970,1990],mem:[
 ["Arthur Russell","core","Music director of The Kitchen, 1974–75; records loved at the Loft"],["Larry Levan","core","Loft regular; resident DJ at the Paradise Garage"],["Keith Haring","member","Paradise Garage regular"],["Laurie Anderson","member","Performed at The Kitchen"],
 ["Philip Glass","member"],["David Byrne","member"]]},
{name:"Doublevision",col:"#6F8F3A",kind:"venue",yrs:[1982,1990],mem:[
 ["Cabaret Voltaire","core","Founded the video label with Paul Smith, 1982"],["Throbbing Gristle","shown","Released their videos"],["Derek Jarman","shown","Worked with the label"],["Einstürzende Neubauten","shown","Released Halber Mensch"],
 ["Clock DVA","shown"],["23 Skidoo","shown","Released Seven Songs"],["Richard Heslop","shown","Directed Seven Songs"],["Chris & Cosey (CTI)","shown","Released European Rendezvous and Elemental 7"]]},
{name:"Some Bizzare",col:"#567D2E",kind:"venue",yrs:[1981,1995],mem:[["Test Dept","shown"],["Einstürzende Neubauten","shown"],["Psychic TV","shown"]]},
{name:"Punk, post-punk & industrial",loose:1,col:"#639922",kind:"scene",yrs:[1975,1995],mem:[
 ["Throbbing Gristle"],["Genesis P-Orridge"],["Psychic TV"],["Coil"],["Cabaret Voltaire"],["Clock DVA"],["23 Skidoo"],["Chris & Cosey (CTI)"],["Test Dept"],["Brett Turnbull","member"],
 ["Einstürzende Neubauten"],["Laibach / NSK"],["Neville Brody","member"],["Malcolm McLaren","member"],["Peter Christopherson"],["Current 93 (David Tibet)"],["Youth","member","Killing Joke, from 1978",1978,1988]]},
{name:"Ambient house & chill-out rooms",loose:1,col:"#5DB0B9",kind:"scene",yrs:[1988,2000],mem:[["The Orb (Alex Paterson)","core","Chill-out room at Paul Oakenfold's Land of Oz, Heaven, 1988–89"],["Steve Hillage","core","System 7, from 1989"],["Youth","core","Co-producer of The Orb"],["Mixmaster Morris","core","The Irresistible Force; Megatripolis and Big Chill"],["Fraser Clark","member","Megatripolis at Heaven"],["Brian Eno","assoc","The ambient template"]]},
{name:"Thee Temple ov Psychick Youth",col:"#4D7A1C",kind:"order",yrs:[1981,1991],mem:[["Genesis P-Orridge","core","Founder"],["Psychic TV","core","Its 'musical wing'"],["Peter Christopherson","member","Psychic TV co-founder",1981,1983],["Coil","member","John Balance in the early Psychic TV community",1981,1984],["Current 93 (David Tibet)","member","Psychic TV community, 1982–83",1982,1983]],
 near:[["Austin Spare","Sigil magic"],["Aleister Crowley","Magickal practice"]]},
{name:"Free festivals",loose:1,col:"#7E9F3C",kind:"scene",yrs:[1970,1992],mem:[["Hawkwind","core","Isle of Wight 1970 protest gigs onward; Stonehenge headliners"],["Liquid Len (Jonathan Smeeton)","member","Hawkwind's light show"],["Gong","member","Watchfield, 1975"],["Daevid Allen","member"],["Steve Hillage","member","With Gong",1973,1975],["Raja Ram","member","Quintessence played the first Glastonbury festivals",1970,1972],
 ["Ozric Tentacles","core","Formed at Stonehenge, 1982"],["Youth","member","Killing Joke played the Stonehenge stage (from memory)",1979,1984],["Spiral Tribe","member","Castlemorton, May 1992: the free-party climax of the lineage",1990,1992],["Mutoid Waste Co.","member","Travelling scrap-sculpture crew (from memory)",1984,1992]]},
{name:"Club Dog & Megadog",col:"#3FA58C",kind:"scene",yrs:[1985,1998],mem:[["Aphex Twin","shown","Played Megadog"],["Ozric Tentacles","member","Club Dog regulars (from memory)"],["Weirdcore","assoc","Live visuals at London squat parties and Heaven, 1990s–2000s",1998,2005],["Monkey Pilot","core","First resident DJ at Club Dog"],["Coloursound Experiment","core","Megadog lighting"],["Vegetable Vision","core","Megadog visuals (your info)"]]},
{name:"Megatripolis",col:"#2E8B74",kind:"venue",yrs:[1993,1996],mem:[
 ["Fraser Clark","core","Founded it, at Heaven, 21 Oct 1993"],["Terence McKenna","core","Lectured on the opening night"],["Mixmaster Morris","core","DJ'd the opening night"],
 ["Allen Ginsberg","shown","Spoke there"],["Richard Alpert","shown","Spoke there as Ram Dass"],["Malcolm McLaren","shown","Visitor"]]},
{name:"Rave & free parties",loose:1,col:"#45B39D",kind:"scene",yrs:[1985,2000],mem:[
 ["Spiral Tribe"],["Mutoid Waste Co."],["Monkey Pilot"],["Fraser Clark"],["The Shamen"],["Terence McKenna","member"],["Mixmaster Morris"],["Coloursound Experiment"],["Archaos","member"]]},
{name:"Big Chill",col:"#58B6A2",kind:"show",yrs:[1994,2000],mem:[["Hexstatic","core","First video experiments at the first Big Chill"],["Mixmaster Morris","core","Resident DJ (from memory)"],["The Light Surgeons","core","Festival visuals"]]},
{name:"Cooltan & Exploding Cinema",col:"#5E9C8F",kind:"scene",yrs:[1991,2000],mem:[["Duncan Reekie","core","Exploding Cinema filmmaker and historian"],["Mark Logue","core","Part of the Cooltan group (your info)"]],
 near:[["Malcolm Le Grice","Reekie sees the London Film-Makers' Co-op as a precursor of its open-access model"]]},
{name:"Central Saint Martins",col:"#7B8A8B",kind:"venue",yrs:[1960,2000],mem:[["Malcolm Le Grice","core","Taught film at Saint Martin's from 1964–65, setting up the first film unit on a UK fine-art course; head of research at CSM from 1997",1964,1984],["Marcus Lyall","core","Studied there (your info)"],["Tomato","core","Members studied there with Lyall (your info)"],["John Smith","core","Taught there (your info)"],["Cerith Wyn Evans","core","Studied at Saint Martin's"]]},
{name:"Oil Factory",col:"#8E6C3A",kind:"venue",yrs:[1987,2005],mem:[["Eurythmics (Stewart & Lennox)","core","Founded it, 1987"],["Richard Heslop","core","Director: videos and, from 1997, commercials"],["Chemical Brothers","shown","Oil Factory produced their 'Believe' video, 2005"]]},
{name:"Four-Mations (Channel 4)",col:"#5A7FA8",kind:"show",yrs:[1990,1998],mem:[["Clare Kitson","core","Created the strand, 1990"],["Norman McLaren","shown"],["Oskar Fischinger","shown","(your info)"],["Len Lye","shown","(your info)"],["Robert Darroll","shown","The Korean Trilogy aired, 1993"],["Keith Griffiths","assoc","Channel 4 avant-garde animation documentaries (link not confirmed)"]]},
{name:"VJ & AV collectives",loose:1,col:"#17A589",kind:"scene",yrs:[1980,2025],mem:[["Weirdcore"],["AntiVJ (Joanie Lemercier)"],["D-Fuse (Michael Faulkner)"],["Addictive TV"],["United Visual Artists (UVA)"],["Vegetable Vision"],["Marcus Lyall"],["Tomato"],["Hex"],["Hexstatic"],["Coldcut"],["The Light Surgeons"],["Emergency Broadcast Network"],["Stakker"],["Cyberthon (VJ Mandala)"],["Merrill Aldighieri (Hurrah)"]]}
];

// ---- shared helpers (used by the charts and the tests) ----
window.NETCIRCLES=window.NETGROUPS.map(g=>[g.name,g.col,g.mem.map(m=>m[0]),g.kind]);
// Expand groups into person-to-person links. Two people link through a group only if their years in it overlap.
// Strong ("same group") links: core with core or member; member with member only in groups of 8 or fewer.
// Weak (influence-strength) links: anyone marked assoc or shown, screenings, and loose movements (loose:1), where
// belonging to the same broad scene is not evidence that two people knew each other.
window.groupEdges=function(YR){const out=[],span=(g,m)=>{const y=YR[m[0]]||[g.yrs[0],g.yrs[1]];return [Math.max(m[3]||y[0],g.yrs[0]),Math.min(m[4]||Math.min(y[1],2025),g.yrs[1])];};
 const strong=r=>!r||r==="core"||r==="member";
 window.NETGROUPS.forEach(g=>{const M=g.mem.map(m=>({id:m[0],r:m[1]||"core",s:span(g,m)})),small=M.length<=8;
  for(let i=0;i<M.length;i++)for(let j=i+1;j<M.length;j++){const a=M[i],b=M[j];if(!strong(a.r)&&!strong(b.r))continue;
   if(Math.min(a.s[1],b.s[1])<Math.max(a.s[0],b.s[0]))continue;
   const weak=g.loose||g.kind==="show"||!strong(a.r)||!strong(b.r)||(a.r==="member"&&b.r==="member"&&!small);
   const k=weak?"i":"g";
   out.push([a.id,b.id,k,"Both in "+g.name,g.name]);}
  (g.near||[]).forEach(([p,note])=>M.filter(m=>m.r==="core").slice(0,3).forEach(m=>out.push([p,m.id,"i",note+" ("+g.name+")",g.name])));});
 return out;};
