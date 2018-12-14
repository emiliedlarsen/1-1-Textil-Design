// INSTAGRAM FEED

"use strict";
document.addEventListener("DOMContentLoaded", () => {

  let feed = new Instafeed({
    accessToken: '314019372.1677ed0.f66eb35a1b784276bba3ef44fd19677d',
    userId: '314019372',
    get: 'user',
    limit: 6,
    mock: true,
    success: (response) => {
      console.log(response);
      appendImages(response.data);
    }
  });
  feed.run();

  let appendImages = (images) => {
    for (var i = 0; i < images.length; i++) {
      let image = images[i];
      console.log(image);
      document.querySelector('#myInstagramFeed').innerHTML += ` 
 <div class="col-sm-4">
     <img src="${image.images.standard_resolution.url}">
    </div>`;
    }
  }

});

 
