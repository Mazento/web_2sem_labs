function rgb(r, g, b) {
    function rnd() {
        return Math.floor(Math.random() * Math.floor(256));
    }
    r = typeof r === 'number' ? r: rnd();
    g = typeof g === 'number' ? g: rnd();
    b = typeof b === 'number' ? b: rnd();
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}