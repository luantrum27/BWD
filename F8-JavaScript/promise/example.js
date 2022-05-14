
const users = [
    { 
        id: 1,
        name: 'John',
    },
    { 
        id: 2,
        name: 'Doe',
    },
    { 
        id: 3,
        name: 'John Smith'
    }, 
    { 
        id: 4,
        name: 'Doe Smith',
    },
    { 
        id: 5,
        name: 'Lee'
    }
];

const comments = [
    { 
        id: 1,
        user_id: 1,
        content: 'Hello everyone'
    },
    { 
        id: 2,
        user_id: 5,
        content: 'Hello John'
    },
    { 
        id: 3,
        user_id: 4,
        content: 'Nice to meet you, John'
    },
    
    
];


// Lọc ra những user bình luận

function getUserComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    })
}

// Lấy thông tin của những user bình luận

function getUsersInfo(userIds) {
    const userComments = [];
    let index = 0;
    return new Promise(function(resolve) {
        for(let i = 0; i < users.length; i++) {
            if (userIds[index] === users[i].id) {
                userComments.push(users[i]);
                index++;
                if (index < userIds.length) {
                    i = 0;
                }
            }
        }
        setTimeout(resolve(userComments), 1000);
    })
}

getUserComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        })
        return getUsersInfo(userIds);
    })
    .then(function(users) {
            let u = {
                users: users,
                comments: comments,
            }
            var html = '';
            const ul = document.getElementById('root');
            u.comments.forEach(function(comment) {
                var user = u.users.find(user => user.id === comment.user_id);
                console.log(user.name);
                html += `<li>${user.name}: ${comment.content}</li>`
            })
            ul.appendChild(html)
            

    })