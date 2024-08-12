$(document).ready(function () {
    let selectedAmenities = {};

    $('input[type="checkbox"]').change(function () {
        let amenityId = $(this).data('id');
        let amenityName = $(this).data('name');

        if $(this.checked) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        let amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});