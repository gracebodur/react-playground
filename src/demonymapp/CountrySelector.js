import React from 'react'
import './countrySelector.css'

class CountrySelector extends React.Component {
    render() {
        const options = this
            .props
            .countries
            .map(
            (country, 1) => <option value={country.name} key={i}>{country.name}</option>
            )
        return (
            <div className="country_selector">
            <form>
              <label htmlFor="country">Select a country:</label>
              <select id="country" name="country">
                <option value="None">Select one...</option>
                {options}
              </select>
            </form>
          </div>
        );      
      }
    }
    
    CountrySelector.defaultProps = {
      countries: []
    };
    
    export default CountrySelector;