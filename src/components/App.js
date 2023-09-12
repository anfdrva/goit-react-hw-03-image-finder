import { Component } from "react";
import SearchBar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "api";
import { AppStyled } from "./App.styled";
import { Loader } from "./Loader/Loader";



export class App extends Component { 
    state = {
        value: '',
        images: [],
        page: 1,
        loader: false,
        showBtn: false,
        showModal: false,
    };

    handlerSubmit = value => {
        this.setState({ value, page: 1, images: [] });
    };

    handlerClick = () => {
        this.setState(prevState => ({ page: prevState + 1 }));
    };

    // handlerSubmit = evt => {
    //     evt.preventDefault();

    //     this.setState({
    //         query: evt.target.elements.query.value,
    //         images: [],
    //         page: 1,
    //     })
    // }

    // handlerLoadMore = () => {
    //     this.setState(prevState => ({
    //         page: prevState.page + 1
    //     }));
    // }

    async componentDidUpdate(prevPops, prevState) {

        if (prevState.value !== this.state.value || prevState.page !== this.state.page) {
            this.setState({ loader: true });

            try {
                const images = await fetchImages(this.state.value, this.state.page);
                this.setState(prevState => {
                    return {
                        images: [...prevState.images, ...images.hits],
                        showBtn: this.state.page < Math.ceil(images.totalHits / 20)
                    };
                });
                //console.log(imagesItem.hits)
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.setState({loader: false})
            }

        }
        
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
