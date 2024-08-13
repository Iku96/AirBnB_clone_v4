$(document).ready(function () {
    let selectedAmenities = {};

    $('input[type="checkbox"]').change(function () {
        let amenityId = $(this).attr('data-id');
        let amenityName = $(this).attr('data-name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        let amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(amenitiesList);
    });

    function fetchPlaces() {
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: function (data) {
                let placesSection = $('.places');
                placesSection.empty(); // Clear existing places
                data.forEach(place => {
                    let placeHtml = `
                        <article>
                            <div class="title">
                                <h2>${place.name}</h2>
                                <div class="price_by_night">$${place.price_by_night}</div>
                            </div>
                            <div class="information">
                                <div class="max_guest">${place.max_guest} Guests</div>
                                <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                                <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                            </div>
                            <div class="description">${place.description}</div>
                        </article>
                    `;
                    placesSection.append(placeHtml);
                });
            },
            error: function () {
                console.error('Error fetching places');
            }
        });
    }

    fetchPlaces();
});
