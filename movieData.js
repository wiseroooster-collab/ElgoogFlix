const movieData = {
    avengersEndgame: {
        id: 'avengersEndgame', type: 'movie', title: "Avengers Endgame",  url: "https://drive.google.com/file/d/1UsxNtlBxGFp955GwEB-s8wYJCA6bXt7e/preview ",
        imageUrl: "https://lumiere-a.akamaihd.net/v1/images/au_homepage_avengersendgame_hero_short_m_5618553b.jpeg?region=0 ,0,750,668",
        rating: "8.4/10", description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers must figure out a way to bring back their vanquished allies for an epic showdown with Thanos.",
        previewVideoUrl: "https://youtu.be/yUpSFCVam8g ", metaTags: ['Action', 'Sci-Fi', 'Oscar Winner']
    },

spongebob4: {
        id: 'spongebob4', 
        type: 'movie', 
        title: "The SpongeBob Movie: Search for SquarePants",  
        url: "https://drive.google.com/file/d/1QCfesoM4uweiz1azvvgDAdHwVNU3duzF/preview ",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYzdlYmM2YmEtMmQ3Zi00ZjAxLTg2ZjctNzU3NDVkY2RiOTBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
        rating: "7.8/10", 
        description: "SpongeBob SquarePants embarks on his most personal journey yet as he travels to the depths of the ocean to face off against the ghostly Flying Dutchman. This high-stakes adventure blends classic animation with epic underwater visuals as the crew searches for the legendary secrets of Bikini Bottom.",
        previewVideoUrl: "https://youtu.be/3mXz08qVnRA ", 
        displayTags: ['Family Favorite'], 
        metaTags: ['Animation', 'Adventure', 'Comedy', 'Family']
    },

    fnaf2: {
        id: 'fnaf2', type: 'movie', title: "Five Nights At Freddy's 2",  url: "https://drive.google.com/file/d/1dW1XsOWtiL0mGHOFIB8n0rEhLPoa2buJ/preview ",
        imageUrl: "https://img.etimg.com/thumb/width-1200 ,height-900,imgsize-608400,resizemode-75,msid-110211406/news/international/us/five-nights-at-freddys-2-official-release-date-returning-cast-and-what-to-expect.jpg",
        rating: "9.6/10", description: "Five Nights at Freddy's 2: The Movie is a horror story about a night security guard trapped in a pizzeria, where haunted animatronic robots come to life and create terrifying challenges to survive each night.",
        previewVideoUrl: "https://youtu.be/9-0vtqJ6NQk ", displayTags: ['Top Pick'], metaTags: ['Action', 'Horror', 'Sequel']
    },
    jujutsuKaisenExecution: {
      id: 'jujutsuKaisenExecution',
      type: 'movie',
      title: "Jujutsu Kaisen: Execution",
      url: "https://drive.google.com/file/d/1_rsn-B8ejBakMbdkUfL7dCCQ8xL4IH_p/preview ",
      imageUrl: "https://a.storyblok.com/f/178900/1000x1463/6328934579/dan-da-dan-evil-eye.jpg/m/filters:quality(95)format(webp )", // Placeholder: Replace with specific Execution poster if available, currently using a high-quality anime visual placeholder or swap with: "https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtOWJiOWExMWRkZWM0XkEyXkFqcGdeQXVyNzYzMzkyNTM@._V1_.jpg " (Shibuya Arc Visual)
      // Better option for accurate visual based on the content (Shibuya Incident):
      // imageUrl: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/47b0a72e4d0b0b0b58d085e5055e5555.jpe ",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BODMxOWIxYzAtNTNiYi00MTk5LWE2MjUtNjM1MTg3YmQ5NTlhXkEyXkFqcGc@._V1_.jpg ",
      rating: "8.9/10",
      releaseYear: "2025",
      description: "A veil abruptly descends over the busy Shibuya area amid the bustling Halloween crowds, trapping countless civilians inside. As the deadly Culling Game begins, Special Grade sorcerer Yuta Okkotsu is assigned to carry out Yuji Itadori's execution.",
      metaTags: ['Anime', 'Action', 'Dark Fantasy', 'Horror'],
      displayTags: ['New Release', 'Trending'],
       // Optional: Remove if you want it available to everyone
  },
  // --- NEW ADDITIONS ---

  finalDestination: {
      id: 'finalDestination',
      type: 'movie',
      title: "Final Destination",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYzY2YWViNDItNWM1NC00MGFhLTg1NzctMGIyYTMwYTk1MTdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
      rating: "6.7/10",
      year: "2000",
      description: "After a teenager has a terrifying vision of him and his friends dying in a plane crash, he prevents the accident only to have Death hunt them down, one by one.",
      url: "https://drive.google.com/file/d/0B-pxQwOjtZ8gMzJRRWxQWnAxTTA/preview?resourcekey=0-Wit7dQgZtlIjc4x1aQTVRg ",
      metaTags: ['Horror', 'Thriller', 'Supernatural'],
      displayTags: ['Classic Horror']
  },

  mockingjayPart2: {
      id: 'mockingjayPart2',
      type: 'movie',
      title: "The Hunger Games: Mockingjay – Part 2",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_.jpg ",
      rating: "6.6/10",
      year: "2015",
      description: "Katniss and a team of rebels from District 13 prepare for the final battle that will decide the fate of Panem.",
      url: "https://drive.google.com/file/d/1eUDC9S4Mtc9vQRQWa04p8qZIb8OoNQDv/preview ",
      metaTags: ['Action', 'Sci-Fi', 'Adventure'],
      displayTags: ['Fan Favorite']
  },

  minionsRiseOfGru: {
      id: 'minionsRiseOfGru',
      type: 'movie',
      title: "Minions: The Rise of Gru",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZTAzMTkyNmQtNTMzZS00MTM1LWI4YzEtMjVlYjU0ZWI5Y2IzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
      rating: "6.5/10",
      year: "2022",
      description: "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
      url: "https://drive.google.com/file/d/1s2_xsXrnzJXV2Xv9QNptiF8eyJOtdDqI/preview ",
      metaTags: ['Animation', 'Comedy', 'Family'],
      displayTags: ['Kids Choice']
  },

  shrek: {
      id: 'shrek',
      type: 'movie',
      title: "Shrek",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg ",
      rating: "7.9/10",
      year: "2001",
      description: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
      url: "https://drive.google.com/file/d/1Oq4HEmSMhcTqlNd7Mx1js4P601pKrA9v/preview ",
      metaTags: ['Animation', 'Comedy', 'Fantasy'],
      displayTags: ['Classic']
  },

  shazam: {
      id: 'shazam',
      type: 'movie',
      title: "Shazam!",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjdlYzAwYTMtMWJlOC00OTQ5LWJhMmYtMDhjNGY4M2RhMGU4XkEyXkFqcGc@._V1_.jpg ",
      rating: "7.0/10",
      year: "2019",
      description: "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
      url: "https://drive.google.com/file/d/111DMVHuhGLLFunQ1ixi_OG8ui0ckXbfU/preview ",
      metaTags: ['Action', 'Comedy', 'Superhero']
  },

  theSuicideSquad: {
      id: 'theSuicideSquad',
      type: 'movie',
      title: "The Suicide Squad",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMWU3Y2NlZmEtMjJjNS00ZWMxLWE1MzctYWYyMjMzMDdkNTE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
      rating: "7.2/10",
      year: "2021",
      description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      url: "https://drive.google.com/file/d/11nKqV7QKkATlvO7pt8eHlfS32rSHeOVZ/preview ",
      metaTags: ['Action', 'Comedy', 'Superhero'],
      displayTags: ['Action Packed']
  },

  itMovie: {
      id: 'itMovie',
      type: 'movie',
      title: "It",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg ",
      rating: "7.3/10",
      year: "2017",
      description: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, Maine.",
      url: "https://drive.google.com/file/d/1BhQDbp8lXDwS-Q-pq4axufeZI-5TklpR/preview ",
      metaTags: ['Horror', 'Thriller', 'Supernatural']
  },

  voltron: {
      id: 'voltron',
      type: 'series',
      title: "Voltron: Legendary Defender",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjA2MzMzNTg5NV5BMl5BanBnXkFtZTgwMzAzOTc4ODE@._V1_FMjpg_UX1000_.jpg ",
      rating: "8.1/10",
      year: "2016",
      description: "Five unlikely teenagers, transported from Earth to the middle of a sprawling intergalactic war, become pilots for five robotic lions in the battle to protect the universe from evil.",
      metaTags: ['Animation', 'Action', 'Sci-Fi'],
      episodes: {
          '1': [
              { name: "The Rise of Voltron", url: "https://drive.google.com/file/d/184DwJfipVPgSp0NF7Q6FT3OXJarGAqPz/preview ", desc: "Space explorers discover the Blue Lion and are transported to the Castle of Lions." },
              { name: "Some Assembly Required", url: "https://drive.google.com/file/d/14zwQyhhrRAO9NsVnCjnuEQNmtTFUGtq0/preview ", desc: "Princess Allura trains the Paladins to work together to form Voltron." },
              { name: "Return of the Gladiator", url: "https://drive.google.com/file/d/1grus0kzPmTHj-kaHqs_Pp-ctqej9GeaX/preview ", desc: "A new Robeast threatens Arus, forcing the team to find a way to fight back." },
              { name: "Fall of the Castle of Lions", url: "https://drive.google.com/file/d/13enKnunaFll_QlqyL6moBVONUcvF37di/preview ", desc: "The Galra fleet attacks the castle, putting the Paladins on the defensive." },
              { name: "Tears of the Balmera", url: "https://drive.google.com/file/d/1vCfnwuXffbhb-4tRxtDIOOlCIXoYyeqp/preview ", desc: "Hunk and Coran search for a new crystal to power the castle on a living planet." },
              { name: "Taking Flight", url: "https://drive.google.com/file/d/1AdbrwcbHgDSZhiuGpknCZDL2V7Y6A2RW/preview ", desc: "The team lifts off from Arus to continue the fight against Zarkon." },
              { name: "Return to the Balmera", url: "https://drive.google.com/file/d/1QydTB4teVLVULvJw8TOz01L8iLwUrXg8/preview ", desc: "The Paladins return to save the Balmerans from Galra enslavement." },
              { name: "Rebirth", url: "https://drive.google.com/file/d/1JKIiK4TvDy31okIa3oEnNIyuPhYfuAlv/preview ", desc: "The team fights to save the Balmera from disintegration." },
              { name: "Crystal Venom", url: "https://drive.google.com/file/d/1WD6ApYyIr9fofvbk8GYpZ40xTyLSQnNb/preview ", desc: "Allura is haunted by the past as the castle's AI malfunctions." },
              { name: "Collection and Extraction", url: "https://drive.google.com/file/d/1KaNMwaN2nsdpRvVsAqjHD_sD0xB8ZV4P/preview ", desc: "The team infiltrates a Galra base to steal information." },
              { name: "The Black Paladin", url: "https://drive.google.com/file/d/1lgq3qBU-wFz6GsRcezg4fE2TE6ZcExwr/preview ", desc: "Zarkon lures the Paladins into a trap to reclaim the Black Lion." }
          ],
          '2': [
              { name: "Across the Universe", url: "https://drive.google.com/file/d/1OXrTpvxg7omR56pb2gpqO2lRZOx6G8TB/preview ", desc: "Separated by a wormhole, the Paladins must survive on their own." },
              { name: "The Depths", url: "https://drive.google.com/file/d/1C0iUp7GLHESutZkrARzVxhjwHYCn7-NV/preview ", desc: "Lance and Hunk are trapped underwater on a strange planet." },
              { name: "Shiro's Escape", url: "https://drive.google.com/file/d/1NWtnI1BDU78HNcVHUQY9HEtox7PchT6N/preview ", desc: "Shiro struggles to survive on a moon while being hunted." },
              { name: "Greening the Cube", url: "https://drive.google.com/file/d/11pRwUbBaZdxu4j-1Q8_cZ-duZn-asQEa/preview ", desc: "Pidge tries to decipher the DNA of the Olkari forests." },
              { name: "Eye of the Storm", url: "https://drive.google.com/file/d/1Jt1r5_jbt0UpZ2AkZo1v1yRMQHoYvw-w/preview ", desc: "The team regroups to repair the castle but faces internal conflict." },
              { name: "The Ark of Taujeer", url: "https://drive.google.com/file/d/1N0skLhSWujJ2Vi6YiMCYRJ2U0IYFVKud/preview ", desc: "The Paladins try to save a civilization fleeing their dying planet." },
              { name: "Space Mall", url: "https://drive.google.com/file/d/1yFKUg5WQr6xh2Lgn09Gpbx7PabbhykFr/preview ", desc: "Coran takes the team to a space mall for supplies and shenanigans." },
              { name: "The Blade of Marmora", url: "https://drive.google.com/file/d/1IEGA-FsNSJvHqoFTS6Ts8a_C-dpx745r/preview ", desc: "Keith and Shiro seek out the rebel Blade of Marmora group." },
              { name: "The Belly of the Weblum", url: "https://drive.google.com/file/d/1j3H4cQoH_hixiNS6owxjch_ZXcnDiw1x/preview ", desc: "Hunk and Keith travel inside a giant space creature for crystals." },
              { name: "Escape from Beta Traz", url: "https://drive.google.com/file/d/15-M-N1k9mI85MehvW_vHEfdIMIcJYP6G/preview ", desc: "The team launches a mission to break a genius out of prison." },
              { name: "Stayin' Alive", url: "https://drive.google.com/file/d/1Q1asqNeLgD5VDgPdNqQAdGPOs-Vkfonf/preview ", desc: "The Paladins try to secure a new alliance to defeat Zarkon." },
              { name: "Best Laid Plans", url: "https://drive.google.com/file/d/1R9b-is57X1pf2eGd-SSVMJxHfJPnDx_V/preview ", desc: "The team enacts a risky plan to defeat Zarkon once and for all." },
              { name: "Blackout", url: "https://drive.google.com/file/d/1p-G1nlyb1pXYrXpWOKw5crFYFCld7JAx/preview ", desc: "The final battle against Zarkon for the fate of the universe begins." }
          ]
      }
  },

  avatarTheLastAirbender: {
      id: 'avatarTheLastAirbender',
      type: 'series',
      title: "Avatar: The Last Airbender",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg ",
      rating: "9.3/10",
      year: "2005",
      description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
      metaTags: ['Animation', 'Action', 'Fantasy'],
      episodes: {
          '1': [
              { name: "The Boy in the Iceberg", url: "https://drive.google.com/file/d/15udfBu165UrS4V3MRO_Uxldu_9R8_Wxb/preview ", desc: "Katara and Sokka discover Aang frozen in an iceberg." },
              { name: "The Avatar Returns", url: "https://drive.google.com/file/d/1H844xHH0IiAVzXnbqsGGILKlehuHdp0Y/preview ", desc: "Prince Zuko attacks the Southern Water Tribe to capture the Avatar." },
              { name: "The Southern Air Temple", url: "https://drive.google.com/file/d/1WUHHSkVLfGjOQn7e8qpfd8E5K9E_tu3z/preview ", desc: "Aang returns to his home to find out what happened to the Air Nomads." },
              { name: "The Warriors of Kyoshi", url: "https://drive.google.com/file/d/1v0qZbpN8U5bdS4nLV-qPWDrdvVbRl7Sf/preview ", desc: "The gang arrives at Kyoshi Island and meets the Kyoshi Warriors." },
              { name: "The King of Omashu", url: "https://drive.google.com/file/d/1J7t7tzyZbj95Bz48Kvv1KpTgi5oS7Z1h/preview ", desc: "Aang, Katara, and Sokka visit the Earth Kingdom city of Omashu." },
              { name: "Imprisoned", url: "https://drive.google.com/file/d/11piQJJn8JMudHUIgurpmbjfDfLaSLwAg/preview ", desc: "Katara tries to inspire a group of suppressed Earthbenders." },
              { name: "The Spirit World (Winter Solstice Part 1)", url: "https://drive.google.com/file/d/1wDPMyQzBzrMva4n3dEnv7OjpM4SOl4M0/preview ", desc: "Aang finds himself in the Spirit World and encounters a dragon." },
              { name: "Avatar Roku (Winter Solstice Part 2)", url: "https://drive.google.com/file/d/1zZN42_xrGQACwKJyns52IU0OxhABbAAf/preview ", desc: "Aang must reach a Fire Nation temple to speak with Avatar Roku." },
              { name: "The Waterbending Scroll", url: "https://drive.google.com/file/d/1Q6OTlfOCduIu_kxrrHE76m77wpxg7LKD/preview ", desc: "Katara steals a waterbending scroll to teach herself and Aang." },
              { name: "Jet", url: "https://drive.google.com/file/d/1nV-ElRQMmSZeFpLZcSkBE81tXrDmqDIH/preview ", desc: "The gang meets Jet, a rebel leader fighting the Fire Nation." },
              { name: "The Great Divide", url: "https://drive.google.com/file/d/1fPkoVs9OAj7xiJ8sQUEdGWzpeElHEoga/preview ", desc: "Aang tries to settle a feud between two tribes crossing a canyon." },
              { name: "The Storm", url: "https://drive.google.com/file/d/1t7yU4QcsYAkEomEeJ5AtFgbPzVu-Snqm/preview ", desc: "Aang and Zuko's pasts are revealed during a massive storm." },
              { name: "The Blue Spirit", url: "https://drive.google.com/file/d/167-AvnGbtYyr_e7gYgYvotsIRhhg_G8H/preview ", desc: "Aang is captured by Admiral Zhao, but a mysterious warrior helps him." },
              { name: "The Fortuneteller", url: "https://drive.google.com/file/d/1-_2DolnquNPHs9DXKuGSnjlbnXa3Sq2E/preview ", desc: "The group visits a village that relies entirely on a fortuneteller." },
              { name: "Bato of the Water Tribe", url: "https://drive.google.com/file/d/12ZyiPr7hRtlQsJwwxiMxsfSwmxBKEMX_/preview ", desc: "Sokka and Katara reunite with a friend of their father." },
              { name: "The Deserter", url: "https://drive.google.com/file/d/1fo8oeYnM3rcH1XvF6K0fZDMdwC7W-6PK/preview ", desc: "Aang attempts to learn firebending from a Fire Nation deserter." },
              { name: "The Northern Air Temple", url: "https://drive.google.com/file/d/19pgQwlzpoblggdPGb56Rj6RLHuIbapIi/preview ", desc: "The gang finds people living in the ruins of a Northern Air Temple." },
              { name: "The Waterbending Master", url: "https://drive.google.com/file/d/1LMVAHdgWbfTEgj9AjyZGzAX7N3KkXzua/preview ", desc: "The group finally arrives at the Northern Water Tribe." },
              { name: "The Siege of the North Part 1", url: "https://drive.google.com/file/d/1FTv7hTjKVjVA-ZVIvvCqJ0Ns8e33IJfb/preview ", desc: "The Fire Nation launches a massive invasion of the North." },
              { name: "The Siege of the North Part 2", url: "https://drive.google.com/file/d/1j6u2IhsNF_gpRU9n31vQzU9SsIHCmN8F/preview ", desc: "Aang enters the Avatar State to defend the Northern Water Tribe." }
          ],
          '2': [
              { name: "The Avatar State", url: "https://drive.google.com/file/d/1N7v_8cMQFyxeQwDPFV-YwJukKc2Vfczt/preview ", desc: "Aang tries to control the Avatar State with General Fong's help." },
              { name: "The Cave of Two Lovers", url: "https://drive.google.com/file/d/1a3j-7N2EPWLKdCWsi00DN-1mwjfx0rYt/preview ", desc: "The group must navigate a tunnel maze to get to Omashu." },
              { name: "Return to Omashu", url: "https://drive.google.com/file/d/1iaBJePaMh4fHkBZHN8HsvGndg0P8CupL/preview ", desc: "Aang returns to Omashu to find it conquered by the Fire Nation." },
              { name: "The Swamp", url: "https://drive.google.com/file/d/1fVaAnSQraogBG1TeuA97bn5YH5aiIub4/preview ", desc: "A mysterious swamp shows the group visions of their loved ones." },
              { name: "Avatar Day", url: "https://drive.google.com/file/d/1AjhOPXrnDRY8zfGuThHA4QotV4ZsvTOd/preview ", desc: "Aang is put on trial for crimes committed by a past Avatar." },
              { name: "The Blind Bandit", url: "https://drive.google.com/file/d/1tqzeogsnj4xoXXi5SHhqino47UsqjdoX/preview ", desc: "Aang searches for an Earthbending teacher and meets Toph." },
              { name: "Zuko Alone", url: "https://drive.google.com/file/d/1KMZgnLfirMghT528rux6e4OmqP20Mf4r/preview ", desc: "Zuko travels alone through the Earth Kingdom and recalls his past." },
              { name: "The Chase", url: "https://drive.google.com/file/d/12S7wj2BTyfz7vre3VAblcZR0uGeui4oJ/preview ", desc: "Azula and her friends relentlessly pursue Aang and the group." },
              { name: "Bitter Work", url: "https://drive.google.com/file/d/17wPfgiqrFVrIOqKkPIf93ZctuTbu5bcZ/preview ", desc: "Aang begins his Earthbending training with Toph." },
              { name: "The Library", url: "https://drive.google.com/file/d/1GctZFAa2vJRdBASl7mbx4ZYFWJNMVdcm/preview ", desc: "The group finds a buried spirit library with knowledge of the Fire Nation." },
              { name: "The Desert", url: "https://drive.google.com/file/d/1DEOrvlofhcqg6cnA-Jbzj5TZZfoj3OoG/preview ", desc: "Stranded in the desert, the group struggles to survive without Appa." },
              { name: "The Serpent's Pass", url: "https://drive.google.com/file/d/1eXZmKMLktXEM-CfXBvteaerew0umwZeQ/preview ", desc: "The group escorts a family through a dangerous mountain pass." },
              { name: "The Drill", url: "https://drive.google.com/file/d/1mkKzsuJhdEw8SMhjBjoCaClvhpAQajdb/preview ", desc: "Aang must stop a massive Fire Nation drill from breaching Ba Sing Se." },
              { name: "City of Walls and Secrets", url: "https://drive.google.com/file/d/1nVcIxm5QlwMZ8t9WfpfeSu83yfU3ank7/preview ", desc: "The gang arrives in Ba Sing Se and discovers a dark conspiracy." },
              { name: "The Tales of Ba Sing Se", url: "https://drive.google.com/file/d/1plb__fFETLLnFSaRahYWpIQnykQTP6wb/preview ", desc: "Short stories featuring the main characters in the Earth Kingdom city." },
              { name: "Appa's Lost Days", url: "https://drive.google.com/file/d/1Skfnj-zVkbfwYECPUtNHBg8mllUhOFIY/preview ", desc: "The story of what happened to Appa after he was stolen." },
              { name: "Lake Laogai", url: "https://drive.google.com/file/d/18NwUCpXdRY7lQJySpDF2BPaI8aoUvuf0/preview ", desc: "The group searches for Appa in a secret underwater prison." },
              { name: "The Earth King", url: "https://drive.google.com/file/d/1Xer-4tzQR0SdsbWKNOXhMVM78s_CNmEg/preview ", desc: "The gang storms the Earth King's palace to tell him the truth." },
              { name: "The Guru", url: "https://drive.google.com/file/d/1lkrFpYEE1ieZLVxNT-kvj51fonjkXXLC/preview ", desc: "Aang meets a Guru to learn how to control the Avatar State." },
              { name: "The Crossroads of Destiny", url: "https://drive.google.com/file/d/1EFNI7zGpDmwPNAoKA_s_S03cUxpPV3C5/preview ", desc: "The fate of the Earth Kingdom hangs in the balance in the season finale." }
          ],
          '3': [
              { name: "The Awakening", url: "https://drive.google.com/file/d/1UkzzC0QzGzA_I7xVo3w0pn_fSmtb2sty/preview ", desc: "Aang wakes up to find the world believes he is dead." },
              { name: "The Headband", url: "https://drive.google.com/file/d/1wMRV5pdhQd1qtqjb2gmezkhXAXZCXnFR/preview ", desc: "Aang goes undercover in a Fire Nation school." },
              { name: "The Painted Lady", url: "https://drive.google.com/file/d/1dPKKCDhLVRHlVL-uok62udIZ0j4WziQ_/preview ", desc: "Katara helps a village suffering from pollution." },
              { name: "Sokka's Master", url: "https://drive.google.com/file/d/1mLJhbSzTGw4TVzTPjfkLFQ0lylm-s0FU/preview ", desc: "Sokka seeks a master to teach him swordsmanship." },
              { name: "The Beach", url: "https://drive.google.com/file/d/1mTqcnBBqjGAxCOH3kR1fn4PrxrJxtB2f/preview ", desc: "Zuko, Azula, Mai, and Ty Lee go on a vacation." },
              { name: "The Avatar and the Fire Lord", url: "https://drive.google.com/file/d/1erWE3IxXZ8s7nUSMdcXtZBTsJ6M6x453/preview ", desc: "Aang and Zuko learn about the history of their ancestors." },
              { name: "The Runaway", url: "https://drive.google.com/file/d/1PZjBuJvZeJM6ngXA-vRppiGe2fnattgk/preview ", desc: "Toph gets into trouble scamming Fire Nation civilians." },
              { name: "The Puppetmaster", url: "https://drive.google.com/file/d/1m4BPPcdHKLDE7Y6LGpmxn2lrQImt2xrO/preview ", desc: "The group meets a waterbender who hides a dark secret." },
              { name: "Nightmares and Daydreams", url: "https://drive.google.com/file/d/11sJzsCDOO73GCfeRGlz9_H1ZWrqbRFap/preview ", desc: "Aang suffers from anxiety nightmares before the invasion." },
              { name: "The Day of Black Sun Part 1", url: "https://drive.google.com/file/d/1ZpMJN5Gbs6CdDsLOiFHf5v-IYqPmqShF/preview ", desc: "The invasion of the Fire Nation begins." },
              { name: "The Day of Black Sun Part 2", url: "https://drive.google.com/file/d/1FgOx-rpRORq3qkb3ua21YuUBFquLpQrT/preview ", desc: "The eclipse arrives, and the group confronts the Fire Lord." },
              { name: "The Western Air Temple", url: "https://drive.google.com/file/d/1iAK1JFeE2HUV8F9_8ZNcGtd6Q7X-TH_f/preview ", desc: "Zuko tries to join Aang's group at the Western Air Temple." },
              { name: "The Firebending Masters", url: "https://drive.google.com/file/d/1W1XOF66x0KI827kI_6tY0QX7egMpk_6V/preview ", desc: "Aang and Zuko seek the original source of firebending." },
              { name: "The Boiling Rock Part 1", url: "https://drive.google.com/file/d/1uwmDf8E_JVNqlasbVmHQiZN6l5gMtePe/preview ", desc: "Sokka and Zuko infiltrate a high-security prison." },
              { name: "The Boiling Rock Part 2", url: "https://drive.google.com/file/d/19wsR3VTy8MPxzEy4pUQTjLSocg-PAA9x/preview ", desc: "The escape plan is put into motion." },
              { name: "The Southern Raiders", url: "https://drive.google.com/file/d/10FI1wbJ1SKRekfnfibbZiiRVloTtR2Z6/preview ", desc: "Katara confronts the man who killed her mother." },
              { name: "The Ember Island Players", url: "https://drive.google.com/file/d/1aqqsusv9aQCrNTurT-BvGxydAXUW4vmh/preview ", desc: "The group watches a play about their adventures." },
              { name: "Sozin's Comet Part 1", url: "https://drive.google.com/file/d/1wY4vQJKrnpbaCox66KtsuuTlIr8PoslR/preview ", desc: "Aang disappears before the final battle." },
              { name: "Sozin's Comet Part 2", url: "https://drive.google.com/file/d/1D6Xr5rMD0AwMS4AW_uav9a0DlTfd7vpH/preview ", desc: "The Order of the White Lotus liberates Ba Sing Se." },
              { name: "Sozin's Comet Part 3", url: "https://drive.google.com/file/d/15T42ouy3t92Dq_IXMr8SkRGlj-enAcbK/preview ", desc: "Zuko and Katara duel Azula, while Aang faces Ozai." },
              { name: "Sozin's Comet Part 4", url: "https://drive.google.com/file/d/1Y4-MQJLp0o8Exsd-00Hyl_jC6SFhXUNE/preview ", desc: "The final showdown determines the fate of the world." }
          ]
      }
  },

  digitalCircus: {
      id: 'digitalCircus',
      type: 'series',
      title: "The Amazing Digital Circus",
      imageUrl: "https://images.contentstack.io/v3/assets/bltfeaff5a870b24479/blt2baee0f49f639a9b/66cd65ac8bdacfb6ce2468c2/Blog_pic_2.jpg?format=webp&crop=16%3A9&width=1120 ",
      rating: "TV-PG",
      year: "2023",
      description: "A woman gets trapped in a crazy virtual world along with five other humans and is now subject to the whims of wacky AI and their own personal traumas.",
      metaTags: ['Animation', 'Comedy', 'Indie'],
      episodes: {
          '1': [
              { name: "Pilot", url: "https://drive.google.com/file/d/1wFIbaFE1hBdckzU2UGPaPTQjgJJSINaX/preview ", description: "Pomni wakes up in the circus and meets Caine and the others." },
              { name: "The Candy Carrier Saga", url: "https://drive.google.com/file/d/1Eft1mman8eVaWNOlBuuRzKYWeMVAuihz/preview ", description: "The gang goes on a candy-filled adventure that turns chaotic." },
              // Additional content provided as Extras
              { name: "Episode 3 ", url: "https://drive.google.com/file/d/1hIT68aBzQF2C-nxLdUEIUYIoX1tq4Mus/preview ", description: "Additional circus content." },
              { name: "Episode 4 ", url: "https://drive.google.com/file/d/1Mi-gW68h9AgUXQa_JPj9C7Ck5B-I4GBl/preview ", description: "Additional circus content." },
              { name: "Episode 5 ", url: "https://drive.google.com/file/d/1aYe-09FJct48qXwU3qr43di2jz8W21TH/preview ", description: "Additional circus content." },
              { name: "Episode 6", url: "https://drive.google.com/file/d/1Q7h67Mdt59vhNPHxk8f0kN8UrdCpgskj/preview ", description: "Additional circus content." }
          ]
      }
  },
  cobraKai: {
      id: 'cobraKai',
      type: 'series',
      title: "Cobra Kai",
      imageUrl: "https://cdn11.bigcommerce.com/s-4zmdpn3a2b/images/stencil/original/products/771/1099/ck411__71652.1640180646.jpg?c=1 ",
      rating: "Early Access",
      description: "Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again. Available now for VIP members before its official release.",
      previewVideoUrl: "https://youtu.be/gMxb7oRfeHk ",
      metaTags: ['Action', 'Comedy', 'Drama', 'Martial Arts'],
      
      // This makes the entire series exclusive to VIPs until you remove it
      

      episodes: {
          '1': [
              {
                  name: "Episode 1: Ace Degenerate",
                  servers: {
                      standard: "https://drive.google.com/file/d/1creJ_0fa7pU0Y--FQEiJLMoAOjehXOGK/preview ",
                      vip: "https://drive.google.com/file/d/1EhoTaToPa6KAQppJU1OoZdhOARyKmccj/preview "
                  },
                  description: "Down-and-out Johnny Lawrence seeks redemption by reopening the infamous Cobra Kai karate dojo."
              },
              {
                  name: "Episode 2: Strike First",
                  servers: {
                      standard: "https://drive.google.com/file/d/1xFxMrl46i_e13CBHMiAiyhHtaj4_YiL_/preview ",
                      vip: "https://drive.google.com/file/d/1nsb8qhmaTVbfuLUnca5iDgmNHo_2Jhyk/preview "
                  },
                  description: "Daniel is disturbed that Cobra Kai is back. Johnny gains his first student, Miguel."
              },
              {
                  name: "Episode 3: Esqueleto",
                  servers: {
                      standard: "https://drive.google.com/file/d/1iwEfqnbTiJWny1z5PGKfRwE7cvGPGE2w/preview ",
                      vip: "https://drive.google.com/file/d/10GtECE5jZGXgxg11xFCQoVxU2_AhM-HU/preview "
                  },
                  description: "Johnny tries to recruit more students by showing off Cobra Kai at a Valley festival."
              },
              {
                  name: "Episode 4: Cobra Kai Never Dies",
                  servers: {
                      standard: "https://drive.google.com/file/d/1P5eP81RSciD-ak0uo6yg1ENGF0CGpVJN/preview ",
                      vip: "https://drive.google.com/file/d/17ZpmfOT5uB3aWVl9Om5ZiAeafHf5-Zgu/preview "
                  },
                  description: "When Daniel's billboard is vandalized, he suspects Johnny. Johnny's estranged son, Robby, gets into trouble."
              },
              {
                  name: "Episode 5: Counterbalance",
                  servers: {
                      standard: "https://drive.google.com/file/d/1UGxf78jrV4PpsMgoxryDmqZcitD5lMgm/preview ",
                      vip: "https://drive.google.com/file/d/1pywF6mFWO5K1Ms2-gH50FU-fdQ9KDKe2/preview "
                  },
                  description: "Daniel decides to start teaching karate again to counter Johnny's influence. Miguel stands up to his bullies."
              },
              {
                  name: "Episode 6: Quiver",
                  servers: {
                      standard: "https://drive.google.com/file/d/1q2a3wdVYZfeQdQFdZOexOU01YMXIm5a1/preview ",
                      vip: "https://drive.google.com/file/d/1rBtA7ZamN_j6zWUUK5xwxCRsSv3HB9AU/preview "
                  },
                  description: "Johnny's new students have mixed feelings about his harsh training methods. Daniel's mentoring doesn't go as planned."
              },
              {
                  name: "Episode 7: All Valley",
                  servers: {
                      standard: "https://drive.google.com/file/d/1ZcIgW6oXOQVzzTg8TdfuIjQgRdJaG3P_/preview ",
                      vip: "https://drive.google.com/file/d/1xFth6B0NJpvLGL6KQKIKqpoPf62PoX2I/preview "
                  },
                  description: "Cobra Kai's application to compete in the All Valley Karate Tournament is challenged."
              },
              {
                  name: "Episode 8: Molting",
                  servers: {
                      standard: "https://drive.google.com/file/d/1eN7SpAP7rmRqY-Xpbm8J9JXk_dndTO1b/preview ",
                      vip: "https://drive.google.com/file/d/1G0gGY06N-UCviaYuzn2US1bJbF4_U9P9/preview "
                  },
                  description: "Johnny prepares his students for the tournament with a brutal training session in the woods."
              },
              {
                  name: "Episode 9: Different but Same",
                  servers: {
                      standard: "https://drive.google.com/file/d/1-Nb3uth4sFor3-s-51zu6pGCjAVSzom0/preview ",
                      vip: "https://drive.google.com/file/d/1xXW8FHvUwXk2ISpIQWSo5mNgqy8rhbaC/preview "
                  },
                  description: "Johnny runs into an old flame. Daniel and Johnny have an unexpected moment of reconciliation."
              },
              {
                  name: "Episode 10: Mercy",
                  servers: {
                      standard: "https://drive.google.com/file/d/19uOsaq1o7g_HR5Ige8sCE3O4Lq3zqFzp/preview ",
                      vip: "https://drive.google.com/file/d/1NEYPBzgkysMo2md7Bw7HhHYdMa2ZuKSr/preview "
                  },
                  description: "The All Valley Under-18 Karate Championship begins, pitting Cobra Kai against Miyagi-Do in a climactic showdown."
              }
          ]
      }
  },
  
  deathNote: {
      id: 'deathNote',
      type: 'series',
      title: "Death Note",
      imageUrl: "https://m.media-amazon.com/images/I/61k3qe5zitL._AC_UF894 ,1000_QL80_.jpg",
      rating: "1 Season",
      description: "High school student Light Yagami finds a mysterious notebook, the 'Death Note,' that grants him the supernatural power to kill anyone whose name he writes in its pages. He begins a secret crusade to rid the world of criminals, attracting the attention of both the police and the brilliant detective known only as L.",
      previewVideoUrl: "https://youtu.be/o7W1K42Dfqo ",
      metaTags: ['Anime', 'Thriller', 'Crime', 'Supernatural'],
      episodes: {
          '1': [
              { name: "Episode 1: Rebirth", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4My04Nmh0ZURmeW8/preview ", description: "High school student Light Yagami discovers the Death Note, a mysterious notebook dropped by the Shinigami Ryuk." },
              { name: "Episode 2: Confrontation", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4cUJBVURKcnVyd0k/preview ", description: "As criminals around the globe begin to die, the super-detective L is brought in to track down the killer, whom the media dubs 'Kira'." },
              { name: "Episode 3: Dealings", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4TlU2TmhTSEx6YVk/preview ", description: "Light and L begin their mental battle, with Light testing the limits of the Death Note's power." },
              { name: "Episode 4: Pursuit", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4eGQ3cjlCWGpQTEE/preview ", description: "L narrows his focus on the Kanto region, forcing Light to take greater risks to avoid suspicion." },
              { name: "Episode 5: Tactics", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4VjR1YWJ6X1l6WUU/preview ", description: "L gets closer to the truth, leading Light to manipulate his actions to clear his name." },
              { name: "Episode 6: Unraveling", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4Z25vNDIzNHVLTG8/preview ", description: "Light encounters a powerful new adversary in his pursuit of justice." },
              { name: "Episode 7: Overcast", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4TzlEdFFYSjZ0Szg/preview ", description: "The investigation team is shaken by unforeseen events as Kira’s power grows." },
              { name: "Episode 8: Gaze", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4X284aHFTMXNSWUU/preview ", description: "A major breakthrough occurs when Light discovers a shocking ability related to the Death Note." },
              { name: "Episode 9: Encounter", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4V2FhR2hwN3BPVmc/preview ", description: "Light and L meet in person, adding intense psychological tension to their cat-and-mouse game." },
              { name: "Episode 10: Doubt", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4YVJyTnBpRGs5Q1k/preview ", description: "L's trust issues complicate the case, leading to internal friction within the investigation team." },
              { name: "Episode 11: Assault", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4cFhIM1FBeXJrenM/preview ", description: "The cat and mouse game turns into a dangerous physical encounter." },
              { name: "Episode 12: Love", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4a3Fya0wwRF9pTG8/preview ", description: "A new, fanatical Kira emerges, complicating Light’s plans and threatening his secrecy." },
              { name: "Episode 13: Confession", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4bkVUdDJrR0tuX1E/preview ", description: "Misa Amane confronts Light, forcing him into a difficult alliance." },
              { name: "Episode 14: Friend", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4ejRlMFg5dlhVXzg/preview ", description: "Light and Misa team up to defeat L, but L remains highly suspicious." },
              { name: "Episode 15: Wager", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4RWNGSkJnQVNlVWs/preview ", description: "L takes a drastic step, placing both Light and Misa under constant surveillance." },
              { name: "Episode 16: Scrutiny", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4eW9mcF9zZFZSYmM/preview ", description: "The pressure mounts as L continues his tireless scrutiny of Light." },
              { name: "Episode 17: Execution", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4NGRpdEJwTURoNVk/preview ", description: "Light executes a dangerous plan that requires him to relinquish his memories." },
              { name: "Episode 18: Allies", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4dXhUQXcxMG53YkU/preview ", description: "Light joins L's task force, determined to catch the new Kira while clearing his own name." },
              { name: "Episode 19: Matsuda", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4bl9HMmViaDZFa0k/preview ", description: "Matsuda finds himself in danger while investigating a new development in the Kira case." },
              { name: "Episode 20: Makeshift", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4cFlIWWQ0MmZIdTg/preview ", description: "The team encounters a new Death Note user who possesses powerful Shinigami Eyes." },
              { name: "Episode 21: Performance", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4cjZBclA1TkJHOEU/preview ", description: "Light uses his charisma and intellect to manipulate events from within the task force." },
              { name: "Episode 22: Guidance", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4d2tITmwxT0xyM0E/preview ", description: "Light receives new instructions from Ryuk as the investigation reaches a critical point." },
              { name: "Episode 23: Frenzy", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4X21BRkxQSE5RSWc/preview ", description: "L and Light's uneasy partnership is pushed to its limits during a major incident." },
              { name: "Episode 24: Revival", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4cnpxZEtEZ1UxZlk/preview ", description: "The intense battle between Light and L reaches its devastating conclusion." },
              { name: "Episode 25: Silence", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4SFBTbXV1eUVySzg/preview ", description: "In the aftermath, the world struggles to move on, and the investigation faces an uncertain future." },
              { name: "Episode 26: Renewal", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4ZmhTM0NYV3FFcU0/preview ", description: "Years later, a new generation of investigators steps up to take L's place, mentored by his allies." },
              { name: "Episode 27: Abduction", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4Q0VteDBiX2tfZTQ/preview ", description: "Kira continues his reign, but is challenged by L's true successors: Near and Mello." },
              { name: "Episode 28: Impatience", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4VHdCRnp5WDZkVzQ/preview ", description: "Mello takes drastic action, forcing Light to respond quickly to protect his identity." },
              { name: "Episode 29: Father", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4X3N4X2E4TWdSYUU/preview ", description: "Light’s father becomes deeply involved in the desperate search for the Death Note." },
              { name: "Episode 30: Justice", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4emRPSW1HQUNJWVk/preview ", description: "The conflict between Kira and the new investigators intensifies, with both sides making risky moves." },
              { name: "Episode 31: Transfer", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4dFJBS3NCVTJPUk0/preview ", description: "Near implements a complex strategy to draw Kira out into the open." },
              { name: "Episode 32: Selection", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4bjRrR3ZTaDZOSnM/preview ", description: "Kira must choose his next move carefully as the net closes around him." },
              { name: "Episode 33: Scorn", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4MWxqZzZFTXFIajA/preview ", description: "Near and Mello’s combined efforts put the task force under immense pressure." },
              { name: "Episode 34: Vigilance", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4aVItTWNrdEZ0Wmc/preview ", description: "The final showdown is meticulously planned, but an unexpected variable remains." },
              { name: "Episode 35: Malice", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4YU9uejFITTFVeVU/preview ", description: "The final confrontation begins, where Light, Near, and Mello face off to determine the world's fate." },
              { name: "Episode 36: 1.28", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4d3lxSVNnNWJ3cXc/preview ", description: "Light's final plan is set in motion, leading to betrayal and devastating reveals." },
              { name: "Episode 37: New World", url: "https://drive.google.com/file/d/0B4MmtgsAR4q4RTRjUkNuMjRpWjQ/preview ", description: "The dramatic conclusion of the Kira case and the ultimate fate of the Death Note." }
          ]
      }
  },

  detectivePikachu: {
      id: 'detectivePikachu',
      type: 'movie',
      title: "Pokémon Detective Pikachu",
      servers: { 
          standard: "https://drive.google.com/file/d/1lbcxI_SXJBrqnxe4GnZYIk5VDhKxCgoF/preview " 
      },
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_FMjpg_UX1000_.jpg ",
      rating: "6.5/10",
      description: "In a world where people collect Pokémon to do battle, a young man comes across an intelligent talking Pikachu who seeks to be a detective. After the mysterious disappearance of his father, the two team up to uncover a shocking plot that threatens their entire universe.",
      previewVideoUrl: "https://youtu.be/bILE5BEyhdo ",
      metaTags: ['Live-Action', 'Family', 'Adventure', 'Comedy']
  },
  aliceInBorderland: {
      id: 'aliceInBorderland',
      type: 'series',
      title: "Alice in Borderland",
      imageUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202509/alice-in-borderland-3-261859934-16x9_0.jpg?VersionId=_ddhS88zv_TPv.cMQTNSjTaO2KAvOIP_&size=690:388 ",
      rating: "1 Season", // Updated to 1 Season
      description: "Arisu, a listless, jobless and video game-obsessed young man, finds himself and his two friends suddenly transported to a parallel Tokyo. In this strange world, they are forced to compete in a series of deadly games to survive. After surviving a harrowing escape, Arisu and Usagi struggle to return to their normal lives, only to be drawn back into a new, more mysterious phase of the deadly game.",
      previewVideoUrl: "", // Add a trailer link if available
      metaTags: ['Thriller', 'Sci-Fi', 'Survival', 'Japanese'],
      
      // Removed the 'upcoming' item, transitioning to a full series object
      episodes: {
          '1': [
              { 
                  name: "Episode 1: Ace of Spades", 
                  servers: { 
                      standard: "https://drive.google.com/file/d/1lN8kwZr3fZaHt7Hg0D7VlwZVmPTNHMUG/preview ", 
                      vip: "https://drive.google.com/file/d/1lN8kwZr3fZaHt7Hg0D7VlwZVmPTNHMUG/preview " // Use standard as vip if no separate VIP link
                  },
                  description: "Arisu and his friends are suddenly transported to a desolate Tokyo and forced to play a high-stakes game of survival. **(VIP Early Access)**",
                  accessLevel: 'early-access' // Example of using Early Access on a series episode
              },
              { 
                  name: "Episode 2: Ace of Hearts", 
                  url: "https://drive.google.com/file/d/17FxyDb-L-iHPjCHL6Ca53oUbpH7tP9hw/preview ", 
                  description: "The group is challenged with a difficult game that tests their intelligence and their bonds."
              },
              { 
                  name: "Episode 3: King of Clubs", 
                  url: "https://drive.google.com/file/d/1ksJPZW8JUXEpDDjwrr1JnGNxCUSx7oXF/preview ", 
                  description: "A solo challenge forces the players to rely on brute strength and endurance in a dangerous new setting."
              },
              { 
                  name: "Episode 4: Queen of Diamonds", 
                  url: "https://drive.google.com/file/d/1pslVeBW2q8qK3m2nhz4Tdg6JmZ5uYD-D/preview ", 
                  description: "A manipulation game of trust and betrayal pits players against one another in a confined space."
              },
              { 
                  name: "Episode 5: The Beach - Part 1", 
                  url: "https://drive.google.com/file/d/1c5lysmWs3R_HmXKq8QqfwM-ig1sPwIYK/preview ", 
                  description: "Arisu and Usagi seek refuge and allies at a mysterious community called 'The Beach,' but things are not as they seem."
              },
              { 
                  name: "Episode 6: The Beach - Part 2", 
                  url: "https://drive.google.com/file/d/15WgaV2ve066StaD_RNiJYQu_U5YlF2EX/preview ", 
                  description: "The true nature of 'The Beach' is revealed, forcing Arisu to choose between survival and moral compromise."
              },
              { 
                  name: "Episode 7: Ten of Hearts", 
                  url: "https://drive.google.com/file/d/16GrdRdpvZui2LIC1IfbUyx3ED885AcZe/preview ", 
                  description: "A final, chaotic game at the Beach is held to collect all the remaining cards, leading to bloodshed and psychological torment."
              },
              { 
                  name: "Episode 8: The Borderland's Queen", 
                  url: "https://drive.google.com/file/d/1wVZQe4tunFomghNO2ybhO1ZNlXcmEJBt/preview ", 
                  description: "The survivors of the Beach game face a terrifying new reality, realizing the deadly games are far from over."
              }
          ]
      }
  },
  familyGuy: {
      id: 'familyGuy',
      type: 'series',
      title: "Family Guy",
      accessLevel: 'vip-only',
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMGUzZDc1OTktNTVhZS00YTQwLWJlMGMtN2NkNWQwNjJmNjQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
      rating: "23+ Seasons",
      description: "The misadventures of the Griffins, a dysfunctional family living in the fictional town of Quahog, Rhode Island. This irreverent animated comedy often uses cutaway gags and cultural satire to push boundaries. **Sorry, due to the immense size of the show, some seasons may not be in chronological order or have all episodes present.**",
      // The provided video clip URL
      previewVideoUrl: "https://youtu.be/FAlN0sdR4y4 ", 
      metaTags: ['Animation', 'Comedy', 'Satire', 'Adult'],
      // Assigning different wallpapers to seasons for visual variety
      seasonImages: {
          '1': 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ',
          '2': 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ',
          '3': 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ',
          '4': 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ',
          // Cycling back through the 4 season images for the remaining 19 seasons
          '5': 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ',
          '6': 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ',
          '7': 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ',
          '8': 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ',
          '9': 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ',
          '10': 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ',
          '11': 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ',
          '12': 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ',
          '13': 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ',
          '14': 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ',
          '15': 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ',
          '16': 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ',
          '17': 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ',
          '18': 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ',
          '19': 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ',
          '20': 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ',
          '21': 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ',
          '22': 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ',
          '23': 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ',
      },
      episodes: {
          '1': [
              { name: "Episode 1: Death Has a Shadow", url: "https://drive.google.com/file/d/1MlW9gQUj2awccOkyN5hWsAyHQotqtprs/preview ", description: "Peter accidentally claims welfare money, leading to a hilarious legal battle.", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Episode 2: I Never Met the Dead Man", url: "https://drive.google.com/file/d/1rbEEaViuyaHurRqVTKl6Fi44zWpRCdD2/preview ", description: "Peter loses his driver's license and convinces Meg to secretly drive him around.", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Episode 3: Chitty Chitty Death Bang", url: "https://drive.google.com/file/d/1kxQK0K3Vxfs3YET3RQL5CB2IML_5R2FP/preview ", description: "Peter tries to make his own amusement park after being rejected from Six Flags.", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Episode 4: Mind Over Murder", url: "https://drive.google.com/file/d/17NCz9nawhjEzZZWQy1BPUAT6oGH-9HbQ/preview ", description: "Lois encourages Peter to start a neighborhood pub after he gets in trouble for hitting a pregnant woman.", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Episode 5: A Hero Sits Next Door", url: "https://drive.google.com/file/d/1nwkGqoPh7xIkegq6l2g7CtWbFN-dzlmt/preview ", description: "A new neighbor, an action movie star, moves in and becomes Peter's new obsession.", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Episode 6: The Son Also Draws", url: "https://drive.google.com/file/d/13yOXNF6vgYigu0ota8lUQWx9B7KhW27L/preview ", description: "The family takes a road trip to the Grand Canyon so Chris can return his drawing to Disney.", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Episode 7: Brian: Portrait of a Dog", url: "https://drive.google.com/file/d/1ugonO8JfU5g5riLKS6LniLQ7z9XKmow_/preview ", description: "Brian is unfairly punished and runs away, leading him to question his place in the family.", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' }
          ],
          '2': [
              { name: "Episode 1: Peter, Peter, Caviar Eater", url: "https://drive.google.com/file/d/1Z73zMcFUfUHgG6ty5MINjTvc3434wLFE/preview ", description: "The family inherits a mansion and briefly becomes a part of high society.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 2: Holy Crap", url: "https://drive.google.com/file/d/1P91QL53YdAMty4j-5FPRTXDk7M1DqxG4/preview ", description: "Peter's religious father comes to visit, creating chaos in the Griffin household.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 3: Da Boom", url: "https://drive.google.com/file/d/1O3FdgTd4CHIPtAIbei4kJJQh5LKXC1a4/preview ", description: "The Griffins survive a Y2K-induced apocalypse and must travel to find a new place to live.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 4: Brian in Love", url: "https://drive.google.com/file/d/16td0Z3Cwfc3bHP5qhAT7iAQwC380xy8y/preview ", description: "Brian accidentally hits someone with a car and must deal with the psychological fallout.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 5: Love Thy Trophy", url: "https://drive.google.com/file/d/1Qw8c5E6QRiauXcZMbivB270eCJG-9DWF/preview ", description: "Peter and Lois win a trophy and compete with the Swansons and the Browns for the custody of a baby.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 6: Death Is a Bitch", url: "https://drive.google.com/file/d/1PT8rVEI88sC1PCLdfiyzL7FTfsTsgBaB/preview ", description: "When Death comes for Peter, he injures him and takes his place, preventing anyone from dying.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 7: Road to Rhode Island", url: "https://drive.google.com/file/d/1v3EllI_QDLJMAxXq3PxiDdgrVJcbPWzt/preview ", description: "Brian and Stewie get separated from the family and embark on a cross-country journey.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 8: Let's Go to the Hop", url: "https://drive.google.com/file/d/1vyDVnJ8hhriAxJytUAPhtmdIDihn9P5l/preview ", description: "Peter goes undercover at Meg's high school to stop a toad-licking craze.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 9: E. Peterbus Unum", url: "https://drive.google.com/file/d/1z8AWlYG9ZGW72XSAE8g0GYRs6KrI-LQQ/preview ", description: "Peter creates his own sovereign nation in his backyard after a zoning dispute.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 10: The Story on Page 1", url: "https://drive.google.com/file/d/1Cm2yjjyeavOUVgfVYXtG9NRF-UJJLibN/preview ", description: "Lois becomes a reporter for the local newspaper, and Peter tries to help with her stories.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 11: Wasted Talent", url: "https://drive.google.com/file/d/105HvwNamsu4b33w00RMw2XzEbZS28LuU/preview ", description: "Peter finds a golden ticket to a brewery, which leads him on a strange tour.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 12: The Kiss Seen Around the World", url: "https://drive.google.com/file/d/11l34i2CHVk_lsEfYlQw1ca0luRZXx6lh/preview ", description: "Meg lands an internship at a TV station, where she witnesses a famous on-air kiss.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 13: The Thin White Line", url: "https://drive.google.com/file/d/13sE3D-8OIfSeybGqc1fdT_fh7a0O-NzK/preview ", description: "Brian becomes a drug-sniffing dog at an airport, leading to a major moral dilemma.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 14: Emission Impossible", url: "https://drive.google.com/file/d/1Ao2wOxXZTW8ZtsX5Y30OEnsD4mKsqHEm/preview ", description: "Stewie is jealous of a new baby and tries to travel back in time to prevent him from being born.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 15: Road to the Multiverse", url: "https://drive.google.com/file/d/1tNyaJ7OuzSXQ32nsU5mNrmrlhHEOW6PK/preview ", description: "Brian and Stewie travel through various parallel universes using a dimensional remote.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 16: Three Kings", url: "https://drive.google.com/file/d/1AOjByRsMAwZJlbUNiVD6dIMEb--ks7R8/preview ", description: "The Griffins parody three Stephen King stories: *Stand by Me*, *Misery*, and *The Shawshank Redemption*.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 17: Peter's Two Dads", url: "https://drive.google.com/file/d/1JUHW30UZpMHiTlRphPVHOH9BIA8nSj42/preview ", description: "Peter meets his biological father, an Irish man who immediately despises him.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 18: Wasted Talent (Duplicate)", url: "https://drive.google.com/file/d/1SUcDnyvsYR3ecK8rIDwg58m_uTtzcmE5/preview ", description: "A duplicate entry, likely a re-upload of a previous episode. The Griffins' chaotic life continues.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 19: The Father, The Son, and The Holy Fonz", url: "https://drive.google.com/file/d/10xQ9IbYoEmpPZ0M8krCDZmyWvi1qsgbi/preview ", description: "Peter starts his own religion centered around the character Fonzie from *Happy Days*.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 20: He's Too Sexy for His Fat", url: "https://drive.google.com/file/d/1BbWjU30OoFrau2hIFVXJ-cm6Kmcqiq9J/preview ", description: "Peter gets plastic surgery to become skinny, but his new looks make him arrogant and unbearable.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Episode 21: Road to the Multiverse (Duplicate)", url: "https://drive.google.com/file/d/1g1-F6AgjDAmgUqLjulhVIh6fIqPa57iS/preview ", description: "A duplicate entry, likely a re-upload of a previous episode. Brian and Stewie's dimensional journey.", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' }
          ],
          '3': [
              { name: "Family Guy S3 Episode 1 (Duplicate)", url: "https://drive.google.com/file/d/1WPkZWTLdCx1ZbOtTIWNs4iFIfBPE8qRC/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E1)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 2 (Duplicate)", url: "https://drive.google.com/file/d/1T_6gmYvie742FMdv_NoRsvn2hXPFKwN_/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E2)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 3 (Duplicate)", url: "https://drive.google.com/file/d/1OVJc-K_NLtg9smwE6jhIDZPUdiQNQMEU/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E3)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 4", url: "https://drive.google.com/file/d/1xivPYcKnL_uPG3RrEsEnZB8uAo6kiyxn/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E4)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 5", url: "https://drive.google.com/file/d/1VI1ZgJO3AhEJEMWPvTZqn8k82Doyjpwu/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E5)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 6", url: "https://drive.google.com/file/d/1dH4dYyXCcl_-vEuGf5VepucZtVnSztby/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E6)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 7", url: "https://drive.google.com/file/d/1lVKLk1S1lnAF9laqStSUzM4PHta5qLiW/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E7)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 8", url: "https://drive.google.com/file/d/16p2HGh5vJd9IESGGoZeFa3wEZaDwvDAy/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E8)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 9", url: "https://drive.google.com/file/d/1kZGu-cUX1f5WUMfwlU7xjg99Vxwba63b/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E9)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 10", url: "https://drive.google.com/file/d/18RWSDSFRRZvef2VUffBShs4SDr4VDk-V/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E10)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 11", url: "https://drive.google.com/file/d/1HDRz6XqZlaLuuu6L3Lnd-nmK2PLrya-n/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E11)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 12", url: "https://drive.google.com/file/d/1axuaM-wL8KiZakhgmSDHavpW8Do2ynyN/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E12)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 13", url: "https://drive.google.com/file/d/1rK6oIL_D4HjZX4_XL8HkJWJIvZpqDog1/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E13)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 14", url: "https://drive.google.com/file/d/17C1aFzBBnkYYI3KW-_zH28O9uKbf38hb/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E14)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 15", url: "https://drive.google.com/file/d/1iaXwvn0TpCSaDqXePPA139v0AFMELjGz/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E15)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 16", url: "https://drive.google.com/file/d/1dED-goEjn_ZwTgCL7BNkvlWhxxvmYrG8/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E16)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 17", url: "https://drive.google.com/file/d/1gqWuqUcn6qusNNZaB061-Sfl6ZmQw0jP/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E17)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 18", url: "https://drive.google.com/file/d/1-cuNyaP06prT2eVORv7yV2oMBxBveLoj/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E18)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 19", url: "https://drive.google.com/file/d/18eEO8MczMA2qjMByautYgJcjw0RjQO1Z/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E19)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 20", url: "https://drive.google.com/file/d/1ljC6y0MLqvyP_Xochq4hDAybIBW28CRI/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E20)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 21", url: "https://drive.google.com/file/d/1waj01GHU_ES7J0RrfjkaxFSTTij9EAOP/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E21)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S3 Episode 22", url: "https://drive.google.com/file/d/1W-YygVZW__ricl366qGC1xOCiOie9Otz/preview ", description: "The Griffins continue their strange adventures in Quahog. (S3 E22)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' }
          ],
          // Season 4 and beyond use generic names as original data wasn't provided
          '4': [
              { name: "Family Guy S4 Episode 1", url: "https://drive.google.com/file/d/1jOH8fqWQyYxmlLG0F7mI80oJSicqDLyk/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E1)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 2", url: "https://drive.google.com/file/d/17rULI0TOR2PNA9rWciDNDFGhhsoBFjV1/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E2)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 3", url: "https://drive.google.com/file/d/1ckH1EKBOumtFYGryQfnFjPZQLK8NjFn5/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E3)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 4", url: "https://drive.google.com/file/d/1V6rH-OGEN9Z6XmzMYm4K_5zw50R_cXaD/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E4)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 5", url: "https://drive.google.com/file/d/1WfolcQ-kSJupUEnzgDb1T0cXcWVlHp_R/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E5)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 6", url: "https://drive.google.com/file/d/1GY5KpFh7UY8KluYQv8GcOyMHTcAaA3Oe/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E6)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 7", url: "https://drive.google.com/file/d/17RqbTp8H0LoMapLQWg5WYG7GG1-WlNGw/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E7)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 8", url: "https://drive.google.com/file/d/1Gwb1EYYVbOP4ofwA2dQXJwd6u_CTkWzK/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E8)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 9", url: "https://drive.google.com/file/d/1Q2L_28XGKxwDx_-cB6dlN_Q4vcVo8rRh/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E9)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 10", url: "https://drive.google.com/file/d/1yKOf1ARn-36ZN9SarYALDV6_TBaCLS11/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E10)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 11", url: "https://drive.google.com/file/d/1wOOzEXYOBHrcr9ykx7MKHc7KtbgX-_a-/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E11)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 12", url: "https://drive.google.com/file/d/1FKYolnvHb6fQ3wnp6qoE6odS1_GGooLq/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E12)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 13", url: "https://drive.google.com/file/d/1oOx0OG9_IE4vZt2sHpEtm6CjuJ34G6OG/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E13)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 14", url: "https://drive.google.com/file/d/1n177bi8ZhQ_kLhThhrET40LpY6eNwYVk/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E14)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 15", url: "https://drive.google.com/file/d/1CIdnmSmovhV8h9iVjy_yo-XSjRhkUGVP/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E15)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 16", url: "https://drive.google.com/file/d/1Tp56be9wivB5Zlgi9fIH5fCmD8MetsqG/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E16)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 17", url: "https://drive.google.com/file/d/1Paqb1-90pZyO5YsNpyh8djMitTxi2aVn/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E17)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 18", url: "https://drive.google.com/file/d/18QBdkzbtCROkntEfsym0OlqKB9F7avSl/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E18)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 19", url: "https://drive.google.com/file/d/1oRXk85wKAz1Y7ZcpgQPXuCg8X-2WRyU0/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E19)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 20", url: "https://drive.google.com/file/d/1r527-mdBhk0bIwu2i0-CWcqWsl9qOGcA/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E20)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 21", url: "https://drive.google.com/file/d/16XztB9-hYhgUGro0C3UGyqOkHvaz-nr2/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E21)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 22", url: "https://drive.google.com/file/d/17PPT4-KPj499LpmP_UGJy60J6Daa7jAC/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E22)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 23", url: "https://drive.google.com/file/d/1_V5ETFMK6Y427osDx8i-DkpfIYfdBDPV/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E23)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 24", url: "https://drive.google.com/file/d/1kRkHRAM2DN0cst9-FS-qlHUHNnrSDbVE/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E24)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 25", url: "https://drive.google.com/file/d/1qQcEM0E3QmnmWEouRrrAWHqEo6U7HI8m/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E25)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S4 Episode 26", url: "https://drive.google.com/file/d/1GQR86rX0FQmMvKUh5sQksrltUEbI70PW/preview ", description: "The Griffins continue their strange adventures in Quahog. (S4 E26)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' }
          ],
          '5': [
              { name: "Family Guy S5 Episode 1", url: "https://drive.google.com/file/d/15e0hazZO7jbN--WIxdb8nctuw-Z8pf1w/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E1)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 2", url: "https://drive.google.com/file/d/1ySx2987av6okSIY2xM_L9uhSAedH_LXv/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E2)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 3", url: "https://drive.google.com/file/d/18zxUSkMfRi8gyGxwhkm3Qp_fYbKACRff/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E3)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 4", url: "https://drive.google.com/file/d/1CGixAwNOIkE5WDsu8PI89nCJnVLCokrQ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E4)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 5", url: "https://drive.google.com/file/d/1CbnYlcxin41sDzcNVJRpxZFCs4LcLDvI/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E5)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 6", url: "https://drive.google.com/file/d/15OcdFZrCNp0k_NdJLa876JEdVFMLyOhJ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E6)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 7", url: "https://drive.google.com/file/d/1BdCEufHnpgjaqSfqcYKEqsbzVnyKjQh1/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E7)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 8", url: "https://drive.google.com/file/d/1NOwmUDtv81lJl_PHN3bIR3kkAnTTKckO/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E8)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 9", url: "https://drive.google.com/file/d/1kXPdpsEBAuliq1cxxoIvKWYbcO0T3jik/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E9)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 10", url: "https://drive.google.com/file/d/1IRt8tJGR6KZz8pdId4OOPNmsm98nfs57/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E10)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 11", url: "https://drive.google.com/file/d/1HLBWujGAMQtCTTidV5GrV8f1-8QVFWF9/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E11)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 12", url: "https://drive.google.com/file/d/16La6x_z0Zipt23tiO6kNjR8-ElsSRbAS/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E12)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 13", url: "https://drive.google.com/file/d/180_bIaRRteck6_iCnMQ6UGn8JEDZXVVR/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E13)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 14", url: "https://drive.google.com/file/d/1DKMZi4saOndLTpXQnibyULvRTAw0Xxqh/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E14)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 15", url: "https://drive.google.com/file/d/1PydLHWRlE-ajlQknlPq6PzUI3Z5DpTPb/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E15)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 16", url: "https://drive.google.com/file/d/1stbKzXLaGpooerov4ythioB2wA6SFq7t/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E16)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 17", url: "https://drive.google.com/file/d/14OQBfGTTgQ-E5js1LxR_rfi0XGLBwLM0/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E17)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S5 Episode 18", url: "https://drive.google.com/file/d/1deF9QK-9kAVRZsokwobCzjvrhB3-RLiz/preview ", description: "The Griffins continue their strange adventures in Quahog. (S5 E18)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' }
          ],
          '6': [
              { name: "Family Guy S6 Episode 1", url: "https://drive.google.com/file/d/1bbAbQAtmlooCb4xtqjMTYGU7XrJzG5Yy/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E1)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 2", url: "https://drive.google.com/file/d/1MVX4EUwf1KUiQTWaY3ilvo2-9i4sMQom/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E2)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 3", url: "https://drive.google.com/file/d/14srueWfE07Po4l5cS5KspPEUs7uGkd14/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E3)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 4", url: "https://drive.google.com/file/d/1aZ4Jvix1IA5bpzmu-X6pPvehKY4laxZk/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E4)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 5", url: "https://drive.google.com/file/d/12Rxz7K_kdUcyAmPJNxSi4IhmE4ixxkcS/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E5)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 6", url: "https://drive.google.com/file/d/1-7t4RoNlrnFkbSnBHlkzSqbknlWtek9l/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E6)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 7", url: "https://drive.google.com/file/d/1iwIalbQ61-ccybOrdbOaiPozUdjMsoKX/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E7)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 8", url: "https://drive.google.com/file/d/1lT9U_THI6cmP3NgtVmmtLdlEUZssm1xw/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E8)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 9", url: "https://drive.google.com/file/d/1YtNp3SbZq57vyY5Zko9wY8_ofMIqoOkh/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E9)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 10", url: "https://drive.google.com/file/d/1HO03tspHV5eV1FoZnfE7qyRHx2J2q3ek/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E10)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 11", url: "https://drive.google.com/file/d/1MSXalrCmhZZbH0-CPdawahcCrty1Z8hU/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E11)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 12", url: "https://drive.google.com/file/d/1yZvEq68FScPMaAwsaenOyq-D6K54ilTr/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E12)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S6 Episode 13", url: "https://drive.google.com/file/d/1dElIOtUGdTyDLTBHL1JfwM9cV7uwHKDC/preview ", description: "The Griffins continue their strange adventures in Quahog. (S6 E13)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' }
          ],
          '7': [
              { name: "Family Guy S7 Episode 1", url: "https://drive.google.com/file/d/1pedJ23O5puGoPyia4ZOTAjSLguy5qxGi/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E1)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 2", url: "https://drive.google.com/file/d/1tvV6SZRU6yIWFQGQGlfGIeLivGChTmXu/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E2)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 3", url: "https://drive.google.com/file/d/1pZYLCvwp8OdLlRolp4CiBWYU2rDPFQyZ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E3)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 4", url: "https://drive.google.com/file/d/1zAXveSp1QSL9IO_5oMMDtlIgzGPYJ0zX/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E4)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 5", url: "https://drive.google.com/file/d/1Y7_uyDMJ3g5M5yt5yZPreKFCFkmwoLlz/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E5)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 6", url: "https://drive.google.com/file/d/1sgVFKyIQyU8njODb0UkDx8NUcU7Mz4eV/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E6)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 7", url: "https://drive.google.com/file/d/1hBrea_MFZbXk2E96Z3X2442HmBWD6eEG/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E7)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 8", url: "https://drive.google.com/file/d/1W4MbDH_HYZ8UzCRQx_WJxH3OBZrb7VuD/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E8)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 9", url: "https://drive.google.com/file/d/1BwJrD3q49NWcAcwvd5WY1MOc7bO0ev9J/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E9)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 10", url: "https://drive.google.com/file/d/1HtghXQfMpZDvGgsDS69rWOn2xBdLXfDS/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E10)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 11", url: "https://drive.google.com/file/d/1jaEVBnwV52aZNgN2mFOLXIZ5IDUHZ-L1/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E11)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 12", url: "https://drive.google.com/file/d/1aAjPh_H2pRaZ7qj3YnzdqmCvLrA15E67/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E12)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 13", url: "https://drive.google.com/file/d/1MtyqxFDTxmEX546Kcco_7xmVUSI-bNS2/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E13)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 14", url: "https://drive.google.com/file/d/1LRpNjcTdkvzgRZNJoCnihgDFcjB8hQNm/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E14)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 15", url: "https://drive.google.com/file/d/12X6hAg-iOI-Hd0SHU2JBwqaNBKXOSJx0/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E15)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S7 Episode 16", url: "https://drive.google.com/file/d/1-F18Ls7sPcQ2hiGgWURUAZpW0WaZTzpK/preview ", description: "The Griffins continue their strange adventures in Quahog. (S7 E16)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' }
          ],
          '8': [
              { name: "Family Guy S8 Episode 1", url: "https://drive.google.com/file/d/1f3svLm2QuqNaQ9sFrZ07huD5QojC0d8i/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E1)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 2", url: "https://drive.google.com/file/d/1Balt5Fi3Sv8Ru4wn90HzKs6gAn67__xH/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E2)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 3", url: "https://drive.google.com/file/d/1kJdMt2gNUeb4vWuBN0ivZhdAcaO1MQaS/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E3)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 4", url: "https://drive.google.com/file/d/1atnHNJWQ6Z3YKlHrbAB9IKkY4kbWfBk9/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E4)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 5", url: "https://drive.google.com/file/d/1sd9fW5V-V948r2T9xrbKIciR9Oc2qAze/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E5)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 6", url: "https://drive.google.com/file/d/11I1MTpsy11DUZSzN_gWv948i0nLmGJwg/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E6)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 7", url: "https://drive.google.com/file/d/1Xs-ksUGd38rYpc8sxlhuRU_GYAatGUjF/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E7)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 8", url: "https://drive.google.com/file/d/1Am4DhXTiMu4hABq2gDihHu9EdBEYOn__/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E8)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 9", url: "https://drive.google.com/file/d/1sb2bEuJIvqS3Bgorw32dyqH9DCQg5JK4/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E9)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 10", url: "https://drive.google.com/file/d/1c1b9vlVXQjefqZjv1XDE2nwQRlvS95oQ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E10)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 11", url: "https://drive.google.com/file/d/1VfmmX_erEt7JokF-Fi2T1A3cBz0p5mam/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E11)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 12", url: "https://drive.google.com/file/d/1uAbM65ALKHovjEEcVzDfVbwkKHqRtjId/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E12)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 13", url: "https://drive.google.com/file/d/13DYEhUHEskrG1XXmxgZNG2R8WuIchxTK/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E13)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 14", url: "https://drive.google.com/file/d/1iSOZTWn57ury4PwAJBr63UXzMr31djRh/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E14)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 15", url: "https://drive.google.com/file/d/1I_kXrqsaMw5jA0HEhiUpH790TS5hmuT2/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E15)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 16", url: "https://drive.google.com/file/d/1dsivcof82GSSPiRjR_WRyYZ9fQDCsdsg/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E16)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 17", url: "https://drive.google.com/file/d/1Im9K10JqnEd6tQuHx93qtcIK9qa1rS2o/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E17)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 18", url: "https://drive.google.com/file/d/18vZM5TawlN5b6Ft1X18j-ptC-ZX_ik_9/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E18)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S8 Episode 19", url: "https://drive.google.com/file/d/1TJtmprHu_3WUsrjsO3cjzdhDeSEeekOZ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S8 E19)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' }
          ],
          '9': [
              { name: "Family Guy S9 Episode 1", url: "https://drive.google.com/file/d/1Phn120KAHA4z_V6eqc_s3ic4fxGFSryS/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E1)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 2", url: "https://drive.google.com/file/d/1R5IZUCRxciDRra4AbYY1V_PGmc0-0sMS/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E2)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 3", url: "https://drive.google.com/file/d/1WxAzCDnuJXg4uEiTY8WUF3zuVw6-D6Ms/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E3)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 4", url: "https://drive.google.com/file/d/1KxYsWjKA1bLhSxQzoLnmi2bjVZgQ2fDG/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E4)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 5", url: "https://drive.google.com/file/d/1tOSnz8eCoI410BE2wwdCLToP4meLslZC/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E5)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 6", url: "https://drive.google.com/file/d/1kv0grlN5V0jpDgIOx3Y0E0RVnZA6wafR/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E6)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 7", url: "https://drive.google.com/file/d/1yQ0PAK_-SK-BhBxDsPadVK44jx33D19L/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E7)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 8", url: "https://drive.google.com/file/d/1aKAmqUkDsNI1ZTeIWlQ8Y2pSEdpAiVhd/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E8)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 9", url: "https://drive.google.com/file/d/1Ws0sIgfiabOXzoWPBQn2Qhqzv-D5ROPR/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E9)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 10", url: "https://drive.google.com/file/d/17t72IaIbBxxiyILE24j4608YnGAi42lo/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E10)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 11", url: "https://drive.google.com/file/d/1cLR3sVN-3XmkVtybeiZp3dZ2ESrTcvOe/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E11)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 12", url: "https://drive.google.com/file/d/1-OiulVUPAYgO2YQN2Huwy4FVGyZ1Hdbv/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E12)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 13", url: "https://drive.google.com/file/d/1GvsiTTBhea4eL84zSGdgwHfHexKV778_/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E13)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 14", url: "https://drive.google.com/file/d/1qcupNQmQOJDKj7Y6AdKmmQvuZDCBRhUn/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E14)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 15", url: "https://drive.google.com/file/d/1VWBxlzpTCq-HkB3d9ujfb7FhV4pcu6Gm/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E15)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 16", url: "https://drive.google.com/file/d/1csyktXjYwIcu52bVc1LI7Lq_WLRDNg3A/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E16)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S9 Episode 17", url: "https://drive.google.com/file/d/1e_7_Lj595TpGwKXUt7uQ5ob-Gx-j9bXs/preview ", description: "The Griffins continue their strange adventures in Quahog. (S9 E17)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' }
          ],
          '10': [
              { name: "Family Guy S10 Episode 1", url: "https://drive.google.com/file/d/1obvoho3IlLuZG8WIjovSX-vuINnh2r3f/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E1)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 2", url: "https://drive.google.com/file/d/1XfnhLvZ5L6yGxxJoguRGM_6tJMuk78hZ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E2)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 3", url: "https://drive.google.com/file/d/1k5lsL3pBfULOh5gK19np7DpkNp3VfXZQ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E3)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 4", url: "https://drive.google.com/file/d/1YaMmKtfCsbMZz9TnnYSDAG_gOs5TaONp/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E4)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 5", url: "https://drive.google.com/file/d/1HE17jBd75vEnHL32P1G4wFyMcjQ0CmpE/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E5)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 6", url: "https://drive.google.com/file/d/1WN7FIh6WhGNXYpYa641w_ud0eHsp_yQ0/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E6)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 7", url: "https://drive.google.com/file/d/1Fch-igD93jr31dqxhHJI6dgVM2mZ50R5/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E7)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 8", url: "https://drive.google.com/file/d/1wR2sZ0TeEtO8Sp4f_XunPWiJCCI7dD0u/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E8)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 9", url: "https://drive.google.com/file/d/1VoEf-ze4WNkph3X-orMSmLvA5LWaLaZ6/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E9)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 10", url: "https://drive.google.com/file/d/1ub5wCq7Hz5rVXarHL-c6lHdQn-qQL-VN/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E10)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 11", url: "https://drive.google.com/file/d/1kejity-_LSPbJWDbDIW1trdYDkvQUFcK/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E11)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 12", url: "https://drive.google.com/file/d/1enT6oAzGY6vQ86QOGjFqfGQ0xO7dZCcF/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E12)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 13", url: "https://drive.google.com/file/d/1NRWFj7Io5n9Mq54hdQ9uHJJAS0uvlQEx/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E13)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 14", url: "https://drive.google.com/file/d/1Ud9IPBfKcrebeQmVxcP3Jf1jKyNls8qr/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E14)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 15", url: "https://drive.google.com/file/d/1f-mdt-5U7whrXydtQXZXi7a7ZAyVogJ2/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E15)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 16", url: "https://drive.google.com/file/d/1pHKy5_QNA07qF23TZokDIlMeki40EwMf/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E16)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 17", url: "https://drive.google.com/file/d/1EX0sKLiTs47v6iOxws6fzhWaTVE_vBWI/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E17)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 18", url: "https://drive.google.com/file/d/1bud51dN-QZ2TXFQjcS6R_8pIxQ2KsgGX/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E18)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 19", url: "https://drive.google.com/file/d/1sCwW63XzYY2qKNkmplF0R_gdnOKjTXfZ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E19)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 20", url: "https://drive.google.com/file/d/1voIxHL2A9EMXS7ErWXuBFmaESOvDYW32/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E20)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 21", url: "https://drive.google.com/file/d/1pvs9dMJJyYarGnBpj8O3LfwPXBgPQnlB/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E21)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 22", url: "https://drive.google.com/file/d/10k3AN5pR0WZNhSFrSW5TG_Db6p4_WNs1/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E22)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S10 Episode 23", url: "https://drive.google.com/file/d/1tgCF8a4GfElW0otusGP5VOBX4CeNk1wu/preview ", description: "The Griffins continue their strange adventures in Quahog. (S10 E23)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' }
          ],
          '11': [
              { name: "Family Guy S11 Episode 1", url: "https://drive.google.com/file/d/1qVifOWNXLKbK3XkBqW8_Jpdxd72rnoGG/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E1)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 2", url: "https://drive.google.com/file/d/1AQ1lvc2VnUVhaEWnZWzsfIWp9sKI956b/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E2)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 3", url: "https://drive.google.com/file/d/19UFp0pG2kkuj1SWnZz7h2E6zectsVrah/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E3)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 4", url: "https://drive.google.com/file/d/1DpHCkxD9GsZ06YkFajUsdMUUpQr1AK_j/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E4)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 5", url: "https://drive.google.com/file/d/1xLQ5X0JGfj1TfN6zdIaDCFrRJ7CJitna/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E5)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 6", url: "https://drive.google.com/file/d/1ZiuJKJhufkDIiWO_uSsaNLabKmbCZa6p/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E6)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 7", url: "https://drive.google.com/file/d/1oGzY8hyycf6mxIF7k9hYdtR_XuR9vMvr/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E7)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 8", url: "https://drive.google.com/file/d/1arI6t0siDohUBqGIHS4K9D_p0jBUB4a7/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E8)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 9", url: "https://drive.google.com/file/d/1T9O4XWDJ4CdaKvjL4XOuYo0diFrHKRu4/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E9)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 10", url: "https://drive.google.com/file/d/1ZdR_9VCcYenULgG99QYb_KIAyHu08lgM/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E10)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 11", url: "https://drive.google.com/file/d/1M1vtOVJ4wYCkmTO00J70OSAO8ZXtYDJK/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E11)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 12", url: "https://drive.google.com/file/d/18vABZR6DqCbmwRT7e-pBSo-L0A4GHr3q/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E12)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S11 Episode 13", url: "https://drive.google.com/file/d/1r5SQBhFQyRlAWbeEq4rJ8t4lTQ6zY0RI/preview ", description: "The Griffins continue their strange adventures in Quahog. (S11 E13)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' }
          ],
          '12': [
              { name: "Family Guy S12 Episode 1", url: "https://drive.google.com/file/d/1p9Pw4ukLQN0qNI5rg0m-CRNKff5kBWbk/preview ", description: "The Griffins continue their strange adventures in Quahog. (S12 E1)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' }
          ],
          '13': [
              { name: "Family Guy S13 Episode 1", url: "https://drive.google.com/file/d/12MPpAoTUeppskY1s6i1dfYU5BPmoA44D/preview ", description: "The Griffins continue their strange adventures in Quahog. (S13 E1)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' }
          ],
          '14': [
              { name: "Family Guy S14 Episode 1", url: "https://drive.google.com/file/d/1CN4n4OYRTfU3HmL700ffm9gIRBfy9UF8/preview ", description: "The Griffins continue their strange adventures in Quahog. (S14 E1)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' }
          ],
          '15': [
              { name: "Family Guy S15 Episode 1", url: "https://drive.google.com/file/d/1KoLV79rVnbeRamV_hMtbY1SqySOklXWo/preview ", description: "The Griffins continue their strange adventures in Quahog. (S15 E1)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' }
          ],
          '16': [
              { name: "Family Guy S16 Episode 1", url: "https://drive.google.com/file/d/1WmmN-qHbu8vd0YV09rRFSUsrmnIf_a-g/preview ", description: "The Griffins continue their strange adventures in Quahog. (S16 E1)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S16 Episode 17", url: "https://drive.google.com/file/d/1QKK8fjOMuOs-eb9LcyHlDliBXVqkWyrZ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S16 E17)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' }
          ],
          '17': [
              { name: "Family Guy S17 Episode 1", url: "https://drive.google.com/file/d/1w9ZnRrtt0VlV-DGh97fC_w0DBhRluH4K/preview ", description: "The Griffins continue their strange adventures in Quahog. (S17 E1)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' }
          ],
          '18': [
              { name: "Family Guy S18 Episode 1", url: "https://drive.google.com/file/d/1LKrkHizV3wHHjG2nN27scFlo-5QVXwSd/preview ", description: "The Griffins continue their strange adventures in Quahog. (S18 E1)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' }
          ],
          '19': [
              { name: "Family Guy S19 Episode 1", url: "https://drive.google.com/file/d/1FinwgifPmm5OOpkq2eCKTpi1gwpgXFvl/preview ", description: "The Griffins continue their strange adventures in Quahog. (S19 E1)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S19 Episode 2", url: "https://drive.google.com/file/d/1m069cy3GiIlKho5hFDvjSdufLcninHqU/preview ", description: "The Griffins continue their strange adventures in Quahog. (S19 E2)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' }
          ],
          '20': [
              { name: "Family Guy S20 Episode 1", url: "https://drive.google.com/file/d/1jUBsXpeWtbMwbWFFSvY7qbPmpTYdfuar/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E1)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 2", url: "https://drive.google.com/file/d/1-8et03QCd1SCFDcPzuqCesBkDKYG13iw/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E2)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 3", url: "https://drive.google.com/file/d/1mhNLiOD9KP6q65bT2tWgBhrxk-w0bqns/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E3)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 4", url: "https://drive.google.com/file/d/1XUfP6vwDkQIN48R_zm58cFVQ6jra7EFd/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E4)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 5", url: "https://drive.google.com/file/d/1td1vx6MhGGbxyeVWYaMRQvjnHT9bvFER/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E5)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 6", url: "https://drive.google.com/file/d/1A3FROMMuVtgxyPwTJUrehhF1GGD7JcFS/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E6)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 7", url: "https://drive.google.com/file/d/1uaD0clCkSvcGa1FCuCh9AilsXgAnW3EA/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E7)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 8", url: "https://drive.google.com/file/d/1bf5V5z-Sov9uYknDDS2VdC658tVwrJhd/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E8)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 9", url: "https://drive.google.com/file/d/1K7CiDgfUGfo1RTxbJlxe6ydtOQViabZx/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E9)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 10", url: "https://drive.google.com/file/d/14DKey78Mw46AijC4-jLHsUhsdHO0QfCi/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E10)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 11", url: "https://drive.google.com/file/d/1H_qLxwNTYhr7hW_5AwxTcApbJIbX2jKn/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E11)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 12", url: "https://drive.google.com/file/d/1mrXOsF7YHWDeG5oc7QssX_-tew5RgfnX/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E12)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 13", url: "https://drive.google.com/file/d/1_XnF6ETlglvVfvvYWyQ-GhjqpiwQx1ob/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E13)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 14", url: "https://drive.google.com/file/d/1op9IzKGWcsNfbwd1DteoAGUQCDKkeBYQ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E14)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 15", url: "https://drive.google.com/file/d/1j_UzuvrD10AxoeCXAAs9rSL5F4hMTtPh/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E15)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 16", url: "https://drive.google.com/file/d/1yW59HPJwlUDPKrul2kP7JxO-KJWVkBMv/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E16)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 17", url: "https://drive.google.com/file/d/1d5J38tBKoUCyQGFco-jFkiR9ViyoA4Fp/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E17)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 18", url: "https://drive.google.com/file/d/1Lj1QupGrafcML6DD0vU2OYQ1D22Suw3s/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E18)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 19", url: "https://drive.google.com/file/d/1tf_XsJiOFhYxYlUpxELs6Xzwqn2KA6XR/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E19)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' },
              { name: "Family Guy S20 Episode 20", url: "https://drive.google.com/file/d/1ynJAl8Yz1YOXsJBmimVgmO78h4W6SzwQ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S20 E20)", imageUrl: 'https://warnersallman.com/1280/7591-family-guy-poster-tv-series-peter-griffin.jpg ' }
          ],
          '21': [
              { name: "Family Guy S21 Episode 1", url: "https://drive.google.com/file/d/1lIM3LCrkSax47VbmjTqfB9uabgsxNNm1/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E1)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 2", url: "https://drive.google.com/file/d/1tS_Cktaz1ZxQL0aC3bwcd30V2y_e3N4I/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E2)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 3", url: "https://drive.google.com/file/d/1d7zraQeFlgUNBkfW37vUc7h_l0fDNT5Y/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E3)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 4", url: "https://drive.google.com/file/d/1OR2VN372z80EC0xfTWNd7CWob72POHZq/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E4)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 5", url: "https://drive.google.com/file/d/1skyGTcjO2azpE1svEhwM4u8j1Mrh4TQa/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E5)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 6", url: "https://drive.google.com/file/d/115ZFeePeRM6d7DpsDQHYr9FJq5A1o1za/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E6)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 7", url: "https://drive.google.com/file/d/1EtoJPDDGgV4lQhLVU-baoBPpMoztPWdS/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E7)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 8", url: "https://drive.google.com/file/d/1tNVmrZVMmA6I0_oZjAMPSQZyCG6sbJOx/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E8)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 9", url: "https://drive.google.com/file/d/1ivYPtva7p8rrW8lisObDn-P4-_TSAwfW/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E9)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 10", url: "https://drive.google.com/file/d/1-69RiGUYjKwPW864lsW05BW4vy5favVw/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E10)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 11", url: "https://drive.google.com/file/d/1e_6K8BvavDW5SAP_NtJQWu9nz0MetSDA/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E11)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 12", url: "https://drive.google.com/file/d/14KZs3M_aDEXXHUw7TfsGVJHNin4vsMLp/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E12)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 13", url: "https://drive.google.com/file/d/1N6B_6cgXC_aFbAC6Qon4XtAdRkuFV6cm/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E13)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 14", url: "https://drive.google.com/file/d/1nF-_AveluttpPkcf-Keevy4vAGkck5FH/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E14)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 15", url: "https://drive.google.com/file/d/1_NV-vCKEXEVRj2rbM5rfaee2y93TihpV/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E15)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 16", url: "https://drive.google.com/file/d/16T5hnWc9PvFc5SnstxFfa9vUn4Ab--4k/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E16)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 17", url: "https://drive.google.com/file/d/1RzttdDB574VUu-CkoqXsNyYc3RhAFhg1/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E17)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 18", url: "https://drive.google.com/file/d/141y-jz5FEXtbrjTaTylxRiQ1auo19N1c/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E18)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 19", url: "https://drive.google.com/file/d/1rICnP2Lk35mjMNDyy2Zz3vaPENvQPYCy/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E19)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' },
              { name: "Family Guy S21 Episode 20", url: "https://drive.google.com/file/d/1X-LrBA5xZMaTPge4alcPSskJOWHcdkil/preview ", description: "The Griffins continue their strange adventures in Quahog. (S21 E20)", imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p03jvhzy.jpg ' }
          ],
          '22': [
              { name: "Family Guy S22 Episode 1", url: "https://drive.google.com/file/d/1gDv4yPOAYs1J1QQH4drKlPmJVw5VLoOf/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E1)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 2", url: "https://drive.google.com/file/d/1nibpdu9X92CToHymdMx8VyauPSLBWbjK/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E2)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 3", url: "https://drive.google.com/file/d/1D0sZXAGg7HqnOhuEHJLWK8xTGuWjpUHE/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E3)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 4", url: "https://drive.google.com/file/d/1mLQr9LAONEWOoWZXXAqCL9SAKBnjHCH3/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E4)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 5", url: "https://drive.google.com/file/d/1V5U0IVubrZAZv6qX-JJnpjcsLM-DIiC3/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E5)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 6", url: "https://drive.google.com/file/d/1igtjUMFYxHVrmvXrIu8s5_HqldyYrlhp/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E6)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 7", url: "https://drive.google.com/file/d/1uaiLu05c18ZJAf74N1wgoAd0uvkkyEVL/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E7)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 8", url: "https://drive.google.com/file/d/1oJAY5Opu7fuEaSyh9tFfxKVxY6eUvaK3/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E8)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 9", url: "https://drive.google.com/file/d/1c09NGvEfQ276fEbGymCokRYGJRy1sN8A/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E9)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 10", url: "https://drive.google.com/file/d/1rue0-3SwfsUxlOLCOThVHECbPapilriR/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E10)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 11", url: "https://drive.google.com/file/d/1e--N7rfNgeC4QlRaCuajBlWkEqMEPxb-/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E11)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 12", url: "https://drive.google.com/file/d/1U8vLJa1yOE12gG8eXk6crcFTS02I0-8y/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E12)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 13", url: "https://drive.google.com/file/d/1GN9qV1sdHhosG7JyC3CC5waO2EsVFskJ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E13)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' },
              { name: "Family Guy S22 Episode 14", url: "https://drive.google.com/file/d/1mMRVT58ge0p0wBugQNzLsBj_KvkGE1Qr/preview ", description: "The Griffins continue their strange adventures in Quahog. (S22 E14)", imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/43067158-0630-4865-a07a-a88ba2946377/compose?aspectRatio=1.78&format=webp&width=1200 ' }
          ],
          '23': [
              { name: "Family Guy S23 Episode 1", url: "https://drive.google.com/file/d/1ee1BLlkUM-CCOkqwyVxzpZYkXpuw1fZs/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E1)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 2", url: "https://drive.google.com/file/d/1JipzL75CF9ende2Rf-U7C44NaYE-HOrd/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E2)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 3", url: "https://drive.google.com/file/d/1PHZGIloCM_YfecmuX9Wt0ygTpv_CYFmu/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E3)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 4", url: "https://drive.google.com/file/d/1XG85gCN1G9KZiYWxgrd8HEWdFZKbh19A/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E4)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 5", url: "https://drive.google.com/file/d/1azlycinwJbRkVWQHuoHuo3zjkch9_-3BBS_e/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E5)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 6", url: "https://drive.google.com/file/d/1gviPrzCdS9ZNOmkOiq3W8Pq5TAXJ8Z77/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E6)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 7", url: "https://drive.google.com/file/d/1TJmBqNRSFb4NZIWGaq9E6Aj3jZyBitct/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E7)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 8", url: "https://drive.google.com/file/d/1YaKzY5l-J4NPenMFy69m7Idgqtnk6YX3/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E8)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 9", url: "https://drive.google.com/file/d/1ZTY6-XjxV67CYSWMIlCGs9KK0JENfVF3/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E9)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 10", url: "https://drive.google.com/file/d/1bBRIM3co7X_EJLWNqQtPAVLD7sp3KF8J/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E10)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 11", url: "https://drive.google.com/file/d/1jcFHMtOSncS5T_69cxCWDPz2e74xLU-D/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E11)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 12", url: "https://drive.google.com/file/d/1PNYz16DYlfadksfCWJzHxDUxAujlAswy/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E12)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 13", url: "https://drive.google.com/file/d/1MM9ArMg-8gCSFCirM4KEQIfcM7gY2SNQ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E13)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 14", url: "https://drive.google.com/file/d/11pVt-_FlVvzBZehcG5V7t3ozMWL0uyVz/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E14)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 15", url: "https://drive.google.com/file/d/1u0HuhzI026uzpOdeqYjMxInSsvz2mdIM/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E15)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 16", url: "https://drive.google.com/file/d/11LOqM3tzVJr_kS1wMFVCrJk-ZhyabexQ/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E16)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 17", url: "https://drive.google.com/file/d/19bCx9n0AK1Nb6C8fYRAnb8iaUMiZD7id/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E17)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' },
              { name: "Family Guy S23 Episode 18", url: "https://drive.google.com/file/d/13_Qo7cHQaDPV9_MyBtObzbTRewEXVVvT/preview ", description: "The Griffins continue their strange adventures in Quahog. (S23 E18)", imageUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/family-guy-custom-01.jpg?w=1200&h=675&fit=crop ' }
          ]
      }
  },
  DemonSlayer: {
      id: 'DemonSlayer',
      type: 'series',
      title: "Demon Slayer",
      imageUrl: "https://saintscroll.com/wp-content/uploads/2021/12/Demon-Slayer-Kimetsu-no-Yaiba-Season-2.jpg ",
      rating: "2 Seasons",
      description: "Sorry, we couldn't find episodes 1-12! The season starts from episode 13.\n\nAmidst breathtaking animation and fierce combat, Demon Slayer chronicles a young man's quest for vengeance and a cure for his demon-cursed sister, navigating a perilous world of powerful demons and dedicated demon slayers.",
      previewVideoUrl: "https://youtu.be/XoJCOAU_72U ", displayTags: ['Top Pick'],
      metaTags: ['Thriller', 'Musical', 'Anime'],
      episodes: {
          '1': [
              { name: "Something More Important Than Life", url: "https://drive.google.com/file/d/1TrABeWtrbgkHjxSafZ89LW2TN5W-4bYC/preview ", description: "Tanjiro returns home to find his family massacred and his sister Nezuko turned into a demon, embarking on a quest for a cure." },
              { name: "The House with the Wisteria Family Crest", url: "https://drive.google.com/file/d/103tUxwBxZjzHo2vH2dIqgoCglgXhVOzx/preview ", description: "After a brutal fight, Tanjiro and Nezuko find temporary respite at a house adorned with the Wisteria Family Crest, offering a brief moment of peace and recovery." },
              { name: "Mount Natagumo", url: "https://drive.google.com/file/d/1oLr45hNRF1-wqMu1yssgSOrohyUlCBeR/preview ", description: "Tanjiro, Zenitsu, and Inosuke arrive at Mount Natagumo, where they face a terrifying family of spider-like demons." },
              { name: "Letting Someone Else Go First", url: "https://drive.google.com/file/d/1xLsVvTZkUIth7Q34_TRbSOJZ_V8ARVwT/preview ", description: "Tanjiro confronts the Mother Spider Demon, forced to make a difficult decision to save his comrades and push past his own limits." },
              { name: "You Must Master a Single Thing", url: "https://drive.google.com/file/d/1K0mOwY1TDouScbDB_BtCMYAA1aYd-QyT/preview ", description: "Zenitsu faces a monstrous spider demon and remembers his harsh training, pushing himself to master his unique Thunder Breathing technique." },
              { name: "A Forged Bond", url: "https://drive.google.com/file/d/1uGRdol3P_nom-39qPeOgmhIhrQ0CnGwh/preview ", description: "Inosuke struggles against the Father Spider Demon, while Tanjiro faces Rui, a powerful Lower Rank Five demon, whose bond with his 'family' is disturbingly strong." },
              { name: "Hinokami", url: "https://drive.google.com/file/d/1iEulTg7Y-zq0eEd5iwi9yig_UCujALo-/preview ", description: "Tanjiro unleashes a new, powerful breathing technique, Hinokami Kagura, in his desperate battle against Rui, pushing his body to its absolute limits." },
              { name: "Pretend Family", url: "https://drive.google.com/file/d/1TWlU2BBjp2qmUyQjYArj3KwuYR6Bq1SE/preview ", description: "Rui's backstory is revealed, showcasing his tragic desire for a true family and the lengths he went to create one, even at the cost of others." },
              { name: "Against Corps Rules", url: "https://drive.google.com/file/d/1puwcT7BIIYgonaD0w80B4dXH2KMxyOMt/preview ", description: "Giyu Tomioka arrives to intervene in the battle on Mount Natagumo, demonstrating his overwhelming power and upholding the Demon Slayer Corps rules." },
              { name: "Master of the Mansion", url: "https://drive.google.com/file/d/1tUB5gRF0LVYZCFA0XzBSj-ndgamEvWM9/preview ", description: "Tanjiro and Nezuko are brought before the Hashira, the most powerful Demon Slayers, at the Ubuyashiki Mansion for judgment regarding Nezuko's demon status." },
              { name: "Hashira Meeting", url: "https://drive.google.com/file/d/1FAzPWC4GyU-2xA5WsM1jRX-6kC_5V_l0/preview ", description: "The Hashira discuss Tanjiro and Nezuko's fate, with intense debate over whether Nezuko should be allowed to live, challenging the corps' strict rules." },
              { name: "Rehabilitation Training", url: "https://drive.google.com/file/d/1d-O4XnbRilw2hCV_96xaqrkLfUK5Wgsd/preview ", description: "After the Hashira meeting, Tanjiro, Zenitsu, and Inosuke undergo rigorous rehabilitation training at the Butterfly Mansion to recover and grow stronger." },
              { name: "Tsuguko, Kanao Tsuyuri", url: "https://drive.google.com/file/d/111cCfeU_QvRrWvunee6vnbvJ85EshN7B/preview ", description: "Tanjiro learns about Kanao Tsuyuri, Shinobu's quiet Tsuguko, and tries to understand her motivations and the reasons behind her stoic demeanor." },
              { name: "New Mission", url: "https://drive.google.com/file/d/1Z8hTOt8r5pyJD2kow3kwbYBQxYiVboW-/preview ", description: "Tanjiro and his friends receive their next mission, sending them on a new adventure with the Flame Hashira, Rengoku, to investigate a mysterious train." }
          ],
          '2': [
              { name: "Flame Hashira Kyojuro Rengoku", url: "https://drive.google.com/file/d/1I_XCELTRKkuT6NPSfDuQ_2vuurkvIA-5/preview ", description: "Tanjiro, Zenitsu, and Inosuke board the Mugen Train, where they meet the eccentric and powerful Flame Hashira, Kyojuro Rengoku." },
              { name: "Deep Sleep", url: "https://drive.google.com/file/d/1HiaXmf7QvgTt9kbxhjhg-uvgrwy4-kmo/preview ", description: "On the Mugen Train, Enmu, a Lower Rank One demon, uses his blood demon art to trap Tanjiro and his comrades in pleasant dreams, making them vulnerable." },
              { name: "Should Have Been", url: "https://drive.google.com/file/d/1bYmKjqTy2Ad-Tp7_ugSdbhZ0LfWLOg9y/preview ", description: "Trapped in their dreams, Tanjiro and his friends struggle to wake up, facing their deepest desires and regrets while Enmu prepares his attack." },
              { name: "Insult", url: "https://drive.google.com/file/d/1wPUdmCealDm-OA49GvFEQxeqxwwbNpw6/preview ", description: "Tanjiro desperately tries to break free from Enmu's dream, facing painful truths within his subconscious to regain control and protect others." },
              { name: "Move Forward!", url: "https://drive.google.com/file/d/1_cngVEKZGSg-crdjqIFqDy_XufKqEsHa/preview ", description: "Tanjiro fights Enmu, who has merged with the entire Mugen Train, while Rengoku protects the passengers, showcasing his immense strength and resolve." },
              { name: "Akaza", url: "https://drive.google.com/file/d/1Tqhbt9ZleDbooJh4QEJKiQ-a3MOiHs1Z/preview ", description: "Just as the battle with Enmu concludes, a formidable Upper Rank Three demon, Akaza, appears, challenging Rengoku to a deadly sunrise duel." },
              { name: "Set Your Heart Ablaze", url: "https://drive.google.com/file/d/1Ch2Ze8FWx4ESUm8T2EaO4R_WFBjD8Pt8/preview ", description: "Rengoku engages in a brutal and heroic battle against Akaza, fighting to protect the innocent and uphold his duty as a Hashira against overwhelming odds." },
              { name: "Sound Hashira Tengen Uzui", url: "https://drive.google.com/file/d/10Ukjzh73Ovxhz5uHKx3pyMA-OepIkVAr/preview ", description: "Tanjiro and his friends meet the flamboyant Sound Hashira, Tengen Uzui, who recruits them for a dangerous mission in the Entertainment District." },
              { name: "Infiltrating the Entertainment District", url: "https://drive.google.com/file/d/1HCqGEfquIy03YnoirM_mTheIV0NZXuhU/preview ", description: "Disguised as women, Tanjiro, Zenitsu, and Inosuke infiltrate the Entertainment District to search for Tengen's missing wives and track down a demon." },
              { name: "What Are You?", url: "https://drive.google.com/file/d/1Rrs75x4-zM9K3eQC5PjqeE2v3R_C-mKz/preview ", description: "The demon Daki, an Upper Rank Six, reveals her true power and terrifying abilities as she confronts Tanjiro and the others in the Entertainment District." },
              { name: "Tonight", url: "https://drive.google.com/file/d/1HLXhjHYASG2rp3IZD7YkgXktoTsfwE5_/preview ", description: "The battle intensifies in the Entertainment District as Tanjiro pushes himself beyond his limits to fight Daki, while the city descends into chaos." }
          ]
      }
  },
sonic3: {
      id: 'sonic3',
      type: 'movie',
      title: "Sonic the Hedgehog 3",
      servers: { 
          standard: "https://drive.google.com/file/d/13pgT7HSDRXYeXvkU0RAEqbdrHrFxPiIm/preview " 
      },
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d2bb416-7375-433c-bd5e-f2826ce6fe6d/di4d5ur-c937bb7a-22d0-4189-9a29-5605f10b4321.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi85ZDJiYjQxNi03Mzc1LTQzM2MtYmQ1ZS1mMjgyNmNlNmZlNmQvZGk0ZDV1ci1jOTM3YmI3YS0yMmQwLTQxODktOWEyOS01NjA1ZjEwYjQzMjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zEXHzIbNQze1jkD6YNa6WwwKsa85juW-ZbK7wlnY7D4 ",
      rating: "8.6/10", // Rating will be updated upon official release
      description: "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search of an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
      previewVideoUrl: "",
      metaTags: ['Action', 'Adventure', 'Family', 'Video Game'],
      displayTags: ['New Release']
  },
  SquidGame: {
      id: 'SquidGame',
      type: 'series',
      title: "Squid Game",
      imageUrl: "https://wallpaper.forfun.com/fetch/2b/2b64d58d2479434b8b8112911ce5767f.jpeg ",
      rating: "1 Season",
      description: "Hundreds of cash-strapped contestants accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes—a survival game that has a whopping 45.6 billion-won prize at stake.",
      previewVideoUrl: "",
      metaTags: ['Thriller', 'Korean', 'Survival'],
      episodes: {
          '1': [
              { name: "Red Light, Green Light", url: "https://drive.google.com/file/d/1f5bZ0Qmcd5j7DjUlV9y7tkInB9O788X2/preview ", description: "Hundreds of financially desperate contestants play a seemingly innocent children's game with a deadly twist, leading to shocking eliminations." },
              { name: "Hell", url: "https://drive.google.com/file/d/1GR_A47nFWg92Yb0B_4DAyyIuX8jlQpW4/preview ", description: "After the brutal first game, the surviving players vote on whether to continue, with many choosing to return to their equally hellish lives outside." },
              { name: "The Man with the Umbrella", url: "https://drive.google.com/file/d/1eS6mmqC36OHd2OJfae1DW1Fj8CjFF1qT/preview ", description: "The second game, 'Dalgona,' challenges players to carefully carve shapes from honeycomb candy, leading to tense moments and more eliminations." },
              { name: "Stick to the Team", url: "https://drive.google.com/file/d/1eoeXrKsWS1rjGhNuYW65ly8fV7dRK9aW/preview ", description: "Players are forced into alliances for the third game, 'Tug-of-War,' where teamwork and strategy become crucial for survival against impossible odds." },
              { name: "A Fair World", url: "https://drive.google.com/file/d/1fzOc0-fNRgz54M3U-d9MVyuDKTJkAaIh/preview ", description: "A doctor is caught assisting the guards in exchange for information about the upcoming games, exposing a conspiracy within the deadly competition." },
              { name: "Gganbu", url: "https://drive.google.com/file/d/16rabgOa6fswJa6mHWbEal17bWQRLXbUE/preview ", description: "The fourth game, 'Marbles,' pits players against each other in pairs, forcing heartbreaking betrayals and emotional sacrifices." },
              { name: "VIPS", url: "https://drive.google.com/file/d/17AIKVhhclmCikaTymiNFqwRS8hCzU9ep/preview ", description: "Wealthy, masked VIPs arrive to watch the games, placing bets and enjoying the spectacle of human desperation, adding a new layer of cruelty to the competition." },
              { name: "Front Man", url: "https://drive.google.com/file/d/1e6e2IeFwnj9SV69oc36Z7vfqDJ44cRMP/preview ", description: "The mysterious Front Man is revealed to have a personal connection to one of the players, as the secrets of the game's organization come to light." },
              { name: "One Lucky Day", url: "https://drive.google.com/file/d/12cWTU0zidBpi7LU2hxdQ3LMa8SoFHe5V/preview ", description: "The final game, 'Squid Game,' leaves only a few participants, leading to a brutal and climactic confrontation for the ultimate prize." }
          ]
      }
  },
  attackOnTitanMovie: {
      id: 'attackOnTitanMovie',
      type: 'movie',
      title: "Attack on Titan: Crimson Bow and Arrow",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/c837d996bea57c413adc3e80e5e2fb27e79a2fb2f89d9325ee2ebce415ccb16d.jpg ",
      rating: "10.0/10",
      description: "In a world where humanity lives in fear of giant man-eating Titans, a young boy named Eren Yeager vows to wipe them all out after his hometown is destroyed. This compilation movie recaps the thrilling, brutal, and emotional first season of the global anime phenomenon.",
      url: "https://drive.google.com/file/d/15RA_C9SZhoDiGjKREfsdpQyyDeIdT5WV/preview ",
      previewVideoUrl: "https://youtu.be/hGjGYHlcpQg ",
      displayTags: ['New Release'],
      metaTags: ['Action', 'Anime', 'Dark Fantasy', 'Horror']
  },
  // Renamed from interstellarRewatch
  interstellar: {
      id: 'interstellar', 
      type: 'movie', 
      title: "Interstellar",
      imageUrl: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF894 ,1000_QL80_.jpg",
      rating: "8.6/10", 
      description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      url: "https://drive.google.com/file/d/1FOC_06anmjvZVa4BSegKmjslUHG7KXLr/preview ", // Updated link
      metaTags: ['Sci-Fi', 'Drama', 'Adventure'],
      displayTags: ['Top Pick'] // Updated from 'Coming This Week'
  },
  
  // Updated from freeGuy (upcoming)
  freeGuy: {
      id: 'freeGuy',
      type: 'movie', // Changed from upcoming
      title: "Free Guy",
      imageUrl: "https://lumiere-a.akamaihd.net/v1/images/p_20cs_freeguy_homeent_21930_49e74453.jpeg?region=0%2C0%2C540%2C810 ",
      rating: "7.1/10", // Added a placeholder rating
      description: "A bank teller who discovers he is actually a background player in an open-world video game decides to become the hero of his own story... one he rewrites himself.",
      url: "https://drive.google.com/file/d/1r0kRv4CX2nSBy9zmgClaYxXr0rH3tXti/preview ", // Updated link
      metaTags: ['Action', 'Comedy', 'Sci-Fi']
  },
  
  // Updated from minecraftMovie (upcoming) - Made VIP exclusive/Early Access and a CAM
  minecraftMovie: {
      id: 'minecraftMovie',
      type: 'movie',
      title: "Minecraft Movie [CAM]",
      url: "https://drive.google.com/file/d/1QViTnAtTgrhJnhJM13YCRrLtp0sFY_xc/preview ", // Using VIP link for direct play as an Early Access CAM
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@._V1_.jpg ",
      rating: "Early Access",
      description: "The malevolent Ender Dragon sets out on a path of destruction, prompting a young girl and her group of unlikely adventurers to set out to save the Overworld. **SORRY! This is a CAM version as everything else is currently down. Enjoy this early access version!**",
      metaTags: ['Action', 'Adventure', 'Video Game'],
      displayTags: ['New Release'],
      accessLevel: 'early-access' // Set as early-access for VIPs
  },
  
  // Updated from barbieMovie (upcoming)
  barbieMovie: {
      id: 'barbieMovie',
      type: 'movie', // Changed from upcoming
      title: "Barbie",
      imageUrl: "https://s3.us-east-1.amazonaws.com/product-image-bucket-prod-us/656191-Product-0-I-638324993407195372.jpg ",
      rating: "7.0/10",
      description: "Barbie suffers a crisis that leads her to question her world and her existence. To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you're a Ken.",
      url: "https://drive.google.com/file/d/1K88LvZ6q9KRwsdiVQ72Wrh5DQqWVLkd3/preview ", // Updated link
      metaTags: ['Comedy', 'Fantasy', 'Adventure']
  },

  // Updated from mufasaLionKing (upcoming)
  mufasaLionKing: {
      id: 'mufasaLionKing',
      type: 'movie', // Changed from upcoming
      title: "Mufasa: The Lion King",
      imageUrl: "https://m.media-amazon.com/images/I/81ETY9fq1YL._AC_UF894 ,1000_QL80_.jpg",
      rating: "7.5/10", // Added a placeholder rating
      description: "Explore the origin story of Mufasa, the legendary king of the Pride Lands. This story, told in flashbacks, follows Mufasa's rise from a humble orphan to one of the greatest kings the land has ever known.",
      url: "https://drive.google.com/file/d/1fpkFiPnyvjxCtN6a89i-U2H1cr5_Y_HC/preview ", // Updated link
      metaTags: ['Animation', 'Family', 'Adventure', 'Musical']
  },
  
  sakamoto: {
      id: 'sakamoto',
      type: 'series',
      title: "Sakamoto Days",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNTM4MmZiNjEtOGY0MC00MGM0LTkxZjEtODUxMmJmZWEwOWU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
      rating: "1 Season",
      description: "The world's greatest hitman, Taro Sakamoto, suddenly retires to live a quiet life as a convenience store owner with his wife and daughter. But when former colleagues and new adversaries show up, he must protect his family and his peaceful existence, all while keeping a promise not to kill.",
      previewVideoUrl: "", // Assuming no official trailer is available for now
      metaTags: ['Animation', 'Action', 'Comedy', 'Shounen'],
      episodes: {
          '1': [
              { name: "The Greatest Hitman", url: "https://drive.google.com/file/d/1iouyFvGPLQQG390X1yxpYOnfZCFlk5rI/preview ", description: "Taro Sakamoto, the legendary assassin, is now a plump but equally dangerous convenience store owner who still moves faster than the eye can see.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "Shin's Misfortune", url: "https://drive.google.com/file/d/1lAE_nJje_Mssglei0Hml1qlINGiTnETj/preview ", description: "Shin, a new assassin with mind-reading abilities, attempts to kill Sakamoto but quickly finds himself recruited as Sakamoto's reluctant partner and convenience store employee.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "The Quiet Life", url: "https://drive.google.com/file/d/15xW8LtrA2Sf7nKWAmBfdPSY3dDNtdCx7/preview ", description: "Sakamoto and Shin try to maintain their low-profile life while fending off an eccentric bounty hunter sent by an old foe.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "The Order", url: "https://drive.google.com/file/d/15KAJ3X2-YNXFEEY8mlqcG9Bt5bjldsFH/preview ", description: "Members of 'The Order,' the highest-ranked assassins, begin to move after sensing a shift in the underworld hierarchy caused by Sakamoto's presence.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "Payback for the Past", url: "https://drive.google.com/file/d/1JededQrQnSdFWg6zbSt3GwYGFvXhZ99v/preview ", description: "An assassin from Sakamoto's past resurfaces, forcing him to use his immense fighting skills in a non-lethal manner to protect his secret.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "The Convenience Store Defense", url: "https://drive.google.com/file/d/1WxRy5KpFqiCGNCRLujxF1vy8FaCs5UMb/preview ", description: "A gang of robbers makes the mistake of targeting Sakamoto's store, leading to a surprisingly brutal, yet bloodless, beatdown.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "Assassins and Family", url: "https://drive.google.com/file/d/1HB97MYfeE52paK9zxtD9NyPhMv48YMsd/preview ", description: "Sakamoto's wife, Aoi, shows her own surprising knowledge of the criminal underworld, adding a new layer to the family's dynamic.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "The Hidden Weapon", url: "https://drive.google.com/file/d/1FZ0htZekmnkug1NxOf3MJNh0dmaNTTow/preview ", description: "Shin's training intensifies as he learns to better control his mind-reading ability to keep up with Sakamoto in combat.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "Close Call", url: "https://drive.google.com/file/d/1rDtmGpCJfgJdP2aMx-7isbwP1JWwnobl/preview ", description: "A mission to buy groceries turns into a life-or-death scenario when Sakamoto runs into a deadly rival he thought was long gone.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "The Unseen Killer", url: "https://drive.google.com/file/d/11J_e9cdKHVSvqRVkhh3k72avktnaHigo/preview ", description: "Shin and Sakamoto must work together to locate a master of camouflage who specializes in non-traceable assassinations.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " },
              { name: "The Promise", url: "https://drive.google.com/file/d/1MoTHAC_V3k1tlUnBYNdUx_yjSBjWpCaf/preview ", description: "Sakamoto is forced into a final showdown to protect his family, using every non-lethal trick in his arsenal to uphold his promise.", imageUrl: "https://images8.alphacoders.com/134/thumb-1920-1349909.png " }
          ]
      }
  },
  theSimpsons: {
      id: 'theSimpsons',
      type: 'upcoming',
      title: "The Simpsons",
      imageUrl: "https://townsquare.media/site/442/files/2021/06/attachment-The-Simpsons.jpg ",
      rating: "Coming Soon",
      description: "America's favorite dysfunctional family continues their chaotic adventures in Springfield. Expect more couch gags, celebrity cameos, and a sharp, satirical look at everyday life in this highly anticipated upcoming release.",
      previewVideoUrl: "",
      metaTags: ['Animation', 'Comedy', 'Family', 'Satire']
  },
  wicked: {
      id: 'wicked',
      type: 'movie',
      title: "Wicked",
      url: "https://drive.google.com/file/d/1X8CRJUMX0ItgIUNbEUMok2sX9vd61rvt/preview ",
      imageUrl: "https://m.media-amazon.com/images/I/81cmJpAKEVL._AC_UF894 ,1000_QL80_.jpg",
      rating: "6.5",
      description: "In the Land of Oz, a young, green-skinned woman named Elphaba, misunderstood because of her unique appearance, discovers the dark secrets of the Wonderful Wizard of Oz. Her journey and friendship with the popular Glinda take a turn, leading to their opposing destinies as the Wicked Witch of the West and Glinda the Good.",
      displayTags: ['New Release'],
      metaTags: ['Musical', 'Fantasy', 'Adventure']
  },
  mitchellsVsMachines: {
      id: 'mitchellsVsMachines',
      type: 'movie',
      title: "The Mitchells vs. The Machines",
      url: "https://drive.google.com/file/d/1Ze0x8ryFdKcKClEWJ7i6ALBPwnzjznFB/preview ",
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273730ed87b6bb3bb39665504fb ",
      rating: "7.6/10",
      description: "Young Katie Mitchell embarks on a road trip with her proud parents, younger brother and beloved dog to start her first year at film school. But their plans to bond as a family soon get interrupted when the world's electronic devices come to life to stage an uprising.",
      displayTags: ['Fan Favorite'],
      metaTags: ['Animation', 'Comedy', 'Family', 'Sci-Fi']
  },
  littleMan: {
      id: 'littleMan',
      type: 'movie',
      title: "Little Man",
      url: "https://drive.google.com/file/d/1YOr9sF9mj5Xod9YZR6BNZaGQu4zpHqpa/preview ",
      imageUrl: "https://lh4.googleusercontent.com/proxy/BGYk5Wp5Trec8PKVyQIBz6aqAfrpa0QhR8P0ChWi3G41GS-2MNe9Mo2lYjUBSJlmo7aZcUdbCMrExrb-KH7F1sd3I1QxUUNEn7B_ ",
      rating: "4.4/10",
      description: "A determined jewel thief, Calvin Simms, who happens to be a little person, poses as a baby to retrieve a stolen diamond from a suburban couple. He must endure a weekend of wacky family hijinks and stay one step ahead of his double-crossing partner.",
      metaTags: ['Comedy', 'Crime']
  },
  fastAndFurious2001: {
      id: 'fastAndFurious2001',
      type: 'movie',
      title: "The Fast and the Furious (2001)",
      url: "https://drive.google.com/file/d/1vLVYdc6k3yCTkfhdLAcxPGC2IoZFBiG0/preview ",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNDA2MjJkZTgtNGQ3Ni00ZWJiLTgwNjctYjU4ZTMyNzU3ZjBlXkEyXkFqcGc@._V1_.jpg ",
      rating: "6.8/10",
      description: "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy. He forms a bond with Dominic Toretto, the charismatic leader of a gang of racers suspected of a string of daring heists.",
      metaTags: ['Action', 'Crime', 'Thriller']
  },
  karateKid: {
      id: 'karateKid', type: 'movie', title: "The Karate Kid (2010)",
      imageUrl: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2885693/5910272/MOVIB00390__03236.1679564316.jpg?c=2 ",
      rating: "6.2/10", description: "Work transfers a single mother and her young son, Dre, to China. Dre finds it hard to settle in and gets bullied by a rebellious kung fu prodigy. He finds an unlikely ally in Mr. Han, a martial arts master who teaches him the art of self-defense.",
      url: "https://drive.google.com/file/d/1tMJAooF8bG9ghav9CU4GPYF3t07ySMXL/preview ",
      previewVideoUrl: "https://youtu.be/G6f0w5BRasw ",
      metaTags: ['Action', 'Family', 'Drama']
  },
  oppenheimer: {
      id: 'oppenheimer', type: 'movie', title: "Oppenheimer",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/5a3b8d94ae9ceae5f4ddcef359d4f97f3122c07d4c677db2a5e23e6a91e75c5d._SX780_.jpg ",
      rating: "8.6/10", description: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Their work comes to fruition as they witness the world's first nuclear explosion, forever changing the course of history.",
      url: "https://drive.google.com/file/d/1GLqywDPqfZSLmLAiKC8j2l0o52cAGP8S/preview ",
      previewVideoUrl: "https://youtu.be/uYPbbksJxIg ",
      displayTags: ['Top Pick'],
      metaTags: ['Biography', 'Drama', 'History']
  },
  wreckItRalph: {
      id: 'wreckItRalph', type: 'movie', title: "Wreck-It Ralph",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_.jpg ",
      rating: "7.7/10", description: "Arcade-game villain Wreck-It Ralph is tired of being overshadowed by Fix-It Felix, the 'good guy' star of their game. He sneaks into a modern shooter game to win a medal, but soon wrecks everything, accidentally unleashing an enemy that threatens every game in the arcade.",
      url: "https://drive.google.com/file/d/11NQ1_ecO2FTIhofVPIfakshgSBnR6ngC/preview ",
      previewVideoUrl: "https://youtu.be/87E6N7ToCxs ",
      metaTags: ['Animation', 'Family', 'Comedy']
  },
  coco: {
      id: 'coco', type: 'movie', title: "Coco",
      imageUrl: "https://m.media-amazon.com/images/I/61rCC9HzCNL._AC_UF894 ,1000_QL80_.jpg",
      rating: "8.4/10", description: "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician. Desperate to prove his talent, he finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events.",
      url: "https://drive.google.com/file/d/194M4dGCwh1hTxVM1-_axnLSdt4trnbK2/preview ",
      previewVideoUrl: "https://youtu.be/Ga6RYejo6Hk ",
      metaTags: ['Animation', 'Family', 'Music']
  },
  johnWick: {
      id: 'johnWick', type: 'movie', title: "John Wick",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg ",
      rating: "7.4/10", description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him. With the city's shadowy underworld scene as his hunting ground, he unleashes the mythic fury that made him a legend.",
      url: "https://drive.google.com/file/d/1X9Kflcg0LuRjceV6JghCzs49px8cRTIk/preview ",
      previewVideoUrl: "https://youtu.be/C0BMx-qxsP4 ",
      metaTags: ['Action', 'Crime', 'Thriller']
  },
  johnWick2: {
      id: 'johnWick2', type: 'movie', title: "John Wick: Chapter 2",
      imageUrl: "https://m.media-amazon.com/images/I/81yQppFs6kL._AC_UF894 ,1000_QL80_.jpg",
      rating: "7.4/10", description: "Forced back out of retirement by a former associate, legendary hitman John Wick travels to Rome, where he squares off against some of the world's deadliest killers in a thrilling battle for survival.",
      url: "https://drive.google.com/file/d/1gzsZEVTNEb93tSa0nuzlpR2n20D4Dyx9/preview ",
      previewVideoUrl: "https://youtu.be/XGk2EfbD_Ps ",
      metaTags: ['Action', 'Crime', 'Thriller']
  },
  zootopia: {
      id: 'zootopia', type: 'movie', title: "Zootopia",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_FMjpg_UX1000_.jpg ",
      rating: "8.0/10", description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy that threatens the peace of their metropolis.",
      url: "https://drive.google.com/file/d/1HYeIrbf8A-vfvJsvYP59AQzG9l8nt03h/preview ",
      previewVideoUrl: "https://youtu.be/jWM0ct-OLsM ",
      metaTags: ['Animation', 'Family', 'Comedy']
  },
  homeAlone: {
      id: 'homeAlone', type: 'movie', title: "Home Alone",
      imageUrl: "https://lumiere-a.akamaihd.net/v1/images/image_ed8d7a4e.jpeg?region=0%2C0%2C800%2C1200 ",
      rating: "7.7/10", description: "An eight-year-old troublemaker must protect his house from a pair of bungling burglars when he is accidentally left home alone by his family during Christmas vacation.",
      url: "https://drive.google.com/file/d/18YKNCTokG3B7ZWzCE3thunyDJMktLxnm/preview ",
      previewVideoUrl: "",
      metaTags: ['Family', 'Comedy', 'Christmas']
  },
  onePunchMan: {
      id: 'onePunchMan',
      type: 'series',
      title: "One-Punch Man",
      imageUrl: "https://m.media-amazon.com/images/I/81s5qTz80SL._UF1000 ,1000_QL80_.jpg",
      rating: "1 Season",
      description: "Saitama is a hero who only became a hero for fun. After three years of 'special' training, he's become so strong that he's practically invincible. In fact, he's too strong—even his mightiest opponents are taken out with a single punch. Now, the great excitement he once felt has faded, and he's left with an overwhelming sense of boredom.",
      previewVideoUrl: "",
      metaTags: ['Action', 'Comedy', 'Anime', 'Superhero'],
      episodes: {
          '1': [
              { name: "The Strongest Man", url: "https://drive.google.com/file/d/14SRzKmZoK6rFvAymYp77-xnP2xKNnu02/preview ", description: "Saitama, a hero who can defeat any foe with a single punch, has become bored with his overwhelming strength and longs for a worthy opponent." },
              { name: "The Lone Cyborg", url: "https://drive.google.com/file/d/1VmTBKPoOsarN5DG6w9LmM2MU23yEWc55/preview ", description: "Saitama encounters Genos, a powerful cyborg seeking revenge against a mad cyborg, and unwittingly gains a disciple who is determined to learn the secret of his strength." },
              { name: "The Obsessive Scientist", url: "https://drive.google.com/file/d/1mpxR6GsgC1gHcB_fLGGgV-yINZKpOvaC/preview ", description: "Saitama and Genos investigate the House of Evolution, a mysterious organization creating powerful monsters, and confront its eccentric founder, Dr. Genus." },
              { name: "The Modern Ninja", url: "https://drive.google.com/file/d/1XexHMLTXOoxOyPiUYXB4QYcEIY6Lqke5/preview ", description: "Speed-o'-Sound Sonic, a ninja obsessed with speed, clashes with Saitama, finding himself repeatedly outmatched by the bald hero's casual power." },
              { name: "The Ultimate Master", url: "https://drive.google.com/file/d/1NJyYog45TAMlpLFLX7iIvRsiw3lGazvR/preview ", description: "Saitama and Genos seek out the martial arts master Bang (Silverfang), who is impressed by their strength but puzzled by Saitama's unconventional methods." },
              { name: "The Terrifying City", url: "https://drive.google.com/file/d/1yiZuJgLaeiT16nEWaTSUGH0U5E-stcRM/preview ", description: "City Z is declared a ghost town as monsters continue to appear, leading Saitama and Genos to take on more responsibilities as registered heroes." },
              { name: "The Ultimate Disciple", url: "https://drive.google.com/file/d/10A3723m3sdtPebsNpiw-PIrZCKuK-d8i/preview ", description: "Genos faces a powerful monster while trying to protect civilians, showcasing his growth as a hero and his unwavering dedication to justice." },
              { name: "The Deep Sea King", url: "https://drive.google.com/file/d/1ONi4w_88OGXI5YlKB4kiByEHmpDj7SiL/preview ", description: "A powerful monster, the Deep Sea King, emerges from the ocean and defeats multiple heroes, forcing Saitama to intervene and protect the city." },
              { name: "Unyielding Justice", url: "https://drive.google.com/file/d/1Cu2_j0Gr-b-0hajQCCRU8uQ0cFOAgwtQ/preview ", description: "Saitama confronts the Deep Sea King and effortlessly defeats him, but faces public scrutiny and misunderstanding despite saving the day." },
              { name: "Unparalleled Peril", url: "https://drive.google.com/file/d/1NZlwn2GEC--xtedmxM157vBCPTBqmh2y/preview ", description: "A massive meteor threatens to destroy City Z, prompting S-Class heroes to mobilize, but it's Saitama who ultimately resolves the crisis." },
              { name: "The Dominator of the Universe", url: "https://drive.google.com/file/d/17INZy-l0CSPug2qM3lNrL8koqoLa7kqM/preview ", description: "Lord Boros, an alien invader with immense power, arrives on Earth, offering Saitama the challenge he's been longing for." },
              { name: "The Strongest Hero", url: "https://drive.google.com/file/d/11949phzG2mTsbPe0RDVEfSlpwfpgfWWK/preview ", description: "Saitama engages in an epic, universe-shaking battle against Lord Boros, finally finding an opponent who can withstand more than one punch." }
          ]
      }
  },
  smile: {
      id: 'smile', type: 'movie', title: "Smile",
      imageUrl: "https://theredledger.net/wp-content/uploads/2022/10/b25lY21zOjdhMmMwNDYwLWFhYzMtNDAyNy1iZDJkLWIwNGZmN2RiZTY3NjphYjQ2NzlhMC01NjAyLTQwOGEtOGM1Yi0zOGJhMzdjMDQ5MTA.jpg ",
      rating: "8.9/10", description: "After witnessing a patient's bizarre and traumatic suicide, psychiatrist Dr. Rose Cotter finds her life spiraling into a horrifying new reality. Haunted by an entity that manifests through a deeply unsettling smile, Rose must confront her own dark past to survive before the overwhelming terror consumes her completely.",
      previewVideoUrl: "", metaTags: ['Horror', 'Intense', 'Twist']
  },
  smile2: {
      id: 'smile2', type: 'movie', title: "Smile 2",
      imageUrl: "https://m.media-amazon.com/images/I/91UrXfDJiOL.jpg ", displayTags: ['New Release'],
      rating: "9.7/10", description: "Global pop sensation Skye Riley is on the verge of a massive world tour when she begins experiencing a series of terrifying and unexplainable events. After witnessing a gruesome incident involving the curse's signature smile, the horrifying entity finds its new target. With the pressures of fame mounting and her sanity unraveling in the unrelenting glare of the public eye, Skye must fight for her life before her final performance becomes a global spectacle of terror.",
      previewVideoUrl: "", metaTags: ['Horror', 'Sequel', 'Twist']
  },
  spyxfamily: {
      id: 'spyxfamily',
      type: 'series',
      title: "Spy x Family",
      imageUrl: "https://m.media-amazon.com/images/I/81g2IjYwUwL._AC_UF1000 ,1000_QL80_.jpg",
      rating: "2 Seasons",
      description: "World peace is at stake, and master spy 'Twilight' must execute his most difficult mission yet: pretend to be a family man. He adopts a daughter who happens to be a telepath and marries a woman who is secretly a deadly assassin. This picture-perfect family is a ticking time bomb of secrets, where saving the world is second only to surviving dinner together.",
      previewVideoUrl: "",
      metaTags: ['Anime', 'Comedy', 'Action', 'Shounen'],
      seasonImages: {
          '1': 'https://www.arthipo.com/image/cache/catalog/poster/anime/700-1341/anime1111-spy-x-family-poster-9-778x1100.webp ',
          '2': 'https://a.storyblok.com/f/178900/960x540/580ef7cd1d/spy-x-family-ed2.jpg/m/filters:quality(95)format(webp )'
      },
      episodes: {
          '1': [
              { name: "Operation Strix", url: "https://drive.google.com/file/d/1fKoBJycU0rihdlwfUsOHMQa9tYov-cyE/preview ", description: "Master spy Twilight takes on his most challenging mission: to pose as a family man, 'Loid Forger,' adopt a telepathic girl named Anya, and enroll her in an elite school to prevent war.", imageUrl: 'https://www.arthipo.com/image/cache/catalog/poster/anime/700-1341/anime1111-spy-x-family-poster-9-778x1100.webp '},
              { name: "Secure a Wife", url: "https://drive.google.com/file/d/15q5D_pK1kMbx_-fDg-NB9kuXWnaKNk_J/preview ", description: "Loid realizes he needs a wife for Anya's school interview and encounters Yor Briar, a seemingly ordinary woman who is secretly a deadly assassin, leading to a marriage of convenience.", imageUrl: 'https://www.arthipo.com/image/cache/catalog/poster/anime/700-1341/anime1111-spy-x-family-poster-9-778x1100.webp '},
              { name: "Prepare for the Interview", url: "https://drive.google.com/file/d/1WrP4lWYmNveeSUDzxkPi9_5c6B1nYcTm/preview ", description: "The newly formed Forger family embarks on rigorous training to prepare for the prestigious Eden Academy interview, struggling to act like a normal, harmonious family." },
              { name: "The Prestigious School's Interview", url: "https://drive.google.com/file/d/1D9BO47NDJI4c2Sh4z8hZjQaHV-A2lpIt/preview ", description: "The Forgers face the intense and eccentric interview process at Eden Academy, with Loid and Yor trying to maintain their cover despite Anya's unpredictable telepathic outbursts." },
              { name: "Will They Pass or Fail", url: "https://drive.google.com/file/d/1WSc_ox6tZuKw6T6zbsCBQoRb6Ibs7ytK/preview ", description: "The Forgers anxiously await the results of the Eden Academy entrance exam, reflecting on their unconventional journey and the bonds they've started to form." },
              { name: "The Friendship Scheme", url: "https://drive.google.com/file/d/14kN32Ox9W8K4P1XNafxZo9zTx5MJHolP/preview ", description: "Anya, now a student at Eden Academy, struggles to befriend Damian Desmond, the son of Loid's target, as part of 'Operation Strix's' secondary plan." },
              { name: "The Target's Second Son", url: "https://drive.google.com/file/d/1Fr3KS31mOJpA4FxmVOde3F2DkU5c5jbT/preview ", description: "Anya attempts various strategies to get closer to Damian, often resulting in comical misunderstandings and accidental acts of kindness." },
              { name: "The Counter-Secret Police Cover Operation", url: "https://drive.google.com/file/d/1vW3OlJKl_G922I3e0OeXHyisMPQZV0fH/preview ", description: "Yor's younger brother, Yuri Briar, a member of the Ostanian Secret Police, visits the Forger household, forcing Loid and Yor to convincingly play the part of a loving couple." },
              { name: "Show Off How in Love You Are", url: "https://drive.google.com/file/d/1qmhAPsWMHRt8cu4DlH5qt9_I5eBw1e7-/preview ", description: "Loid and Yor try to prove their marriage is real to Yuri and their friends, leading to increasingly awkward and hilarious displays of affection." },
              { name: "The Great Dodgeball Plan", url: "https://drive.google.com/file/d/14dlpcTzgzjabjJqpw9sZd8VZ6qlj0CvH/preview ", description: "Anya participates in a dodgeball tournament, determined to win and impress Damian in hopes of getting closer to him for Operation Strix." },
              { name: "Stella", url: "https://drive.google.com/file/d/1s0NQuIMMIFT4t4rUVn3JKhVLwXTNco6Q/preview ", description: "Anya earns her first Stella Star at Eden Academy, a significant step towards achieving her goal in Operation Strix, much to Loid's calculated delight and Anya's pride." },
              { name: "Penguin Park", url: "https://drive.google.com/file/d/13ZkwVB5XPA9zAKSakBmXuasPUlKswj_l/preview ", description: "The Forgers visit a penguin aquarium, where Anya's telepathy helps them uncover a smuggling operation, turning a family outing into an unexpected mission." },
              { name: "Project Apple", url: "https://drive.google.com/file/d/1bckVyDV4lG7C8WH-c3XW_eBKkwQ--xpP/preview ", description: "Anya finds a stray dog who can see into the future, leading the family to adopt him and name him Bond, adding a new precognitive member to their spy family." },
              { name: "Disarm the Time Bomb", url: "https://drive.google.com/file/d/1fs9j_NGmp1_x4FzOENoy-3f6vxIa7NWI/preview ", description: "The Forgers and Bond work together to stop a terrorist plot involving bomb-carrying dogs, with Bond's precognitive abilities proving invaluable." },
              { name: "A New Family Member", url: "https://drive.google.com/file/d/1R65laL3SsnsYdVRoWj7zyUoJqwCEvpiL/preview ", description: "Bond officially joins the Forger family, and his unique ability to see the future brings new challenges and comedic moments to their daily lives." },
              { name: "Yor's Kitchen", url: "https://drive.google.com/file/d/1J2IgGCem7UVYJPDOmQgg2BRNZbja8oDB/preview ", description: "Yor attempts to improve her cooking skills to be a better mother, with disastrous yet hilarious results, highlighting her domestic struggles." },
              { name: "Carry Out the Griffin Plan", url: "https://drive.google.com/file/d/1ECq2ZmKHl4wKfjzY5IP44vbFTilRC-QJ/preview ", description: "Anya tries to impress her teachers and earn more Stella Stars by participating in various school activities, often with unexpected outcomes." },
              { name: "Uncle the Private Tutor", url: "https://drive.google.com/file/d/1s6OmaVLtk3RtH7Eviv8Dmm_IUnzTbr40/preview ", description: "Yuri Briar, Yor's younger brother and a member of the Ostanian Secret Police, takes on the role of Anya's private tutor, leading to a tense and comical dynamic between the two, especially with Loid observing." },
              { name: "A Revenge Plot Against Desmond", url: "https://drive.google.com/file/d/1BtNg3CK6x_fM1YO3JzrIzoO1yuGyT5Qx/preview ", description: "Anya gets involved in a scheme to get revenge on Damian Desmond, leading to more chaos and unexpected interactions between the children." },
              { name: "Investigate the General Hospital", url: "https://drive.google.com/file/d/1KepWOwEx8lPfOMPqdMIXBCWreSIT6DDL/preview ", description: "Loid goes undercover at a hospital to gather intelligence related to Donovan Desmond, intertwining his spy work with his 'family' life." },
              { name: "Nightfall", url: "https://drive.google.com/file/d/11M7SEuX5xkOyu7Bp2Iuw3yBgXSTOIxop/preview ", description: "Agent Fiona Frost, also known as Nightfall, a former colleague of Loid's, is introduced, bringing her cold demeanor and complicated feelings for Loid into the Forger family's orbit." },
              { name: "The Underground Tennis Tournament", url: "https://drive.google.com/file/d/102SCMgKoGJ7Xs2JkAi79JoidczArdT4y/preview ", description: "Loid and Fiona participate in a high-stakes underground tennis tournament to retrieve a valuable piece of art, showcasing their formidable spy skills." },
              { name: "The Unwavering Path", url: "https://drive.google.com/file/d/1Nr5fla1hWJF_JFcOIqAz1LCLF10ZRW78/preview ", description: "Loid and Fiona continue their mission, navigating dangerous challenges and relying on their espionage expertise to succeed." },
              { name: "The Role of a Mother and a Wife", url: "https://drive.google.com/file/d/1E5mSMvHB2NwP4g0doGIRac-jN6gD2X_g/preview ", description: "Yor reflects on her roles as a 'mother' and 'wife' in the Forger family, grappling with her true identity as an assassin and her growing feelings for her fake family." }
          ],
          '2': [
              { name: "First Contact", url: "https://drive.google.com/file/d/1ZHOkzX94k0Zpv9fo8FYmoYyhKXMcg8Ct/preview ", description: "Loid finally gets a chance to meet Donovan Desmond at a social gathering, but Anya's unexpected intervention and Damian's emotional struggles complicate the delicate mission.", imageUrl: 'https://www.arthipo.com/image/cache/catalog/poster/anime/700-1341/anime1111-spy-x-family-poster-9-778x1100.webp ' },
              { name: "Follow Mama and Papa", url: "https://drive.google.com/file/d/19djquvkQdQb2FhpyYbc7s6tExP1Yju-i/preview ", description: "Yor returns home injured from a mission, leading Loid to misinterpret her mood and plan a date. Anya, with Franky's help, secretly follows them, leading to comedic misunderstandings and a new assassination attempt.", imageUrl: 'https://www.arthipo.com/image/cache/catalog/poster/anime/700-1341/anime1111-spy-x-family-poster-9-778x1100.webp ' },
              { name: "Bond's Strategy to Stay Alive / Damian's Field Research Trip", url: "https://drive.google.com/file/d/11kzFS6ebpBA1721v4gAXyguVrc5sXxUY/preview ", description: "Bond foresees a dreadful future involving Yor's cooking and seeks Loid's help during a mission. Meanwhile, Damian and his friends embark on a chaotic field trip as punishment." },
              { name: "Mission and Family / The Elegant Bondman / The Heart of a Child / Waking Up", url: "https://drive.google.com/file/d/1rkJVC_p6aDdF6q1uRb-qR_YytrMTtNS--G/preview ", description: "Yuri is assigned to investigate a journalist suspected of slandering Ostania, while Anya enjoys her favorite hero, Bondman." },
              { name: "The Pastry of Knowledge / The Informant's Great Romance Plan II", url: "https://drive.google.com/file/d/1Sl0PlRLITjtSxERJjPsAzWpMlN59P0hh/preview ", description: "Anya and her classmates fiercely compete for a legendary macaron rumored to grant intelligence. Franky enlists Yor's help to find a lost cat and impress a girl, with hilarious results." },
              { name: "Plan to Cross the Border", url: "https://drive.google.com/file/d/1v3YFfLWcYNKiVdMeHiuNg6DAgFbcjcG7/preview ", description: "Yor embarks on a high-stakes mission as the Thorn Princess to protect a client on a luxury cruise ship. Coincidentally, Anya wins tickets for the same cruise, turning their family vacation into an unexpected blend of leisure and peril." }
          ]
      }
  },
  jujutsuKaisen: {
      id: 'jujutsuKaisen',
      type: 'series',
      title: "Jujutsu Kaisen",
      imageUrl: "https://m.media-amazon.com/images/I/81P23TTEAKL._UF1000 ,1000_QL80_.jpg",
      rating: "1 Season + Movie",
      description: "Yuji Itadori, a kind-hearted high schooler, joins his school's Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He soon swallows a cursed finger to protect his friends and becomes the host of a powerful curse.",
      previewVideoUrl: "https://youtu.be/pkKu9hLT-t8 ",
      metaTags: ['Action', 'Fantasy', 'Anime', 'Shounen', 'Supernatural'],
      episodes: {
          '0': [
              { name: "Jujutsu Kaisen 0", url: "https://drive.google.com/file/d/1mU5HS6GK3_xVtpmjVU3mhY0dN3iv7ZO7/preview ", description: "Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit, is enrolled by the sorcerers at Tokyo Jujutsu High School to help him control his power and keep an eye on him." }
          ],
          '1': [
              { name: "Ryomen Sukuna", url: "https://drive.google.com/file/d/1ouFiPb_r9qtwz3OWgTT_Ko9iEtpkmaHn/preview ", description: "Yuji Itadori swallows a cursed object to save a friend, becoming the vessel for the powerful curse, Ryomen Sukuna." },
              { name: "For Myself", url: "https://drive.google.com/file/d/1a0K_zblfuVDPHdgUt5FQpeDBjhtibX35/preview ", description: "Satoru Gojo brings Yuji to the Tokyo Prefectural Jujutsu High School, where he faces an unusual interview with the principal." },
              { name: "Girl of Steel", url: "https://drive.google.com/file/d/1XS3zb6a2aW5ubJwB105RQYbaObpHLKqh/preview ", description: "The third first-year student, Nobara Kugisaki, arrives. Yuji and Megumi are tasked with exorcising curses in Roppongi with her." },
              { name: "Curse Womb Must Die", url: "https://drive.google.com/file/d/1F-5EBOKtIzoQe0nPMEqtfUvwXpeD39nQ/preview ", description: "The first-years are sent to rescue inmates at a juvenile detention center, where they encounter a special grade cursed spirit." },
              { name: "Curse Womb Must Die -II-", url: "https://drive.google.com/file/d/1gIfqomnV_OaKGTah_kYdPWhe9YeazpRv/preview ", description: "Yuji allows Sukuna to take over to fight the special grade curse, leading to a devastating and tragic outcome." },
              { name: "After Rain", url: "https://drive.google.com/file/d/1XJ1nYWtTXE7iK3W6gQMTzCPVK4KNudOt/preview ", description: "Megumi and Nobara reflect on their mission's failure, while Yuji finds himself in Sukuna's innate domain, striking a deal." },
              { name: "Assault", url: "https://drive.google.com/file/d/12-F1_Zk2MyFq0hNsqrdh8ztyB2yw2Ykh/preview ", description: "Gojo is ambushed by Jogo, a special grade curse. The most powerful sorcerer shows the overwhelming difference in their strength." },
              { name: "Boredom", url: "https://drive.google.com/file/d/1D3UX5iHbjkZLDzGz4Gn-msPxKyfVRBlB/preview ", description: "The second-year students from Kyoto Jujutsu High arrive, leading to a tense confrontation before the exchange event." },
              { name: "Small Fry and Reverse Retribution", url: "https://drive.google.com/file/d/189_iz3NI_po958trSReGarl_N0YeHYZu/preview ", description: "Yuji investigates a series of mysterious deaths with the sorcerer Kento Nanami, confronting the cursed spirit Mahito." },
              { name: "Idle Transfiguration", url: "https://drive.google.com/file/d/1XKzeLZCt11v5NnqEFkuDiVFTgm94ATav/preview ", description: "Yuji faces Mahito, a curse who can reshape human souls. He learns the true cruelty of curses and his own powerlessness." },
              { name: "Narrow-minded", url: "https://drive.google.com/file/d/1KK5cKYTrF5c9AYahCppKy1S4XCovuRMF/preview ", description: "Nanami battles Mahito in the sewers, unleashing his powerful Cursed Technique and pushing himself to his limits." },
              { name: "To You, Someday", url: "https://drive.google.com/file/d/1b3aqelQpncw9AZYfgPJSv_qHMavzP0I6/preview ", description: "Yuji and Nanami combine their efforts to corner Mahito, forcing the curse to reveal his ultimate, terrifying ability." },
              { name: "Tomorrow", url: "https://drive.google.com/file/d/1wwhicvYC95oZoHf7MFE-uJ5Qn7baXS6t/preview ", description: "After the intense battle, Yuji reflects on his path as a sorcerer, determined to save people from unjust deaths." },
              { name: "Kyoto Sister School Exchange Event - Group Battle 0 -", url: "https://drive.google.com/file/d/1OKU3WU5rSbbze6NOu3wp-UL3PjREA4Ho/preview ", description: "Yuji makes a surprising return to his friends as the Kyoto Sister School Exchange Event is about to begin." },
              { name: "Kyoto Sister School Exchange Event - Group Battle 1 -", url: "https://drive.google.com/file/d/1-5MFYOhVxEsJ8wAUF9rkX7ada4FJLme-/preview ", description: "The exchange event kicks off with a team battle, but the Kyoto students have a secret mission: to kill Yuji Itadori." },
              { name: "Kyoto Sister School Exchange Event - Group Battle 2 -", url: "https://drive.google.com/file/d/1Q4uwWEFxt3FBpVKzGbv2eyDKJwP0JlGT/preview ", description: "The Tokyo and Kyoto students clash. Panda reveals his unique origins, and Nobara faces off against the broom-riding Momo." },
              { name: "Kyoto Sister School Exchange Event - Group Battle 3 -", url: "https://drive.google.com/file/d/1rS8T4NAssPN3MIjLRHyTKb2dfTCnUUxe/preview ", description: "Megumi is cornered by Noritoshi Kamo, while Maki demonstrates her overwhelming skill against her sister Mai." },
              { name: "Black Flash", url: "https://drive.google.com/file/d/1o8ar1PMqyQmcqsIj10KkMYLBE_etHFVl/preview ", description: "Yuji partners with Aoi Todo in an unlikely battle against the special grade cursed spirit Hanami." },
              { name: "Nonstandard", url: "https://drive.google.com/file/d/13CDgeNY-nAxqAcUIC2_b3kra2gCVrWns/preview ", description: "Todo teaches Yuji how to unleash the powerful 'Black Flash' technique, elevating their fight against Hanami to a new level." },
              { name: "Jujutsu Koshien", url: "https://drive.google.com/file/d/1Fpl76gcFZtLSkTDdRWeWu8c0j66qMMsU/preview ", description: "With the group battle interrupted, the principals decide the exchange event's winner with a baseball game." },
              { name: "The Origin of Blind Obedience", url: "https://drive.google.com/file/d/1yQxz_hoVqhI3RXG5KvQZ7VDRCtuPXF-X/preview ", description: "Yuji, Megumi, and Nobara investigate a series of mysterious deaths linked to Megumi's old junior high school." },
              { name: "The Origin of Blind Obedience - 2 -", url: "https://drive.google.com/file/d/17bf2kJRlX-3hpv6fLNE3PMKtwkrn4zLj/preview ", description: "The trio faces off against two of the Cursed Womb: Death Paintings, powerful curses with human intelligence." },
              { name: "Accomplices", url: "https://drive.google.com/file/d/1izPRzndUvD6___vYuUEcvltvxD0GYp46/preview ", description: "The battle against the Death Paintings concludes, forcing Nobara and Yuji to make difficult, life-or-death decisions." },
              { name: "Accomplices Part 2", url: "https://drive.google.com/file/d/151pcbuetB8Z3dq1aaV0UDJh2UWAkz3TR/preview ", description: "Yuji and Nobara deal with the emotional aftermath of their battle, while the higher-ups make their next move regarding the Cursed Wombs." }
          ]
      }
  },
  soloLeveling: {
      id: 'soloLeveling',
      type: 'series',
      title: "Solo Leveling",
      imageUrl: "https://m.media-amazon.com/images/I/71jagbaupDL.jpg ",
      rating: "2 Seasons",
      description: "In a world where hunters with supernatural abilities must battle deadly monsters to protect humanity, Sung Jinwoo, a notoriously weak hunter, finds himself in a desperate struggle for survival. He is chosen by a mysterious program called the System, which grants him the unique ability to grow in strength without limit. Jinwoo begins his journey to become the world's most powerful hunter.",
      previewVideoUrl: "https://youtu.be/lF_xetDKjbc ",
      metaTags: ['Action', 'Fantasy', 'Anime', 'Isekai'],
      episodes: {
          '1': [
              { name: "I'm Used to It", url: "https://drive.google.com/file/d/1Pced2D_GcBWGiO1FYPqJmP2_SdtDGonq/preview ", description: "Sung Jinwoo, the 'World's Weakest Hunter,' joins a raid party for a seemingly low-rank D-Gate that hides a terrifying secret." },
              { name: "If I had one more chance", url: "https://drive.google.com/file/d/1AowuU1eRGad_NrGWcrGQ1Q1bZeTioULz/preview ", description: "Betrayed and left for dead in a double dungeon, Jinwoo accepts a mysterious offer to become a 'Player,' giving him a second chance at life." },
              { name: "It's like a game", url: "https://drive.google.com/file/d/13bq6xo7ywzs0lE-P4hReomH_N4ULcXSA/preview ", description: "Jinwoo begins to understand his new reality, guided by a game-like interface that only he can see, and starts completing daily quests to get stronger." },
              { name: "I've Gotta Get Stronger", url: "https://drive.google.com/file/d/14VxKOLYVyXzvEuRjI3t17YT86svNzetC/preview ", description: "Jinwoo enters his first solo instance dungeon, facing wolves and a powerful boss, pushing his new abilities to their limit." },
              { name: "A Pretty Good Deal", url: "https://drive.google.com/file/d/1y9avrwaqKKlbFjrbvJ5HbywyK64XQMQ_/preview ", description: "To pay for his mother's hospital bills, Jinwoo joins a C-rank raid led by Hwang Dongsuk, whose friendly demeanor hides a sinister plan." },
              { name: "The Real Hunt Begins", url: "https://drive.google.com/file/d/1A9apI3Zp6ibmE3ZphF_PLHp3J97WRiJp/preview ", description: "Trapped with a giant spider boss, Jinwoo must survive not only the monster but also the betrayal of his own party members." },
              { name: "Let's See How Far I Can Go", url: "https://drive.google.com/file/d/1HlSsYeTdIBu3EcYjmNFrGTql3t8kBczV/preview ", description: "Jinwoo teams up with the good-natured Yoo Jinho, clearing C-rank dungeons and rapidly increasing his level and power." },
              { name: "This is Frustrating", url: "https://drive.google.com/file/d/1RLIZuxUBkeZMJWQR_s3wuQrcKLait7km/preview ", description: "Agents from the Hunter's Association's Surveillance Team become suspicious of Jinwoo's sudden and impossible growth in power." },
              { name: "You've Been Hiding Your Skills", url: "https://drive.google.com/file/d/1ik3ZthxWkLAxHZj-In9xSfz-Sm47V6Jr/preview ", description: "Jinwoo, Jinho, and a group of hunters find themselves trapped in a high-level dungeon, where Jinwoo is forced to reveal some of his strength." },
              { name: "What is This, a Picnic?", url: "https://drive.google.com/file/d/1OrsTgMFjsYpLyfhfplbQ5ljkFlqYY9X6/preview ", description: "Jinwoo confronts Kang Taeshik of the Surveillance Team, a deadly assassin who threatens the lives of the raid survivors." },
              { name: "A Knight Who Defends an Empty Throne", url: "https://drive.google.com/file/d/1DlSJp9okB2iXFGhv7ljDXW0kQb-GxaA9/preview ", description: "Jinwoo faces the Job-Change quest, a grueling challenge against waves of armored knights and a formidable commander, Igris." },
              { name: "Arise", url: "https://drive.google.com/file/d/1k3NTiliKIoKmNKokbwkqmIQMJvGBwWG6/preview ", description: "After defeating Igris and completing the quest, Jinwoo unlocks a new, terrifying power: the ability to extract shadows and create an army of the dead." }
          ],
          '2': [
              { name: "This Is a New Beginning", url: "https://drive.google.com/file/d/1dnRqoh1JtAqEJgEQ9p-LyVuyKl6kptKO/preview ", description: "After a stunning re-evaluation, Jinwoo officially becomes an S-rank hunter, attracting the attention of guilds and powerful figures across the country." },
              { name: "The Red Gate", url: "https://drive.google.com/file/d/18Pelwv5Z_TvLj1sb6xkxZxiv26z7cIyu/preview ", description: "Jinwoo and Jinho's raid party gets trapped inside a Red Gate, a high-level dungeon with no escape, filled with powerful Ice Elves." },
              { name: "A Test of Strength", url: "https://drive.google.com/file/d/1ARcBKjIJ-JnQRafp9SYkOooVgF8VsspZ/preview ", description: "Jinwoo must lead the survivors and use his growing shadow army to battle the relentless onslaught of Ice Elves and their formidable leader." },
              { name: "The Jeju Island Raid", url: "https://drive.google.com/file/d/1gUNBIDQ_Ghk2qfe3h19SQIz0Rm-FHhPG/preview ", description: "Korea's top hunters prepare for the fourth Jeju Island raid, an attempt to reclaim the island from monstrously powerful magic beasts." },
              { name: "The Ant King", url: "https://drive.google.com/file/d/1wXL-kjWRi1oYr0LsEi73Bx3shYGIiTe-/preview ", description: "The raid begins, but the hunters are overwhelmed by the birth of the Ant King, a creature with intelligence and horrifying power." },
              { name: "A Hero's Arrival", url: "https://drive.google.com/file/d/1gHiY0B8SCjEsns2QQQGlzQYiMlYX5804/preview ", description: "As Korea's strongest hunters fall, Jinwoo arrives on Jeju Island, ready to confront the monster that has defeated S-rank heroes." },
              { name: "The Monarch's Power", url: "https://drive.google.com/file/d/1Xdt6J6ALQ1_1NK0tRG0Qfg4tcx6uQIX8/preview ", description: "Jinwoo unleashes his full power against the Ant King in a devastating battle, showcasing a level of strength never seen before." },
              { name: "Beru", url: "https://drive.google.com/file/d/1FYRZQ6vxoJxtNeaij1PjZAPWMVKy2m5n/preview ", description: "Jinwoo successfully extracts the Ant King's shadow, gaining his most powerful soldier yet, whom he names 'Beru'." },
              { name: "America's Offer", url: "https://drive.google.com/file/d/1nufIhP2T_lndkQ1f9D-t4gcyXenw4s9b/preview ", description: "News of Jinwoo's power spreads globally, leading to a lucrative and life-changing offer from the United States Hunter Bureau." },
              { name: "The Uprising", url: "https://drive.google.com/file/d/17_TDNSspeTsS27MDXJllrut6svvsO9gC/preview ", description: "Jinwoo must decide his future as new, world-ending threats begin to emerge, hinting at a war far greater than just fighting monsters in dungeons." }
          ]
      }
  },
  blueLock: {
      id: 'blueLock',
      type: 'series',
      title: "Blue Lock",
      imageUrl: "https://a.storyblok.com/f/178900/1064x1504/c7214069da/blue-lock-season-2-key-visual.png/m/filters:quality(95)format(webp )",
      rating: "1 Season",
      description: "After a disastrous defeat at the 2018 World Cup, Japan's team struggles to regroup. But what's missing? An absolute Ace Striker, who can guide them to the win. The Football Association is hell-bent on creating a striker who hungers for goals and thirsts for victory, and who can be the decisive instrument in turning around a losing match... and to do so, they've gathered 300 of Japan's best and brightest youth players. Who will emerge to lead the team?",
      previewVideoUrl: "https://youtu.be/_rLJbEYRIzA ",
      metaTags: ['Sports', 'Anime', 'Shounen', 'Action'],
      episodes: {
          '1': [
              { name: "Dream", url: "https://drive.google.com/file/d/1iAqtYqh8rgnFVbWVepB4SPNdKSEgFArb/preview ", description: "High school soccer player Yoichi Isagi is invited to Blue Lock, a ruthless training program designed to create the world's greatest egoist striker." },
              { name: "Monster", url: "https://drive.google.com/file/d/1tS1YPZnATWitOEVBUAb5ZpmASJhqXaWq/preview ", description: "Isagi and his Team Z roommates face their first challenge in Blue Lock: a game of tag where the loser is eliminated forever." },
              { name: "Soccer's 'Zero'", url: "https://drive.google.com/file/d/1vrY88yqvS9j31kyPRpMtZu64PKS8nKE5/preview ", description: "Team Z begins its first official match in the round-robin tournament, struggling to find a way to score against the formidable Team X." },
              { name: "Premonition and Intuition", url: "https://drive.google.com/file/d/19w1CD1xpB_MZLc3nnzP5thhtt4uRoVup/preview ", description: "Isagi begins to awaken his hidden potential, using his spatial awareness to predict the flow of the game and create scoring opportunities." },
              { name: "To Be Reborn", url: "https://drive.google.com/file/d/1XpDEu-lwuvXyC6yiIc_Ltw1syyMU7XV2/preview ", description: "Team Z must overcome their internal conflicts and learn to work together, leading to a crucial goal that changes the team's dynamic." },
              { name: "I'm Sorry", url: "https://drive.google.com/file/d/17d2VxePhe6t_8czDB7zZynB-7xoK90T5/preview ", description: "The match against Team W introduces the crafty Wanima twins, whose deceptive tactics push Team Z to the brink of defeat." },
              { name: "Rush", url: "https://drive.google.com/file/d/1cVpX0c7ziRAghA4qnKyNXmQWTtarH979/preview ", description: "Chigiri, the team's speedy winger, must overcome his past trauma and fear of injury to unleash his true weapon on the field." },
              { name: "The Formula for a Goal", url: "https://drive.google.com/file/d/144SbJYj5juwxRPIAh0986auSjRE4HQm-/preview ", description: "Isagi and Nagi, a genius from the opposing Team V, begin to synchronize, creating a powerful chemical reaction that leads to incredible plays." },
              { name: "Awakening", url: "https://drive.google.com/file/d/1gHHszo4JKlJBohnbsGJnMfQ2hpsdDauO/preview ", description: "The high-stakes match against Team V continues, with both teams pushing their limits. Isagi fully awakens his ego as a striker." },
              { name: "Just the Way It Is", url: "https://drive.google.com/file/d/1afm3atmVzhV7jmT0SHqdYG8VoIpuIwvF/preview ", description: "With the first selection nearing its end, the players reflect on their progress, and a shocking betrayal threatens to tear Team Z apart." },
              { name: "The Last Piece", url: "https://drive.google.com/file/d/1dGZIYkCLnBiMoMx-sOtedkOji9kBVwu_/preview ", description: "In their final match, Team Z must overcome betrayal from within and face their toughest opponents yet to avoid elimination." },
              { name: "The Second Selection", url: "https://drive.google.com/file/d/1EF2hh28s697lE3amw7S7XFW8mowK_pto/preview ", description: "The surviving players advance to the Second Selection, where they face new, even more demanding challenges designed to test their individual skills." },
              { name: "TOP3", url: "https://drive.google.com/file/d/1ARi9KnlsIX5lOXqvlmpP8qrOO82J7b5c/preview ", description: "Isagi finds himself up against the top players in Blue Lock, including the prodigy Itoshi Rin, in a 3-on-3 match." },
              { name: "The Geniuses and the Average Joes", url: "https://drive.google.com/file/d/1k0IVaHYq2Ibw5ZAcofmIj62kvGirRvIX/preview ", description: "Isagi teams up with Bachira and Nagi, forming a powerful trio as they navigate the challenges of the Second Selection." },
              { name: "Devour", url: "https://drive.google.com/file/d/1kapsupjbuh9cYFFS2H2J7seoqhvAxWbL/preview ", description: "The concept of 'devouring' another player's skills becomes central as Isagi learns to adapt and evolve by incorporating his rivals' strengths." },
              { name: "Tri-Fusion", url: "https://drive.google.com/file/d/1YypkxpmAAc3euhj64NH7y6cN_MsYY-5q/preview ", description: "The chemistry between Isagi, Bachira, and Nagi grows as they face off against another skilled team in a high-stakes match." },
              { name: "Donkey", url: "https://drive.google.com/file/d/1akE5jQ8ilnkdLOC3ViXFd90WHYTv58y8/preview ", description: "Isagi struggles to find his role on a team of geniuses, feeling like a supporting player rather than the star striker he's meant to be." },
              { name: "The Stage for the Lead", url: "https://drive.google.com/file/d/1fVGLRbLs6KoQcGtNd4vL7A3_WT21g8ci/preview ", description: "A crucial match forces Isagi to redefine his ego and find a new way to score, proving he belongs on the same stage as the top players." },
              { name: "Dancing Boy", url: "https://drive.google.com/file/d/1gVQpFNgUuYl9eoXWoH3DFSqRrp4eoMOL/preview ", description: "Bachira's past is revealed, explaining the 'monster' inside him that drives his creative and unpredictable style of play." },
              { name: "Super Link-Up Play", url: "https://drive.google.com/file/d/1EkVjX3hdfVyDx1aZKAp6zXBnSb6UBza9/preview ", description: "The players begin to develop incredible synergy, leading to complex and breathtaking plays that showcase their evolving skills." },
              { name: "I'm Not There", url: "https://drive.google.com/file/d/1jJOWlF8jWwHwhEA5wB5zhMpU_tHgrda1/preview ", description: "Isagi faces Itoshi Rin again, realizing the immense gap in their abilities and the need for him to evolve even further to compete." },
              { name: "A Voice", url: "https://drive.google.com/file/d/13yGi7SJE_4Wt7-rJoMAFRA454TMbTWVu/preview ", description: "As Bachira confronts the 'monster' within, he must choose between playing with his friends and pursuing his own egoistic dream." },
              { name: "Luck", url: "https://drive.google.com/file/d/1HKBObjUmsVEjIEijs021ePvgBztcyFe0/preview ", description: "Itoshi Rin explains his philosophy on 'luck' in soccer, revealing how he manipulates circumstances to create his own goal-scoring opportunities." },
              { name: "The Time Has Come", url: "https://drive.google.com/file/d/1VcFf07zoC9PgkflGP0j6Cm3EP9sEl9cw/preview ", description: "The final match of the Second Selection pits Isagi's team against Rin's in a climactic battle for survival and the right to advance." }
          ]
      }
  },
  attackOnTitanSeriesUpcoming: {
      id: 'attackOnTitanSeriesUpcoming',
      type: 'upcoming',
      title: "Attack on Titan",
      imageUrl: "https://m.media-amazon.com/images/I/71NdNnKe8AL.jpg ", // Using a generic AOT image
      rating: "Coming Soon",
      description: "The epic conclusion of the Attack on Titan saga is on the horizon. Eren Yeager's true intentions and the fate of Paradis Island will finally be revealed in this highly anticipated final installment.",
      previewVideoUrl: "", // Placeholder for a potential trailer
      metaTags: ['Action', 'Anime', 'Dark Fantasy', 'War']
  },
  theAmazingWorldOfGumball: {
  id: 'theAmazingWorldOfGumball',
  type: 'series',
  title: "The Amazing World of Gumball",
  imageUrl: "https://m.media-amazon.com/images/I/91WLaRVV1QL._AC_UF1000 ,1000_QL80_.jpg",
  rating: "3 Seasons",
  description: "The misadventures of Gumball Watterson, a 12-year-old cat, and his best friend—a goldfish named Darwin—who is also his adopted brother. Together, they navigate the chaos of Elmore, a surreal and bizarre town where a blend of 2D, CGI, and live-action animation brings every character to life.",
  previewVideoUrl: "",
  accessLevel: 'early-access',
  metaTags: ['Animation', 'Comedy', 'Kids', 'Surreal Comedy'],
  seasonImages: {
      '1': 'https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg ',
      '2': 'https://s.yimg.com/ny/api/res/1.2/CQ73Z0VN9qONMdcSsNFFNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/comingsoon_net_477/8db44981aa4c64c02660e488a919780f ',
      '3': 'https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg '
  },
  episodes: {
      '1': [
          { name: "The DVD", url: "https://drive.google.com/file/d/1b1-_gAr6DT89hd6ateTEaJ5TowjIoa5a/view?usp=drive_link ", description: "Gumball and Darwin try to get out of returning a rented DVD when they accidentally destroy it.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Responsible", url: "https://drive.google.com/file/d/194Yje1KPgw2l4kjs0rJIJ6c26FRx4RMj/view?usp=drive_link ", description: "Gumball and Darwin babysit Anais while their parents go to a school meeting, but she proves to be a handful.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Third", url: "https://drive.google.com/file/d/1mCtCHdWgZ0XZQim_0HLFTIYCX5TA8lnA/view?usp=drive_link ", description: "Gumball searches for a third friend to round out his clique, but becomes jealous when Darwin befriends Tobias.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Debt", url: "https://drive.google.com/file/d/1RC8f0jw47oHW2S2etVl3rItluagMg4h9/view?usp=drive_link ", description: "Gumball feels like he owes a debt to Mr. Robinson after he avoids hitting him with his car.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The End", url: "https://drive.google.com/file/d/19Boa26cA29DonOTdB0V9KHqN9_z3qV2R/view?usp=drive_link ", description: "Gumball and Darwin think that the world will end in 24 hours and decide to make the most of their remaining time.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Dress", url: "https://drive.google.com/file/d/1npJ4JBbgTOUEqeeKgy6m-KVx8jnTyOJF/view?usp=drive_link ", description: "Gumball has nothing to wear but his Mom's wedding dress, and is mistaken for a beautiful girl.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Quest", url: "https://drive.google.com/file/d/1aEhyFIKwZ62ndmA209Y_hizFTVil8_D7/view?usp=drive_link ", description: "Gumball and Darwin help Anais rescue her beloved doll from the school bully, Tina Rex.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Spoon", url: "https://drive.google.com/file/d/1uOp6zs3LY0cCGrwdrRAN7IyerhibTYAn/view?usp=drive_link ", description: "Gumball and Darwin get caught up in a robbery when they are sent to the gas station to buy a birthday present.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Pressure", url: "https://drive.google.com/file/d/1tHSD7g4z6efR2-8tAh1ZDXeuW6mprAFQ/view?usp=drive_link ", description: "Gumball tries to save Darwin from being kissed by a girl.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Painting", url: "https://drive.google.com/file/d/1iX46p1pe-K-Q9tiYXxKBqo6f40Yz_Tiy/view?usp=drive_link ", description: "Principal Brown is concerned about a picture Anais drew of her family, leading to an intervention.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Laziest", url: "https://drive.google.com/file/d/16O_NXj2sxXuD5ibr-xUeciSpwPNfvDOK/view?usp=drive_link ", description: "Richard, Gumball, and Darwin hold a contest to see who can be the laziest member of the family.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Ghost", url: "https://drive.google.com/file/d/17qzpvkLIIwK9kl1_gwxVf8dpdQ2f2zVU/view?usp=drive_link ", description: "Gumball gets a ghost friend, Carrie, who decides to possess his body.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Mystery", url: "https://drive.google.com/file/d/1mQNW-SXjAri2CY-W8AFswFMlTb5jXG5K/view?usp=drive_link ", description: "Miss Simian's class finds Principal Brown wrapped up in toilet paper, and Gumball decides to solve the mystery.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Prank", url: "https://drive.google.com/file/d/1XrBq-uqszYsh-rSF7ly1Kh7epjQD99Mr/view?usp=drive_link ", description: "Gumball and Darwin prank their dad relentlessly until he loses his mind.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Gi", url: "https://drive.google.com/file/d/1fP45h7xDwiDL_hKgq3_xbYB3BQvC82b_/view?usp=drive_link ", description: "Gumball and Darwin's martial arts costumes make them a laughing stock at school.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Kiss", url: "https://drive.google.com/file/d/1QI7rlrOnc8nIhPGxNluCurIuhhJe8YFe/view?usp=drive_link ", description: "When Gumball gets kissed by Granny Jojo, Darwin tries to help him forget the traumatic experience.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Party", url: "https://drive.google.com/file/d/1nzP56twUWW20ASq3HX7stMc1JgeB7vmD/view?usp=drive_link ", description: "Gumball's class is invited to a high-school party, provided they can bring along a date.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " },
          { name: "The Refund", url: "https://drive.google.com/file/d/1nmz_7l_15gKYx11lxN_CMx_h4OWHO00Z/view?usp=drive_link ", description: "Gumball and Darwin try to get a refund for a defective video game by confusing the convenience store owner, Larry.", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/9cff9725f9f3f3fc4afe98cde90144f11144676a8141ea14e8f2672aae884934.jpg " }
      ],
      '2': [
          { name: "The Remote", url: "https://drive.google.com/file/d/14hUzk0i8Rng_FOCmmiGqXj6NBVK6TOuy/view?usp=drive_link ", description: "The Wattersons' battle for possession of the TV remote gets dirty.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Colossus", url: "https://drive.google.com/file/d/1JK0UmUqIKqYsI88e4y_V0Pb2GuwPI1ja/view?usp=drive_link ", description: "After declining a friend request, Gumball and Darwin try to improve Hector's life, the giant of Elmore.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Knights", url: "https://drive.google.com/file/d/1urhl-eugMahj9CjNBrPgEmoffLUyURqa/view?usp=drive_link ", description: "Gumball and Tobias compete for Penny's affection by putting on the lamest duel in history.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Fridge", url: "https://drive.google.com/file/d/1S4z6IZmZHe8DAkDPoDPAa0PBseouL4K1/view?usp=drive_link ", description: "When Mom discovers Gumball has no ambition she is determined to turn him into a winner.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Flower", url: "https://drive.google.com/file/d/1QsNuNx_F-7DzcY9O3eks1_wvB_P-nsCg/view?usp=drive_link ", description: "Gumball gets jealous after Penny is seen hanging out with Leslie.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Banana", url: "https://drive.google.com/file/d/1CpbvOYNiQ8Mscr1i4x5kjp-R25aMY-hi/view?usp=drive_link ", description: "Darwin lends his pen to Banana Joe, but when it comes back chewed, Gumball's thoughts turn to revenge.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Phone", url: "https://drive.google.com/file/d/1Hl6liWUKsmPvuR0g-ldfnVpR1Uny8L90/view?usp=drive_link ", description: "When Gumball and Darwin get their first cell phone, they foolishly give out their number to super-intense Ocho.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Job", url: "https://drive.google.com/file/d/1y-bK3KOSpAaE0DgKqb3SP-XZXyMIRTF7/view?usp=drive_link ", description: "Dad gets his first job as a pizza delivery guy, but strange things begin to happen around Elmore as a result.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "Halloween", url: "https://drive.google.com/file/d/1Vo4rsenxDZORITZesJPmhDAmXHGvttO3/view?usp=drive_link ", description: "Carrie takes Gumball, Darwin and Anais to a real haunted house party on Halloween.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Treasure", url: "https://drive.google.com/file/d/1rcLhzf1FxPASa1J3OokfHoLvdTtQFUGK/view?usp=drive_link ", description: "Gumball looks into why the family doesn't have any money for nice things and ends up on a treasure hunt.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Apology", url: "https://drive.google.com/file/d/1f7xS5w_FRdvNUiky606poHhvhcoAXKli/view?usp=drive_link ", description: "Ms. Simian tries to frame Gumball and Darwin after a misunderstanding involving her revealing dress.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Words", url: "https://drive.google.com/file/d/1UXHqunC2lmoCAibS5Xa2kzvt0qvupOwb/view?usp=drive_link ", description: "Darwin is too polite to speak his mind, so Gumball teaches him to be direct via an epic battle of insults.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Skull", url: "https://drive.google.com/file/d/1SSTORrAn3w_-3BRwL6LBfk-pHAAMwl-G/view?usp=drive_link ", description: "Gumball and Darwin make friends with classmate Clayton, a compulsive liar who can shape-change.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Bet", url: "https://drive.google.com/file/d/1gQbC4jVwoRopAechot7vN7GhuyajSBpn/view?usp=drive_link ", description: "Gumball tries to treat Bobert as a regular kid by doing a bet with him.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "Christmas", url: "https://drive.google.com/file/d/142gixOLxxM4d-q5rFSZpLgJ7i3Ogi8OS/view?usp=drive_link ", description: "Santa Claus is coming to town. Unfortunately he gets run over by the Wattersons, so it's up to them to save Christmas.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Watch", url: "https://drive.google.com/file/d/1zHPXO2tlifLQEpF_5OIkyNqwW2pn0xGl/view?usp=drive_link ", description: "Gumball and Darwin learn that getting a family heirloom back off an old man is harder than you might think.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Bumpkin", url: "https://drive.google.com/file/d/1pRsf8bpTFnT3gB2TlKA1IDaJtguBiN_u/view?usp=drive_link ", description: "Envious of his rustic lifestyle, Gumball invites Idaho over to teach the Wattersons how to live like a potato.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Flakers", url: "https://drive.google.com/file/d/1CJtuhv46c6Z77uUUPWEipv1LFkfWym8y/view?usp=drive_link ", description: "When Gumball is left by Darwin to get beaten up by Tina, Gumball decides to return the favor.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Authority", url: "https://drive.google.com/file/d/1ZE-jcLeMsO2fRhjIBDNDMrGdKujnuK4M/view?usp=drive_link ", description: "Granny Jojo's overprotective behavior puts the Wattersons in danger - from themselves.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Virus", url: "https://drive.google.com/file/d/1dmk24V8cWSTzerscDoQdtxNnSSkDSoRc/view?usp=drive_link ", description: "Teri teaches Gumball and Darwin that germs really can affect you.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " }
      ],
      '3': [
          { name: "The Kids", url: "https://drive.google.com/file/d/1OGdx-IXO12ID-9FFSEpEaxS4gxDapv1S/view?usp=drive_link ", description: "Gumball and Darwin's voices may be breaking, but they're showing no signs of growing up.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Fan", url: "https://drive.google.com/file/d/1z9FPIB_J-RSOf1NkD30yjbY7Jxbv4XeP/view?usp=drive_link ", description: "Sarah, the new student at Elmore Jr. High, becomes Gumball and Darwin's number one, slightly obsessive, fan.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Coach", url: "https://drive.google.com/file/d/1t4d1L-pOdMAzkVH7WZ2G9q2gliRp4Xyx/view?usp=drive_link ", description: "The new coach at Elmore High stands up to Jamie, and Gumball and Darwin worry about her revenge.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Joy", url: "https://drive.google.com/file/d/1E3oB9sty8o8OEk5_x9bYaNWzmS0uWnMH/view?usp=drive_link ", description: "Gumball and Darwin start to infect the school with the 'Joy Virus', and it's up to Mrs Simian to cure the students.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Puppy", url: "https://drive.google.com/file/d/1pv7IuLHR9HEv3Q_Y2UuFtljoCHUqxaOU/view?usp=drive_link ", description: "The kids finally get the puppy they always wanted, except it's actually a turtle, and it hates them.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Recipe", url: "https://drive.google.com/file/d/1WjdBab6Pv9a3Uh8sKCp8KPFLxxzZF3g3/view?usp=drive_link ", description: "Gumball and Darwin attempt to discover the secret behind their classmate Anton's Immortality.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Name", url: "https://drive.google.com/file/d/1vcMCTZRexjyuxSh6tcHW68fnOvtlrSWa/view?usp=drive_link ", description: "When Mom reveals that Gumball's real name is 'Zach,' Gumball adopts a cheesy, annoying persona to match the name.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Extras", url: "https://drive.google.com/file/d/1I0DbN3bf-p5llpW4UBO9vzJGAbrRfGJE/view?usp=drive_link ", description: "The background characters show us what they do every day.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Gripes", url: "https://drive.google.com/file/d/1npSaY1LGyINEd8OjVaGIc5SZP1k948tj/view?usp=drive_link ", description: "Gumball is in such a bad mood that it spreads to Darwin, who joins him in complaining about everything.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Vacation", url: "https://drive.google.com/file/d/1nVy077W08sCCBBr9D_jdsfQhm-y5wOLI/view?usp=drive_link ", description: "The Wattersons' vacation turns into a nightmare!", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Fraud", url: "https://drive.google.com/file/d/1pvyA7xeadsD0945RLpUeUIFtBumM1sLb/view?usp=drive_link ", description: "Gumball and Darwin discover Principal Brown's diploma is fake, and Principal Brown is determined to keep their discovery a secret.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Void", url: "https://drive.google.com/file/d/1nylGDoF1sDs-Ts53J_F5DDDfwcrgRrR_/view?usp=drive_link ", description: "Gumball and Darwin investigate a missing schoolmate and discover 'The Void'.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Boss", url: "https://drive.google.com/file/d/11Gpv2bLlNWKGnN6hqdPqXmgWqfhNNH2o/view?usp=drive_link ", description: "Gumball and Darwin help Rocky land an office job so that his dad, Mr. Robinson, will be proud of him.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Move", url: "https://drive.google.com/file/d/1JvQ17TBcMBVB9EeshqPHnstAj7VLLlwV/view?usp=drive_link ", description: "Clayton, a compulsive liar, tells Gumball and Darwin about his awesome martial arts move, and they discover that he wasn't lying.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Law", url: "https://drive.google.com/file/d/1M3DOzKZ2VbBS4O3tBZ8-OIVc7IEpR0o3/view?usp=drive_link ", description: "Donut Cop shows Gumball and Darwin that the smallest misdemeanour can lead to a breakdown in law.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Allergy", url: "https://drive.google.com/file/d/1ORSQDuKxTQgqgnWPWUhaYLGK8-Ss-sok/view?usp=drive_link ", description: "Gumball and Anais have to find a cure for Darwin's allergy.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Mothers", url: "https://drive.google.com/file/d/1EQ-7M5UHjLdpNjKKLtigxkcIapglyWXW/view?usp=drive_link ", description: "It's Mother's Day, and kids put their moms through a series of tests to determine who has the World's Greatest Mom.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Password", url: "https://drive.google.com/file/d/1NCQLo6C59pVWKaYJcprmENR55hjrmK2g/view?usp=drive_link ", description: "When Gumball and Darwin discover that Anais is Richard's favorite child, they go to extreme lengths to take the title from her.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Procrastinators", url: "https://drive.google.com/file/d/1hGUVtev8JBf12NHd_cK0t30JEd4rMW1h/view?usp=drive_link ", description: "Nicole tells Gumball and Darwin to take out the trash by 5 o'clock, but Gumball and Darwin just can't overcome their procrastinator personalities.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " },
          { name: "The Shell", url: "https://drive.google.com/file/d/1g4zFn1_yNgYyu9qFXGNg7yG5hJeDKIVQ/view?usp=drive_link ", description: "Gumball cracks open Penny's shell and discovers who she really is inside.", imageUrl: "https://i.ytimg.com/vi/pML2HDJVBis/maxresdefault.jpg " }
      ]
  }
},
  danDaDan: {
      id: 'danDaDan',
      type: 'series',
      title: "DanDaDan",
      imageUrl: "https://a.storyblok.com/f/178900/1000x1463/6328934579/dan-da-dan-evil-eye.jpg/m/filters:quality(95)format(webp )",
      rating: "2 Seasons",
      description: "Momo Ayase, a high school girl who believes in ghosts, and her classmate Okarun, who believes in aliens, find that both of their beliefs are true. They are thrown into a bizarre, action-packed adventure, fighting against all kinds of supernatural threats.",
      previewVideoUrl: "",
      metaTags: ['Action', 'Comedy', 'Supernatural', 'Sci-Fi', 'Romance'],
      seasonImages: {
          '1': 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg ',
          '2': 'https://a.storyblok.com/f/178900/1000x1463/6328934579/dan-da-dan-evil-eye.jpg/m/filters:quality(95)format(webp )'
      },
      episodes: {
          '1': [
              { name: "That's, Like, a Love Story, Right?", url: "https://drive.google.com/file/d/18REs48Jhrd2b5cmxMfWwvquQbTfNpqfA/preview ", description: "Momo Ayase, who believes in ghosts, and Okarun, who believes in aliens, argue about the supernatural until they encounter strange phenomena that prove both exist.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "Isn't That, Like, a Space Alien?", url: "https://drive.google.com/file/d/1fSLrpUxxTZvINoe6_LfkMDtv3eCjFF0n/preview ", description: "Momo and Okarun's encounter with a malevolent spirit and a curious alien intensifies, forcing them to confront the bizarre reality of their new lives.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "The Turbo Granny and the Acrobatic Monkey", url: "https://drive.google.com/file/d/1SjJH1L9fBAphDBwagqBdTin-wyxtwhYe/preview ", description: "Momo and Okarun seek help from an occult specialist to deal with the supernatural entities they've attracted, encountering the powerful Turbo Granny.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "Let's Go Beat Up the Serpo!", url: "https://drive.google.com/file/d/1ukSdTSrfO_cPYlixAIuPkldtnmVvMrYt/preview ", description: "The duo prepares to face a powerful alien entity known as the Serpo, combining their newfound abilities and growing bond to fight back.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "Where's My Ball?", url: "https://drive.google.com/file/d/1KayM2rtmwywRBxV0DPGu5fWrYJbm85vv/preview ", description: "Okarun loses a crucial part of his anatomy to a perverted spirit, leading Momo on a desperate quest to retrieve it and save him from his embarrassing predicament.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "This Freaky Girl's a Menace", url: "https://drive.google.com/file/d/1LzmoNMq8ljBhJYnxEXL5mP71qJeHZr1l/preview ", description: "A new transfer student with mysterious powers and a chaotic personality arrives, causing more supernatural disturbances for Momo and Okarun.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "A Kind-Hearted Person", url: "https://drive.google.com/file/d/1X2YL1Tba4PCFivqm6FGBA21Mpm0tfmdh/preview ", description: "Momo and Okarun try to understand the motivations of their new, freaky classmate, realizing there might be more to her than meets the eye.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "I Feel Kinda Sick", url: "https://drive.google.com/file/d/1lNLFJuC4pEu8wyW-bvhM7Hm7as_9H8b8/preview ", description: "The consequences of their encounters with aliens and spirits begin to manifest physically and mentally, pushing Momo and Okarun to their limits.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "Let's Evolve! Acrobatic Silky!", url: "https://drive.google.com/file/d/1iiEQKijQbbNVzgVVTbt54F4CPkRfQ1MV/preview ", description: "Momo and Okarun train to enhance their spiritual and alien-infused powers, leading to unexpected transformations and new abilities.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "I Saw It", url: "https://drive.google.com/file/d/1BB3X_dni057Z9hoIqNk7lg82Intyqbda/preview ", description: "A shocking revelation about the true nature of the supernatural threats they face leaves Momo and Okarun reeling, forcing them to re-evaluate their understanding of the world.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "My First Love", url: "https://drive.google.com/file/d/1lhGPXkQm5QHPKiO5Y_X7CdD00RulJJTJ/preview ", description: "As their adventures continue, a hint of romance begins to blossom between Momo and Okarun amidst the chaos of fighting aliens and ghosts.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " },
              { name: "Let's Go Home", url: "https://drive.google.com/file/d/184PnroxzIVP5kzKPZK2ReOasrTHM5gs-/preview ", description: "The season concludes with Momo and Okarun facing a major supernatural threat, their bond strengthened, and their journey into the unknown far from over.", imageUrl: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/06/dandadan-interview-abel-gongora.jpg " }
          ],
          '2': [
              { name: "The Adventure Continues", url: "https://drive.google.com/file/d/16KnICkFv_S2EF__pOoHaj-N8aFjq9tcG/preview ", description: "Momo and Okarun embark on new supernatural escapades, facing fresh challenges and developing their extraordinary abilities." },
              { name: "A New Threat Appears", url: "https://drive.google.com/file/d/1lrnARB_9s0f-vpZW9wT2BCIyUDoKG7Ub/preview ", description: "A formidable new alien or spectral entity emerges, posing a significant danger to Momo, Okarun, and perhaps the world." },
              { name: "The Secret of the Tunnel", url: "https://drive.google.com/file/d/1aX5_MPRTV-nn45B0mt6MClakdwE1nqOZ/preview ", description: "The duo investigates a mysterious tunnel, uncovering ancient secrets and encountering unexpected supernatural phenomena." },
              { name: "Unleashing a New Power", url: "https://drive.google.com/file/d/1SNiFw_rSP7OFAvVCbCVR2wW1YZmmv_Xh/preview ", description: "Momo or Okarun taps into a previously unknown power, dramatically shifting the balance in a crucial battle." },
              { name: "The Spirit's Curse", url: "https://drive.google.com/file/d/1s2ohLBf93aEPjhOzuMHnPMUV86_03m_U/preview ", description: "A powerful curse from a vengeful spirit afflicts one of the protagonists, requiring a desperate search for a cure." },
              { name: "Battle at the School Festival", url: "https://drive.google.com/file/d/1WE_pSAFS-O4nl6NAccqjAeyck_xkbs0Z/preview ", description: "Chaos erupts during a seemingly normal school festival as supernatural forces clash, drawing Momo and Okarun into a public fight." },
              { name: "A New Ally", url: "https://drive.google.com/file/d/1ZqTHilaUTETR2_xR29DpD91xMVG1T__m/preview ", description: "An unexpected character joins Momo and Okarun's side, bringing unique abilities and insights to their fight against the unknown." },
              { name: "The Truth About the Past", url: "https://drive.google.com/file/d/1tE8h_7fx1x7FyhsCgwfsjELhHyWedfVZ/preview ", description: "Flashbacks or new discoveries reveal crucial information about the origins of the supernatural occurrences or the characters' own backstories." },
              { name: "Showdown with the Serpent", url: "https://drive.google.com/file/d/17cp7Q7S5mFkw5hU_AkPL81cJ8g5YOpY4/preview ", description: "The protagonists face a powerful, serpentine-like entity in a climactic battle that tests their limits." },
              { name: "A Desperate Gamble", url: "https://drive.google.com/file/d/1NPnapVj_kBHT89yFTSII5snIj16kiW1H/preview ", description: "Faced with insurmountable odds, Momo and Okarun must take a risky gamble, putting everything on the line to achieve victory." },
              { name: "The Final Confrontation", url: "https://drive.google.com/file/d/1WyTRUhpilXaXAf_2XcndKSvN3dXRn6hX/preview ", description: "The season builds to a grand finale where the main threat is confronted in an epic and decisive battle." },
              { name: "A Promise for the Future", url: "https://drive.google.com/file/d/1E_CGMcNRFXaFGZzBmySs8WdrxhOFUitl/preview ", description: "The immediate crisis is resolved, but new mysteries and hints of future adventures set the stage for upcoming seasons." }
          ]
      }
  },
  

  theLorax: {
      id: 'theLorax',
      type: 'movie',
      title: "The Lorax",
      url: "https://drive.google.com/file/d/1Kl4ieKALPoEYbllsRy7V8AYiPtJATg7W/preview ",
      imageUrl: "https://enochseagleeye.org/wp-content/uploads/2024/02/714mtHTit7L.jpg ",
      rating: "6.4/10",
      description: "A 12-year-old boy searches for the one thing that will enable him to win the affection of the girl of his dreams. To find it, he must discover the story of the Lorax, the grumpy yet charming creature who fights to protect his world.",
      metaTags: ['Animation', 'Family', 'Fantasy']
  },

  strangerThings5: {
      id: 'strangerThings5',
      type: 'series',
      title: "Stranger Things",
      imageUrl: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2025/10/Screenshot-2025-10-31-105155.png?fit=1059%2C693&ssl=1 ",
      rating: "Season 5", // Updated rating
      description: "The final chapter. The residents of Hawkins, now scattered, must reunite to face Vecna and the ultimate horror of the Upside Down. Friendships will be tested and destinies fulfilled in the epic conclusion.",
      previewVideoUrl: "https://youtu.be/PssKpzB0Ah0 ", // Placeholder trailer
      metaTags: ['Sci-Fi', 'Horror', 'Drama'],
      accessLevel: 'vip-only',
      episodes: {
          '5': [
              { name: "Episode 1: The Crawl", url: "https://drive.google.com/file/d/1qwfADqY6_h4pX3LLjYd4vUCJwQT_7YlN/preview ", description: "The final battle against the Upside Down begins as the residents of Hawkins prepare for war." },
              { name: "Episode 2: Vecna's Army", url: "https://drive.google.com/file/d/1wE45EL3XwNFbGLLzwQBKsndOCGc8Jmhp/preview ", description: "Eleven and the crew regroup to formulate a strategy against Vecna's overwhelming forces." },
              { name: "Episode 3: The Reunion", url: "https://drive.google.com/file/d/1nSq5MZbD-0XhTtXofQ0dA-sMqwTRvPB0/preview ", description: "Old alliances are tested as key characters reunite in the face of imminent danger." },
              { name: "Episode 4: Into the Gate", url: "https://drive.google.com/file/d/1U8UK-efAxu4tQiPEetOAf8Wa9SbzFt_0/preview ", description: "A dangerous journey into the heart of the Upside Down reveals Vecna's final plan." }
          ]
          
      }
  },
  spidermanNoWayHome: { id: 'spidermanNoWayHome', type: 'movie', title: "Spider-Man: No Way Home", url: "https://drive.google.com/file/d/1oddQM8w-8UqQIvB-fPpy1h-7xvAbklmA/preview ", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/389494131559049.62dd8ef746cd3.jpg ", rating: "8.2/10", description: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero.", previewVideoUrl: "https://youtu.be/chFMfUMqZK4 ", metaTags: ['Action', 'Adventure'] },
  antMan: { id: 'antMan', type: 'movie', title: "Ant-man", url: "https://drive.google.com/file/d/1_qJqk2Ss1f45puz3xGQcdD1NxM3ipupj/preview ", imageUrl: "https://ivleader.com/wp-content/uploads/2023/02/Ant-Man-Poster.jpeg ", rating: "7.3/10", description: "Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym recruits the talents of Scott Lang, a master thief just released from prison. Lang becomes Ant-Man, armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants." },
  amazingSpiderman2: { id: 'amazingSpiderman2', type: 'movie', title: "The Amazing Spiderman 2", url: "https://drive.google.com/file/d/1bQpgzMav6AHi3UYnAagHPsGyraC0GWK_/preview ", imageUrl: "https://m.media-amazon.com/images/M/MV5BZjAzMTQ0MjgtMTRmYy00M2UzLTg5NWMtOGQxYjE4NzUzYjU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ", rating: "7.0/10", description: "It's great to be Spider-Man, but for Peter Parker, there's no feeling quite like swinging between skyscrapers, embracing being the hero, and spending time with Gwen. But being Spider-Man comes at a price: only Spider-Man can protect his fellow New Yorkers from the formidable villains that threaten the city." },
  spidermanHomecoming: { id: 'spidermanHomecoming', type: 'movie', title: "Spider-Man: Homecoming", url: "https://drive.google.com/file/d/1I9PYrrRLo1m_5Wtfq59L6gHGa3NaUXDv/preview ", imageUrl: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_FMjpg_UX1000_.jpg ", rating: "7.4/10", description: "A young Peter Parker/Spider-Man begins to navigate his newfound identity as the web-slinging superhero, under the watchful eye of his new mentor Tony Stark." },
avengersInfinityWar: { 
      id: 'avengersInfinityWar', 
      type: 'movie', 
      title: "Avengers Infinity War", 
      servers: {
          standard: "https://drive.google.com/file/d/1oKDbw6zCdSRKRbABn6nKf_4LGsA3ftwL/preview ",
          vip: "https://drive.google.com/file/d/10l57sjbGzW9UHlQPmKlmZFiurmwzDF8H/preview "
      },
      imageUrl: "https://m.media-amazon.com/images/I/A1Ur0FJFi5L.jpg ", 
      rating: "9.7/10", 
      description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe." 
  },
  toyStory: { id: 'toyStory', type: 'movie', title: "Toy Story", url: "https://drive.google.com/file/d/1fW6Ov5NIaRh4h78-qBpWeln_Vs9oEXOQ/preview ", imageUrl: "https://cdn.shopify.com/s/files/1/0310/7487/7577/products/00719ToyStory_Blackstone__Rounded_68fca521-8ef3-42ec-8250-fbaef4f85431_300x.webp?v=1673447814 ", rating: "7.5/10", description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.", metaTags: ['Comedy', 'Family'] },
  homeAlone2: { id: 'homeAlone2', type: 'movie', title: "Home Alone 2", url: "https://drive.google.com/file/d/1Aj4Ys3ofogKhxEAMh6PUncpYF_OHZ_ZK/preview ", imageUrl: "https://play-lh.googleusercontent.com/WSjy0W9OD26p3TsWuwvfznKEFWPCVgaqVBLPKLeHS4ckOklAja7FV683sv-PBszo9Iq5 ", rating: "8.5/10", description: "One year after Kevin McCallister was left home alone, he accidentally finds himself stranded in New York City - and the same criminals are not far behind." },
  moana: { id: 'moana', type: 'movie', title: "Moana", url: "https://drive.google.com/file/d/1EsX8k7nfYQrzC6apqJqnyfH7HLAHl31G/preview ", imageUrl: "https://cdn.shopify.com/s/files/1/0310/7487/7577/products/00873Moana_Blackstone__Rounded_1ebbed1a-eaf6-4457-b5dc-f4816360882a.webp?v=1673447826 ", rating: "8.7/10", description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right." },
  moana2: { id: 'moana2', type: 'movie', title: "Moana 2 [CAM]", url: "https://drive.google.com/file/d/1_Jlw3WUCpe0cn4hXM4lvI8m8YqVG4FhV/preview ", imageUrl: "https://m.media-amazon.com/images/I/814MvWexU9L._AC_UF894 ,1000_QL80_.jpg", rating: "6.7/10", description: "No description available for this title." },
  deadpoolAndWolverine: { id: 'deadpoolAndWolverine', type: 'movie', title: "Deadpool & Wolverine", url: "https://drive.google.com/file/d/1aBzsoTJAjhZeFFDkIV2SN7p7ZHagUEDc/preview ", imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/dd6fb66997dd4cb5606b587bb255d2cd2cec20ecbd11852a8f6b07a1358d09a1.jpg ", rating: "7.7/10", description: "No description available for this title.", displayTags: ['New Release'] },
  pussInBootsLastWish: { id: 'pussInBootsLastWish', type: 'movie', title: "Puss In the Boots: The Last Wish", url: "https://drive.google.com/file/d/1-UkRil6WGa4UBmT21IrCwYzAUE9ADwj1/preview ", imageUrl: "https://m.media-amazon.com/images/I/61fQecmqK6L._UF1000 ,1000_QL80_.jpg", rating: "7.9/10", description: "Daring outlaw Puss in Boots discovers that his passion for peril and disregard for safety have taken their toll. With only one life left, he embarks on an epic journey into the Black Forest to find the mythical Wishing Star and restore his lost lives.", previewVideoUrl: "https://youtu.be/fmuQiOORysY " },
  insideOut: { id: 'insideOut', type: 'movie', title: "Inside Out", url: "https://drive.google.com/file/d/1e0OdhlzTKWie6TDXNDOKjKYXbfYfmz6t/preview ", imageUrl: "https://m.media-amazon.com/images/I/71PFAPwyZRL.jpg ", rating: "8.1/10", description: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions -- Joy, Fear, Anger, Disgust and Sadness -- conflict on how to best navigate a new city, house, and school.", previewVideoUrl: "https://youtu.be/yRUAzGQ3nSY " },
  spidermanAcrossTheSpiderverse: { id: 'spidermanAcrossTheSpiderverse', type: 'movie', title: "Spider-Man: Across the Spider-Verse", url: "https://drive.google.com/file/d/11z_dW99LyLNk9Pyn2CQxkqLJMb3G_tZs/preview ", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e3baa9172061701.6478aa99d8f8a.jpg ", rating: "8.6/10", description: "Miles Morales is launched across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.", previewVideoUrl: "https://youtu.be/9ugtELUBJtA " },
  terrifier: { id: 'terrifier', type: 'movie', title: "Terrifier", url: "https://drive.google.com/file/d/1_pQ3kbz_a8l3B7SKfdP9dYQwKax0WHUD/preview ", imageUrl: "https://m.media-amazon.com/images/M/MV5BN2M5MzJlYzctNmZhOC00MTFmLWIxZmUtN2I4NzY5MTlmNDdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ", rating: "7.9/10", description: "A maniacal clown named Art terrorizes three young women on Halloween night and everyone else who stands in his way." },
  sawX: { id: 'sawX', type: 'movie', title: "Saw X", url: "https://drive.google.com/file/d/10Wn3otVUN00Sfc6sRZSnDFfaYDJ5VTNR/preview ", imageUrl: "https://play-lh.googleusercontent.com/NUQrZv_mhfphaPynWAZcV2Hc_b1xtiFb-QuyEW1dUr7rmIMlkBNmiXOhjqWziCOYTrD32g1564uWtqLE_fE ", rating: "6.6/10", description: "Seeking a miraculous cure, a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, Jigsaw returns to his work.", previewVideoUrl: "https://youtu.be/UqcGdmJJVTY " },
  halloweenEnds: { id: 'halloweenEnds', type: 'movie', title: "Halloween Ends (2022)", url: "https://drive.google.com/file/d/1Lsjj8VceEJMM4mvav7WOwhAH1X56-woA/preview ", imageUrl: "https://visionarylightshows.com/cdn/shop/files/Halloweenends_2000x.jpg?v=1724590607 ", rating: "5.0/10", description: "Four years after her last encounter with masked killer Michael Myers, Laurie Strode is living with her granddaughter and trying to finish her memoir. Myers hasn't been seen since, and Laurie finally decides to liberate herself from fear and rage and embrace life. However, when a young man is accused of murdering a boy he was babysitting, it ignites a cascade of violence and terror that forces Laurie to confront the evil she can't control." },
  deadpool: { id: 'deadpool', type: 'movie', title: "Deadpool", url: "https://drive.google.com/file/d/1  VH_yELQQxJxhuyxsU80q8eMsEeaxNomz/preview", imageUrl: "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_.jpg ", rating: "8.0/10", description: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers and adopts the alter ego Deadpool." },
  spiderman3: { id: 'spiderman3', type: 'movie', title: "Spider-Man 3", url: "https://drive.google.com/file/d/1vi0w7U65XeR-u00AQ8uS9s3C-IoiV-_1/preview ", imageUrl: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2904077/5941951/MOVEB62793__95286.1679588002.jpg?c=2 ", rating: "6.3/10", description: "Peter Parker finally has the girl of his dreams, Mary Jane Watson, and New York City is in the throes of a Spider-Mania. However, when his suit turns jet-black and enhances his powers, it also brings out a darker side of his personality that he must overcome." },
  ironMan: { id: 'ironMan', type: 'movie', title: "Iron Man", url: "https://drive.google.com/file/d/1etZlXVkk2dmSbB5m2J4EK80c7FggVF4V/preview ", imageUrl: "https://m.media-amazon.com/images/I/713B8KEddKL.jpg ", rating: "7.9/10", description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil and save the world." },
  thor: { id: 'thor', type: 'movie', title: "Thor", url: "https://drive.google.com/file/d/1sEjroTW8OjQVQCIpVneSu8LA9kPKgrkI/preview ", imageUrl: "https://m.media-amazon.com/images/I/61MQ3JIiXmL.jpg ", rating: "7.0/10", description: "The powerful but arrogant warrior Thor is cast out of the fantastical realm of Asgard and forced to live among humans on Earth, where he soon becomes one of their finest defenders." },
  toyStory2: { id: 'toyStory2', type: 'movie', title: "Toy Story 2", url: "https://drive.google.com/file/d/1k3RVDc_Vah1H9lFsXQZJ6mE3KqdDcK_T/preview ", imageUrl: "https://m.media-amazon.com/images/M/MV5BNzVmODlhMDEtY2YxZi00OTVjLTlkNTktN2Q2OTRlM2I4M2FhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ", rating: "7.9/10", description: "When Woody is stolen by a toy collector, Buzz and his friends set out to rescue him, and along the way, Woody discovers his past as a star of a classic TV show.", previewVideoUrl: "https://youtu.be/EyGuBM1ELf4 " },
  venomLastDance: { id: 'venomLastDance', type: 'movie', title: "Venom: The Last Dance", url: "https://drive.google.com/file/d/1C6aUcmJeLpm8ysdYwnt7HRZFAT6k0oQs/preview ", imageUrl: "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ", rating: "6.5/10", description: "Eddie and Venom are on the run. Hunted by both of their worlds, the duo is forced into a desperate last dance as the walls close in.", previewVideoUrl: "https://youtu.be/mpmwALhPA9o?list=PLZbXA4lyCtqpY2dhVU-wqGk6IbgrmqJF5 " },
  ironMan2: { id: 'ironMan2', type: 'movie', title: "Iron Man 2", url: "https://drive.google.com/file/d/1u1glpdPyZvJ1MAgTrxAnTrS8Wvys3Bdt/preview ", imageUrl: "https://m.media-amazon.com/images/I/51WkTy2rw3L._AC_UF894 ,1000_QL80_.jpg", rating: "7.0/10", description: "With the world now aware that he is Iron Man, Tony Stark must contend with mounting pressure from the government, the press, and the public to share his technology with the military. He must also face a powerful new enemy, Whiplash.", previewVideoUrl: "https://youtu.be/WNu6fRo_7fg " },
  findingNemo: { id: 'findingNemo', type: 'movie', title: "Finding Nemo", url: "https://drive.google.com/file/d/11CN0fT7CwCHgz__mY4FWjcoT5w_wZD9S/preview ", imageUrl: "https://m.media-amazon.com/images/I/51OObBWLwDL._AC_UF894 ,1000_QL80_.jpg", rating: "8.2/10", description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.", previewVideoUrl: "https://youtu.be/FwZB_tQVaMs " },
  exorcistBeliever: { id: 'exorcistBeliever', type: 'movie', title: "The Exorcist: Believer", url: "https://drive.google.com/file/d/1p4TJ6af9UjVh544rHcZ5-JNdfB5YEFo8/preview ", imageUrl: "https://m.media-amazon.com/images/I/71F536VrKML.jpg ", rating: "5.1/10", description: "When two girls disappear into the woods and return three days later with no memory of what happened to them, their families are forced to confront the ultimate evil." },
  conjuringDevilMadeMeDoIt: { id: 'conjuringDevilMadeMeDoIt', type: 'movie', title: "The Conjuring: The Devil Made Me Do It", url: "https://drive.google.com/file/d/1k0tAH--aSS2Ik_xCwr9nJSr1XAS0cFH6/preview ", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwseMD2gkcPYXmlcC3m9GATksT08azSydNw&s ", rating: "6.3/10", description: "The Warrens investigate a murder that may be the first in U.S. history where a suspect would claim demonic possession as a defense." },
  conjuring2013: { id: 'conjuring2013', type: 'movie', title: "The Conjuring", url: "https://drive.google.com/file/d/17VPLw23bmvSYSa7C9fyiB9c3iXB09PNN/preview ", imageUrl: "https://m.media-amazon.com/images/I/51kBchQhnyL.jpg ", rating: "7.6/10", description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse." },
  freddysDead: { id: 'freddysDead', type: 'movie', title: "Freddy's Dead: The Final Nightmare", url: "https://drive.google.com/file/d/1I8o1GaH9-0qMZYuHPj_yGMUw-zTdQS0n/preview ", imageUrl: "https://m.media-amazon.com/images/M/MV5BZjNiMWEzNDMtZjQwZS00YTJiLTkyNzItNjkyY2Y4YjBiNmIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ", rating: "4.9/10", description: "In the sixth installment of the 'Nightmare on Elm Street' series, Freddy Krueger has wiped out all the children in Springwood and escapes to prey on children in other towns." },
  despicableMe: { id: 'despicableMe', type: 'movie', title: "Despicable Me", url: "https://drive.google.com/file/d/1fWLc7dARUH-sggIpIxxlulaNZ9bYmUth/preview ", imageUrl: "https://m.media-amazon.com/images/I/71M8-CdtLYL.jpg ", rating: "7.6/10", description: "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.", previewVideoUrl: "https://www.youtube.com/watch?v=A05n32Bl0aY " },
  badBoys: { id: 'badBoys', type: 'movie', title: "Bad Boys", url: "https://docs.google.com/file/d/0B1NibQe1vz3LVDFDVjk3VWtGUjA/preview ", imageUrl: "https://i.etsystatic.com/18242346/r/il/73bf99/4684005160/il_fullxfull.4684005160_no2q.jpg ", rating: "6.8/10", description: "Two hip detectives protect a murder witness while investigating a case of stolen heroin from the evidence room of their own precinct." },
  toyStory3: { id: 'toyStory3', type: 'movie', title: "Toy Story 3", url: "https://drive.google.com/file/d/13msxxmyEco7CRBkO_Ju1SMx5KK4r4Su8/preview ", imageUrl: "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/73355/458074/133338-1024__64717.1649235722.jpg?c=2 ", rating: "8.3/10", description: "With Andy preparing to leave for college, Woody, Buzz, and the rest of the toys find themselves at a daycare center and must band together to plan a great escape.", previewVideoUrl: "https://youtu.be/9gdJU-bK8Us " },
  insideOut2: { id: 'insideOut2', type: 'movie', title: "Inside Out 2", url: "https://drive.google.com/file/d/1SABVZNMwHTME4hsFwL9IWyWZPKDTBSoT/preview ", imageUrl: "https://m.media-amazon.com/images/I/714xn6rxXSL.jpg ", rating: "7.7/10", description: "Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust aren't sure how to feel when Anxiety, Envy, Ennui and Embarrassment show up.", previewVideoUrl: "https://youtu.be/vmKH9pJwjvs ", displayTags: ['New Release'] },
  curseOfChucky: { id: 'curseOfChucky', type: 'movie', title: "Curse of Chucky", url: "https://drive.google.com/file/d/1ej_sbTV1114vTC-eUeNbgd9VqyvgH6TA/preview ", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pTSuGYPW1sic4jLxINR-HG3QjkHQNV_Hv6scNGl5tqrU6jXkVxSOmOD0fWbIT5LgxHM&usqp=CAU ", rating: "5.7/10", description: "After her mother's mysterious death, Nica Pierce begins to suspect that the talking, red-haired doll her niece has been playing with may be the key to the ensuing bloodshed and chaos." },
  terrifier2: { id: 'terrifier2', type: 'movie', title: "Terrifier 2", url: "https://drive.google.com/file/d/1_Jjo7rOcCkYt3UryVkV2XvTfrL4QvHTE/preview ", imageUrl: "https://m.media-amazon.com/images/M/MV5BYTUyZWM1MDgtMGZiZi00OWZlLTgwNzItZGU3NTkwN2I4OWNiXkEyXkFqcGc@._V1_.jpg ", rating: "8.3/10", description: "After being resurrected by a sinister entity, Art the Clown returns to the timid town of Miles County where he targets a teenage girl and her younger brother on Halloween night." },
  scream1: { id: 'scream1', type: 'movie', title: "Scream", url: "https://drive.google.com/file/d/1K0v8NXcyS-ShrwaNpyvQ-1X-RbgUBihO/preview ", imageUrl: "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_FMjpg_UX1000_.jpg ", rating: "7.4/10", description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game." },
  scream2: { id: 'scream2', type: 'movie', title: "Scream 2", url: "https://drive.google.com/file/u/1/d/1i8w5FlmSFp3hixLRHeodPPtQq5r5VDQh/preview ", imageUrl: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:564/q:75/https://bleedingcool.com/wp-content/uploads/2022/12/scream-2.jpg ", rating: "6.3/10", description: "Two years after the first series of murders, a new copycat killer begins stalking Sidney Prescott and her friends at Windsor College." },
  scream3: { id: 'scream3', type: 'movie', title: "Scream 3", url: "https://drive.google.com/file/d/1IzaFo-PmeI3AiQ_qoDdjCbUdiu8Ohs-w/preview ", imageUrl: "https://m.media-amazon.com/images/I/711TIBab6mL._AC_UF1000 ,1000_QL80_.jpg", rating: "5.6/10", description: "While Sidney and her friends visit the set of Stab 3, the third film based on the Woodsboro murders, a new Ghostface strikes." },
  scream4: { id: 'scream4', type: 'movie', title: "Scream 4", url: "https://drive.google.com/file/d/1erEdSoN1ToiEEMu0UxKWYdj2eDlycjse/preview ", imageUrl: "https://m.media-amazon.com/images/I/71BzQmRXICL._AC_UF1000 ,1000_QL80_.jpg", rating: "6.2/10", description: "Ten years have passed, and Sidney Prescott, who has put herself back together thanks in part to her writing, is visited by the Ghostface Killer." },
  scream5: { id: 'scream5', type: 'movie', title: "Scream (2022)", url: "https://drive.google.com/file/d/1dUxJw1LdOKB4RxNkQLuxas9JJbaJPGlz/preview ", imageUrl: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/12/13222852/qvASAp0ZKkza023gjK1Tf2iiEos.jpg ", rating: "6.3/10", description: "25 years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past." },
  scream6: { id: 'scream6', type: 'movie', title: "Scream VI", url: "https://drive.google.com/file/d/1zLFZE5jEzvjRSAawv9gOk-E5FYhsYblJ/preview ", imageUrl: "https://m.media-amazon.com/images/I/61M-D9pnuwL._AC_UF894 ,1000_QL80_.jpg", rating: "6.5/10", description: "In the next installment, the four survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City." },

  theBoys: {
      id: 'theBoys', type: 'series', title: "The Boys", imageUrl: "https://wallpaper.forfun.com/fetch/df/df195ccbff4ba8a219459d6e8be508d6.jpeg ", rating: "2 Seasons",
      description: "The Boys is an irreverent take on what happens when superheroes, who are as popular as celebrities, as influential as politicians and as revered as gods, abuse their superpowers rather than use them for good. Hughie Campbell and Billy Butcher lead a vigilante group to take them down.",
      previewVideoUrl: "https://youtu.be/FG1EByNnHUU ",
      episodes: {
          '1': [
              { name: "The Name of the Game", url: "https://drive.google.com/file/d/1L6kkf82wzAgxtOs34Pvt-iL8_LfZdxhm/preview ", description: "The Boys, a group of vigilantes, are brought back together by Billy Butcher to take down corrupt superheroes who abuse their powers." },
              { name: "Cherry", url: "https://drive.google.com/file/d/1Nu8K2JieShguMQY2THv1ZY4Zgy4z9ha4/preview ", description: "Hughie grapples with the traumatic loss of his girlfriend and is drawn deeper into Butcher's world, meeting other members of 'The Boys'." },
              { name: "Get Some", url: "https://drive.google.com/file/d/12pg3xxH7wnxT83RfPoIIHjA6kV3auxjF/preview ", description: "The Boys target The Deep, while Hughie experiences firsthand the darker side of supes and the lengths Butcher will go to for revenge." },
              { name: "The Female", url: "https://drive.google.com/file/d/11yNhNYSN4shlgJ-f5p0tzqftBdJ1hrfz/preview ", description: "The Boys encounter Kimiko, a mysterious and violent super-powered individual, whose past is shrouded in secrecy and trauma." },
              { name: "Good for the Soul", url: "https://drive.google.com/file/d/1DEzpdyNsPqOY-dIcYDcJuMAke1yk4CiG/preview ", description: "Hughie and Starlight are forced to work together on a PR stunt, leading to an awkward but insightful look into the manufactured image of supes." },
              { name: "The Innocents", url: "https://drive.google.com/file/d/1iIi5Rsdz6-ORqf8u2Z59cv9KsWku_WOA/preview ", description: "The Boys delve into the history of Vought International and the origins of Compound V, uncovering disturbing truths about how supes are made." },
              { name: "The Self-Preservation Society", url: "https://drive.google.com/file/d/1zPMLK925VJX5lOWoHnSDpmx0EHSloI50/preview ", description: "As their investigation deepens, The Boys find themselves in increasingly dangerous situations, forcing them to rely on each other for survival." },
              { name: "You Found Me", url: "https://drive.google.com/file/d/1V5T42SX6dh7GmhkEzPxHvQ1xmdtKOerd/preview ", description: "The season culminates in a shocking confrontation between Billy Butcher and Homelander, revealing long-held secrets and setting the stage for future conflict." }
          ],
      }
  },
  invincible: {
      id: 'invincible', type: 'series', title: "Invincible", imageUrl: "https://m.media-amazon.com/images/I/71A4CV+GciL._AC_UF894 ,1000_QL80_.jpg", rating: "2 Seasons",
      description: "Mark Grayson, a seemingly normal teenager, develops superpowers and follows in the footsteps of his father, Omni-Man, the most powerful superhero on Earth. However, as he begins to discover the truth about his father's past, Mark must grapple with his destiny and the immense responsibilities that come with his powers.",
      previewVideoUrl: "https://youtu.be/KZZeItIBtk4 ", // Official trailer
      displayTags: ['Fan Favorite'],
      episodes: {
          '1': [
              { name: "It's About Time", url: "https://drive.google.com/file/d/19iBD4LWH0kL5kmdWz5HGMtQk9VUFCY0B/preview ", description: "Mark Grayson discovers he's inherited powers from his superhero father, Omni-Man, but his journey into heroism begins with a brutal and shocking revelation." },
              { name: "Here Goes Nothing", url: "https://drive.google.com/file/d/1NX4ggLN3xufKl1RTfJFqscXLQo28Sjoo/preview ", description: "Mark, as Invincible, tries to step up as a hero while the world reels from a devastating event; he encounters the Teen Team and battles an alien invasion." },
              { name: "Who You Calling Ugly?", url: "https://drive.google.com/file/d/1k0XoE97ebTZQIxWSeIbUuukWGHRhgoLg/preview ", description: "As Mark struggles with his new powers and responsibilities, a new threat emerges, forcing him to face the complexities of being a superhero." },
              { name: "Neil Armstrong, Eat Your Heart Out", url: "https://drive.google.com/file/d/1PeV6h5w51oBTDKLE6SdRptp8EXi4yzP7/preview ", description: "Invincible and Atom Eve are tasked with a mission in space, but Mark still grapples with the aftermath of his father's actions." },
              { name: "That Actually Hurt", url: "https://drive.google.com/file/d/1KONmjVdobgu6QEEHtgN8viDiTX9cxG5Y/preview ", description: "Mark endures a difficult training session with Omni-Man, pushing his physical and emotional limits as he learns more about his Viltrumite heritage." },
              { name: "You Look Kinda Dead", url: "https://drive.google.com/file/d/1XYYLzOzD_FHHx3e7Obxw3XRUEzrc0fYY/preview ", description: "The repercussions of Omni-Man's betrayal begin to affect Mark and his family, as the Global Defense Agency intensifies its investigation." },
              { name: "We Need to Talk", url: "https://drive.google.com/file/d/1mlO3fFTvsmHeJ28kP79r28v_VpKj26Iz/preview ", description: "Mark confronts Omni-Man about his actions, leading to a devastating and emotionally charged battle that changes everything for the Grayson family and the planet." },
              { name: "Where I Really Come From", url: "https://drive.google.com/file/d/1GMXFaYwDC_QujDjOQVXLn3PQ2qLwVNXH/preview ", description: "Omni-Man reveals his true intentions and the Viltrumite Empire's brutal plans for Earth, leaving Mark with an impossible choice." }
          ],
          '2': [
              { name: "A Lesson For Your Next Life", url: "https://drive.google.com/file/d/1MVfbtAh0Uv-EKwyafE-hAU3nRvDGuJYS/preview ", description: "Mark tries to move forward after the devastating events, grappling with his father's legacy while new threats emerge." },
              { name: "In About Six Hours, I Lose My Virginity to a Fish", url: "https://drive.google.com/file/d/120WaQ6r2qGIcyycoGbFkneEffbFyPg9C/preview ", description: "Mark attempts to balance his superhero life with personal relationships, leading to awkward and unexpected encounters." },
              { name: "This Missive, This Machination!", url: "https://drive.google.com/file/d/1pYGVt4odqd-e8eT9NnpNPp-HMx-ius1m/preview ", description: "A mysterious new adversary begins to orchestrate events, putting Mark and his allies in unforeseen danger." },
              { name: "It's Been A While", url: "https://drive.google.com/file/d/1AVz5vwFbGXBcHDeB-PdcmOMh1YyfGFBQ/preview ", description: "Long-lost characters or forgotten enemies resurface, bringing old conflicts back to the forefront of Mark's life." },
              { name: "Viltrumite Code", url: "https://drive.google.com/file/d/1OTHOeS0Fm2Id7YF79x6Ko94p9PKjGER5/preview ", description: "Mark delves deeper into the Viltrumite culture and their brutal code, forcing him to question his own identity and destiny." },
              { name: "It's Not That Simple", url: "https://drive.google.com/file/d/1MK9Dzr-Uo3SzvCSh5r9r17cVqEWp3Qw6/preview ", description: "Complex moral dilemmas and gray areas challenge Mark's perception of heroism, as he faces consequences of his actions." },
              { name: "I'm Not Going Anywhere", url: "https://drive.google.com/file/d/1pMM7HGxkcIYyrX8nie6REK011k5m2oyV/preview ", description: "Mark makes a stand against a powerful foe, demonstrating his unwavering commitment to protecting Earth despite the personal costs." },
              { name: "I Thought You Were Stronger", url: "https://drive.google.com/file/d/1QCUMJwswXuGTz7vUPRoixR2Cvp6PozbV/preview ", description: "The season climaxes in a powerful confrontation where Mark is pushed to his absolute limits against a truly formidable opponent." }
          ]
      }
  },

avatarTheWayOfWater: {
    id: 'avatarTheWayOfWater',
    type: 'movie',
    title: "Avatar: The Way of Water",
    url: "https://drive.google.com/file/d/1JttHmQ0nz7UhvgK0QDUJP5vBQUPGkfTX/preview ",
    imageUrl: "https://lh4.googleusercontent.com/proxy/jTL6IVbQ8pwKvriiE3zj_ua7Dem8b6Tn5B06I82jPKSzpT8ZV0R34dOFqAIGFiB_wbC0BhOiE8lDN4qytsOHCmsE3pys6CKJhuuesBqgq1PM28HF ",
    rating: "7.6/10",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    metaTags: ['Sci-Fi', 'Action', 'Adventure', 'Fantasy']
},

captainAmericaBraveNewWorld: {
    id: 'captainAmericaBraveNewWorld',
    type: 'movie',
    title: "Captain America: Brave New World",
    url: "https://drive.google.com/file/d/1pJ5N0z8bQFpqeMx2UrZqrU1526ygzxDm/preview ",
    imageUrl: "https://m.media-amazon.com/images/I/71IgPTlki7L._AC_UF894 ,1000_QL80_.jpg",
    rating: "6.9/10",
    description: "Sam Wilson, taking up the mantle of Captain America, finds himself in the middle of an international incident. He must discover the reason behind a global plot before the true mastermind has the entire world seeing red.",
    metaTags: ['Action', 'Sci-Fi', 'Super Hero']
},

blackAdam: {
    id: 'blackAdam',
    type: 'movie',
    title: "Black Adam",
    url: "https://drive.google.com/file/d/1B-Kb1tedWlkMlBWpDj8S42HfjLFUUVR0/preview ",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYmM3OTM4NDktMmI2NS00OWU0LTg4OTQtNjZhMmFkYjhmOGY1XkEyXkFqcGc@._V1_.jpg ",
    rating: "6.3/10",
    description: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    metaTags: ['Action', 'Fantasy', 'Sci-Fi']
},

theFlash: {
    id: 'theFlash',
    type: 'movie',
    title: "The Flash",
    url: "https://drive.google.com/file/d/18P394XXdY1k_JX4oBTkZubBWERxZ-blz/preview ",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYmE2NzBjNGUtNTJiMy00N2UxLWEyYzMtYzFjODFhMGZlOTgzXkEyXkFqcGc@._V1_.jpg ",
    rating: "6.7/10",
    description: "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
    metaTags: ['Action', 'Adventure', 'Sci-Fi']
},

hotelTransylvania: {
    id: 'hotelTransylvania',
    type: 'movie',
    title: "Hotel Transylvania",
    url: "https://drive.google.com/file/d/1gZ4FVX5GLCSv2-i_sabXWhgl9u_3FeOB/preview ",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZjcyM2JmMGYtZWVjZC00YjljLWJjNzktYTU5ZjBhMjMwYjQzXkEyXkFqcGc@._V1_.jpg ",
    rating: "7.0/10",
    description: "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teen-aged daughter.",
    metaTags: ['Animation', 'Family', 'Comedy', 'Fantasy']
},

theBlackPhone: {
    id: 'theBlackPhone',
    type: 'movie',
    title: "The Black Phone",
    url: "https://drive.google.com/file/d/1ibOSQ1uTdu7_VaEZ0X7KKFpXqB9Rsuzo/preview ",
    imageUrl: "https://m.media-amazon.com/images/I/61v5wu6Z4UL._AC_UF894 ,1000_QL80_.jpg",
    rating: "6.9/10",
    description: "After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killer's previous victims.",
    metaTags: ['Horror', 'Thriller', 'Supernatural']
},

charlieAndTheChocolateFactory: {
    id: 'charlieAndTheChocolateFactory',
    type: 'movie',
    title: "Charlie and the Chocolate Factory",
    url: "https://drive.google.com/file/d/1eaQHnnwolzvKHEvs91RO-S2CpNvhmiU5/preview ",
    imageUrl: "https://m.media-amazon.com/images/I/81t3TZnS8jL._AC_UF894 ,1000_QL80_.jpg",
    rating: "6.7/10",
    description: "A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
    metaTags: ['Adventure', 'Comedy', 'Family', 'Fantasy']
},

happyGilmore: {
    id: 'happyGilmore',
    type: 'movie',
    title: "Happy Gilmore",
    url: "https://drive.google.com/file/d/0B_gF_cJaMa7FZ1ZJYnp6NnN0NXM/preview?resourcekey=0-JaKJOgGdcl7Pax50ovFSLg ",
    imageUrl: "https://m.media-amazon.com/images/I/71kHI+fUlPL._AC_UF894 ,1000_QL80_.jpg",
    rating: "7.0/10",
    description: "A rejected hockey player puts his skills to the golf course to save his grandmother's house.",
    metaTags: ['Comedy', 'Sport']
},

superMarioBros: {
    id: 'superMarioBros',
    type: 'movie',
    title: "The Super Mario Bros. Movie",
    url: "https://drive.google.com/file/d/1kliJw8luDNdGGnEbqjQgPCkfDzpC0wTq/preview ",
    imageUrl: "https://m.media-amazon.com/images/I/91zqGNzwk5L.jpg ",
    rating: "7.0/10",
    description: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.",
    metaTags: ['Animation', 'Adventure', 'Family', 'Fantasy']
},
  chainsawManMovie: {
      id: 'chainsawManMovie',
      type: 'movie',
      title: "Chainsaw Man The Movie: Reze Arc",
      servers: {
          standard: "https://drive.google.com/file/d/13yvwoCFGN7k_gJEQ17TZwBueCfSkBN5P/preview ",
          vip: "https://drive.google.com/file/d/1q6VjHIFa2lPGzBqiai6ngYc9KV8GDpb-/preview "
      },
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZmMzNGVhODktYmU5MS00MDg1LThlNTEtNTMyYTg5MDA0Njk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
      rating: "10/10",
      description: "Denji meets a mysterious girl named Reze, who seems to be the perfect girlfriend. However, their sweet romance is brutally cut short when Reze's true identity as the Bomb Devil is revealed, leading to an explosive and heartbreaking battle that will test Denji's heart and humanity.",
      previewVideoUrl: "",
      metaTags: ['Anime', 'Action', 'Dark Fantasy', 'Horror'],
      displayTags: ['New Release'],
      
      // This makes the movie exclusive to VIP members
      accessLevel: 'vip-only'
  },
  // --- START: NEW UPCOMING MOVIES SEGMENT ---

  
  kpopDemonHunters: {
      id: 'kpopDemonHunters',
      type: 'upcoming',
      title: "K-Pop: Demon Hunters",
      imageUrl: "https://m.media-amazon.com/images/I/81Mtr7elTnL.jpg ",
      rating: "Coming Soon",
      description: "When a world-famous K-Pop group discovers their musical abilities can exorcise demons, they are forced to balance their lives as global superstars with their secret duty as humanity's last line of defense against the forces of darkness.",
      metaTags: ['Action', 'K-Drama', 'Supernatural', 'Comedy'],
      upcomingCategory: 'Highly Anticipated'
  },
  haikyu: {
      id: 'haikyu',
      type: 'upcoming',
      title: "Haikyuu!!",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYjYxMWFlYTAtYTk0YS00NTMxLWJjNTQtM2E0NjdhYTRhNzE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
      rating: "Coming Soon",
      description: "Haikyuu!! is a dynamic sports anime series that follows the journey of Shoyo Hinata, a passionate and determined volleyball player, as he overcomes challenges to compete at the highest level alongside his teammates.",
      metaTags: ['Volleyball', 'Teamwork', 'Sports'],
      upcomingCategory: 'Highly Anticipated'
  },
  onePiece: {
  id: 'onePiece',
  type: 'upcoming',
  title: "One Piece",
  imageUrl: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
  rating: "Coming Soon - PG-13",
  description: "One Piece follows Monkey D. Luffy and his crew on their adventurous quest to find the legendary treasure and become the Pirate King.",
  metaTags: ['Adventure', 'Action', 'Pirates'],
  upcomingCategory: 'Coming Soon'
},
phineasAndFerb: {
  id: 'phineasAndFerb',
  type: 'upcoming',
  title: "Phineas and Ferb",
  imageUrl: "https://lumiere-a.akamaihd.net/v1/images/p_bu_phineasandferb_poster_v2_03c48efe.jpeg?region=0%2C0%2C540%2C810 ",
  rating: "Coming Soon",
  description: "Phineas and Ferb is a fun animated series following two stepbrothers who create extraordinary inventions and embark on wild adventures every day of their summer vacation.",
  metaTags: ['Animation', 'Comedy', 'Adventure'],
  upcomingCategory: 'Coming This Week'
},
inception: {
  id: 'inception',
  type: 'upcoming',
  title: "Inception",
  imageUrl: "https://m.media-amazon.com/images/I/71uKM+LdgFL.jpg ",
  rating: "Coming Soon",
  description: "A mind-bending thriller where a thief enters dreams to steal secrets and plant ideas.",
  metaTags: ['Sci-Fi', 'Thriller', 'Action'],
  upcomingCategory: 'Highly Anticipated'
},
theDarkKnight: {
  id: 'theDarkKnight',
  type: 'upcoming',
  title: "The Dark Knight",
  imageUrl: "https://m.media-amazon.com/images/I/81IfoBox2TL.jpg ",
  rating: "Coming Soon",
  description: "Batman faces his ultimate nemesis, the Joker, in this critically acclaimed superhero film.",
  metaTags: ['Action', 'Drama', 'Crime'],
  upcomingCategory: 'Coming This Week'
},
parasite: {
  id: 'parasite',
  type: 'upcoming',
  title: "Parasite",
  imageUrl: "https://m.media-amazon.com/images/I/91KArYP03YL._AC_UF894 ,1000_QL80_.jpg",
  rating: "Coming Soon",
  description: "A dark tale of class struggle unfolds as two families’ lives become dangerously intertwined.",
  metaTags: ['Thriller', 'Drama', 'Comedy'],
  upcomingCategory: 'Worth the Wait'
},







bladeRunner2049: {
  id: 'bladeRunner2049',
  type: 'upcoming',
  title: "Blade Runner 2049",
  imageUrl: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg ",
  rating: "Coming Soon",
  description: "Blade Runner 2049 is a visually stunning sci-fi movie exploring a dystopian future where replicants and humans collide.",
  metaTags: ['Sci-Fi', 'Dystopian', 'Thriller'],
  upcomingCategory: 'Highly Anticipated'
},
naruto: {
  id: 'naruto',
  type: 'upcoming',
  title: "Naruto",
  imageUrl: "https://m.media-amazon.com/images/I/71Hl1PF5YGL.jpg ",
  rating: "Coming Soon",
  description: "Naruto is an action-packed anime series chronicling the journey of a young ninja striving to become the strongest leader, the Hokage.",
  metaTags: ['Action', 'Ninja', 'Shounen'],
  upcomingCategory: 'Coming This Week'
},
theMatrix: {
  id: 'theMatrix',
  type: 'upcoming',
  title: "The Matrix",
  imageUrl: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_UF894 ,1000_QL80_.jpg",
  rating: "Coming Soon",
  description: "The Matrix is a groundbreaking sci-fi film where reality and illusion blur as Neo discovers the truth behind his world.",
  metaTags: ['Sci-Fi', 'Action', 'Philosophical'],
  upcomingCategory: 'Worth the Wait'
},


  itwelcometoderry: {
      id: 'itwelcometoderry',
      type: 'upcoming',
      title: "IT: Welcome to Derry",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BZWE0ZWM1MjUtNmYzYS00NzU3LTkxYmQtNmI3NTc0ZTY1NmVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
      rating: "Worth The Wait",
      description: "It: Welcome to Derry, the most trending tv series right after stranger things ofc. and we dont like netflix...",
      metaTags: ['Horror', 'Sequel', 'Supernatural'],
      upcomingCategory: 'Worth the Wait'
  },
  
  
  joker2: {
      id: 'joker2',
      type: 'upcoming',
      title: "Joker: Folie à Deux",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ",
      rating: "Coming Soon",
      description: "Arthur Fleck finds a deep connection with a fellow patient at Arkham Asylum, the enigmatic Dr. Harleen Quinzel, as their dark romance blossoms into a twisted musical journey of madness and chaos.",
      metaTags: ['Musical', 'Thriller', 'Crime'],
      upcomingCategory: 'Coming Soon'
  },
  
  
  
  

  // --- END: NEW UPCOMING MOVIES SEGMENT ---

  wednesday: {
      id: 'wednesday', type: 'series', title: "Wednesday", imageUrl: "https://m.media-amazon.com/images/M/MV5BMDE1NjNmZjgtZTg0OC00NjkxLWEzYzItMDNkMTc3YjgxZWQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg ", rating: "1 Season",
      description: "While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a monstrous killing spree, and solve the supernatural mystery that embroiled her parents 25 years ago.",
      episodes: {
          '1': [
              { name: "Wednesday's Child Is Full of Woe", url: "https://drive.google.com/file/d/1GD7dmbbwf0tgmc_0Bt6Rq4qXV7KSTCMD/preview ", description: "Wednesday Addams begins her enrollment at Nevermore Academy, a school for outcasts, where she immediately finds herself embroiled in a dark mystery." },
              { name: "Woe Is the Loneliest Number", url: "https://drive.google.com/file/d/1uq1jm6pM1e1QcAFVcepLeTEzUsSRaa9E/preview ", description: "Wednesday navigates the social complexities of Nevermore and starts investigating a monstrous creature terrorizing the town, all while clashing with her new peers." },
              { name: "Friend or Woe", url: "https://drive.google.com/file/d/1Sv4hMQIoO3CZ7WbzuXOWa5c_NTv6wSLM/preview ", description: "Wednesday forms an uneasy alliance with her roommate, Enid, and continues her investigation into the killings, uncovering secrets about Nevermore's past." },
              { name: "Woe What a Night", url: "https://drive.google.com/file/u/1/d/1uw2PCLsJ0DjfGi_-_VERVsqyY_hhkzQ6/preview ", description: "Wednesday attends the Rave'N dance, a pivotal event at Nevermore, where she uncovers more clues about the monster and the school's hidden dangers." },
              { name: "You Reap What You Woe", url: "https://drive.google.com/file/d/1HbBi8TcyeRkBvqBk5xSO9PSL3l7ZqNwE/preview ", description: "Wednesday faces expulsion from Nevermore as her investigation puts her at odds with the school's faculty and threatens to expose deep-seated secrets." },
              { name: "Quid Pro Woe", url: "https://drive.google.com/file/d/1RsM-9eXikQboCFDfNEMg_KxYaXN07TDv/preview ", description: "Wednesday makes a deal to uncover the truth behind the monstrous attacks, forcing her to confront betrayal and unexpected alliances." },
              { name: "If You Don't Woe Me by Now", url: "https://drive.google.com/file/d/1rcYIsPla7mA-XfZ8cnn4Vn8B-UPVoPMc/preview ", description: "As the mystery deepens, Wednesday uncovers a shocking twist about the monster's identity and its connection to her own family history." },
              { name: "A Murder of Woes", url: "https://drive.google.com/file/d/13-JQKH6qDYi9tBMY1v_mHnfh_sMDDNxS/preview ", description: "Wednesday confronts the true mastermind behind the monstrous killings, fighting to save Nevermore Academy and prevent a devastating catastrophe." }
          ]
      }
  }
};
