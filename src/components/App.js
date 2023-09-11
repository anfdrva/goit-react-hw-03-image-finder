import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "api";
import { AppStyled } from "./App.styled";
import { Loader } from "./Loader/Loader";


export class App extends Component { 
    state = {
        query: "",
        images: [],
        page: 1,
    };

    handlerSubmit = evt => {
        evt.preventDefault();

        this.setState({
            query: evt.target.elements.query.value,
            images: [],
            page: 1,
        })
    }

    handlerLoadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }));
    }

    async componentDidMount(prevPops, prevState) {

        //if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
            // http request
        //}
        
        try {
            const imagesItem = await fetchImages(this.state.query, this.state.page);
            this.setState({images: imagesItem.hits})
            //console.log(imagesItem.hits)
        }
        catch(error){}
    }
    
    render() {
        return (
            <AppStyled>
                <SearchBar onSubmit={this.handlerSubmit} />
                {this.state.images.length > 0 && <ImageGallery items={this.state.images} />}
                <Loader/>
            </AppStyled>
        )
    }
}
