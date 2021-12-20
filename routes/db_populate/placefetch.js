const axios = require("axios");
const Place = require("../../models/Place");
const download = require('image-downloader');
var path = require('path');

const config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.05347370869304%2C%2029.024912923065326&type=tourist_attraction&rankby=prominence&radius=30000&key=${process.env.GOOGLE_API_KEY}`,
    headers: { }
};
let imgDir = path.resolve("res/img/browse/");

const logg = () => {
    console.log("imgDir: "+ imgDir);
}


const fetchPlaces = async () => axios(config)
    .then(function (response) {
        let returned = response.data;
        let result = returned.results;
        for(let res of result){
            //Get photo from api
            let photo_ref = res.photos[0].photo_reference;
            const photoreq = {
                method: 'get',
                url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=3000&photo_reference=${photo_ref}&key=${process.env.GOOGLE_API_KEY}`,
                headers: { }
            };
            let photo_dest = path.resolve("res/img/places/"+res.place_id+".jpg");
            axios(photoreq)
                .then(function (photoresp){
                    //download options

                    let photoURL = photoresp.request._redirectable._options.href;

                    const options = {
                        url: photoURL,
                        dest: photo_dest,
                        //extractFilename: false, // will be saved to /path/to/dest/image
                    }
                    //comment
                    download.image(options)
                        .then(({ filename }) => {
                            //console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
                        })
                        .catch((err) => console.error(err))
                });


            //Create object
            const np = new Place({
                name: res.name,
                id: res.place_id,
                type: "tourist_attraction",
                geometry: res.geometry.location,
                photo_dest: photo_dest,
            });

            np.save()
                .catch(err => console.log(err));

        }
    })
    .catch(function (error) {
        console.log(error);
    });

module.exports = fetchPlaces;