import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "api";

export class App extends Component { 
    state = {
        query: "",
        images: [],
        page: 1,
    };

    async componentDidMount() {
        
        try {
            const imagesItem = await fetchImages();
            this.setState({images: imagesItem.hits})
            //console.log(imagesItem.hits)
        }
        catch(error){}
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <ImageGallery items={this.state.images} />
            </div>
        )
    }
}

// export const App = () => {
//   return (
//     <div>
//       React homework template
//     </div>
//   );
// };
