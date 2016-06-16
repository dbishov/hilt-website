function createMap(data){
    var map= L.map('map');
    var layer= L.tileLayer('https://api.mapbox.com/styles/v1/dbishov/ciph6pygf000wbfmaatx3nqra/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGJpc2hvdiIsImEiOiI3M2M3YzhjOGY3MTMxYTMyYzc3YTRkYTZjOWI0NDlhYyJ9.-Vs6cRGznyGzzDPFy_2qkQ');

    map.addLayer(layer);
    map.setView([0,0], 3);
    var markers=[];
    _.each(data.features, function(feature){
      var lat = feature.geometry.coordinates[1];
      var lon = feature.geometry.coordinates[0];

      var marker = L.circleMarker([lat,lon], {
        className: 'toponym'
      });

      marker.bindPopup(feature.properties.toponym)
      markers.push(marker);
      map.addLayer(marker);
    });

    var input =   $('#slider input');

    var max = _.last(data.features).properties.offset;
    input.attr('max', max);

    input.on('input', function(){
      console.log (input.val());
    })
  }

  //** SLIDER


//On page start
  $(function() {
    $.getJSON('80_days.geojson',function(data) {
      createMap(data);
    })

  })
