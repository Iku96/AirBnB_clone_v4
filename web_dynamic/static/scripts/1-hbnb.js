$(document).ready(function () {
    let selectedAmenities = {};

    $('input[type="checkbox"]').change(function () {
        let amenityId = $(this).attr('data-id');
        let amenityName = #(this).attr('data-name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        let amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});