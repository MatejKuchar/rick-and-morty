
function getLocation(url) {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        })
        .then(data => {

            const { results } = data

            results.map(result => {
                const { name, type, dimension } = result
                const dataTemplate = `           
                                    <tr>
                                        <td>${name}</td>
                                        <td>${type}</td>
                                        <td>${dimension}</td>
                                    </tr>`
                const locationElement = document.getElementById('location');

                locationElement.insertAdjacentHTML('beforeend', dataTemplate);
            })
        })
        .catch(err => console.log('ERROR!'))
}

export { getLocation };
