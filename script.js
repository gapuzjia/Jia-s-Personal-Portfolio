window.addEventListener('load', function () {
    imageMapResize();
  
    const areaData = {
      fashion: { src: 'assets/previews/fashion.png', x: 250, y: 600 },
      camera:  { src: 'assets/previews/cameras.png', x: 850, y: 850 },
      projects:{ src: 'assets/previews/projects.png', x: 1600, y: 800 },
      cafes:   { src: 'assets/previews/cafes.png', x: 1300, y: 600 },
      thoughts:{ src: 'assets/previews/thoughts.png', x: 300, y: 200 },
      profile: { src: 'assets/previews/profile.png', x: 1600, y: 200 },
      baking:  { src: 'assets/previews/baking.png', x: 200, y: 700 }
    };
  
    const zoomLayer = document.getElementById('zoom-layer');
    const zoomImage = document.getElementById('zoom-image');
  
    document.querySelectorAll('area').forEach(area => {
      area.addEventListener('mouseenter', () => {
        const data = areaData[area.alt];
        if (data) {
          zoomImage.src = data.src;
          zoomLayer.style.left = `${data.x}px`;
          zoomLayer.style.top = `${data.y}px`;
          zoomLayer.style.display = 'block';
          zoomLayer.classList.add('show');
        }
      });
  
      area.addEventListener('mouseleave', () => {
        zoomLayer.classList.remove('show');
        setTimeout(() => {
          zoomLayer.style.display = 'none';
        }, 300); // wait for transition to end
      });
    });
  });
  