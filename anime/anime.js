const anime = document.querySelector(".anime");
display = {
    color:['#98fb98','#00ffff','#ffc0cb','#ffff00']
};
const option = {
    duration: 8000,
    direction:'alternate',
    iterations:Infinity,
};
anime.animate(display,option);