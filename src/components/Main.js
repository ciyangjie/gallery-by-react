require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

var imageDatas = require('../data/imageDatas.json');

function getImageURL(imageDatasArr) {
	for(var i=0 ,j = imageDatasArr.length ; i < j ; i++){
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}

	return imageDatasArr;
}

var imageDatas = getImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">

      	</section>
      	<nav className="controller-nav">

      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
