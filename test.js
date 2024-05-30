const contentful = require('contentful');

const client = contentful.createClient({
    space: 'glb0o258xukw',
    accessToken: 'k1hxkaWcZr3YC_tcwY9DqAyG8qX-Rgqq86zlxH74lMs'
});

const res = client.getEntries({ content_type: 'blogPost' })
    .then((response) => console.log(response.items))
    .catch(console.error);
console.log('Response from Contentful', res)
