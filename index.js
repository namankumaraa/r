  const reviews = [{
          id: 1,
          name: 'goho',
          job: 'web development',
          img: 'https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?t=st=1739943309~exp=1739946909~hmac=68562ce8c7e3af4fafb8b920f35692b8d625b08ee27ddd9a7ab6bcb69c85952e&w=996',
          text: "lorem15 is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet"
      },
      {
          id: 2,
          name: 'goo',
          job: 'development',
          img: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901783.jpg?t=st=1739943642~exp=1739947242~hmac=da04f86aa58f0a248a447c586a5613f7653050e0232ff0be4bfff8a47b443fb0&w=996',
          text: "lorem12Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal "
      },
      {

          id: 3,
          name: 'arma',
          job: 'fontend',
          img: 'https://img.freepik.com/premium-photo/developing-concentrated-programmer-reading-computer-codes-development-website-design_45041-178.jpg?w=996',
          text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
      },
      {

          id: 2,
          name: 'goo',
          job: 'development',
          img: 'https://img.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148799071.jpg?t=st=1739943691~exp=1739947291~hmac=eebcfcb7b2892320a9f6cb13bee34add60aeff266df5edb46749c6e4acac49d5&w=996',
          text: "lorem1 Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic"
      }

  ];
  const img = document.getElementById('person');
  const author = document.getElementById('author');
  const job = document.getElementById('jop');
  const info = document.getElementById('imfo');

  const prevBtn = document.getElementById('prev-Btn');
  const nextBtn = document.getElementById('next-Btn');
  const randomBtn = document.getElementById('random-Btn');
  let currentItem = 0;

  function showPerson() {
      const item = reviews[currentItem];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
  }
  nextBtn.addEventListener('click', function() {
      currentItem++;
      if (currentItem > reviews.length - 1) {
          currentItem = 0;
      }
      showPerson(currentItem);
  });
  prevBtn.addEventListener('click', function() {
      currentItem--;
      if (currentItem < 0) {
          currentItem = reviews.length - 1;
      }
      showPerson(currentItem);
  });
  randomBtn.addEventListener('click', function() {
      currentItem = Math.floor(Math.random() * reviews.length);
      showPerson(currentItem);
  });