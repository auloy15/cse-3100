export default function AboutUs() {
    const teamMembers = [
        { name: 'Bob Doe', role: 'Director', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
        { name: 'Jane Smith', role: 'Director', image: 'https://randomuser.me/api/portraits/women/20.jpg' },
        { name: 'Alice Johnson', role: 'Director', image: 'https://randomuser.me/api/portraits/women/30.jpg' },
    ];

    return (
        <section className="container mt-5">
            <h1 className="text-center">About Us</h1>

            <section className="mt-4">
                <h2>Our Mission</h2>
                <p className="text-muted">
                    Our mission is to empower businesses and individuals by providing innovative,
                    reliable, and scalable software solutions that drive efficiency, foster growth,
                    and enhance user experience. We are committed to creating cutting-edge technology
                    that simplifies complex challenges, adapts to evolving needs, and delivers exceptional value
                    to our clients. Through collaboration, continuous improvement, and a passion for excellence,
                    we aim to be a trusted partner in the digital transformation journey of every organization we serve.
                </p>
            </section>

            <section className="mt-4">
                <h2>Our History</h2>
                <p className="text-muted">
                Founded in 2020, we began with a simple vision: to make powerful software accessible and user-friendly for businesses of all sizes. What started as a small team of passionate developers has grown into a dynamic, forward-thinking company recognized for delivering innovative solutions. Over the years, we’ve expanded our expertise, built lasting partnerships, and helped countless clients navigate their digital transformation. Today, we continue to evolve, leveraging the latest technologies to meet the ever-changing needs of the modern business world.
                </p>
            </section>

            {/* Our Team */}
            <section className="mt-4">
                <h2>Our Team</h2>
                <div className="row mt-3">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-md-4 d-flex justify-content-center">
                            <div className="card text-center" style={{ width: '18rem' }}>
                                <img
                                    src={member.image}
                                    className="card-img-top"
                                    alt={member.name}
                                    style={{ borderRadius: '8px', height: '150px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="card-text">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}
