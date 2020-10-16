import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  searchValue = '';

  movies = [
    {
      id: 1,
      name: 'Avengers',
      img_uri: 'assets/movies/h.jpg',
      description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving .",
      comments: [
        { name: 'User1', comment: 'Great Movie' },
        { name: 'User1', comment: 'Fantastic Movie' },
      ],
      rating: 5,
    },
    {
      id: 2,
      name: 'Lucy',
      img_uri: 'assets/movies/lucy.jpg',
      description: "Lucy Punch grew up in London and was a member of the National Youth Theatre in her late teens before going to University College London.",
      comments: [],
      rating: 0,
    },
    {
      id: 3,
      name: 'AquaMan',
      img_uri: 'assets/movies/ar.jpg',
      description: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of",
      comments: [],
      rating: 0,
    },
    {
      id: 4,
      name: 'Man of Steel',
      img_uri: 'assets/movies/mos.jpg',
      description: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, by a gansters",
      comments: [],
      rating: 0,
    },
    {
      id: 5,
      name: 'Spiderman',
      img_uri: 'assets/movies/spiderman.jpg',
      description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities",
      comments: [],
      rating: 0,
    },
    {
      id: 6,
      name: 'Game Of Thrones',
      img_uri: 'assets/movies/images.jpg',
      description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      comments: [],
      rating: 0,
    },
    {
      id: 7,
      name: 'Wonder Woman',
      img_uri: 'assets/movies/ww.jpg',
      description: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war,",
      comments: [],
      rating: 0,
    },
    {
      id: 8,
      name: 'Men At Work',
      img_uri: 'assets/movies/mw.jpg',
      description: "Comedy following the misadventures of four buddies who work together at a magazine. this is a beautiful web series and he leaves home to fight a war",
      comments: [],
      rating: 0,
    },
    {
      id: 9,
      name: 'The Four Warriers',
      img_uri: 'assets/movies/fw.jpg',
      description: "The story of Ray Kroc, a salesman who turned two brothers' innovative fast food eatery, McDonald's, into the biggest restaurant.",
      comments: [],
      rating: 0,
    },
    {
      id: 10,
      name: 'Joker',
      img_uri: 'assets/movies/joker.jpg',
      description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral ",
      comments: [],
      rating: 0,
    },
    {
      id: 11,
      name: 'Ant-man',
      img_uri: 'assets/movies/ant.jpg',
      description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace",
      comments: [],
      rating: 0,
    },
    {
      id: 12,
      name: 'AquaMan',
      img_uri: 'assets/movies/2.jpg',
      description: "A rebellious princess, a fearsome Jedi, and lethal assassins are among the women of Star Wars. Explore some of the strongest characters here.",
      comments: [],
      rating: 0,
    },
    {
      id: 13,
      name: 'Life Of Pie',
      img_uri: 'assets/movies/lop.jpg',
      description: "Because this project is categorized as in development, the data is only available on IMDbPro and is subject to change. in ",
      comments: [],
      rating: 0,
    },
    {
      id: 13,
      name: 'AquaMan',
      img_uri: 'assets/movies/qk.jpg',
      description: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities",
      comments: [],
      rating: 2,
    },
  ];


  users = [
    {
      id: 1,
      name: 'Admin',
      username: 'admin',
      password: 'admin',
      isAdmin: true,
    },
    {
      id: 2,
      name: 'User1',
      username: 'user1',
      password: 'user1',
      isAdmin: false,
    },
    {
      id: 3,
      name: 'User2',
      username: 'user2',
      password: 'user2',
      isAdmin: false,
    },
  ];

  getMovies() {
    return this.movies;
  }

  getMoviesById(id) {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].id == id) {
        return this.movies[index];
      }
    }
  }

  getUser(username) {
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].username == username) {
        return this.users[index];
      }
    }
  }

  setMoviesComments(id, user, comment) {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].id === id) {
        this.movies[index].comments.push({ name: user, comment: comment });
      }
    }
  }

  setMoviesRating(id, rating) {
    console.log(rating);
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].id === id) {
        this.movies[index].rating = rating;
      }
    }
  }

  setMovie(data) {
    let id = this.movies.length + 1;
    data.id = id;
    this.movies.push(data);
  }

  deleteMovie(id) {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].id === id) {
        this.movies.splice(index, 1);
      }
    }
  }

  validateUser(username, password) {
    for (let index = 0; index < this.users.length; index++) {
      console.log(username, password);
      console.log(index);
      if (this.users[index].username == username) {
        if (this.users[index].password == password) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }

  setSearchValue(text) {
    this.searchValue = text;
  }
  getSearchValue() {
    return this.searchValue;
  }
}

