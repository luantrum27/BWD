var courses = [{
        name: 'JavaScript',
        coin: 860
    },
    {
        name: 'PHP',
        coin: 350
    },
    {
        name: 'Ruby',
        coin: 460
    }
];

Array.prototype.filter2 = function(callback) {
    for (var index in this) {
        if (this[index].coin > 700) {
            var result = this[index];
            callback(result, index, this);
        }
    }
};

courses.filter2(function(course, index, courses) {
    console.log(course, index, courses);
});