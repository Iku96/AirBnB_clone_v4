$(document).ready(function () {
    let selectedAmenities = {};

    // Function to update the list of selected amenities
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

    // Function to fetch and display places
    function fetchPlaces() {
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: Object.keys(selectedAmenities) }),
            success: function (data) {
                let placesSection = $('.places');
                placesSection.empty(); // Clear existing places
                data.forEach(place => {
                    let placeHtml = `
                        <article>
                            <div class="title_box">
                                <h2>${place.name}</h2>
                                <div class="price_by_night">$${place.price_by_night}</div>
                            </div>
                            <div class="information">
                                <div class="max_guest">${place.max_guest} Guest${place.max_guest != 1 ? 's' : ''}</div>
                                <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms != 1 ? 's' : ''}</div>
                                <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms != 1 ? 's' : ''}</div>
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

    // Fetch places when the search button is clicked
    $('button[type="button"]').click(function () {
        fetchPlaces();
    });

    // Initial fetch of places
    fetchPlaces();
});
