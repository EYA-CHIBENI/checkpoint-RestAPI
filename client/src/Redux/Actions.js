import { GETALLCONTACTS, GETONECONTACT } from './ActionTypes'
import axios from 'axios'
export const getallcontacts = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/contact/getcontacts')
        dispatch({
            type: GETALLCONTACTS,
            payload: res.data.contacts
        })

    } catch (error) {
        console.log(error)
    }
}
export const addconetact = (contacttoadd, navigate) => async (dispatch) => {
    try {
        await axios.post('/api/contact/addcontact', contacttoadd)
        dispatch(getallcontacts())
        navigate('/Contacts')
    } catch (error) {
        console.log(error)
    }
}
export const getonecontact = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/contact/getcontact/${id}`)
        dispatch({
            type: GETONECONTACT,
            payload: res.data.found
        })
    } catch (error) {
        console.log(error)
    }

}
export const editcontact = (id, upcontact, navigate) => async (dispatch) => {
    try {
        await axios.put(`/api/contact/updatecontact/${id}`, upcontact)
        dispatch(getallcontacts())
        navigate('/Contacts')
    } catch (error) {
        console.log(error)
    }
}
export const deletecontact = (id) => async (dispatch) => {
    try {
        axios.delete(`/api/contact/deletecontact/${id}`)
        dispatch(getallcontacts())
    } catch (error) {
        console.log(error)
    }
}