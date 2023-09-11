import { SearchBarStyled, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled"

export const SearchBar = ({onSubmit}) => {
    return (
       <SearchBarStyled className="searchbar">
        <SearchForm className="form" onSubmit={onSubmit}>
            <SearchFormButton type="submit" className="button">
                <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
            </SearchFormButton>
            <SearchFormInput
                className="input"
                type="text"
                placeholder="Search images and photos"
            />
        </SearchForm>
      </SearchBarStyled>
    )
}