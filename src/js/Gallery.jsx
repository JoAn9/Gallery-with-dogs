import React from 'react';
import ReactDOM from 'react-dom';



export class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pictures: [],
            isLoading: true,
        };
    }

    componentWillMount() {

        let url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a2e2b911284d466a0cc8b655afe7e983&text=dogs&format=json&nojsoncallback=1&page=1&per_page=100&extras=description,  date_taken, owner_name';
        fetch(url)
            .then(r => {
                if(r.ok)
                    return r.json();
                else {
                    throw new Error('Błąd sieci!');
                }
            }).then(data => {
                console.log(data.photos.photo);
                let pictures = data.photos.photo.map(pic => {
                    return(
                        <div className="image" key={pic.id}>
                            <img src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_q.jpg`} />
                            <div className="details">
                                <p className="author">Author: {pic.ownername}</p>
                                <p className="date">Date: {pic.datetaken}</p>
                                <p className="description">Description: {pic.description._content}</p>
                            </div>
                        </div>
                    )
                });
                this.setState({
                    pictures: pictures,
                    isLoading: false,
                });
            }).catch(err => {
            console.log(err);
        });

    }

    render() {
        if (this.state.isLoading) {
            return <div className="loading">
                <img src="./src/js/ajax-loader.gif" alt="dog"/>
            </div>
        } else {
            return <div className="container">
                {this.state.pictures}
            </div>
        }

    }
};