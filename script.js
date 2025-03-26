window.addEventListener('load', function () {
    imageMapResize();
  
    const areaData = {
      fashion: 'assets/previews/fashion.png',
      camera: 'assets/previews/cameras.png',
      projects: 'assets/previews/projects.png',
      cafes: 'assets/previews/cafes.png',
      thoughts: 'assets/previews/thoughts.png',
      profile: 'assets/previews/profile.png',
      baking: 'assets/previews/baking.png'
    };
  
    const zoomLayer = document.getElementById('zoom-layer');
    const zoomImage = document.getElementById('zoom-image');
  
    document.querySelectorAll('area').forEach(area => {
      area.addEventListener('mouseenter', () => {
        const coords = area.coords.split(',').map(Number);
        const shape = area.shape.toLowerCase();
        const alt = area.alt;
        const imgSrc = areaData[alt];
  
        if (!imgSrc) return;
  
        // Calculate center of the area
        let centerX = 0, centerY = 0;
  
        if (shape === 'circle') {
          centerX = coords[0];
          centerY = coords[1];
        } else if (shape === 'rect') {
          centerX = (coords[0] + coords[2]) / 2;
          centerY = (coords[1] + coords[3]) / 2;
        } else if (shape === 'poly') {
          for (let i = 0; i < coords.length; i += 2) {
            centerX += coords[i];
            centerY += coords[i + 1];
          }
          const numPoints = coords.length / 2;
          centerX /= numPoints;
          centerY /= numPoints;
        }
  
        zoomImage.src = imgSrc;
        zoomLayer.style.left = `${centerX}px`;
        zoomLayer.style.top = `${centerY}px`;
        zoomLayer.style.display = 'block';
        zoomLayer.classList.add('show');
      });
  
      area.addEventListener('mouseleave', () => {
        zoomLayer.classList.remove('show');
        setTimeout(() => {
          zoomLayer.style.display = 'none';
        }, 300); // match transition
      });
    });
  });
  