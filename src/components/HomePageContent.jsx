function HomePageContent() {
    const imgDivStyle = {
        backgroundImage: `url(https://i.imgur.com/JTONJ8A.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
    };

    const darkenStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    };

    const pStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '24px',
        textAlign: 'center',
        color: '#fff',
    };

    return (
        <div className="container-wrapper">
            <div style={imgDivStyle}>
                <div style={darkenStyle} />
                <div style={pStyle}>
                    <h1>Hi! I am Vaidik Lotan!</h1>
                    <h2 className="lead">Full Stack Web Developer and Machine Learning Enthusiast</h2>
                </div>
            </div>
        </div>
    );
}

export default HomePageContent;
