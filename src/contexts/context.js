import React, { Component } from 'react'

const ProfileAndOrdersContext = React.createContext();

export default class ProfileAndOrdersProvider extends Component {
    state = {
        loading: true,
        failed: false
    }

    getData = async () => {
        try {
            let response = await fetch('https://indapi.kumba.io/webdev/assignment');
            let data = await response.json();
            console.log(data);

            this.setState({
                ...this.state,
                loading: false,
                ...data
            })

            console.log(this.state);

        } catch (error) {
            this.setState({
                ...this.state,
                failed: true,
                loading: false,
            });
            // console.log(error);
        }
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <ProfileAndOrdersContext.Provider
                value={{
                    ...this.state,
                }}
            >
                {this.props.children}
            </ProfileAndOrdersContext.Provider>
        )
    }
}

const ProfileAndOrdersConsumer = ProfileAndOrdersContext.Consumer;

export { ProfileAndOrdersProvider, ProfileAndOrdersConsumer, ProfileAndOrdersContext };
