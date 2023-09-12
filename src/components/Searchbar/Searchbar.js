import { Component } from "react";
import { SearchBarStyled, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled"


class SearchBar extends Component {
    state = {
        input: '',
    }

    handlerChange = ({ target }) => {
        this.setState({ input: target.value });
    };

    handlerSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state.input);
    };

    render() {
        return (
                <SearchBarStyled className="searchbar">
                    <SearchForm className="form" onSubmit={this.handlerSubmit}>
                        <SearchFormButton type="submit" className="button">
                            <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
                        </SearchFormButton>
                        <SearchFormInput
                            className="input"
                            type="text"
                            placeholder="Search images and photos"
                            onChange={this.handlerChange}
                            value={this.state.input}
                        />
                    </SearchForm>
                </SearchBarStyled>
            )
    }
}

export default SearchBar;

// export const SearchBar = ({ onSubmit }) => {
    

//     return (
//        <SearchBarStyled className="searchbar">
//         <SearchForm className="form" onSubmit={onSubmit}>
//             <SearchFormButton type="submit" className="button">
//                 <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
//             </SearchFormButton>
//             <SearchFormInput
//                 className="input"
//                 type="text"
//                 placeholder="Search images and photos"
//             />
//         </SearchForm>
//       </SearchBarStyled>
//     )
// }