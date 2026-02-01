const backgrounds = ['url(backgrounds/adamance.png)', 'url(backgrounds/birch.png)', 'url(backgrounds/cliff.png)', 'url(backgrounds/desert.png)', 'url(backgrounds/earnestness.png)', 'url(backgrounds/giants.png)', 'url(backgrounds/giants.png)', 'url(backgrounds/justice.png)', 'url(backgrounds/kulekrater.png)', 'url(backgrounds/nucharaswamp.png)', 'url(backgrounds/oasis.png)', 'url(backgrounds/purity.png)', 'url(backgrounds/restraint.png)', 'url(backgrounds/rockyrange.png)', 'url(backgrounds/savannah.png)', 'url(backgrounds/snowfield.png)', 'url(backgrounds/snowforest.png)', 'url(backgrounds/svankipass.png)', 'url(backgrounds/tahitahiforest.png)', 'url(backgrounds/tolerance.png)', 'url(backgrounds/training.png)', 'url(backgrounds/valor.png)', 'url(backgrounds/vulcanozone.png)'];
const randomIndex = Math.floor(Math.random() * backgrounds.length);
const navbar = document.getElementById('navbar');
console.log(`Selected background: ${backgrounds[randomIndex]}`);
navbar.style.background = `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), ${backgrounds[randomIndex]}`;
navbar.style.backgroundRepeat = 'repeat-x';
navbar.style.backgroundSize = 'contain';
navbar.style.animation = 'scroll-x 60s linear infinite';