document.getElementById('getAllPosts').addEventListener('click', function one() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json) => console.log(json))
        .then(() => document.getElementById('pOne').innerHTML = 'All posts logged to console.');
});

document.getElementById('getPost10').addEventListener('click', function two() {
    return fetch('https://jsonplaceholder.typicode.com/posts/10')
        .then(response => response.json())
        .then((json) => console.log(json))
        .then(() => document.getElementById('pTwo').innerHTML = 'Post 10 logged to console.');
});

document.getElementById('createPost').addEventListener('click', function three() {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'title',
            body: 'body',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json.id))
    .then(() => document.getElementById('pThree').innerHTML = "New post created and ID logged.");
});

document.getElementById('replacePost12').addEventListener('click', function four() {
    return fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'title',
            body: 'body',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    .then((json) => document.getElementById('pFour').innerHTML = `<p>Title: ${json.title}</p><p>Body: ${json.body}</p>`);
});

document.getElementById('updateTitlePost12').addEventListener('click', function five() {
    return fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'title',
            body: 'body',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    .then((json) => document.getElementById('pFive').innerHTML = `<p>Title: ${json.title}</p><p>Body: ${json.body}</p>`);
});

document.getElementById('deletePost12').addEventListener('click', function six() {
    return fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE',
    }).then((response) => response.json())
    .then(() => document.getElementById('pSix').innerHTML = "Post 12 deleted.");
});
