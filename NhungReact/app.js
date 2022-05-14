const root = document.getElementById('root');

const courses = [
    {
        id: 1,
        title: 'Kiến thức nhập môn IT',
        slug: 'lessions-for-newbie',
        description:
            'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nền xem các video tại khóa này trước nhé.',
        image: 'courses/7.png',
    },
    {
        id: 2,
        title: 'Kiến thức nhập môn IT',
        slug: 'lessions-for-newbie',
        description:
            'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nền xem các video tại khóa này trước nhé.',
        image: 'courses/7.png',
    },
    {
        id: 3,
        title: 'Kiến thức nhập môn IT',
        slug: 'lessions-for-newbie',
        description:
            'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nền xem các video tại khóa này trước nhé.',
        image: 'courses/7.png',
    },
    {
        id: 4,
        title: 'Kiến thức nhập môn IT',
        slug: 'lessions-for-newbie',
        description:
            'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nền xem các video tại khóa này trước nhé.',
        image: 'courses/7.png',
    },
    {
        id: 5,
        title: 'Kiến thức nhập môn IT',
        slug: 'lessions-for-newbie',
        description:
            'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nền xem các video tại khóa này trước nhé.',
        image: 'courses/7.png',
    }
];

function Course({title, image_url, description}) {
    return (
        <div className="courses-details">
            <img className="course-image" src={image_url} alt={title}></img>
            <h2 className="course-title">{title}</h2>
            <p className="course-description">{description}</p>
        </div>
    );
}

function App() {
    return(
        <div className="list-courses">
            {
                
            }
        </div>
    );
}