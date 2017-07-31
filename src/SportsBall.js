import React, {Component} from 'react'
export default class SportsBall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: "Go ahead, type in a city.",
            collection: [{"city": "Portland", "sports_team": "Trailblazers"},
                {"city": "Chicago", "sports_team": "Bulls"},
                {"city": "Dallas",  "sports_team": "Mavericks"},
                {"city": "Phoenix", "sports_team": "Suns"},
                {"city": "Denver", "sports_team": "Nuggets"},
                {"city": "Los Angeles", "sports_team": "Lakers"},
                {"city": "Detroit", "sports_team": "Pistons"},
                {"city": "Miami", "sports_team": "Heat"}]
        }

    }

    _filterTeams(givenCity) {
        return this.state.collection.filter(object => object.city.toUpperCase() === givenCity)
    }

    _onChange(event) {
        let city = event.target.value
        let upCaseCity = city.toUpperCase()
        let cityCollection = this.state.collection.map((object) => object.city.toUpperCase())
        if(city === ""){
            return this.setState({
                cityName: ("Go ahead, type in a city.")
            })
        }
        else if(cityCollection.includes(upCaseCity)){
            return this.setState({
                cityName: ("Go " + this._filterTeams(upCaseCity)[0].sports_team + "!")
            })
        }else{
            return this.setState({
                cityName: (city + "? Never heard of it.")
            })
        }
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this._onChange.bind(this)}/>
                {Name(this.state.cityName)}
            </div>
        )
    }
}

const Name = (name) => <h4>{name}</h4>



