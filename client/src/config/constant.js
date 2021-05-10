export const constants = {
    Gql : {
        baseUrl: 'http://localhost:4000/graphql',
        baseWebSocketUrl: 'ws://localhost:4000/subscriptions',
        split: {
            kind: 'OperationDefinition',
            operation: 'subscription'
        }
    },
    api : {
        baseUrl: 'http://localhost:4000/',
        register : {
            method: 'post',
            url: '/api/v1/auth/register',
        },
        token: {
            url: '/api/v1/auth/token',
            method: 'get'
        },
        login : {
            method: 'post',
            url: '/api/v1/auth/login',
        }
    },
    pages : {
        header: [{text:'Home', link:''},{text:'movie', link:'movie'}, {text:'Eye Vision Screening', link:'eye'},{text:'logout', link:'logout'}],
        login : {
            url : '/login'
        },
        eye: {
            steps:  ['Preperation', 'Contrast Check', 'Visual acuity test'],
            url: '/eye-test'
        }
    },
    cookie : {
        key : 'XSRF-token'
    },
    notification : {
        login : {
            s : 'Logged in successfully.',
            i : 'Login credentials updated.',
            d : 'Invalid credentials.'
        },
        register : {
            s : 'Registered in successfully.',
            i : 'Registered updated.',
            d : 'Invalid credentials.'
        },
        movie : {
            s : 'Movie added successfully',
            i : 'Movie List updated',
            d : 'Some Error Occoured'
        },
    },

}