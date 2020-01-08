const moviesMock = [
  {
    id: '8a9bffe7-cdfa-4430-bd1e-a7d9e3b3dd25',
    title: 'Late Autumn (Man-choo)',
    year: 2004,
    cover: 'http://dummyimage.com/109x175.jpg/5fa2dd/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 1912,
    contentRating: 'NC-17',
    source: 'https://hexun.com/at/nulla/suspendisse/potenti/cras/in/purus.html',
    tags: ['Comedy|Drama', 'Crime|Drama|Thriller', 'Documentary']
  },
  {
    id: 'a7bb59b0-8aa2-4455-85e9-0647c7ef05ef',
    title: 'Oh, Susanna!',
    year: 1995,
    cover: 'http://dummyimage.com/242x170.jpg/cc0000/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 2063,
    contentRating: 'G',
    source: 'https://liveinternet.ru/non/mauris.html',
    tags: [
      'Action|Adventure|Fantasy|Thriller',
      'Drama',
      'Horror|Mystery|Thriller',
      'Drama|Romance'
    ]
  },
  {
    id: '720a8747-2f10-4dbd-af5f-c22af213e948',
    title: 'Mama',
    year: 1995,
    cover: 'http://dummyimage.com/249x198.bmp/5fa2dd/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 1910,
    contentRating: 'PG',
    source: 'https://tripod.com/mi/sit/amet/lobortis/sapien/sapien/non.html',
    tags: ['Crime|Drama']
  },
  {
    id: 'cd3fcb14-9bae-4042-bd28-51ab43710bdb',
    title: 'Buccaneer, The',
    year: 1984,
    cover: 'http://dummyimage.com/139x143.jpg/5fa2dd/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1924,
    contentRating: 'NC-17',
    source: 'https://phoca.cz/turpis/sed/ante/vivamus.aspx',
    tags: ['Comedy', 'Adventure|Children|Comedy']
  },
  {
    id: 'df95e9e5-87d6-4f29-a848-22e979a931fd',
    title: 'Eyes of the Mothman',
    year: 2012,
    cover: 'http://dummyimage.com/220x219.jpg/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2056,
    contentRating: 'PG',
    source: 'https://vistaprint.com/gravida.jsp',
    tags: [
      'Romance|Thriller',
      'Drama|Fantasy|Musical',
      'Action|Adventure|Drama|War'
    ]
  },
  {
    id: '60e9c6ae-92d7-4369-a30a-11acee66f0f2',
    title: 'Scary Movie 4',
    year: 1987,
    cover: 'http://dummyimage.com/184x244.bmp/ff4444/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 1916,
    contentRating: 'PG',
    source: 'http://bravesites.com/pulvinar/lobortis.json',
    tags: ['Horror|Sci-Fi', 'Comedy']
  },
  {
    id: '2bfdcddc-70e9-43c2-8d01-371fca04b9ca',
    title: 'Goliath Awaits',
    year: 2004,
    cover: 'http://dummyimage.com/205x169.png/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1944,
    contentRating: 'R',
    source:
      'https://cloudflare.com/interdum/venenatis/turpis/enim/blandit/mi.xml',
    tags: [
      'Documentary',
      'Drama|Film-Noir|Thriller',
      'Drama',
      'Drama',
      'Action|Thriller'
    ]
  },
  {
    id: '12207547-e298-4939-8bdc-6dbd255414e6',
    title: 'Naked Ambition: An R Rated Look at an X Rated Industry ',
    year: 2004,
    cover: 'http://dummyimage.com/173x209.jpg/cc0000/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 2008,
    contentRating: 'R',
    source: 'https://icq.com/platea/dictumst.jpg',
    tags: ['Comedy|Documentary|Drama', 'Documentary', 'Comedy|Drama|Romance']
  },
  {
    id: '8667a85d-ac66-494d-9d1a-169f6ef1cdf6',
    title: 'Anderson Tapes, The',
    year: 2002,
    cover: 'http://dummyimage.com/174x125.bmp/ff4444/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1949,
    contentRating: 'PG-13',
    source: 'http://archive.org/cum/sociis/natoque.aspx',
    tags: [
      'Action|Western',
      'Comedy|Drama',
      'Adventure|Animation|Children|Drama|Sci-Fi',
      'Thriller'
    ]
  },
  {
    id: 'fb955572-0545-4e66-99aa-e9e195e2c12f',
    title: 'Best of Times, The (Mei li shi guang)',
    year: 2009,
    cover: 'http://dummyimage.com/243x224.png/cc0000/ffffff',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 1927,
    contentRating: 'PG',
    source: 'https://senate.gov/blandit/lacinia/erat/vestibulum.js',
    tags: [
      'Documentary',
      'Comedy|Horror|Sci-Fi',
      'Adventure|Sci-Fi',
      'Comedy|Drama'
    ]
  },
  {
    id: '66ab46ff-27f4-4d9a-bfa9-5a19beb36f6a',
    title: 'Paradise: Faith (Paradies: Glaube)',
    year: 1970,
    cover: 'http://dummyimage.com/178x203.png/5fa2dd/ffffff',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    duration: 1953,
    contentRating: 'PG-13',
    source: 'http://amazon.co.uk/a/suscipit/nulla/elit/ac/nulla/sed.png',
    tags: ['Comedy|Romance', 'Crime|Drama', 'Comedy|Drama|Romance']
  },
  {
    id: '45b650ec-c62a-4962-86b6-30d81104cbe7',
    title: 'Decoder',
    year: 2011,
    cover: 'http://dummyimage.com/189x227.bmp/dddddd/000000',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 2051,
    contentRating: 'R',
    source: 'https://gizmodo.com/integer/pede/justo/lacinia/eget/tincidunt.jpg',
    tags: ['Drama', 'Comedy|Drama|Mystery|Romance', 'Thriller', 'Drama']
  },
  {
    id: 'a9d4ba4d-f21e-4eda-a8b5-9892e79474c9',
    title: "President's Man: A Line in the Sand, The",
    year: 2008,
    cover: 'http://dummyimage.com/179x158.bmp/dddddd/000000',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 2016,
    contentRating: 'NC-17',
    source: 'http://issuu.com/enim/lorem/ipsum/dolor/sit.html',
    tags: [
      'Drama',
      'Drama|Musical|Romance',
      'Animation|Drama|War',
      'Action|Comedy|Crime|Drama|Musical|Thriller'
    ]
  },
  {
    id: 'ffb09d15-09e6-4abe-a2c7-c0ebd2cae182',
    title: "Merlin's Apprentice",
    year: 2005,
    cover: 'http://dummyimage.com/139x224.jpg/ff4444/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1907,
    contentRating: 'PG-13',
    source: 'http://elpais.com/pede/justo/eu/massa/donec/dapibus/duis.js',
    tags: ['Comedy|Romance', 'Drama', 'Documentary|Musical']
  },
  {
    id: '4c8fd21e-a30b-4a4d-8314-b6ed512b3250',
    title: 'Love Is Strange',
    year: 1967,
    cover: 'http://dummyimage.com/179x205.jpg/dddddd/000000',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 1954,
    contentRating: 'PG-13',
    source: 'http://bigcartel.com/tellus/in/sagittis/dui.js',
    tags: ['Fantasy|Horror']
  },
  {
    id: '9e45c59b-2fd3-4d9b-834a-606af8fe1589',
    title: 'Nirvana',
    year: 2001,
    cover: 'http://dummyimage.com/218x168.bmp/dddddd/000000',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 1945,
    contentRating: 'PG-13',
    source: 'http://smh.com.au/magna/ac.html',
    tags: ['Adventure|Horror', 'Comedy|Fantasy|Horror']
  },
  {
    id: 'd232ee1b-419e-4310-a6a3-d76706751d57',
    title: 'Thief of Bagdad, The',
    year: 1978,
    cover: 'http://dummyimage.com/108x154.jpg/ff4444/ffffff',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 1912,
    contentRating: 'R',
    source: 'http://typepad.com/elit/sodales/scelerisque/mauris.json',
    tags: ['Drama', 'Action|Drama|Thriller', 'Drama']
  },
  {
    id: '909fcee6-5fbc-45b8-85eb-ac2d3f684697',
    title: 'Freeway',
    year: 2013,
    cover: 'http://dummyimage.com/211x113.png/cc0000/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 2027,
    contentRating: 'PG-13',
    source: 'https://pen.io/augue/vel/accumsan/tellus.json',
    tags: [
      'Drama|Mystery',
      'Documentary|Musical',
      'Adventure|Drama|Romance',
      'Comedy'
    ]
  },
  {
    id: '80932086-278c-485b-a137-cc3a42a25262',
    title: 'Divorce',
    year: 1998,
    cover: 'http://dummyimage.com/111x130.png/dddddd/000000',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 2039,
    contentRating: 'PG-13',
    source: 'http://ibm.com/mauris/morbi/non.json',
    tags: ['Comedy|Drama', 'Drama|Romance', 'Comedy']
  },
  {
    id: '55f208ae-7389-4c91-a1a3-3708a26cb62a',
    title: 'Escanaba in da Moonlight',
    year: 1989,
    cover: 'http://dummyimage.com/110x153.png/dddddd/000000',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 1922,
    contentRating: 'R',
    source: 'http://163.com/congue/elementum/in/hac/habitasse/platea.html',
    tags: ['Drama', 'Drama']
  },
  {
    id: '3f72fcb9-ea05-4de8-9b59-fa687ad9aa35',
    title: 'Interior. Leather Bar.',
    year: 1988,
    cover: 'http://dummyimage.com/206x242.bmp/5fa2dd/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1924,
    contentRating: 'PG',
    source:
      'http://google.es/nec/nisi/vulputate/nonummy/maecenas/tincidunt.jsp',
    tags: [
      'Crime|Sci-Fi',
      'Action|Adventure|Sci-Fi|IMAX',
      'Action|Adventure|Animation|Children|Comedy|Sci-Fi'
    ]
  },
  {
    id: '05a77fe1-bfa9-4430-a91f-bf357f838f0c',
    title:
      'Puppetry of the Penis: Live at the Forum (Puppetry of the Penis: The Ancient Art of Genital Origami)',
    year: 1992,
    cover: 'http://dummyimage.com/127x164.jpg/5fa2dd/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 2022,
    contentRating: 'NC-17',
    source: 'https://wordpress.com/mauris.xml',
    tags: [
      'Comedy|Western',
      'Thriller',
      'Drama',
      'Comedy|Drama',
      'Musical|Western'
    ]
  },
  {
    id: 'a6d9f2d4-5aea-4d8c-bfb6-1a7b46539896',
    title: 'Rusty Knife (Sabita naifu)',
    year: 2006,
    cover: 'http://dummyimage.com/229x124.bmp/dddddd/000000',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 2060,
    contentRating: 'G',
    source: 'http://addtoany.com/mollis/molestie/lorem/quisque/ut.html',
    tags: [
      'Comedy|Drama|Romance',
      'Crime|Film-Noir|Thriller',
      'Romance',
      'Action|Drama|Western'
    ]
  },
  {
    id: 'f94f99ac-577b-4c57-9a17-4ceb6a7ea392',
    title: 'Time to Kill, A',
    year: 2007,
    cover: 'http://dummyimage.com/141x161.jpg/cc0000/ffffff',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 2001,
    contentRating: 'PG',
    source: 'https://spotify.com/praesent.xml',
    tags: ['Drama', 'Horror|Thriller', 'Drama', 'Comedy']
  },
  {
    id: '166f2bd2-5f2c-49d9-a6fd-5bf0ec841593',
    title: 'Clubbed',
    year: 1998,
    cover: 'http://dummyimage.com/214x146.jpg/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1967,
    contentRating: 'PG-13',
    source: 'http://imgur.com/non/interdum/in/ante.png',
    tags: ['Western', 'Comedy|Crime', 'Drama', 'Comedy|Romance']
  },
  {
    id: '49a4dcea-60ea-4c6b-96dc-98572c8ccc48',
    title: 'Brand Upon the Brain!',
    year: 2005,
    cover: 'http://dummyimage.com/102x168.jpg/ff4444/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 2019,
    contentRating: 'R',
    source: 'https://goo.ne.jp/id/nisl/venenatis/lacinia/aenean.jsp',
    tags: [
      'Comedy|Drama',
      'Comedy|Drama|Romance',
      'Crime|Drama|Thriller',
      'Drama'
    ]
  },
  {
    id: '7cba754e-6b19-444c-81e6-0ba81d7999fa',
    title: 'Lucas',
    year: 2012,
    cover: 'http://dummyimage.com/142x208.jpg/5fa2dd/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 2033,
    contentRating: 'R',
    source: 'https://nasa.gov/commodo/placerat/praesent/blandit/nam/nulla.html',
    tags: ['Comedy|Drama', 'Crime|Drama|Romance', 'Comedy|Drama']
  },
  {
    id: 'edbd5fa5-58f4-47c7-8b99-8024c33d4502',
    title: 'Promised Life, The (Vie promise, La)',
    year: 1986,
    cover: 'http://dummyimage.com/248x234.png/cc0000/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 2000,
    contentRating: 'PG',
    source:
      'https://domainmarket.com/in/tempus/sit/amet/sem/fusce/consequat.js',
    tags: [
      'Action|Adventure|Crime|Drama|Thriller',
      'Comedy',
      'Drama',
      'Adventure|Children'
    ]
  },
  {
    id: '22ddfb47-7912-4f40-8012-344662a2a2c3',
    title: 'Suicide Room',
    year: 1993,
    cover: 'http://dummyimage.com/217x120.bmp/ff4444/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1999,
    contentRating: 'R',
    source: 'http://accuweather.com/a/odio/in/hac/habitasse/platea/dictumst.js',
    tags: [
      'Drama',
      'Drama',
      'Action|Adventure|Romance',
      'Drama|Mystery|War',
      'Drama'
    ]
  },
  {
    id: '062f257f-f2be-436c-8c8b-9edfb169cf13',
    title: 'The Hire: Follow, The',
    year: 1995,
    cover: 'http://dummyimage.com/244x230.png/cc0000/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 1935,
    contentRating: 'R',
    source: 'https://tmall.com/ornare/imperdiet.html',
    tags: ['Documentary']
  },
  {
    id: 'af55ada7-0302-4d04-8543-1f91a186ae9b',
    title: 'Samouraï, Le (Godson, The)',
    year: 1992,
    cover: 'http://dummyimage.com/111x102.png/cc0000/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1968,
    contentRating: 'G',
    source: 'https://ezinearticles.com/lobortis/est/phasellus.jsp',
    tags: ['Drama', 'Drama|Romance']
  },
  {
    id: 'f7f2d511-16db-436d-ae69-daedfee1e6ea',
    title: 'Crimson Wing: Mystery of the Flamingos, The',
    year: 2009,
    cover: 'http://dummyimage.com/211x131.png/ff4444/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 2023,
    contentRating: 'R',
    source: 'https://go.com/in.html',
    tags: ['Crime|Drama|Film-Noir|Thriller', 'Drama|Film-Noir|Mystery']
  },
  {
    id: '457279b0-f653-404e-a5b3-27edcd647353',
    title: 'Last Winter, The',
    year: 2009,
    cover: 'http://dummyimage.com/206x147.jpg/dddddd/000000',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1900,
    contentRating: 'PG',
    source: 'https://imdb.com/integer/a/nibh.jpg',
    tags: ['Animation', 'Drama']
  },
  {
    id: '3a3e1d7e-286a-4d99-96a8-4858fd40ebf4',
    title: 'Englishman Who Went Up a Hill But Came Down a Mountain, The',
    year: 1995,
    cover: 'http://dummyimage.com/238x112.png/dddddd/000000',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    duration: 1923,
    contentRating: 'R',
    source: 'https://businessinsider.com/tristique.js',
    tags: ['Drama', 'Drama', 'Children|Drama']
  },
  {
    id: 'df89ed6b-b1a2-4dc7-a194-451fedf243e1',
    title: 'Becoming Chaz',
    year: 1996,
    cover: 'http://dummyimage.com/146x125.bmp/cc0000/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 1912,
    contentRating: 'NC-17',
    source: 'http://google.es/tempus/vivamus/in/felis/eu/sapien.json',
    tags: ['Comedy|Romance', 'Sci-Fi', 'Comedy|Musical']
  },
  {
    id: 'd80e1aa8-12e0-4f9a-afb3-4e3e779caaf1',
    title: 'Adios Carmen',
    year: 1994,
    cover: 'http://dummyimage.com/189x127.jpg/ff4444/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 1895,
    contentRating: 'G',
    source: 'https://auda.org.au/nec/sem/duis.html',
    tags: ['Drama', 'Drama', 'Documentary', 'Action|Comedy', 'Comedy|Crime']
  },
  {
    id: '75e38a52-09af-452c-8c7e-55c906845a4d',
    title: 'Rogue Cop',
    year: 1988,
    cover: 'http://dummyimage.com/226x108.jpg/dddddd/000000',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1993,
    contentRating: 'G',
    source: 'https://topsy.com/nisl/nunc/nisl/duis/bibendum/felis.jpg',
    tags: ['Film-Noir', 'Comedy|Crime|Mystery']
  },
  {
    id: '0f6e47a7-d560-49b8-9786-2183b400ef62',
    title: 'Lawman',
    year: 1998,
    cover: 'http://dummyimage.com/185x130.png/5fa2dd/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 2043,
    contentRating: 'PG-13',
    source: 'http://chronoengine.com/lobortis/sapien/sapien/non/mi.html',
    tags: [
      'Action|Thriller',
      'Comedy',
      'Animation|Comedy|Drama',
      '(no genres listed)',
      'Horror|Thriller'
    ]
  },
  {
    id: 'a6d41fed-04c3-4a61-aacf-75bfc9d36a25',
    title: 'Splitting Heirs',
    year: 2006,
    cover: 'http://dummyimage.com/207x182.png/dddddd/000000',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 2061,
    contentRating: 'R',
    source: 'http://google.es/justo/sollicitudin/ut/suscipit/a.jpg',
    tags: ['Comedy|Drama']
  },
  {
    id: 'f0295620-8a42-4ec4-99c6-dabd430481d2',
    title: 'Haunting, The',
    year: 1994,
    cover: 'http://dummyimage.com/234x218.bmp/ff4444/ffffff',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 2059,
    contentRating: 'NC-17',
    source: 'https://cafepress.com/at/velit/eu/est/congue/elementum.jpg',
    tags: ['Adventure|Drama|Thriller|War', 'Drama']
  },
  {
    id: '02fb073e-2665-4251-bb4c-3f9797f76872',
    title: 'Lady Oscar',
    year: 1992,
    cover: 'http://dummyimage.com/114x184.png/cc0000/ffffff',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 1961,
    contentRating: 'R',
    source: 'https://chronoengine.com/urna/ut.aspx',
    tags: ['Crime|Drama|Horror|Thriller', 'Drama', 'Comedy|Musical']
  },
  {
    id: 'cd2fbf21-bd00-4bac-a344-f6bf6876ff02',
    title: 'Gorko!',
    year: 2009,
    cover: 'http://dummyimage.com/136x240.png/dddddd/000000',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1941,
    contentRating: 'G',
    source: 'https://accuweather.com/sapien/ut/nunc/vestibulum.json',
    tags: ['Comedy|Drama']
  },
  {
    id: '569671fa-6625-4ed1-983c-7906d08f5e35',
    title: 'Running On Karma (Daai Zek Lou)',
    year: 2010,
    cover: 'http://dummyimage.com/244x117.png/5fa2dd/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 1965,
    contentRating: 'PG-13',
    source: 'http://telegraph.co.uk/ultrices/posuere.json',
    tags: ['Drama', 'Action|Drama', 'Comedy', 'Drama', 'Adventure|Comedy']
  },
  {
    id: 'e1af9f50-3ffe-42c9-aa50-952f96127df3',
    title: 'Backbeat',
    year: 1999,
    cover: 'http://dummyimage.com/205x241.bmp/dddddd/000000',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 2006,
    contentRating: 'PG',
    source: 'http://wikispaces.com/ante.xml',
    tags: ['Documentary', 'Action|Drama']
  },
  {
    id: 'f5148675-8202-4fce-aea4-70058b75afc1',
    title: 'West of Memphis',
    year: 1999,
    cover: 'http://dummyimage.com/111x102.jpg/dddddd/000000',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 1968,
    contentRating: 'NC-17',
    source: 'http://noaa.gov/nec/nisi/vulputate.aspx',
    tags: ['Documentary']
  },
  {
    id: '54fc6ddb-be66-41fc-b125-c739e5408b70',
    title: 'Alien',
    year: 2012,
    cover: 'http://dummyimage.com/164x113.bmp/dddddd/000000',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 2038,
    contentRating: 'NC-17',
    source: 'http://cloudflare.com/odio/consequat/varius/integer/ac.jpg',
    tags: ['Comedy']
  },
  {
    id: '5725b9fe-1be5-4e18-9326-5e09eb9339e6',
    title: 'The Hyperboloid of Engineer Garin (Giperboloid inzhenera Garina)',
    year: 1994,
    cover: 'http://dummyimage.com/188x111.png/dddddd/000000',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 1972,
    contentRating: 'R',
    source: 'https://dedecms.com/nulla/nunc.png',
    tags: [
      'Drama',
      'Crime|Romance',
      'Crime|Drama|Thriller',
      'Comedy',
      'Crime|Thriller'
    ]
  },
  {
    id: '9941b910-9ae5-413b-a110-03294209c3a8',
    title: 'House on Haunted Hill',
    year: 2002,
    cover: 'http://dummyimage.com/210x141.jpg/cc0000/ffffff',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 1995,
    contentRating: 'R',
    source: 'https://about.me/non/velit/donec/diam/neque.aspx',
    tags: ['Action|Drama', 'Animation', 'Drama|War', 'Drama']
  },
  {
    id: '99ce5ecf-b00f-4ec5-b11e-6250a9d57421',
    title: "Ender's Game",
    year: 1991,
    cover: 'http://dummyimage.com/131x182.bmp/dddddd/000000',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 1991,
    contentRating: 'G',
    source: 'https://noaa.gov/enim/lorem/ipsum/dolor/sit.jpg',
    tags: ['Comedy', 'Comedy|Romance', 'Comedy|Romance']
  },
  {
    id: 'a7a6f7be-d19f-4698-a8ae-9be610d6ef8b',
    title: 'Stars and Stripes Forever',
    year: 2007,
    cover: 'http://dummyimage.com/168x179.png/5fa2dd/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1924,
    contentRating: 'PG',
    source: 'https://state.gov/aliquet/pulvinar/sed/nisl/nunc/rhoncus/dui.json',
    tags: ['Drama', 'Documentary|Drama|War']
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
