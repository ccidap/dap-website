import * as firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyBkZsV9Uh1khgpYjwfHFw5O-NAk_tNs5zo',
    authDomain: 'summer-project-2017-8518c.firebaseapp.com',
    databaseURL: 'https://summer-project-2017-8518c.firebaseio.com',
    projectId: 'summer-project-2017-8518c',
    storageBucket: '',
    messagingSenderId: '852928917122'
}

firebase.initializeApp(config)

const Users = firebase.database().ref().child('users')

export function fetchAvailabilityForUser(userId) {
    return dispatch => {
        const userSchedule = firebase.database().ref().child('users/' + userId + '/schedule')

        userSchedule.on('value', snap => {
            dispatch({
                type: 'FETCH_AVAILABILITY_FOR_USER_FULFILLED',
                payload: snap.val()
            })
        })
    }
}

export function fetchUsers() {
    return dispatch => {
        Users.on('value', snap => {
            dispatch({
                type: 'FETCH_USERS_FULFILLED',
                payload: snap.val()
            })
        })
    }
}
