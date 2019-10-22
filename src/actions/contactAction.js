import * as actionTypes from  './actionType'

export const createContact = (contact) => {
    console.log("IN action" + contact.name)
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
    contacts: contact
  }
}
