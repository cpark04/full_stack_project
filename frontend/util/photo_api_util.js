export const fetchPhotos = (contentType, id) => {
    return $.ajax({
        url: `/api/${contentType}/${id}/photos`,
        method: "GET"
    })
}