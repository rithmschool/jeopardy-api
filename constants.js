const categories = [
  { id: 2, title: 'baseball', clues_count: 5 },
  { id: 3, title: 'odd jobs', clues_count: 5 },
  { id: 4, title: 'movies', clues_count: 5 },
  { id: 6, title: '"cat" egory', clues_count: 5 },
  { id: 8, title: 'time', clues_count: 5 },
  { id: 9, title: 'dining out', clues_count: 5 },
  { id: 10, title: "children's literature", clues_count: 5 },
  { id: 11, title: 'trivia', clues_count: 5 },
  { id: 12, title: '"ac"/"dc"', clues_count: 5 },
  { id: 13, title: 'inventions', clues_count: 5 },
  { id: 14, title: 'ancient worlds', clues_count: 5 },
  { id: 15, title: 'hollywood legends', clues_count: 5 },
  { id: 17, title: 'u.s. states', clues_count: 5 },
  { id: 18, title: '"hard"', clues_count: 5 },
];

const categoryDetail = {
  2: {
    id: 2,
    title: "baseball",
    clues: [
      {
        id: 2,
        answer: "the Western division",
        question: "The Atlanta Braves are in this division of the National League",
        value: 100,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.829Z",
        updated_at: "2014-02-11T22:47:18.829Z",
        category_id: 2,
        game_id: null,
        invalid_count: null,
        category: {
          id: 2,
          title: "baseball",
          created_at: "2014-02-11T22:47:18.706Z",
          updated_at: "2014-02-11T22:47:18.706Z",
          clues_count: 45
        }
      },
      {
        id: 1183,
        answer: "no-hitters",
        question: "Johnny Vander Meer is the only man to have ever pitched 2 of them consecutively",
        value: 200,
        airdate: "1984-10-04T19:00:00.000Z",
        created_at: "2014-02-11T22:47:18.829Z",
        updated_at: "2014-02-11T22:47:18.829Z",
        category_id: 2,
        game_id: null,
        invalid_count: null,
        category: {
          id: 2,
          title: "baseball",
          created_at: "2014-02-11T22:47:18.706Z",
          updated_at: "2014-02-11T22:47:18.706Z",
          clues_count: 45
        }
      },
      {
        id: 14,
        answer: "Don Larsen",
        question: "Now a paper company sales rep, he pitched only perfect game in World Series history",
        value: 300,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.970Z",
        updated_at: "2014-02-11T22:47:18.970Z",
        category_id: 2,
        game_id: null,
        invalid_count: null,
        category: {
          id: 2,
          title: "baseball",
          created_at: "2014-02-11T22:47:18.706Z",
          updated_at: "2014-02-11T22:47:18.706Z",
          clues_count: 45
        }
      },
      {
        id: 20,
        answer: "Fenway Park",
        question: "Boston's \"Green Monster\" is in this stadium",
        value: 400,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.037Z",
        updated_at: "2014-02-11T22:47:19.037Z",
        category_id: 2,
        game_id: null,
        invalid_count: null,
        category: {
          id: 2,
          title: "baseball",
          created_at: "2014-02-11T22:47:18.706Z",
          updated_at: "2014-02-11T22:47:18.706Z",
          clues_count: 45
        }
      },
      {
        id: 26,
        answer: "Sparky Anderson",
        question: "In '84, he became 1st manager to win over 100 games with teams in both Major Leagues",
        value: 500,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.107Z",
        updated_at: "2014-02-11T22:47:19.107Z",
        category_id: 2,
        game_id: null,
        invalid_count: null,
        category: {
          id: 2,
          title: "baseball",
          created_at: "2014-02-11T22:47:18.706Z",
          updated_at: "2014-02-11T22:47:18.706Z",
          clues_count: 45
        }
      }
    ],
    clues_count: 5
  },
  3: {
    id: 3,
    title: "odd jobs",
    clues: [
      {
        id: 3,
        answer: "sold flowers (flower girl accepted)",
        question: "Eliza Doolittle did it for a living",
        value: 100,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.841Z",
        updated_at: "2014-02-11T22:47:18.841Z",
        category_id: 3,
        game_id: null,
        invalid_count: null,
        category: {
          id: 3,
          title: "odd jobs",
          created_at: "2014-02-11T22:47:18.718Z",
          updated_at: "2014-02-11T22:47:18.718Z",
          clues_count: 35
        }
      },
      {
        id: 9,
        answer: "wranglers",
        question: "In the Old West they were in charge of horses, on a movie set in charge of chickens",
        value: 200,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.912Z",
        updated_at: "2014-02-11T22:47:18.912Z",
        category_id: 3,
        game_id: null,
        invalid_count: null,
        category: {
          id: 3,
          title: "odd jobs",
          created_at: "2014-02-11T22:47:18.718Z",
          updated_at: "2014-02-11T22:47:18.718Z",
          clues_count: 35
        }
      },
      {
        id: 15,
        answer: "a bailiff",
        question: "He solemnly swears you in, in court",
        value: 300,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.981Z",
        updated_at: "2014-02-11T22:47:18.981Z",
        category_id: 3,
        game_id: null,
        invalid_count: null,
        category: {
          id: 3,
          title: "odd jobs",
          created_at: "2014-02-11T22:47:18.718Z",
          updated_at: "2014-02-11T22:47:18.718Z",
          clues_count: 35
        }
      },
      {
        id: 21,
        answer: "cartoonists (or animators)",
        question: "Ub Iwerks, Friz Freleng & Tex Avery drew the line at this job",
        value: 400,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.049Z",
        updated_at: "2014-02-11T22:47:19.049Z",
        category_id: 3,
        game_id: null,
        invalid_count: null,
        category: {
          id: 3,
          title: "odd jobs",
          created_at: "2014-02-11T22:47:18.718Z",
          updated_at: "2014-02-11T22:47:18.718Z",
          clues_count: 35
        }
      },
      {
        id: 5435,
        answer: "(air traffic) controller",
        question: "Position in airport operations which relies on an echo location receiver",
        value: 500,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.118Z",
        updated_at: "2019-05-03T14:06:12.516Z",
        category_id: 3,
        game_id: null,
        invalid_count: 1,
        category: {
          id: 3,
          title: "odd jobs",
          created_at: "2014-02-11T22:47:18.718Z",
          updated_at: "2014-02-11T22:47:18.718Z",
          clues_count: 35
        }
      }
    ],
    clues_count: 5
  },
  4: {
    id: 4,
    title: "movies",
    clues: [
      {
        id: 10,
        answer: "<i>Risky Business</i>",
        question: "Title describing Tom Cruise's precarious commercial enterprise",
        value: 200,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.923Z",
        updated_at: "2014-02-11T22:47:18.923Z",
        category_id: 4,
        game_id: null,
        invalid_count: null,
        category: {
          id: 4,
          title: "movies",
          created_at: "2014-02-11T22:47:18.728Z",
          updated_at: "2014-02-11T22:47:18.728Z",
          clues_count: 55
        }
      },
      {
        id: 16,
        answer: "<i>All of Me</i>",
        question: "Film where Lily Tomlin is really Steve Martin's better half",
        value: 300,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.993Z",
        updated_at: "2014-02-11T22:47:18.993Z",
        category_id: 4,
        game_id: null,
        invalid_count: null,
        category: {
          id: 4,
          title: "movies",
          created_at: "2014-02-11T22:47:18.728Z",
          updated_at: "2014-02-11T22:47:18.728Z",
          clues_count: 55
        }
      },
      {
        id: 22,
        answer: "<i>Amadeus</i>",
        question: "Mozart's middle name becomes a movie",
        value: 400,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.061Z",
        updated_at: "2014-02-11T22:47:19.061Z",
        category_id: 4,
        game_id: null,
        invalid_count: null,
        category: {
          id: 4,
          title: "movies",
          created_at: "2014-02-11T22:47:18.728Z",
          updated_at: "2014-02-11T22:47:18.728Z",
          clues_count: 55
        }
      },
      {
        id: 38050,
        answer: "<i>Gremlins</i>",
        question: "The sequel to this 1984 film with Zach Galligan & Phoebe Cates was subtitled \"The New Batch\"",
        value: 500,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.129Z",
        updated_at: "2019-05-03T14:08:51.169Z",
        category_id: 4,
        game_id: null,
        invalid_count: 1,
        category: {
          id: 4,
          title: "movies",
          created_at: "2014-02-11T22:47:18.728Z",
          updated_at: "2014-02-11T22:47:18.728Z",
          clues_count: 55
        }
      },
      {
        id: 4,
        answer: "<i>Star Trek III</i>",
        question: "Subtitled \"The Search for Spock\"",
        value: 100,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.854Z",
        updated_at: "2019-07-25T06:24:45.974Z",
        category_id: 4,
        game_id: null,
        invalid_count: 1,
        category: {
          id: 4,
          title: "movies",
          created_at: "2014-02-11T22:47:18.728Z",
          updated_at: "2014-02-11T22:47:18.728Z",
          clues_count: 55
        }
      }
    ],
    clues_count: 5
  },
  6: {
    id: 6,
    title: "\"cat\" egory",
    clues: [
      {
        id: 6,
        answer: "cat people",
        question: "Malcolm McDowell & Nastassja Kinski's \"purr\"fect roles in 1982",
        value: 100,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.878Z",
        updated_at: "2014-02-11T22:47:18.878Z",
        category_id: 6,
        game_id: null,
        invalid_count: null,
        category: {
          id: 6,
          title: "\"cat\" egory",
          created_at: "2014-02-11T22:47:18.750Z",
          updated_at: "2014-02-11T22:47:18.750Z",
          clues_count: 5
        }
      },
      {
        id: 12,
        answer: "a catapult",
        question: "Ancient weapon kept a stone's throw from its target",
        value: 200,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:18.947Z",
        updated_at: "2014-02-11T22:47:18.947Z",
        category_id: 6,
        game_id: null,
        invalid_count: null,
        category: {
          id: 6,
          title: "\"cat\" egory",
          created_at: "2014-02-11T22:47:18.750Z",
          updated_at: "2014-02-11T22:47:18.750Z",
          clues_count: 5
        }
      },
      {
        id: 18,
        answer: "a catalyst",
        question: "It gets things going in a chemical reaction",
        value: 300,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.015Z",
        updated_at: "2014-02-11T22:47:19.015Z",
        category_id: 6,
        game_id: null,
        invalid_count: null,
        category: {
          id: 6,
          title: "\"cat\" egory",
          created_at: "2014-02-11T22:47:18.750Z",
          updated_at: "2014-02-11T22:47:18.750Z",
          clues_count: 5
        }
      },
      {
        id: 24,
        answer: "Maggie the Cat",
        question: "Elizabeth Taylor character that could have burnt her paws on a hot tin roof",
        value: 400,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.084Z",
        updated_at: "2014-02-11T22:47:19.084Z",
        category_id: 6,
        game_id: null,
        invalid_count: null,
        category: {
          id: 6,
          title: "\"cat\" egory",
          created_at: "2014-02-11T22:47:18.750Z",
          updated_at: "2014-02-11T22:47:18.750Z",
          clues_count: 5
        }
      },
      {
        id: 30,
        answer: "a CAT scan",
        question: "During one in a hospital, your brain should think \"cheese\"",
        value: 500,
        airdate: "1985-02-08T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.151Z",
        updated_at: "2014-02-11T22:47:19.151Z",
        category_id: 6,
        game_id: null,
        invalid_count: null,
        category: {
          id: 6,
          title: "\"cat\" egory",
          created_at: "2014-02-11T22:47:18.750Z",
          updated_at: "2014-02-11T22:47:18.750Z",
          clues_count: 5
        }
      }
    ],
    clues_count: 5
  },
  8: {
    id: 8,
    title: "time",
    clues: [
      {
        id: 32,
        answer: "quartz",
        question: "Watch named for the vibrating crystal that runs it",
        value: 100,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.570Z",
        updated_at: "2014-02-11T22:47:19.570Z",
        category_id: 8,
        game_id: null,
        invalid_count: null,
        category: {
          id: 8,
          title: "time",
          created_at: "2014-02-11T22:47:19.499Z",
          updated_at: "2014-02-11T22:47:19.499Z",
          clues_count: 35
        }
      },
      {
        id: 38,
        answer: "March",
        question: "It \"comes in like a lion & goes out like a lamb\"",
        value: 200,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.677Z",
        updated_at: "2014-02-11T22:47:19.677Z",
        category_id: 8,
        game_id: null,
        invalid_count: null,
        category: {
          id: 8,
          title: "time",
          created_at: "2014-02-11T22:47:19.499Z",
          updated_at: "2014-02-11T22:47:19.499Z",
          clues_count: 35
        }
      },
      {
        id: 44,
        answer: "4",
        question: "Number of months with exactly 30 days",
        value: 300,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.747Z",
        updated_at: "2014-02-11T22:47:19.747Z",
        category_id: 8,
        game_id: null,
        invalid_count: null,
        category: {
          id: 8,
          title: "time",
          created_at: "2014-02-11T22:47:19.499Z",
          updated_at: "2014-02-11T22:47:19.499Z",
          clues_count: 35
        }
      },
      {
        id: 50,
        answer: "Sunday",
        question: "Lucky children born that day are \"fair & wise & good & gay\"",
        value: 400,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.819Z",
        updated_at: "2014-02-11T22:47:19.819Z",
        category_id: 8,
        game_id: null,
        invalid_count: null,
        category: {
          id: 8,
          title: "time",
          created_at: "2014-02-11T22:47:19.499Z",
          updated_at: "2014-02-11T22:47:19.499Z",
          clues_count: 35
        }
      },
      {
        id: 56,
        answer: "week",
        question: "Repeating group of days whose name means \"a turning\" in Old Norse",
        value: 500,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.890Z",
        updated_at: "2014-02-11T22:47:19.890Z",
        category_id: 8,
        game_id: null,
        invalid_count: null,
        category: {
          id: 8,
          title: "time",
          created_at: "2014-02-11T22:47:19.499Z",
          updated_at: "2014-02-11T22:47:19.499Z",
          clues_count: 35
        }
      }
    ],
    clues_count: 5
  },
  9: {
    id: 9,
    title: "dining out",
    clues: [
      {
        id: 33,
        answer: "maitre d\\'",
        question: "Shortened from French meaning \"master of hotel\", he greets you & seats you",
        value: 100,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.582Z",
        updated_at: "2014-02-11T22:47:19.582Z",
        category_id: 9,
        game_id: null,
        invalid_count: null,
        category: {
          id: 9,
          title: "dining out",
          created_at: "2014-02-11T22:47:19.510Z",
          updated_at: "2014-02-11T22:47:19.510Z",
          clues_count: 20
        }
      },
      {
        id: 39,
        answer: "busboys",
        question: "If employed by Greyhound their motto might be \"Leave the clearing to us\"",
        value: 200,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.689Z",
        updated_at: "2014-02-11T22:47:19.689Z",
        category_id: 9,
        game_id: null,
        invalid_count: null,
        category: {
          id: 9,
          title: "dining out",
          created_at: "2014-02-11T22:47:19.510Z",
          updated_at: "2014-02-11T22:47:19.510Z",
          clues_count: 20
        }
      },
      {
        id: 45,
        answer: "antipasto",
        question: "In Italian it's the course ordered \"before the meal\"",
        value: 300,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.760Z",
        updated_at: "2014-02-11T22:47:19.760Z",
        category_id: 9,
        game_id: null,
        invalid_count: null,
        category: {
          id: 9,
          title: "dining out",
          created_at: "2014-02-11T22:47:19.510Z",
          updated_at: "2014-02-11T22:47:19.510Z",
          clues_count: 20
        }
      },
      {
        id: 51,
        answer: "wine steward",
        question: "As sommelier, he hopes to ply you with the finest vintage",
        value: 400,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.831Z",
        updated_at: "2014-02-11T22:47:19.831Z",
        category_id: 9,
        game_id: null,
        invalid_count: null,
        category: {
          id: 9,
          title: "dining out",
          created_at: "2014-02-11T22:47:19.510Z",
          updated_at: "2014-02-11T22:47:19.510Z",
          clues_count: 20
        }
      },
      {
        id: 57,
        answer: "Ronald McDonald",
        question: "The clown that represent the fast food restaurant with the yellow M symbol.",
        value: null,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.902Z",
        updated_at: "2014-02-11T22:47:19.902Z",
        category_id: 9,
        game_id: null,
        invalid_count: null,
        category: {
          id: 9,
          title: "dining out",
          created_at: "2014-02-11T22:47:19.510Z",
          updated_at: "2014-02-11T22:47:19.510Z",
          clues_count: 20
        }
      }
    ],
    clues_count: 5
  },
  10: {
    id: 10,
    title: "children's literature",
    clues: [
      {
        id: 34,
        answer: "Rebecca",
        question: "Little girl who called \"Sunnybrook Farm\" home",
        value: 100,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.595Z",
        updated_at: "2014-02-11T22:47:19.595Z",
        category_id: 10,
        game_id: null,
        invalid_count: null,
        category: {
          id: 10,
          title: "children's literature",
          created_at: "2014-02-11T22:47:19.520Z",
          updated_at: "2014-02-11T22:47:19.520Z",
          clues_count: 92
        }
      },
      {
        id: 40,
        answer: "ice skates",
        question: "Hans Brinker's were silver",
        value: 200,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.700Z",
        updated_at: "2014-02-11T22:47:19.700Z",
        category_id: 10,
        game_id: null,
        invalid_count: null,
        category: {
          id: 10,
          title: "children's literature",
          created_at: "2014-02-11T22:47:19.520Z",
          updated_at: "2014-02-11T22:47:19.520Z",
          clues_count: 92
        }
      },
      {
        id: 46,
        answer: "The Little Engine",
        question: "As it called, it chanted, \"I think I can, I think I can\"",
        value: 300,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.772Z",
        updated_at: "2014-02-11T22:47:19.772Z",
        category_id: 10,
        game_id: null,
        invalid_count: null,
        category: {
          id: 10,
          title: "children's literature",
          created_at: "2014-02-11T22:47:19.520Z",
          updated_at: "2014-02-11T22:47:19.520Z",
          clues_count: 92
        }
      },
      {
        id: 52,
        answer: "<i>National Velvet</i>",
        question: "Enid Bagnold's book that became Liz Taylor's 1st starring vehicle",
        value: 400,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.844Z",
        updated_at: "2014-02-11T22:47:19.844Z",
        category_id: 10,
        game_id: null,
        invalid_count: null,
        category: {
          id: 10,
          title: "children's literature",
          created_at: "2014-02-11T22:47:19.520Z",
          updated_at: "2014-02-11T22:47:19.520Z",
          clues_count: 92
        }
      },
      {
        id: 58,
        answer: "Excellence in childrens' literature illustration.",
        question: "The Caldecott Medal is awarded to a person for acheiving what?",
        value: null,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.915Z",
        updated_at: "2014-02-11T22:47:19.915Z",
        category_id: 10,
        game_id: null,
        invalid_count: null,
        category: {
          id: 10,
          title: "children's literature",
          created_at: "2014-02-11T22:47:19.520Z",
          updated_at: "2014-02-11T22:47:19.520Z",
          clues_count: 92
        }
      }
    ],
    clues_count: 5
  },
  11: {
    id: 11,
    title: "trivia",
    clues: [
      {
        id: 35,
        answer: "alphabetic",
        question: "The order of works in a dictionary",
        value: 100,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.607Z",
        updated_at: "2014-02-11T22:47:19.607Z",
        category_id: 11,
        game_id: null,
        invalid_count: null,
        category: {
          id: 11,
          title: "trivia",
          created_at: "2014-02-11T22:47:19.531Z",
          updated_at: "2014-02-11T22:47:19.531Z",
          clues_count: 50
        }
      },
      {
        id: 41,
        answer: "donkey",
        question: "Party symbol 1st used by Andrew Jackson after opponents called him a jackass",
        value: 200,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.711Z",
        updated_at: "2014-02-11T22:47:19.711Z",
        category_id: 11,
        game_id: null,
        invalid_count: null,
        category: {
          id: 11,
          title: "trivia",
          created_at: "2014-02-11T22:47:19.531Z",
          updated_at: "2014-02-11T22:47:19.531Z",
          clues_count: 50
        }
      },
      {
        id: 53,
        answer: "Penguin, Kiwi, or Ostrich",
        question: "Name a bird that cannot fly",
        value: null,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.855Z",
        updated_at: "2014-02-11T22:47:19.855Z",
        category_id: 11,
        game_id: null,
        invalid_count: null,
        category: {
          id: 11,
          title: "trivia",
          created_at: "2014-02-11T22:47:19.531Z",
          updated_at: "2014-02-11T22:47:19.531Z",
          clues_count: 50
        }
      },
      {
        id: 47,
        answer: "H2O",
        question: "What is the scientific formula for water?",
        value: null,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.784Z",
        updated_at: "2016-03-30T15:15:17.448Z",
        category_id: 11,
        game_id: null,
        invalid_count: 1,
        category: {
          id: 11,
          title: "trivia",
          created_at: "2014-02-11T22:47:19.531Z",
          updated_at: "2014-02-11T22:47:19.531Z",
          clues_count: 50
        }
      },
      {
        id: 59,
        answer: "garlic",
        question: "What type of veggie is used to keep vampires away?",
        value: null,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.928Z",
        updated_at: "2014-02-11T22:47:19.928Z",
        category_id: 11,
        game_id: null,
        invalid_count: null,
        category: {
          id: 11,
          title: "trivia",
          created_at: "2014-02-11T22:47:19.531Z",
          updated_at: "2014-02-11T22:47:19.531Z",
          clues_count: 50
        }
      }
    ],
    clues_count: 5
  },
  12: {
    id: 12,
    title: "\"ac\"/\"dc\"",
    clues: [
      {
        id: 36,
        answer: "Dick Clark",
        question: "For this perennial teen-ager, life's been one big \"Bandstand\"",
        value: 100,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.619Z",
        updated_at: "2014-02-11T22:47:19.619Z",
        category_id: 12,
        game_id: null,
        invalid_count: null,
        category: {
          id: 12,
          title: "\"ac\"/\"dc\"",
          created_at: "2014-02-11T22:47:19.542Z",
          updated_at: "2014-02-11T22:47:19.542Z",
          clues_count: 5
        }
      },
      {
        id: 42,
        answer: "Alistair Cooke",
        question: "He's the master of \"Masterpiece Theater\"",
        value: 200,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.723Z",
        updated_at: "2014-02-11T22:47:19.723Z",
        category_id: 12,
        game_id: null,
        invalid_count: null,
        category: {
          id: 12,
          title: "\"ac\"/\"dc\"",
          created_at: "2014-02-11T22:47:19.542Z",
          updated_at: "2014-02-11T22:47:19.542Z",
          clues_count: 5
        }
      },
      {
        id: 48,
        answer: "Dyan Cannon",
        question: "She's the mother of Cary Grant's only child",
        value: 300,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.796Z",
        updated_at: "2014-02-11T22:47:19.796Z",
        category_id: 12,
        game_id: null,
        invalid_count: null,
        category: {
          id: 12,
          title: "\"ac\"/\"dc\"",
          created_at: "2014-02-11T22:47:19.542Z",
          updated_at: "2014-02-11T22:47:19.542Z",
          clues_count: 5
        }
      },
      {
        id: 54,
        answer: "Alexander Calder",
        question: "American sculptor known for his playful metal mobiles",
        value: 400,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.867Z",
        updated_at: "2014-02-11T22:47:19.867Z",
        category_id: 12,
        game_id: null,
        invalid_count: null,
        category: {
          id: 12,
          title: "\"ac\"/\"dc\"",
          created_at: "2014-02-11T22:47:19.542Z",
          updated_at: "2014-02-11T22:47:19.542Z",
          clues_count: 5
        }
      },
      {
        id: 60,
        answer: "Alice Cooper",
        question: "Born Vincent Furnier, this flamboyant singer \"welcomed us to his nightmare\" in '75",
        value: 500,
        airdate: "1984-12-14T12:00:00.000Z",
        created_at: "2014-02-11T22:47:19.939Z",
        updated_at: "2014-02-11T22:47:19.939Z",
        category_id: 12,
        game_id: null,
        invalid_count: null,
        category: {
          id: 12,
          title: "\"ac\"/\"dc\"",
          created_at: "2014-02-11T22:47:19.542Z",
          updated_at: "2014-02-11T22:47:19.542Z",
          clues_count: 5
        }
      }
    ],
    clues_count: 5
  },
  13: {
    id: 13,
    title: "inventions",
    clues: [
      {
        id: 61,
        answer: "a steamboat",
        question: "\"Fulton's Folly\"",
        value: 100,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.355Z",
        updated_at: "2014-02-11T22:47:20.355Z",
        category_id: 13,
        game_id: null,
        invalid_count: null,
        category: {
          id: 13,
          title: "inventions",
          created_at: "2014-02-11T22:47:20.279Z",
          updated_at: "2014-02-11T22:47:20.279Z",
          clues_count: 65
        }
      },
      {
        id: 67,
        answer: "a bicycle",
        question: "Early ones were called the \"hobby horse\", \"penny-farthing\" & \"high-wheeler\"",
        value: 200,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.424Z",
        updated_at: "2014-02-11T22:47:20.424Z",
        category_id: 13,
        game_id: null,
        invalid_count: null,
        category: {
          id: 13,
          title: "inventions",
          created_at: "2014-02-11T22:47:20.279Z",
          updated_at: "2014-02-11T22:47:20.279Z",
          clues_count: 65
        }
      },
      {
        id: 73,
        answer: "a paper clip",
        question: "1899 device for attaching papers that can ruin a computer disc when magnetized",
        value: 300,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.528Z",
        updated_at: "2014-02-11T22:47:20.528Z",
        category_id: 13,
        game_id: null,
        invalid_count: null,
        category: {
          id: 13,
          title: "inventions",
          created_at: "2014-02-11T22:47:20.279Z",
          updated_at: "2014-02-11T22:47:20.279Z",
          clues_count: 65
        }
      },
      {
        id: 79,
        answer: "Archimedes",
        question: "After inventing the lever & pulley, this Greek said, \"I will move the Earth\"",
        value: 400,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.595Z",
        updated_at: "2014-02-11T22:47:20.595Z",
        category_id: 13,
        game_id: null,
        invalid_count: null,
        category: {
          id: 13,
          title: "inventions",
          created_at: "2014-02-11T22:47:20.279Z",
          updated_at: "2014-02-11T22:47:20.279Z",
          clues_count: 65
        }
      },
      {
        id: 85,
        answer: "a submarine",
        question: "1st one to attempt sinking a warship was the \"Turtle\" in the Revolutionary War",
        value: 500,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.664Z",
        updated_at: "2014-02-11T22:47:20.664Z",
        category_id: 13,
        game_id: null,
        invalid_count: null,
        category: {
          id: 13,
          title: "inventions",
          created_at: "2014-02-11T22:47:20.279Z",
          updated_at: "2014-02-11T22:47:20.279Z",
          clues_count: 65
        }
      }
    ],
    clues_count: 5
  },
  14: {
    id: 14,
    title: "ancient worlds",
    clues: [
      {
        id: 62,
        answer: "Rome",
        question: "Where all roads were supposed to have led",
        value: 100,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.366Z",
        updated_at: "2014-02-11T22:47:20.366Z",
        category_id: 14,
        game_id: null,
        invalid_count: null,
        category: {
          id: 14,
          title: "ancient worlds",
          created_at: "2014-02-11T22:47:20.291Z",
          updated_at: "2014-02-11T22:47:20.291Z",
          clues_count: 5
        }
      },
      {
        id: 68,
        answer: "Egypt",
        question: "Its people called it \"kemet\", color of black, from land after flooding by Nile",
        value: 200,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.443Z",
        updated_at: "2014-02-11T22:47:20.443Z",
        category_id: 14,
        game_id: null,
        invalid_count: null,
        category: {
          id: 14,
          title: "ancient worlds",
          created_at: "2014-02-11T22:47:20.291Z",
          updated_at: "2014-02-11T22:47:20.291Z",
          clues_count: 5
        }
      },
      {
        id: 74,
        answer: "the Bronze Age",
        question: "Followed the Stone Age; named for copper alloy people used for tools & weapons",
        value: 300,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.540Z",
        updated_at: "2014-02-11T22:47:20.540Z",
        category_id: 14,
        game_id: null,
        invalid_count: null,
        category: {
          id: 14,
          title: "ancient worlds",
          created_at: "2014-02-11T22:47:20.291Z",
          updated_at: "2014-02-11T22:47:20.291Z",
          clues_count: 5
        }
      },
      {
        id: 80,
        answer: "painting",
        question: "The Chinese once regarded calligraphy as a branch of this art",
        value: 400,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.607Z",
        updated_at: "2014-02-11T22:47:20.607Z",
        category_id: 14,
        game_id: null,
        invalid_count: null,
        category: {
          id: 14,
          title: "ancient worlds",
          created_at: "2014-02-11T22:47:20.291Z",
          updated_at: "2014-02-11T22:47:20.291Z",
          clues_count: 5
        }
      },
      {
        id: 86,
        answer: "the Phoenicians",
        question: "Civilization of sailors that developed 1st Western alphabet",
        value: 500,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.675Z",
        updated_at: "2014-02-11T22:47:20.675Z",
        category_id: 14,
        game_id: null,
        invalid_count: null,
        category: {
          id: 14,
          title: "ancient worlds",
          created_at: "2014-02-11T22:47:20.291Z",
          updated_at: "2014-02-11T22:47:20.291Z",
          clues_count: 5
        }
      }
    ],
    clues_count: 5
  },
  15: {
    id: 15,
    title: "hollywood legends",
    clues: [
      {
        id: 63,
        answer: "Henry Fonda",
        question: "Brando was 2 when his mom appeared on stage with this dad of Peter & Jane",
        value: 100,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.377Z",
        updated_at: "2014-02-11T22:47:20.377Z",
        category_id: 15,
        game_id: null,
        invalid_count: null,
        category: {
          id: 15,
          title: "hollywood legends",
          created_at: "2014-02-11T22:47:20.302Z",
          updated_at: "2014-02-11T22:47:20.302Z",
          clues_count: 5
        }
      },
      {
        id: 69,
        answer: "Edith Head",
        question: "She won 8 Academy Awards with only her clothes appearing on screen",
        value: 200,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.483Z",
        updated_at: "2014-02-11T22:47:20.483Z",
        category_id: 15,
        game_id: null,
        invalid_count: null,
        category: {
          id: 15,
          title: "hollywood legends",
          created_at: "2014-02-11T22:47:20.302Z",
          updated_at: "2014-02-11T22:47:20.302Z",
          clues_count: 5
        }
      },
      {
        id: 75,
        answer: "Natalie Wood, James Dean, and Sal Mineo",
        question: "The 3 stars of \"Rebel Without a Cause\" who met with untimely deaths",
        value: null,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.551Z",
        updated_at: "2014-02-11T22:47:20.551Z",
        category_id: 15,
        game_id: null,
        invalid_count: null,
        category: {
          id: 15,
          title: "hollywood legends",
          created_at: "2014-02-11T22:47:20.302Z",
          updated_at: "2014-02-11T22:47:20.302Z",
          clues_count: 5
        }
      },
      {
        id: 81,
        answer: "Elizabeth Taylor",
        question: "In her 1st film she sang with \"Alfalfa\" Switzer; in her next, she was paired with Lassie",
        value: 400,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.618Z",
        updated_at: "2014-02-11T22:47:20.618Z",
        category_id: 15,
        game_id: null,
        invalid_count: null,
        category: {
          id: 15,
          title: "hollywood legends",
          created_at: "2014-02-11T22:47:20.302Z",
          updated_at: "2014-02-11T22:47:20.302Z",
          clues_count: 5
        }
      },
      {
        id: 87,
        answer: "John Wayne",
        question: "Oliver Hardy's co-star in \"The Fighting Kentuckian\"",
        value: 500,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.687Z",
        updated_at: "2014-02-11T22:47:20.687Z",
        category_id: 15,
        game_id: null,
        invalid_count: null,
        category: {
          id: 15,
          title: "hollywood legends",
          created_at: "2014-02-11T22:47:20.302Z",
          updated_at: "2014-02-11T22:47:20.302Z",
          clues_count: 5
        }
      }
    ],
    clues_count: 5
  },
  17: {
    id: 17,
    title: "u.s. states",
    clues: [
      {
        id: 65,
        answer: "New York",
        question: "The Empire State",
        value: 100,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.400Z",
        updated_at: "2014-02-11T22:47:20.400Z",
        category_id: 17,
        game_id: null,
        invalid_count: null,
        category: {
          id: 17,
          title: "u.s. states",
          created_at: "2014-02-11T22:47:20.329Z",
          updated_at: "2014-02-11T22:47:20.329Z",
          clues_count: 110
        }
      },
      {
        id: 71,
        answer: "Texas",
        question: "The ceiling of its capitol features a lone star",
        value: 200,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.505Z",
        updated_at: "2014-02-11T22:47:20.505Z",
        category_id: 17,
        game_id: null,
        invalid_count: null,
        category: {
          id: 17,
          title: "u.s. states",
          created_at: "2014-02-11T22:47:20.329Z",
          updated_at: "2014-02-11T22:47:20.329Z",
          clues_count: 110
        }
      },
      {
        id: 77,
        answer: "Arizona",
        question: "Only U.S. state with a \"Z\" in its name",
        value: 300,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.573Z",
        updated_at: "2014-02-11T22:47:20.573Z",
        category_id: 17,
        game_id: null,
        invalid_count: null,
        category: {
          id: 17,
          title: "u.s. states",
          created_at: "2014-02-11T22:47:20.329Z",
          updated_at: "2014-02-11T22:47:20.329Z",
          clues_count: 110
        }
      },
      {
        id: 83,
        answer: "Vermont",
        question: "The New England state without an Atlantic Ocean coastline",
        value: 400,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.642Z",
        updated_at: "2014-02-11T22:47:20.642Z",
        category_id: 17,
        game_id: null,
        invalid_count: null,
        category: {
          id: 17,
          title: "u.s. states",
          created_at: "2014-02-11T22:47:20.329Z",
          updated_at: "2014-02-11T22:47:20.329Z",
          clues_count: 110
        }
      },
      {
        id: 89,
        answer: "South Carolina",
        question: "8th state of the Union, it was the 1st state to secede",
        value: 500,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.711Z",
        updated_at: "2014-02-11T22:47:20.711Z",
        category_id: 17,
        game_id: null,
        invalid_count: null,
        category: {
          id: 17,
          title: "u.s. states",
          created_at: "2014-02-11T22:47:20.329Z",
          updated_at: "2014-02-11T22:47:20.329Z",
          clues_count: 110
        }
      }
    ],
    clues_count: 5
  },
  18: {
    id: 18,
    title: "\"hard\"",
    clues: [
      {
        id: 66,
        answer: "hard cider",
        question: "Fermented apple juice",
        value: 100,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.412Z",
        updated_at: "2014-02-11T22:47:20.412Z",
        category_id: 18,
        game_id: null,
        invalid_count: null,
        category: {
          id: 18,
          title: "\"hard\"",
          created_at: "2014-02-11T22:47:20.340Z",
          updated_at: "2014-02-11T22:47:20.340Z",
          clues_count: 5
        }
      },
      {
        id: 72,
        answer: "hard-boiled",
        question: "Descriptive of Mike Hammer, Private Eye, or a 20-minute egg",
        value: 200,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.517Z",
        updated_at: "2014-02-11T22:47:20.517Z",
        category_id: 18,
        game_id: null,
        invalid_count: null,
        category: {
          id: 18,
          title: "\"hard\"",
          created_at: "2014-02-11T22:47:20.340Z",
          updated_at: "2014-02-11T22:47:20.340Z",
          clues_count: 5
        }
      },
      {
        id: 78,
        answer: "hard of hearing",
        question: "Reason people used to stick a trumpet in their ear",
        value: 300,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.584Z",
        updated_at: "2014-02-11T22:47:20.584Z",
        category_id: 18,
        game_id: null,
        invalid_count: null,
        category: {
          id: 18,
          title: "\"hard\"",
          created_at: "2014-02-11T22:47:20.340Z",
          updated_at: "2014-02-11T22:47:20.340Z",
          clues_count: 5
        }
      },
      {
        id: 84,
        answer: "Hardcastle",
        question: "TV role Brian Keith judged OK to play",
        value: 400,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.653Z",
        updated_at: "2014-02-11T22:47:20.653Z",
        category_id: 18,
        game_id: null,
        invalid_count: null,
        category: {
          id: 18,
          title: "\"hard\"",
          created_at: "2014-02-11T22:47:20.340Z",
          updated_at: "2014-02-11T22:47:20.340Z",
          clues_count: 5
        }
      },
      {
        id: 90,
        answer: "<i>A Hard Day\\'s Night</i>",
        question: "Album & film featuring \"Tell Me Why\" & \"You Can't Do That\"",
        value: 500,
        airdate: "1984-12-12T12:00:00.000Z",
        created_at: "2014-02-11T22:47:20.723Z",
        updated_at: "2014-02-11T22:47:20.723Z",
        category_id: 18,
        game_id: null,
        invalid_count: null,
        category: {
          id: 18,
          title: "\"hard\"",
          created_at: "2014-02-11T22:47:20.340Z",
          updated_at: "2014-02-11T22:47:20.340Z",
          clues_count: 5
        }
      }
    ],
    clues_count: 5
  }
};

module.exports = {
  categories,
  categoryDetail
}